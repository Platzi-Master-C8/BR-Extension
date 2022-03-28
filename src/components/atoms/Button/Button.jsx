import { Button } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send'
import Stack from '@mui/material/Stack'

function SubmitButton(props) {
	return (
		<Stack direction='row' spacing={2}>
			<Button
				fullWidth
				variant='getHiredButton'
				endIcon={<SendIcon />}
				type='submit'
				sx={{
					background:
						'linear-gradient(90deg, rgba(95, 100, 255, 0.7) 0%, rgba(174, 78, 255, 0.85) 100%)',
					borderRadius: '6px',
					textTransform: 'capitalize',
					color: '#FFF',
					fontSize: '24px',
					fontWeight: 'normal',
					fontFamily: 'Mulish',
					padding: '3px',
					marginTop: '25px',
				}}>
				{props.value}
			</Button>
		</Stack>
	)
}

export default SubmitButton
