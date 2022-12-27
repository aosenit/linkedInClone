import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import "./Login.css";
import { login } from "./features/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    if (password?.length < 6) {
      alert("WEAK_PASSWORD : Password should be at least 6 characters");
      return;
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
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
    });
  };
  return (
    <div className="login">
      <img
        src="https://www.pngitem.com/pimgs/m/35-351826_linkedin-icon-png-transparent-background-linkedin-logo-png.png"
        alt="Linked"
      />
      <form onSubmit={!signUp ? loginToApp : register}>
        {signUp && (
          <input
            type="text"
            placeholder="Full name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        {signUp && (
          <input
            type="text"
            placeholder="profile pix (optional)"
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!signUp ? (
          <button type="submit">Sign In</button>
        ) : (
          <button type="submit">Sign Up</button>
        )}
      </form>
      <p>
        Not a member?
        <span
          className="login-register"
          onClick={() => setSignUp(signUp ? false : true)}
        >
          {signUp ? "Login" : "Register"}
        </span>
      </p>
    </div>
  );
};

export default Login;
