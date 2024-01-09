import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button,
} from '@mui/material';

function Registration() {
  return (
    <Container component="main" maxWidth="sm">
      <div>
        <Typography variant="h5">Register</Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phoneNumber"
            label="Phone Number"
            name="phoneNumber"
            autoComplete="tel"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </form>
        <Typography align="center" variant="body2">
          Already have an account? <Link to="/">Login</Link>
        </Typography>
      </div>
    </Container>
  );
}

export default Registration;
