import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useForm, Controller } from 'react-hook-form';
import { URL } from '../../api';
import axios from 'axios';
import {useHistory} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: 1,
  },
}));

export default function Login() {
    const classes = useStyles();
    const history = useHistory();
    const { handleSubmit, control} = useForm();
    const onLogin = data => {
      let user = {
        'email': data.email,
        'password': data.password,
      };
      axios.post(`${URL}/login`, user).then(res => {
        history.push('/');
      }).catch(err => console.log(err))
    }
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onLogin)}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange,value},fieldState: {error}})=>(<TextField
                        variant="outlined"
                        fullWidth
                        type="email"
                        label="Email Address"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />)}
                rules={{
                    required: 'Email is Required !',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid e-mail address",
                    },
                }}
                />
            </Grid>
            <Grid item xs={12}>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange,value},fieldState: {error}})=>(<TextField
                        variant="outlined"
                        fullWidth
                        label="Password"
                        type="password"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />)}
                    rules={{required: 'Password is Required'}}
                />
            </Grid>
            <Grid item xs={12}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Login
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Login Up with <FacebookIcon/>
                </Button>
            </Grid>                
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="#" variant="body2">
                    Don't have an account? Sign Up
                </Link>
                </Grid>
            </Grid>
        </Grid>
        </form>
      </div>
    </Container>
  );
}