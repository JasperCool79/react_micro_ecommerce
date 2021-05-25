import React,{useState} from 'react'
import {Grid,Typography} from '@material-ui/core'

export default function Help() {
    return (
        <Grid item xs={12} md={3}>
            <Typography
                display="block"
                variant="button"
                gutterBottom
                style={{ color: 'blue', fontSize: 12, paddingTop: 10, paddingBottom: 10 }}
            >
                Help
            </Typography>
            <Grid
                direction="column"
                container
                justify="space-between"
                spacing={1}
                alignItems="flex-start"
            >
                <Typography
                    variant="p"
                    gutterBottom
                    component="p"
                    style={{ color: 'blue', fontSize: 12, paddingTop: 7, paddingBottom: 7 }}
                >
                    FAQs
                </Typography>
                <Typography
                    variant="p"
                    gutterBottom
                    component="p"
                    style={{ color: 'blue', fontSize: 12, paddingTop: 7, paddingBottom: 7 }}
                >
                    Track Order
                </Typography>
                <Typography
                    variant="p"
                    gutterBottom
                    component="p"
                    style={{ color: 'blue', fontSize: 12, paddingTop: 7, paddingBottom: 7 }}
                >
                    Find Product Code
                </Typography>
                <Typography
                    variant="p"
                    gutterBottom
                    component="p"
                    style={{ color: 'blue', fontSize: 12, paddingTop: 7, paddingBottom: 7 }}
                >
                    Return Policy
                </Typography>
            </Grid>
        </Grid>
    )
}
