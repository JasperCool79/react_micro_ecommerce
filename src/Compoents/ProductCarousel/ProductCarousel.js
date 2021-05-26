import React, { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@material-ui/core';
import { URL } from '../api';
import axios from 'axios';

export default function ProductCarousel() {
    const [categories, setCategories] = useState([]);
    const onClickItem = () => {
    }
    useEffect(() => {
        axios.get(`${URL}/get_categories`).then(({data}) => {
            const res = data.data;
            setCategories(res);
        }).catch(err=> console.log(err))
    },[])
    return (
        <Carousel infiniteLoop={true} showThumbs={false} autoPlay={true} showArrows={true} onClickItem={onClickItem}>
            {
                categories.map(({id,banner_img,title,subtitle}) => <div key={id}>
                    <img src={banner_img} style={{ maxHeight: 600 }} alt={title}/>
                    <p className="title">{title}</p>
                    <p className="subtitle">{subtitle}</p>
                    <Button className="legend">Shop Now</Button>
                </div>)
            }
        </Carousel>
    );
};