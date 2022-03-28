import React, { useEffect, useRef } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import "./Options.scss";


function Options() {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0()
  const inputRef = useRef();

  useEffect(async () => {
    // loginWithRedirect({
    //     screen_hint: 'signup',
    // });
  }, [])

  const handleClick = () => {
    // const token = await getAccessTokenSilently();
    const value = inputRef.current.value
    localStorage.setItem("superToken", value);
    console.log(inputRef.current.value)
  };

  const handleClick2 = () => {
    console.log(localStorage.getItem("superToken"));
  };

  return (
    <div className="OptionsPage">
      <input ref={inputRef} type="text" />
      <button  onClick={handleClick}>Guardar</button>
      <button onClick={handleClick2}>Leer</button>
    </div>
  );
}

export { Options };
