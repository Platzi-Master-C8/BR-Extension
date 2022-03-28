import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ThemeProvider } from '@mui/material/styles'
import { TrackNew } from '../Popup/TrackNew'
import { Vacancies } from '../Vacancies/Vacancies'
import customTheme from '../../styles/customTheme'

const routes = [
	{
		name: 'newTrack',
		component: <TrackNew />,
	},
	{
		name: 'vacancies',
		component: <Vacancies />,
	},
]

function App() {
	const {
		isAuthenticated,
		getAccessTokenSilently,
		isLoading,
		loginWithRedirect,
	} = useAuth0()
	const [authenticated, setAuthenticated] = useState(isAuthenticated)
	const [view, setView] = useState(routes[0])
	const [token, setToken] = useState('')

	const getToken = async () => {
		try {
			const token = await getAccessTokenSilently()
			setToken(token)
		} catch (e) {
			console.log(e)
		}
	}

	// useEffect(() => {
	//   getToken();
	// }, []);

	// useEffect(() => {
	//   setAuthenticated(isAuthenticated);
	//   if (!authenticated) {
	//     chrome.tabs.create({
	//       url: `${window.location.origin}/options.html`,
	//     })
	//   }
	// }, [isAuthenticated]);

	useEffect(() => {
		const jwt = localStorage.getItem('token')
		setToken(jwt)
		if (!jwt) {
			chrome.tabs.create({
				url: `${window.location.origin}/options.html`,
			})
		}
	}, [token])

	return <ThemeProvider theme={customTheme}>{view.component}</ThemeProvider>
}

export { App }
