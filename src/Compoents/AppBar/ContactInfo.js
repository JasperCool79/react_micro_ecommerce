import React,{useEffect,useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import ChatIcon from '@material-ui/icons/Chat';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { URL } from '../api';

export default function ContactInfo() {
    const [contactInfo, setContactInfo] = useState({});
    useEffect(() => {
        axios.get(`${URL}/contact_info`).then(res => {
            let info = res.data.data;
            setContactInfo(info);
        }).catch(err => console.log(err));
    }, [])
    return (
        <>
            {
                contactInfo.phone && <a href="tel:09441715439" style={{textDecoration: 'none'}}>
                <IconButton size='small' color="primary" aria-label="Phone" style={{background: 'none'}}>
                    <PhoneIcon fontSize='small'/>
                    <Typography variant="button">
                        {contactInfo.phone}
                    </Typography>
                </IconButton>
                </a>
            }
            {
                /* Email Address */
                contactInfo.email && <a href="email:jaspercool.ygn@gmail.com" style={{textDecoration: 'none'}}>
                <IconButton size='small' color="primary" aria-label="Phone" style={{background: 'none'}}>
                    <EmailIcon fontSize='small'/>
                    <Typography variant="button" style={{ textTransform: 'lowercase'}}>
                        &nbsp; {contactInfo.email}
                    </Typography>
                </IconButton>
                </a>
            }
            {
                /* Facebook Page Name */
                contactInfo.facebook_name && <a href="https://facebook.com" style={{textDecoration: 'none'}}>
                <IconButton size='small' color="primary" aria-label="Phone" style={{background: 'none'}}>
                    <FacebookIcon fontSize='small'/>
                    <Typography>
                            &nbsp; {contactInfo.facebook_name}
                    </Typography>
                </IconButton>
                </a>
            }
            {
                // Messenger ID
                contactInfo.messenger_name && <a href="https://facebook.com" style={{textDecoration: 'none'}}>
                <IconButton size='small' color="primary" aria-label="Phone" style={{background: 'none'}}>
                    <ChatIcon fontSize='small'/>
                    <Typography>
                        &nbsp; {contactInfo.messenger_name}
                    </Typography>
                </IconButton>
                </a>
            }
        </>
    )
}
