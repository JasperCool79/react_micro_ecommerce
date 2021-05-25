import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Container } from '@material-ui/core';
import ProductCategoryItem from './ProductCategoryItem';
import Img1 from '../../assets/images/uploads/category/sub_banner_img/1574973859_banner-05.jpg';
import Img2 from '../../assets/images/uploads/category/sub_banner_img/1574973959_banner-01.jpg';
import Img3 from '../../assets/images/uploads/category/sub_banner_img/1574974066_banner3.jpg';
import Img4 from '../../assets/images/uploads/category/sub_banner_img/1574974137_banner.jpg';
import Img5 from '../../assets/images/uploads/category/sub_banner_img/1574974236_banner.jpg';
import Img6 from '../../assets/images/uploads/category/sub_banner_img/1574974421_banner1.jpg';

const productCategory = [
    {
        categoryName: 'Men Fashion',
        categoryTitle: 'All Men Fashion for Men and Latest Trend',
        categoryImage: Img1
    },
    {
        categoryName: 'Women Fashion',
        categoryTitle: 'All Women Fashion for Women and Latest Trend',
        categoryImage: Img2
    },
    {
        categoryName: 'Men Fashion',
        categoryTitle: 'All Men Fashion for Men and Latest Trend',
        categoryImage: Img3
    },
    {
        categoryName: 'Men Fashion',
        categoryTitle: 'All Men Fashion for Men and Latest Trend',
        categoryImage: Img4
    },
    {
        categoryName: 'Men Fashion',
        categoryTitle: 'All Men Fashion for Men and Latest Trend',
        categoryImage: Img5
    },
    {
        categoryName: 'Men Fashion',
        categoryTitle: 'All Men Fashion for Men and Latest Trend',
        categoryImage: Img6
    }
];

function ProductCategory(props) {
    return (
        <Grid container justify="center">
            <Typography variant="h1" component="h1">Product Categories</Typography>
            <Grid item xs={12}>
                <Container maxWidth="lg">
                    <Grid container justify="center" spacing={1} style={{padding: 20}}>
                        {
                            productCategory.map((product,index) => <Grid item md={3} key={index}>
                                <ProductCategoryItem categoryName={product.categoryName} categoryTitle={product.categoryTitle} categoryImage={product.categoryImage} />
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

