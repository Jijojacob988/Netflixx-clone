
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCWa64QwVCN6iGjWu3FABr9WeR2D9_Y_jQ",
  authDomain: "netflixx-clone-42fc5.firebaseapp.com",
  projectId: "netflixx-clone-42fc5",
  storageBucket: "netflixx-clone-42fc5.appspot.com",
  messagingSenderId: "151849026481",
  appId: "1:151849026481:web:86966ee4f865f6b866f390"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email, password)=>{
    try {
       const res = await createUserWithEmailAndPassword(auth, email, password);
       const user = res.user;
       await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
       });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join("  "));
        
    }

}

const login = async (email,password)=>{
    try {
       await signInWithEmailAndPassword(auth,email,password);

        
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join("  "));
        
    }
    
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};