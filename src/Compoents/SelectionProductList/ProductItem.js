import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PageviewIcon from '@material-ui/icons/Pageview';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  productPrice: {
    top: 24,
    right: 0,
    zIndex: 4,
    position: "absolute",
    borderTopLeftRadius: 26,
    borderBottomLeftRadius: 26,
    background: "#1976d2",
    color: 'white',
    fontWeight: 500,
    padding: '0.5rem',
  }
});

export default function ProductItem({price,text,img,options}) {
  const classes = useStyles();
  const opt = { ...options };
  let arr = [];
  for (var key in opt) {
    if (opt[key] !== null) {
      arr[key] = opt[key];
    }
  }
    return (
    <Box width={270}>
        <Card className={classes.root}>
          <CardActionArea>
            <span className={classes.productPrice}>
              MMK {new Intl.NumberFormat('en-IN').format(price)}
            </span>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                  {text}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Grid container justify="space-between">              
              <Grid item>
                <Button variant="contained" color="primary" startIcon={<PageviewIcon/>}>
                  View
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" startIcon={<AddShoppingCartIcon />}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Card>
    </Box>
  );
}
