import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import "./Login.css"
import { login } from './features/userSlice';

const Login = () => {
     const [name, setName] = useState("")
     const [profilePic, setProfilePic] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const dispatch = useDispatch()



    const loginToApp = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
        .then (userAuth => {
            dispatch(
              login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoUrl: userAuth.photoURL,
              })
            )
        }).catch((error) => alert(error))
     
    };
    const register = () => {

        if (!name) {
            return
        }
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((userAuth) => {
            userAuth.user.updateProfile({
              displayName: name,
              photoURL: profilePic,
            })
            .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.id,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          })
          .catch((error) => alert(error));
          })
          
    }
    return (
      <div className="login">
        <img src="" alt="Linked" />
        <form onSubmit = {loginToApp}>

          <input type="text" placeholder="Full name" required value={name} onChange= {e => setName(e.target.value)}/>

          <input type="text" placeholder="profile pix (optional)"  value={profilePic} onChange= {e => setProfilePic(e.target.value)}/>

          <input type="email" placeholder="Email" value={email} onChange= {e => setEmail(e.target.value)}/>

          <input type="password" placeholder="Password" value={password} onChange= {e => setPassword(e.target.value)}/> 
          <button type="submit">Sign In</button>
        </form>
       <p>
           Not a member?
           <span className="login-register" onClick={register} >Register Now</span>
       </p>
      </div>
    );
}

export default Login
