import React, { useState,useEffect,useCallback} from 'react'
import ReactPaginate from 'react-paginate'
import {Grid, Typography, Container} from '@material-ui/core'
import './CategoryProductPage.css'
import SingleProduct from '../../SingleProduct/SingleProduct'
import { URL } from '../../api';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function CategoryProduct() {
    const { id } = useParams();
    const [category, setCategory] = useState({
        category_name: '',
        intialProduct: [],
        offset: 0,
        postData: null,
        perPage: 12,
        currentPage: 0,
        pageCount: 0,
    });
    const receivedData = () => {
        const data = category.intialProduct;
        const slice = data.slice(category.offset, category.offset + category.perPage)
        const postData = slice.map(({ id, title,description, product_img,product_img_url, price,options }) => <Grid key={id} item xs={12} sm={6} md={3}>
            <SingleProduct id={id} description={description} options={options} title={title} img={`${product_img_url}${product_img[0]}`} price={price} />
        </Grid>);

        setCategory(preState => {
            return {
                ...preState,
                pageCount: Math.ceil(data.length / category.perPage),
                postData
            };
            
        })
    };
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * category.perPage;
        setCategory(preState => {
            return {
                ...preState,
                currentPage: selectedPage,
                offset
            }
        })
        receivedData();
    }
    async function fetchData() {
        let response = await axios.get(`${URL}/get_products_category_id/`, { crossdomain: true },{
            
            params: {
                category_id: id
            }
        });
        const res = await response.data.data;
        return {"response": response, "data": res};
            
    }
    useEffect(() => {
        let data = fetchData();
        data.then((res) => {
            setCategory(prevState => {
                return {
                    ...prevState,
                    intialProduct: res.data,
                    pageCount: res.data.length,
                    category_name: res.response.data.catId.name
                }
            })
        })        
        receivedData();
    }, [id,setCategory]);
  
    return (
        <Grid container justify="center" style={{paddingTop: 20}}>
            <Typography variant="h3" component="h3" style={{ textTransform: 'uppercase', fontStyle: 'bold' }}>{category.category_name}</Typography>
            <Grid item xs={12}>
                <Container maxWidth="lg" justify="center">
                    <Grid container justify="center" spacing={5} style={{ padding: 20 }}>   
                        {category.intialProduct.length > 0 && category.postData}                          
                    </Grid>
                    <Grid container justify="center" spacing={1}>
                        <ReactPaginate
                            previousLabel={"<"}
                            nextLabel={">"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={category.pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={4}
                            onPageChange={handlePageClick}
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