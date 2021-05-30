import React from 'react'
import BannerCarousel from '../../ProductCarousel/ProductCarousel';
import ProductCategory from '../../ProductCategory/ProductCategory';
import SelectionProductList from '../../SelectionProductList/SelectionProductList';
import Testimonial from '../../Testimonial/Testimonial';

export default function Home() {
    return (
        <>
            <BannerCarousel />
            <ProductCategory />
            <SelectionProductList name="Latest Product" url="get_latest_products"/>
            <SelectionProductList name="Best Selling Product" url="get_best_selling_products"/>
            <SelectionProductList name="Popular Product" url="get_popular_products"/>
            <Testimonial/>            
        </>
    )
}
