import React, { useState, useEffect } from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import ProductCategoryItem from './ProductCategoryItem';
import { URL } from '../api';
import axios from 'axios';
function ProductCategory(props) {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(`${URL}/get_categories`).then(({data}) => {
            const res = data.data;
            setCategories(res);
        }).catch(err=> console.log(err))
    },[])
    return (
        <Grid container justify="center" style={{paddingTop: 20,paddingBottom: 10}}>
            <Typography variant="h3" component="h3" style={{textTransform: 'uppercase',fontStyle: 'bold'}}>Product Categories</Typography>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <Grid container justify="center" spacing={1} style={{padding: 20}}>
                        {
                            categories.map(({id,sub_banner_img,title,name}) => <Grid item md={3} key={id}>
                                <ProductCategoryItem categoryName={name} categoryTitle={title} categoryImage={sub_banner_img} />
                            </Grid>)
                        }
                    </Grid>
                </Container>
            </Grid>
        </Grid>
    )
}

ProductCategory.propTypes = {

}

export default ProductCategory

