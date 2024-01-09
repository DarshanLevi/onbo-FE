import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

function Login() {
  return (
    <Container component="main" maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item lg={6}>
          <Card elevation={3}>
            <CardContent>
              <Typography component="h1" variant="h5" align="center">
                Welcome Back!
              </Typography>
              <form>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember Me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
                <hr />
                <Button
                  fullWidth
                  variant="outlined"
                  color="default"
                  startIcon={<i className="fab fa-google fa-fw"></i>}
                >
                  Login with Google
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="default"
                  startIcon={<i className="fab fa-facebook-f fa-fw"></i>}
                >
                  Login with Facebook
                </Button>
              </form>
              <hr />
              <div align="center">
                <Link to="/forgot-password" variant="body2">
                  Forgot Password?
                </Link>
              </div>
              <div align="center">
                <Link to="/register" variant="body2">
                  Create an Account!
                </Link>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
