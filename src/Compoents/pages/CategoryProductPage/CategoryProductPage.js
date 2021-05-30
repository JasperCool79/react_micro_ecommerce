import React, { Component } from 'react'
import ReactPaginate from 'react-paginate'
import {Grid, Typography, Container} from '@material-ui/core'
import './CategoryProductPage.css'
import SingleProduct from '../../SingleProduct/SingleProduct'
import { URL } from '../../api';
import axios from 'axios';
export default class CategoryProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        intialProduct: [],
        offset: 0,
        postData: null,
        perPage: 12,
        currentPage: 0,
        pageCount: 0
    };
  }
    receivedData() {
      const data = this.state.intialProduct;
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(({ id, title,description, product_img,product_img_url, price,options }) => <Grid key={id} item xs={12} sm={6} md={3}>
            <SingleProduct description={description} options={options} title={title} img={`${product_img_url}${product_img[0]}`} price={price} />
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
        axios.get(`${URL}/get_products_category_id/`, {
            params: {
                category_id: this.props.category_id
          }
      }).then(({data}) => {
        const res = data.data;
        console.log(res)
        this.setState({ intialProduct: res,pageCount: res.length}, () => {
          this.receivedData();
        });
    }).catch(err=> console.log(err))
    }
    render() {
      return (
        <Grid container justify="center" style={{paddingTop: 20}}>
          <Typography variant="h3" component="h3" style={{ textTransform: 'uppercase', fontStyle: 'bold' }}>{this.props.category_name}</Typography>
            <Grid item xs={12}>
                <Container maxWidth="lg" justify="center">
                    <Grid container justify="center" spacing={5} style={{ padding: 20 }}>   
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