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

	useEffect(async () => {
		// loginWithRedirect({
		//     screen_hint: 'signup',
		// });
	}, [])

	const handleClick = () => {
		// const token = await getAccessTokenSilently();
		const value = inputRef.current.value
		localStorage.setItem('token', value)
	}

	const handleReadLocalStorage = () => {
		console.log(localStorage.getItem('token'))
	}

	return (
		<div className='OptionsPage'>
			<input placeholder='Token...' ref={inputRef} type='text' />
			<button onClick={handleClick}>Save</button>
			<button onClick={handleReadLocalStorage}>Leer</button>
		</div>
	)
}

export { Options }
