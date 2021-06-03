import React,{useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button } from '@material-ui/core';

export default function AddressForm({setUserInfo,handleNext}) {
  const user_name = useRef();
  const email = useRef();
  const phone = useRef();
  const address = useRef();
  const city = useRef();
  const onSubmit = e => {
    e.preventDefault();
    setUserInfo({
      "user_name": user_name.current.value,
      "email": email.current.value,
      "phone": phone.current.value,
      "address": address.current.value,
      "city": city.current.value,
    });
    handleNext();
  }
  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        
          
        <Grid item xs={12}>
          <TextField
            inputRef={user_name}
            required
            id="name"
            name="name"
            type="text"
            label="Your name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            inputRef={email}
            id="email"
            name="email"
            type="email"
            label="Your Email"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="phone"
            inputRef={phone}
            name="phone"
            type="number"
            label="Your Phone Number"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            inputRef={address}
            name="address"
            type="text"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            inputRef={city}
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state" name="state" label="State/Province/Region" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            defaultValue="Myanmar"
            autoComplete="shipping country"
          />
          </Grid>
          <Grid>
              <Button
                variant="contained"
                type="submit"
                color="primary"
              >
                Next
              </Button>
          </Grid>
        
        </Grid>
        </form>
    </React.Fragment>
  );
}