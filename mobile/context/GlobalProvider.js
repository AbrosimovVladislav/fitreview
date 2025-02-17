import {createContext, useContext, useState, useEffect} from "react";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {auth} from "@/firebase";
import {router} from "expo-router";
import {getLastReviewIdByUserId} from "@/service/ReviewService"; // Импортируем router

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
        console.log("Checking auth state..."); // Лог начала проверки состояния
        console.log("Firebase Current User:", auth.currentUser); // Лог текущего пользователя


        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                console.log("User is logged in:", { // Лог, если пользователь найден
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName,
                });
                setIsLoggedIn(true);
                setUser({
                    uid: currentUser.uid,
                    email: currentUser.email,
                    displayName: currentUser.displayName || null,
                });

                // Получаем последнее активное ревью с бэка
                const latestReviewId = await getLastReviewIdByUserId(currentUser.uid);
                if (latestReviewId) {
                    setReviewId(latestReviewId);
                }
            } else {
                console.log("No user is logged in"); // Лог, если пользователь не найден
                setIsLoggedIn(false);
                setUser(null);
                setReviewId(null);
            }
            setIsLoading(false); // Завершаем загрузку
        });

        return () => unsubscribe(); // Отписываемся при размонтировании
    }, []);

    const logout = async () => {
        try {
            await signOut(auth); // Выход из Firebase
            setIsLoggedIn(false); // Обновляем состояние
            setUser(null); // Очищаем данные пользователя
            router.replace("/sign-in"); // Перенаправляем на экран входа
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
