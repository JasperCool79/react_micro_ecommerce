import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from 'react-responsive-carousel';
import "./Testimonial.css";
import Img1 from '../../assets/images/uploads/review/5de120ac48934_gallery-03.jpg'
import Img2 from '../../assets/images/uploads/review/5de121bd59590_product-05.jpg'
import Img3 from '../../assets/images/uploads/review/5de1210ce4568_gallery-06.jpg'
import Img4 from '../../assets/images/uploads/review/5de12266dc585_product-min-02.jpg'

export default class Testimonial extends Component {
    
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
                    <div>
                        <img src={Img1} />
                        <div className="myCarousel">
                            <h3>Shirley Fultz</h3>
                            <h4>Designer</h4>
                            <p>
                                It's freeing to be able to catch up on customized news and not be
                                distracted by a social media element on the same site
                            </p>
                        </div>
                    </div>
            
                    <div>
                        <img src={Img2} />
                        <div className="myCarousel">
                            <h3>Daniel Keystone</h3>
                            <h4>Designer</h4>
                            <p>
                                The simple and intuitive design makes it easy for me use. I highly
                                recommend Fetch to my peers.
                            </p>
                        </div>
                    </div>
            
                    <div>
                        <img src={Img3} />
                        <div className="myCarousel">
                            <h3>Theo Sorel</h3>
                            <h4>Designer</h4>
                            <p>
                                I enjoy catching up with Fetch on my laptop, or on my phone when
                                I'm on the go!
                            </p>
                        </div>
                    </div>
                </Carousel>
            </Grid>
        );
    }
}
