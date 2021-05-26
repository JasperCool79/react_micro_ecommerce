import React from 'react'
import { Grid,Container,Typography } from '@material-ui/core'
import Support from './Support'
import Help from './Help'
import GetInTouch from './GetInTouch'
import NewsLetter from './NewsLetter'
import Img1 from '../../assets/images/icons/agd.png'
import Img2 from '../../assets/images/icons/ayabank.png'
import Img3 from '../../assets/images/icons/cb.png'
import Img4 from '../../assets/images/icons/kbz.png'
import Img5 from '../../assets/images/icons/mab.png'
import Img6 from '../../assets/images/icons/ok.png'
import Img7 from '../../assets/images/icons/wave.png'
import Img8 from '../../assets/images/icons/yoma.png'

export default function Footer() {
    return (
        <div style={{ backgroundColor: 'black',paddingTop: 40,paddingBottom: 30}}>
            <Container maxWidth="lg">
                <Grid
                    direction="row"
                    container
                    justify="space-between"
                    spacing={1}
                >
                    <Support />
                    <Help />
                    <GetInTouch />
                    <NewsLetter/>
                </Grid>
                <Grid
                    direction="row"
                    container
                    justify="center"
                    style={{paddingTop: 20}}
                >
                    
                    <img src={Img1} width="70" height="30" style={{maxWidth: "100%",height: 'auto',padding: 5}} alt="custom_img"/>
                    
                    <img src={Img2} width="50" height="50" style={{maxWidth: "100%",height: 'auto',padding: 5}} alt="custom_img" />
                    <img src={Img3} width="50" height="50" style={{maxWidth: "100%",height: 'auto',padding: 5}} alt="custom_img"/>
                    <img src={Img4} width="50" height="50" style={{maxWidth: "100%",height: 'auto',padding: 5}} alt="custom_img"/>
                    <img src={Img5} width="90" height="30" style={{maxWidth: "100%",height: 'auto',padding: 5}} alt="custom_img"/>
                    <img src={Img6} width="40" height="40" style={{maxWidth: "100%",height: 'auto',padding: 5}} alt="custom_img"/>
                    <img src={Img7} width="40" height="30" style={{maxWidth: "100%",height: 'auto',padding: 5}} alt="custom_img"/>
                    <img src={Img8} width="50" height="50" style={{ maxWidth: "100%", height: 'auto', padding: 5 }} alt="custom_img"/>                    
                </Grid>
                <Grid
                    direction="row"
                    container
                    justify="center"
                    style={{paddingTop: 20}}
                >
                    <Typography
                    variant="body2"
                    gutterBottom
                    style={{ color: 'gray',paddingTop: 7, paddingBottom: 7 }}
                >
                    Copyright © 2021 All rights reserved | Made with <span style={{color: 'red',fontSize: 14}}>&hearts;</span> by JasperCool & Manage by JCTech
                </Typography>

                </Grid>
                
            </Container>
        </div>
    )
}
