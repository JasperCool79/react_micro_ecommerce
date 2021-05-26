import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import {Grid, Typography, Container} from '@material-ui/core'
import './SelectionProductList.css'
import ProductItem from './ProductItem'
import { URL } from '../api';
import axios from 'axios';

import myData from './data';
export default class SelectionProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        intialProduct: [],
        offset: 0,
        postData: null,
        perPage: 4,
        currentPage: 0,
        pageCount: myData.length
    };
  }
    receivedData() {
      const data = this.state.intialProduct;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(({ id, title, product_img,product_img_url, price }) => <Grid key={id} item md={3}>
            <ProductItem text={title} img={`${product_img_url}${product_img[0]}`} price={price} />
        </Grid>);

        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData
        })
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
        currentPage: selectedPage,
        offset
        }, () => {
            this.receivedData();
        })
    }
    componentDidMount() {
      axios.get(`${URL}/${this.props.url}`).then(({data}) => {
        const res = data.data;
        this.setState({ intialProduct: res }, () => {
          this.receivedData();
        });
    }).catch(err=> console.log(err))
    }
    render() {
      return (
        <Grid container justify="center" style={{paddingTop: 20}}>
          <Typography variant="h3" component="h3" style={{ textTransform: 'uppercase', fontStyle: 'bold' }}>{this.props.name}</Typography>
            <Grid item xs={12}>
                <Container maxWidth="lg" justify="center">
                    <Grid container justify="center" spacing={1} style={{ padding: 20 }}>   
                        {this.state.postData}                          
                      </Grid>
                      <Grid container justify="center" spacing={1}>

                      
                    <ReactPaginate
                        previousLabel={"<"}
                        nextLabel={">"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={4}
                        onPageChange={this.handlePageClick}
                        containerClassName={"pagination"}
                        subContainerClassName={"pages pagination"}
                        activeClassName={"active"}
                          />
                          </Grid>
                </Container>
            </Grid>
        </Grid>
    )
  }
}