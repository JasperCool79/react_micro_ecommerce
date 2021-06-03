import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const products = [
  { name: 'Product 1', desc: 'A nice thing', price: '$9.99' },
  { name: 'Product 2', desc: 'Another thing', price: '$3.45' },
  { name: 'Product 3', desc: 'Something else', price: '$6.51' },
  { name: 'Product 4', desc: 'Best thing of all', price: '$14.11' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['1 Material-UI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review({products,total,userInfo}) {
    const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map(({id,name,price,quantity}) => (
          <ListItem className={classes.listItem} key={id}>
            <ListItemText primary={name} secondary={`${quantity} * ${new Intl.NumberFormat('en-IN').format(price)}/- MMK`} />
            <Typography variant="body2">{new Intl.NumberFormat('en-IN').format(price*quantity)+'/- MMK'}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            {new Intl.NumberFormat('en-IN').format(total)+'/- MMK'}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
                <Grid item xs={6}>
                  <Typography gutterBottom>User Name</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{userInfo.user_name}</Typography>
                </Grid>
                <Grid Grid item xs={6}>
                  <Typography gutterBottom>User Email</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{userInfo.email}</Typography>
                </Grid>
                <Grid Grid item xs={6}>
                  <Typography gutterBottom>Phone Number</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{userInfo.phone}</Typography>
                </Grid>
                <Grid Grid item xs={6}>
                  <Typography gutterBottom>Address</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{userInfo.address}</Typography>
                </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}