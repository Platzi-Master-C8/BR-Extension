import React, { useEffect, useRef } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './Options.scss'

function Options() {
	const {
		loginWithRedirect,
		isAuthenticated,
		getAccessTokenSilently,
		isLoading,
	} = useAuth0()
	const inputRef = useRef()
  const firstLoad = useRef(true)

	useEffect(async () => {
    console.log(isAuthenticated)
		if (firstLoad.current === true) {
      firstLoad.current = false;
      
    }
	}, [])

	const handleClick = async () => {
		// const token = await getAccessTokenSilently();
		// const value = inputRef.current.value
		// localStorage.setItem('token', value)
    console.log(await getAccessTokenSilently())
	}

	const handleReadLocalStorage = () => {
		console.log(localStorage.getItem('token'))
    loginWithRedirect();
	}

	return (
		<div className='OptionsPage'>
			<input placeholder='Token...' ref={inputRef} type='text' />
			<button onClick={handleClick}>Save</button>
			<button onClick={handleReadLocalStorage}>login</button>
		</div>
	)
}

export { Options }
