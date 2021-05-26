import React from 'react'
import { Container, Grid } from '@material-ui/core';
import ContactInfo from './ContactInfo';
import AppBarButton from './AppBarButton';

export default function AppBar() {
    return (
        <>
            
            <Grid container spacing={2} style={{ height: '200', backgroundColor: '#9E9E9E' }}>
                <Container maxWidth="lg">
                    <Grid container justify='space-between'>
                        <Grid item><ContactInfo/></Grid>
                        <Grid item><AppBarButton /></Grid>
                    </Grid>
                </Container>
            </Grid>
            
        </>
    )
}
