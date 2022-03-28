import React, { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { ThemeProvider } from '@mui/material/styles'
import { TrackNew } from '../Popup/TrackNew'
import { Vacancies } from '../Vacancies/Vacancies'
import customTheme from '../../styles/customTheme'
import SignupButton from '../../components/organisms/SignupButton/SignupButton'

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
	const { isAuthenticated, getAccessTokenSilently, isLoading } = useAuth0()
	const [authenticated, setAuthenticated] = useState(isAuthenticated)
	const [view, setView] = useState(routes[0])

	const getToken = async () => {
		try {
			console.log('trying to get AccessTokenSliently')
			const token = await getAccessTokenSilently()
			console.log('token', token)
			setToken(token)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		getToken()
	}, [])

	useEffect(() => {
		setAuthenticated(isAuthenticated)
	}, [isAuthenticated])

	return (
		<ThemeProvider theme={customTheme}>
			{authenticated ? view.component : <SignupButton />}
		</ThemeProvider>
	)
}

export { App }
