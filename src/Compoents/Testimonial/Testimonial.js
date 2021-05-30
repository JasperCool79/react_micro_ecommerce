import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import "./Testimonial.css";
import axios from 'axios';
import { URL } from '../api';

export default class Testimonial extends Component {
    state = {
        reviews: []
    }
    componentDidMount() {
        axios.get(`${URL}/get_reviews`).then(({ data }) => {
            const res = data.data;
            this.setState({ reviews: res });
        })
    }    
    render() {
        const myclasses = `mycarousel-root mycarousel mycarousel-slider mycontrol-arrow`;
        return (
            <Grid container justify="center" style={{paddingTop: 20,paddingBottom: 20}}>
                <Grid container justify="center">
                    <Typography
                        variant="h3"
                        component="h3"
                        style={{ textTransform: 'uppercase', fontStyle: 'bold' }}
                    >
                        Testimonial
                    </Typography>
                </Grid>            
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    className={myclasses}
                >                        
                    {
                        this.state.reviews.map(({id,name,job,company,photo,review_message})=> <div key={id}>
                            <img src={photo} alt={name}/>
                            <div className="myCarousel">
                                <h3>{name}</h3>
                                <h4>{`${job} @ ${company}`}</h4>
                                <p>{review_message}</p>
                            </div>
                        </div>)
                    }
                </Carousel>
            </Grid>
        );
    }
}
