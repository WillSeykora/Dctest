import { Typography, Link } from '@mui/material';
import React from 'react';

function Footer() {
    return (
        <div>
            <Typography align="center" variant="subtitle2" margin={1}>
                <hr />  
                <Link 
                    href="https://www.linkedin.com/company/direct-campaign/about/"
                    target="_blank" 
                    rel="noreferrer"
                    sx={{ 
                        color: 'white',
                    }}
                >
                    <u> See What We&apos;re Up to on LinkedIn </u>
                </Link> 
                <br></br> 
                &copy; {new Date().getFullYear()} Direct Campaign. All rights reserved.
            </Typography>
        </div>
    )
}

export default Footer;