import React, { useRef } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../../firebase";
import "./SignUpScreen.css";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passswordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passswordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });

    //end
  };

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passswordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="signInScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passswordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupScreen_gray">New to Netflix? </span>
          <span className="signupScreen_link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
