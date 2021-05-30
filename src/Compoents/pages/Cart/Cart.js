import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { TableRow } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import TableContent from './TableContent'

const useStyles = ()=>({
  table: {
    minWidth: 350,
  },
  container: {
    paddingTop: 20,
    paddingBottom: 20
    },
    image: {
        width: 50,
        height: 60,
    }
});

var cartData = '{"id-1":{"quantity":1,"id":"id-1","price":900,"name":"Some article","image": "https://mico-ecommerce.herokuapp.com/uploads/product/5de04262d7edc_10.jpg"},"id-2":{"quantity":1,"id":"id-2","price":1900,"name":"Another article","image": "https://mico-ecommerce.herokuapp.com/uploads/product/5de04262d7edc_10.jpg"}}';

const storeCartData = (json) => {
  cartData = JSON.stringify(json);
  return;
}
// totalCost
const intialTotalConst = () => {
    let catArr = [];
    Object.keys(JSON.parse(cartData)).forEach(function(key) {
      catArr.push(JSON.parse(cartData)[key]);
    });
    let total = catArr.reduce((accumulator, {price,quantity}) => {
      return accumulator + (price*quantity);
    }, 0);
  return total;
}

class Cart extends React.Component {
  state = {
      articles: JSON.parse(cartData),
      total: intialTotalConst(),
  };
  
  deleteArticle = (e, id) => {
    this.setState({
      total: this.state.total - this.state.articles[id]['quantity']*this.state.articles[id]['price'],
    });
    delete this.state.articles[id];
    storeCartData(this.state.articles);
  }
  
  setQuantity = (e, id) => {
    let v = Number(e.target.value);
    console.log(v);
    if(v !== 0) {
      this.state.articles[id]['quantity'] = v;
      this.setState({
        ...this.state.articles,
        total: this.state.total + this.state.articles[id]['price']*v,
      });
      storeCartData(this.state.articles);
    } else {
      this.deleteArticle(e, id)
    }
  }
  
  reduceQuantity = (e, id) =>{
    if (this.state.articles[id]['quantity'] > 1){
      this.state.articles[id]['quantity'] += -1;
      this.setState({
        ...this.state.articles,
        total: this.state.total - this.state.articles[id]['price'],
      });
      storeCartData(this.state.articles);
    } else {
      this.deleteArticle(e, id);
    }
  }
  
  incrementQuantity = (e, id) =>{
    this.state.articles[id]['quantity'] += 1;
    this.setState({
      ...this.state.articles,
      total: this.state.total + this.state.articles[id]['price'],
    });
    storeCartData(this.state.articles);
  }
  
  render() {
    const { classes } = this.props;
    var cartItems = this.state.articles;
    var cartArray = [];
    Object.keys(cartItems).forEach(function(key) {
      cartArray.push(cartItems[key]);
    });
    return (
      <Container maxWidth="lg" className={classes.container}>
        <Grid container>
          <Grid item xs={12}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="spanning table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Image</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Qty</TableCell>
                        <TableCell align="right">Total</TableCell>
                        <TableCell align="right">Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        cartArray.map(({id,name,price,quantity,image})=>
                          <TableContent
                            key={id}
                            id={id}
                            image={image}
                            name={name}
                            price={price}
                            quantity={quantity}
                            inputHandler={this.setQuantity}
                            reduceBinder={this.reduceQuantity}
                            incrementBinder={this.incrementQuantity}
                            deleteBinder={this.deleteArticle}
                          />
                        )
                      }   
                      <TableRow>
                          <TableCell colSpan={5} align="right">Total</TableCell>
                          <TableCell align="right">
                            MMK {new Intl.NumberFormat('en-IN').format(this.state.total)}
                          </TableCell>
                      </TableRow>                                     
                    </TableBody>
                  </Table>
                </TableContainer>                        
              </Grid>
              <Grid item xs={12}>

              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(useStyles)(Cart);