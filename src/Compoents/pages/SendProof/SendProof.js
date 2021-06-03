import React,{useState} from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { FormatListNumbered, Phone, Receipt } from '@material-ui/icons';
import { URL } from '../../api';
import axios from 'axios'
import { useHistory } from 'react-router';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 30,
        marginBottom: 30,
        padding: 30,
        rounded: 2,
        borderRadius: 25,
        border: "2px solid #888"
    },
    blue: {
        color: '#fff',
        backgroundColor: 'blue',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    mycontainer: {
        position: 'relative',
        background: '#696969',
        overflow: 'hidden',
    },
    mycontainerH1: {
        padding: 10,
        textAlign: 'center',
        zIndex: 2,
        position: 'relative',
        color: '#fff',
    },
    mycontainerImg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: "100%",
        height: 'auto',
        zIndex: 1,
        opacity: 0.5
    }
}));

export default function SendProof() {
    let history = useHistory();
    const classes = useStyles();
    const { handleSubmit, control } = useForm();
    const [file, setFile] = useState(null);
    const fileSelectedHandler = event => {
        setFile(event.target.files[0]);
        console.log(event.target.files[0])
      }
    const onSendMessage = data => {
        const formData = new FormData();
        formData.append("img", file,file.name);
        formData.append("order_id",data.orderId);
        formData.append("name",data.name);
        formData.append("phone",data.phoneNumber);
        formData.append("message", data.message);
        axios.post(`${URL}/send_proof`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => {
            console.log(res)
            if (res.data.code) {
                if (res.data.code === 200) {
                    history.push('/');
                }
            }
        }).catch(err => console.log(err));
    }
    return (
    <Grid container style={{paddingBottom: 10}}>
        <Grid item xs={12}>
            <Container maxWidth="lg">
                <Grid container justify="center" spacing={1}>                        
                    <Grid item xs={12} sm={12}>
                        <div className={classes.root}>
                            <Grid container justify="center">
                                <Grid item xs={12}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        padding: '10px 10px'
                                    }}>
                                        <Avatar className={classes.blue}><Receipt /></Avatar>
                                        <Typography component="h1" variant="h5">
                                            &nbsp;Send Payment Proof with Bank Slip
                                        </Typography>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <form
                                        className={classes.form}
                                        onSubmit={handleSubmit(onSendMessage)}
                                    >
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Controller
                                                    name="orderId"
                                                    control={control}
                                                    defaultValue=""
                                                    render={({field: {onChange,value},fieldState: {error}})=>(<Grid container justify="center" alignItems="flex-end">
                                                    <Grid item xs={1}>
                                                        <FormatListNumbered />
                                                    </Grid>
                                                    <Grid item xs={11}>
                                                        <TextField
                                                        fullWidth
                                                        label="Order Id (eg-15765443)"
                                                        type="number"
                                                        onChange={onChange}
                                                        value={value}
                                                        error={!!error}
                                                        helperText={error ? error.message : null}
                                                        />
                                                    </Grid>
                                                    </Grid>)}
                                                rules={{
                                                    required: 'Order Id is Required !',
                                                }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Controller
                                                    name="name"
                                                    control={control}
                                                    defaultValue=""
                                                    render={({field: {onChange,value},fieldState: {error}})=>(<Grid container justify="center" alignItems="flex-end">
                                                    <Grid item xs={1}>
                                                        <AccountCircle />
                                                    </Grid>
                                                    <Grid item xs={11}>
                                                        <TextField
                                                        fullWidth
                                                        label="Your Name"
                                                        type="text"
                                                        onChange={onChange}
                                                        value={value}
                                                        error={!!error}
                                                        helperText={error ? error.message : null}
                                                        />
                                                    </Grid>
                                                    </Grid>)}
                                                rules={{
                                                    required: 'Name is Required !',
                                                }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Controller
                                                    name="phoneNumber"
                                                    control={control}
                                                    defaultValue=""
                                                    render={({field: {onChange,value},fieldState: {error}})=>(<Grid container justify="center" alignItems="flex-end">
                                                    <Grid item xs={1}>
                                                        <Phone />
                                                    </Grid>
                                                    <Grid item xs={11}>
                                                        <TextField
                                                        fullWidth
                                                        label="Phone Number"
                                                        type="number"
                                                        onChange={onChange}
                                                        value={value}
                                                        error={!!error}
                                                        helperText={error ? error.message : null}
                                                        />
                                                    </Grid>
                                                    </Grid>)}
                                                rules={{
                                                    required: 'Phone Number is Required !',
                                                }}
                                                />
                                            </Grid>                                                
                                            <Grid item xs={12}>
                                                <Controller
                                                    name="email"
                                                    control={control}
                                                    defaultValue=""
                                                    render={({field: {onChange,value},fieldState: {error}})=>(<Grid container justify="center" alignItems="flex-end">
                                                    <Grid item xs={1}>
                                                        <Email />
                                                    </Grid>
                                                    <Grid item xs={11}>
                                                        <TextField
                                                        fullWidth
                                                        label="Email Address"
                                                        type="eamil"
                                                        onChange={onChange}
                                                        value={value}
                                                        error={!!error}
                                                        helperText={error ? error.message : null}
                                                        />
                                                    </Grid>
                                                    </Grid>)}
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
                                                
                                                        <div>
                                                            <input
                                                                accept="image/*"
                                                                style={{display: 'none'}}
                                                                id="contained-button-file"
                                                                type="file"
                                                                onChange={fileSelectedHandler}
                                                            />
                                                            <label htmlFor="contained-button-file">
                                                                <Button fullWidth variant="contained"
                                                                    component="span"
                                                                    style={{background: '#8e24aa',color: 'white'}}
                                                                >
                                                                    Add ScreenShoot Photo
                                                                </Button>
                                                                {file === null ? <span style={{color: 'red'}}>{'Payment ScreenShoot is Required'}</span> : null}
                                                            </label>
                                                        </div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Controller
                                                    name="message"
                                                    control={control}
                                                    defaultValue=""
                                                    render={({field: {onChange,value},fieldState: {error}})=>(<TextField
                                                        multiline
                                                        variant="outlined"
                                                        fullWidth
                                                        label="Message"
                                                        rows={4}
                                                        type="text"
                                                        onChange={onChange}
                                                        value={value}
                                                        error={!!error}
                                                        helperText={error ? error.message : null}
                                                        />)}
                                                rules={{
                                                    required: 'Message is Required !',
                                                }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    size="large"
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    color="primary"
                                                    className={classes.submit}
                                                >
                                                    Send
                                                </Button>
                                            </Grid>                                    
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>                            
                        </div>
                    </Grid>     
                </Grid>
            </Container>
        </Grid>
    
        </Grid>
  );
}