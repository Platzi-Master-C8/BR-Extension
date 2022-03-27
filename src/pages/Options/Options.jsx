import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import "./Options.scss";


function Options() {
  const { loginWithRedirect, isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0()

  useEffect(async () => {
    // loginWithRedirect({
    //     screen_hint: 'signup',
    // });
  }, [])

  const handleClick = async () => {
    const token = await getAccessTokenSilently();
    console.log("🚀 ~ token", token)
  };

  return (
    <div>
      <input type="text" />
      <button onClick={handleClick}>Guardar</button>
      <button onClick={handleClick2}>Leer</button>
    </div>
  );
}

export { Options };
