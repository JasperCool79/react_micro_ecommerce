import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CardMedia from '@material-ui/core/CardMedia';
import bgImage from '../../../assets/images/bg-02.png'
import aboutOne from '../../../assets/images/about-01.jpg'
import aboutTwo from '../../../assets/images/about-02.jpg'

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
        marginTop: 30
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

export default function AboutUs() {
  const classes = useStyles();
    return (
        <Grid container style={{paddingBottom: 10}}>
            <Grid item xs={12}>
                <div className={classes.mycontainer}>
                    <h1 className={classes.mycontainerH1}>About Us</h1>
                    <img className={classes.mycontainerImg} src={bgImage} alt="Img" />
                </div>
            </Grid>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h2" gutterBottom>
                                Our Story
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                            Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={aboutOne}
                                    title="Paella dish"
                                />
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image={aboutTwo}
                                    title="Paella dish"
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <Typography variant="h2" gutterBottom>
                                Our Mission
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.
                            </Typography>
                            
                            <Typography variant="body1" gutterBottom>
                            Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Grid>
  );
}