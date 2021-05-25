import React, { Component } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import {Grid, Typography, Container} from '@material-ui/core'
import './SelectionProductList.css'
import ProductItem from './ProductItem'

import myData from './data';
export default class SelectionProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        offset: 0,
        postData: null,
        perPage: 4,
        currentPage: 0,
        pageCount: myData.length
    };
  }
    receivedData() {
        const data = myData;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(({ id, text, img, price }) => <Grid key={id} item md={3}>
            <ProductItem text={text} img={img} price={price} />
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
        this.receivedData();
    }
    render() {
      return (
        <Grid container justify="center" style={{paddingTop: 20}}>
            <Typography variant="h3" component="h3" style={{textTransform: 'uppercase',fontStyle: 'bold'}}>Best Selling Product</Typography>
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