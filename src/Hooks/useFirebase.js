import { signOut } from "firebase/auth";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword,useSignInWithFacebook,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { auth } from '../Firebase/Firebase.init'

const useFirebase = () => {
    const navigate = useNavigate()
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [signInWithFacebook,signFb] = useSignInWithFacebook(auth);
  const [
    signInWithEmailAndPassword,
   users
  ] = useSignInWithEmailAndPassword(auth);
const handleEmail = (event) => {
    setEmail(event.target.value)
}
const handlePassword = (event) => {
    setPassword(event.target.value)
}
const handleConfirmPassword = (event) => {
    if(password !== confirmPassword){
        setConfirmPassword(event.target.value)
    }else{
        alert('type same password')
    }
}

const handleSubmit = (event) => {
    if(email === ''){
        alert('please field out email')
        return
    }
    if(password === ''){
        alert('please field out password')
        return
    }
    if(confirmPassword === ''){
        alert('please field out confirmPassword')
        return
    }
    event.preventDefault()
    if((email && password === confirmPassword)) {
    createUserWithEmailAndPassword(email, password)
    navigate('/login')
    }else {
        toast.error("This didn't work.")
    }
    <div><Toaster/></div>
  
}
const signupFacebook = () => {
    signInWithFacebook()
}
const handleSignOut = () => {
    signOut(auth);
}
return {handleEmail,handlePassword,handleConfirmPassword,handleSubmit,signupFacebook, setEmail, setPassword,signInWithEmailAndPassword,email,password,users,handleSignOut}

}

export default useFirebase