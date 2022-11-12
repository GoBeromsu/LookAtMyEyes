import {
  Checkbox,
  TextField,
  Button,
  FormControlLabel,
  Link,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Auth = () => {
  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          mt: "10em",
          mb: "10em",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "middle",
        }}>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <br />
        <TextField
          label='Email Address'
          name='email'
          autoComplete='email'
          required
          fullWidth
          autoFocus
          sx={{ mt: 0, mb: 1 }}
        />
        <TextField
          label='Password'
          name='password'
          type='password'
          autoComplete='current-password'
          required
          fullWidth
          sx={{ mb: 2 }}
        />
        <FormControlLabel
          control={<Checkbox value='remember' color='primary' />}
          label='Remember'
        />

        <Button
          type='submit'
          variant='contained'
          fullWidth
          sx={{ mt: 2, mb: 2 }}>
          Sign in
        </Button>
        <Grid container>
          <Grid item xs>
            <Link>Forgot password?</Link>
          </Grid>
          <Grid item>
            <Link>Sign up</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Auth;
