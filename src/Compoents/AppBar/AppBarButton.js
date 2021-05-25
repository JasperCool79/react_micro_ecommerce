import React from 'react'
import Button from '@material-ui/core/Button';

export default function AppBarButton() {
    return (
        <>
            <span style={{ color: 'gray' }}>|</span>
            <Button color="primary">Help&FAQs</Button>
            <span style={{ color: 'gray' }}>|</span>
            <Button color="primary">Login</Button>
            <span style={{ color: 'gray' }}>|</span>
            <Button color="primary">Register</Button>
            <span style={{ color: 'gray' }}>|</span>
        </>
    )
}
