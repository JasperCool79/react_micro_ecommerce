import React, {useState} from 'react'
import { Container, Grid } from '@material-ui/core';
import ContactInfo from './ContactInfo';
import AppBarButton from './AppBarButton';

export default function AppBar() {
    const [contactInfo, setContactInfo] = useState(
        {phone: '09-441715439',email: 'sldfkjfasl.ygn@gmail.com',facebook: 'MM Digital Page',messenger: 'MM Digital Page'}
    );

    // console.log(contactInfo)
    return (
        <>
            
            <Grid container spacing={2} style={{ height: '200', backgroundColor: '#9E9E9E' }}>
                <Container maxWidth="lg">
                    <Grid container justify='space-between'>
                        <Grid item><ContactInfo contactInfo={contactInfo}/></Grid>
                        <Grid item><AppBarButton /></Grid>
                    </Grid>
                </Container>
            </Grid>
            
        </>
    )
}
