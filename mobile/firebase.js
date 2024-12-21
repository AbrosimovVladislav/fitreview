import {initializeApp} from "firebase/app";
import {initializeAuth, getReactNativePersistence} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";


const firebaseConfig = {
    apiKey: "AIzaSyChsUsu6YcsygtaZYo7KIp65a60mvuP3nw",
    authDomain: "fit-review-73ae2.firebaseapp.com",
    projectId: "fit-review-73ae2",
    storageBucket: "fit-review-73ae2.firebasestorage.app",
    messagingSenderId: "794403697461",
    appId: "1:794403697461:web:f5c2cd521e9e1487e5127c"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
