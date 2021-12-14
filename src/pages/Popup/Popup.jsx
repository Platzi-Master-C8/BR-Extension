import { ThemeProvider, createTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import  Layout  from "../../components/templates/Layout/Layout";
import Link from '@mui/material/Link';
import Navbar  from "../../components/organisms/AppBar";
import React from "react";
import { StarRating } from "../../components/molecules/StarRating/StarRating";
import { TrackForm } from "../../components/organisms/TrackForm/TrackForm";
import { TrackNew } from "../TrackNew/TrackNew";

const theme = createTheme();

function Popup() {
  const [inputValue, setInputValue] = React.useState({});
  const [rating, setRating] = React.useState('3')

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        > 
    <Layout>
      <Navbar title="New Tracking" />
      <div class="divider"></div>
      <TrackNew>
        <TrackForm
          inputValue={inputValue}
          setInputValue={setInputValue}
        >
          <StarRating rating={rating} setRating={setRating} />
         
      </TrackForm>
      </TrackNew>
    </Layout>
    </Box> 
    </Container>
</ThemeProvider>
  );
}

export { Popup };
