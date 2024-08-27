import { useState } from "react";
import style from "./Signup.module.scss";

export function Signup() {
  const [isEmailValid, setIsEmailValid] = useState(false);

  function handleUserSignup(inputValue) {
    // Hvis emailen er valid
    if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputValue)) {
      console.log("Dette er en gyldig email");
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }

  return (
    <div className={style.signUpStyle}>
      <label>
        Email
        <input
          name="EmailSignup"
          type="email"
          onChange={(event) => handleUserSignup(event.target.value)}
        ></input>
      </label>
      {!isEmailValid && <p>Denne email er ikke godkendt</p>}
      <button disabled={!isEmailValid}>Sign up</button>
    </div>
  );
}
