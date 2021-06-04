import React from 'react';
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
import bgImage from '../../../assets/images/bg-02.png';
import ForumIcon from '@material-ui/icons/Forum';
import { Phone, PinDrop } from '@material-ui/icons';
import Swa from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Swal = withReactContent(Swa)

const useStyles = makeStyles(() => ({
    root: {
        marginTop: 30,
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

export default function ContactUs() {
    const classes = useStyles();
    const { handleSubmit, control } = useForm();
    const onSendMessage = data => {
        Swal.fire(
            'Success!',
            'Your Message receive ! Thank for your FeedBack',
            'success'
          );
    }
    return (
        <Grid container style={{paddingBottom: 10}}>
            <Grid item xs={12}>
                <div className={classes.mycontainer}>
                    <h1 className={classes.mycontainerH1}>Contact Us</h1>
                    <img className={classes.mycontainerImg} src={bgImage} alt="Img" />
                </div>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <Grid container justify="center" spacing={1}>                        
                        <Grid item xs={12} sm={6}>
                            <div className={classes.root}>
                                <Grid container justify="center">
                                    <Grid item>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                        padding: '10px 10px'
                                    }}>
                                        <Avatar className={classes.blue}><ForumIcon /></Avatar>
                                        <Typography component="h1" variant="h5">
                                            Send Us A Message
                                        </Typography>
                                    </div>
                                    </Grid>
                                    <Grid item>
                                        <form className={classes.form} onSubmit={handleSubmit(onSendMessage)}>
                                            <Grid container spacing={2}>
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
                                                        required: 'Name is Required !',
                                                    }}
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
                                                        Send
                                                    </Button>
                                                </Grid>                                    
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Grid>                            
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <div className={classes.root} style={{paddingTop: 80,paddingBottom: 80}}>
                                <Grid container justify="space-around">
                                    <Grid item xs={12}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'ecnter',
                                            flexWrap: 'wrap',
                                            padding: '10px 10px'
                                        }}>
                                            <Avatar className={classes.blue}><PinDrop /></Avatar>
                                            <Typography component="h1" variant="h5" style={{marginLeft: 15}}>
                                                Address
                                            </Typography>
                                        </div>
                                        <Typography>
                                            <span style={{paddingLeft: 60}}>No.302, Zay Street, Thanlyin Tsp,Yangon,Myanmar!</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'ecnter',
                                            flexWrap: 'wrap',
                                            padding: '10px 10px'
                                        }}>
                                            <Avatar className={classes.blue}><Phone /></Avatar>
                                            <Typography component="h1" variant="h5" style={{marginLeft: 15}}>
                                                Let's Talk
                                            </Typography>
                                        </div>
                                        <Typography>
                                            <span style={{paddingLeft: 60}}>09-441715439</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'ecnter',
                                            flexWrap: 'wrap',
                                            padding: '10px 10px'
                                        }}>
                                            <Avatar className={classes.blue}><Email /></Avatar>
                                            <Typography component="h1" variant="h5" style={{marginLeft: 15}}>
                                                Sale Support
                                            </Typography>
                                        </div>
                                        <Typography>
                                            <span style={{paddingLeft: 60}}>support@domain.com</span>
                                        </Typography>
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