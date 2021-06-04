import React,{useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import { useForm, Controller } from 'react-hook-form';
import { URL } from '../../api';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Swa from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Swal = withReactContent(Swa)



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

export default function SignUp() {
    const classes = useStyles();
    const history = useHistory();
    const [agree, setAgree] = useState(false);
    const { handleSubmit, control} = useForm();
    const onRegister = data => {
      let user = {
        'name': data.userName,
        'email': data.email,
        'password': data.password,
        'confirm_password': data.confirm_password,
      };
      axios.post(`${URL}/signup`, user).then(res => {
        Swal.fire(
          'Success!',
          'Register Succeess! Now your are a member',
          'success'
        );
        history.push('/');
      }).catch(err => Swal.fire(
        'Error!',
        'Something Wrong ! Please Check your email and password',
        'error'
      ))
    }
  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onRegister)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
                <Controller
                    name="userName"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange,value},fieldState: {error}})=>(<TextField
                        variant="outlined"
                        fullWidth
                        id="userName"
                        value={value}
                        error={!!error}
                        onChange={onChange}
                        label="User Name"
                        helperText={error ? error.message : null}
                    />)}
                    rules={{required: 'User Name is Required ! Fill Out this.'}}
                />
            </Grid>
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
                <Controller
                    name="confirm_password"
                    control={control}
                    defaultValue=""
                    render={({field: {onChange,value},fieldState: {error}})=>(<TextField
                        variant="outlined"
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        onChange={onChange}
                        value={value}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />)}
                    rules={{
                        required: 'Confirm Password is Required !',
                    }}
                />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox onClick={()=> setAgree(!agree)} checked={agree} value="allowExtraEmails" color="primary" />}
                label="I have agree to term and condition by checking this box."
              />
            </Grid>
            <Grid item xs={12}>
                <Button
                    type="submit"
                    disabled={!agree}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up
                </Button>
            </Grid>
            <Grid item xs={12}>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign Up with <FacebookIcon/>
                </Button>
            </Grid>                
            <Grid container justify="flex-end">
                <Grid item>
                <Link href="#" variant="body2">
                    Already have an account? Sign in
                </Link>
                </Grid>
            </Grid>
        </Grid>
        </form>
      </div>
    </Container>
  );
}