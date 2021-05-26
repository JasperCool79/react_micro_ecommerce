import React from 'react'
import {Grid,Typography} from '@material-ui/core'
import ContactInfo from '../AppBar/ContactInfo';

export default function Support() {
    return (
        <Grid item xs={12} md={3}>
            <Typography
                display="block"
                variant="button"
                gutterBottom
                style={{ color: 'blue', fontSize: 12, paddingTop: 10, paddingBottom: 10 }}
            >
                Support
            </Typography>
            <Grid
                direction="column"
                container
                justify="space-between"
                spacing={1}
                alignItems="flex-start"
            >
                <ContactInfo/>
            </Grid>
        </Grid>
    )
}
