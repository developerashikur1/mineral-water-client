import firebaseAuthentication from "../Shared/Login/Firegbase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";



firebaseAuthentication();
const useFirebase = () =>{


    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // console.log(result);
            // const user = result.user;
            // console.log(user)
          })
    }

    const googleSignInMethod = () =>{
        // setLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            // setUser(result.user)
            // const locationTrack = location?.state?.from || "/";
            // history.push(locationTrack);
            // saveUsers(result?.user?.email, result?.user?.displayName, 'PUT' )
            console.log(result.user)
        })
        .catch(error=>{ 
            console.log(error.message)
        })
        // .finally(()=>setLoading(false))
    }



    return{
        googleSignInMethod,
    };
};

export default useFirebase;