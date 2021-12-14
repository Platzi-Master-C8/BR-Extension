// import * as React from 'react';

// import { ThemeProvider, createTheme } from '@mui/material/styles';

// import Button from '@mui/material/Button';

// const defaultTheme = createTheme();

// const theme = createTheme({
//   components: {
//     MuiButton: {
//       variants: [
//         {
//           props: { variant: 'submit' },
//           style: {
//             textTransform: 'capitalize',
//             color: #FFF,
//             background:'linear-gradient(90deg, rgba(95, 100, 255, 0.7) 0%, rgba(174, 78, 255, 0.85) 100%)',
//             borderRadius:'6px',
//             endIcon:'sendIcon',
//             padding:'8px 22px'
//           },
//         }
//       ],
//     },
//   },
// });

import { Button, Fab, Icon, IconButton } from '@mui/material'

import React from 'react'
import { makeStyles } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

