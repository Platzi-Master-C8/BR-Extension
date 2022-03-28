import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'
import Tooltip from '@mui/material/Tooltip'
import { useAuth0 } from '@auth0/auth0-react'
import { Typography } from '@mui/material'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function NavBarMenu() {
	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)
	const { isAuthenticated, user: currentUser } = useAuth0()

	console.log(isAuthenticated)
	console.log(currentUser)
	const user = {
		name: currentUser ? currentUser.name : '',
		avatar: currentUser ? currentUser.picture : '',
		jobtitle: currentUser ? currentUser.email : '',
	}

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar
						variant='rounded'
						alt={user.name}
						src={user.avatar}
					/>
				</IconButton>
			</Tooltip>
		</Box>
	)
}
export { NavBarMenu }
