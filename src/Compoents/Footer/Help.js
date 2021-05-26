import React from 'react'
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
                    variant="subtitle2"
                    gutterBottom
                    style={{ color: 'blue', paddingTop: 3, paddingBottom: 3 }}
                >
                    FAQs
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    style={{ color: 'blue', paddingTop: 3, paddingBottom: 3 }}
                >
                    Track Order
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    style={{ color: 'blue', paddingTop: 3, paddingBottom: 3 }}
                >
                    Find Product Code
                </Typography>
                <Typography
                    variant="subtitle2"
                    gutterBottom
                    style={{ color: 'blue', paddingTop: 3, paddingBottom: 3 }}
                >
                    Return Policy
                </Typography>
            </Grid>
        </Grid>
    )
}
