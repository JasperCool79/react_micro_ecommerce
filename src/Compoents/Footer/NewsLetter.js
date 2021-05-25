import React,{useState} from 'react'
import { Grid, Typography, IconButton, Button,InputBase } from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function GetInTouch() {
    return (
        <Grid item xs={12} md={3}>
            <Typography
                display="block"
                variant="button"
                gutterBottom
                style={{ color: 'blue', fontSize: 12, paddingTop: 10, paddingBottom: 10 }}
            >
                News Letter
            </Typography>
            <Grid
                direction="column"
                container
                justify="space-between"
                spacing={1}
                alignItems="flex-start"
            >
                <InputBase
                        style={{color: 'gray',paddingBottom: 15}}
                        placeholder="example@gmail.com"
                        inputProps={{ 'aria-label': 'search' }}
                        />
                <Button
                    variant="outlined"
                    size="small"
                    color="primary"
                >
                    Subscribe
                </Button>
                
                
            </Grid>
        </Grid>
    )
}
