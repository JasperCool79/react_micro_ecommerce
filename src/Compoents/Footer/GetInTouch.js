import React,{useState} from 'react'
import { Grid, Typography,IconButton } from '@material-ui/core'
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
                Get In Touch
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
                    style={{ color: 'blue', fontSize: 12, paddingTop: 10, paddingBottom: 10 }}
                >
                    Any questions? Let us know us at
                    No.302, Zay Street, Thanlyin Tsp,Yangon,Myanmar!&nbsp;!
                    09-441715439
                </Typography>
                <Grid
                    direction="row"
                    container
                    justify="start"
                    spacing={1}
                    alignItems="flex-start"
                >
                    <IconButton
                        size='small'
                        color="primary"
                        aria-label="Phone"
                        style={{ background: 'none' }}
                    >
                        <FacebookIcon fontSize='small'/>
                    </IconButton>
                    <IconButton
                        size='small'
                        color="primary"
                        aria-label="Phone"
                        style={{ background: 'none' }}
                    >
                        <InstagramIcon fontSize='small'/>
                    </IconButton>
                    <IconButton
                        size='small'
                        color="primary"
                        aria-label="Phone"
                        style={{ background: 'none' }}
                    >
                        <PinterestIcon fontSize='small'/>
                    </IconButton>
                </Grid>
                
            </Grid>
        </Grid>
    )
}
