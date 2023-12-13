import {signInWithGooglePopUp, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'

const SignIn=()=>{
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
        </div>
    )
}

export default SignIn