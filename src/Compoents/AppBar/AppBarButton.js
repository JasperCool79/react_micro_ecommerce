import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';

export default function AppBarButton() {
    return (
        <>
            <span style={{ color: 'gray' }}>|</span>
            <Link to="faq" style={{textDecoration: 'none'}}><Button color="primary">Help&FAQs</Button></Link>
            <span style={{ color: 'gray' }}>|</span>
            <Link to="login" style={{textDecoration: 'none'}}><Button color="primary">Login</Button></Link>
            <span style={{ color: 'gray' }}>|</span>
            <Link to="register" style={{textDecoration: 'none'}}><Button color="primary">Register</Button></Link>
            <span style={{ color: 'gray' }}>|</span>
        </>
    )
}
