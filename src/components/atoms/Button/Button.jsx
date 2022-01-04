import { Button } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function SubmitButton(props) {
     return (

        <Stack direction="row" spacing={2}>
         <Button 
         fullWidth
             variant="getHiredButton" 
             endIcon={<SendIcon />}
             type="submit"
             >
             {props.value}
         </Button>
        </Stack>
    );
}

export default SubmitButton
