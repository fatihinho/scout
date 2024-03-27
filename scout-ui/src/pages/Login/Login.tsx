import './Login.css';

import * as React from 'react';
import {useState} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useNavigate} from "react-router";

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {'Developed by Fatih Çınar '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Login() {
  const USERNAME = "user";
  const PASSWORD = "1234";

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [isUsernameOrPasswordInvalid, setIsUsernameOrPasswordInvalid] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    setSubmitted(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get('username') == null || data.get('username') !== USERNAME || data.get('password') == null || data.get('password') !== PASSWORD) {
      setIsUsernameOrPasswordInvalid(true);
    } else {
      setIsUsernameOrPasswordInvalid(false);
    }

    if ((data.get('username') != null && data.get('username') === USERNAME) && (data.get('password') != null && data.get('password') === PASSWORD)) {
      const username = data.get('username')!;
      sessionStorage.setItem("user", username.toString());

      navigate("/dashboard");
      setSubmitted(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{height: '100vh'}}>
        <CssBaseline/>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography mt={16} style={{fontFamily: 'roboto'}} component="h1" variant="h1">
              Scout
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <h3>
                {submitted && isUsernameOrPasswordInvalid ?
                  <span style={{fontSize: 10, color: 'red'}}>Invalid username or password</span> : null}
              </h3>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{mt: 3, mb: 2}}
              >
                Sign In
              </Button>
              <Copyright sx={{mt: 5}}/>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}