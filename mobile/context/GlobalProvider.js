import {createContext, useContext, useState, useEffect} from "react";
import {supabase} from "@/supabase";
import {router} from "expo-router";
import {getLastReviewIdByUserId} from "@/service/ReviewService";

const GlobalContext = createContext();

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

const GlobalProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [reviewId, setReviewId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("Checking auth state...");

        // Check initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session?.user) {
                const u = session.user;
                console.log("User is logged in:", { uid: u.id, email: u.email });
                setIsLoggedIn(true);
                setUser({
                    uid: u.id,
                    email: u.email,
                    displayName: u.user_metadata?.name || null,
                });
                getLastReviewIdByUserId(u.id).then((latestReviewId) => {
                    if (latestReviewId) setReviewId(latestReviewId);
                });
            }
            setIsLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if (session?.user) {
                    const u = session.user;
                    console.log("Auth state changed:", event, { uid: u.id, email: u.email });
                    setIsLoggedIn(true);
                    setUser({
                        uid: u.id,
                        email: u.email,
                        displayName: u.user_metadata?.name || null,
                    });
                    const latestReviewId = await getLastReviewIdByUserId(u.id);
                    if (latestReviewId) setReviewId(latestReviewId);
                } else {
                    console.log("No user is logged in");
                    setIsLoggedIn(false);
                    setUser(null);
                    setReviewId(null);
                }
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    const logout = async () => {
        try {
            await supabase.auth.signOut();
            setIsLoggedIn(false);
            setUser(null);
            router.replace("/sign-in");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    return (
        <GlobalContext.Provider
            value={{
                isLoggedIn,
                user,
                reviewId,
                setReviewId,
                isLoading,
                setIsLoggedIn,
                setUser,
                logout
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
