import {signInWithGooglePopUp,signInWithGoogleRedirect, createUserDocumentFromAuth ,auth} from '../../utils/firebase/firebase.utils'
// se importa auth para que getAuth pueda funcionar
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';

const SignIn=()=>{
    useEffect(async ()=>{
        const response= await getRedirectResult(auth);
        if(response){
            const userDocRef=await createUserDocumentFromAuth(response.user)
        }
    },[])

    // vamos a crear el usuario que va a pedir a firebase atutenticacion, tiene que ser asincrono
    const logGoogleUser= async ()=>{
        const response = await signInWithGooglePopUp();
        const userDocRef=await createUserDocumentFromAuth(response.user)
        console.log(userDocRef)
    }
    
    
    return (
        <div>
            <h1>Sign in page</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Pop up
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Sign In with Google Redirect
            </button>
        </div>
    )
}

export default SignIn