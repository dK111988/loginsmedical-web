import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-scroll';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import CardContent from '@mui/material/CardContent';

const Footer = () => {
    return (
    
    <div id='footer'>
        <Grid
            container
            direction="row"
            sx={{
                justifyContent: "center",
                alignItems: "center",
                position: 'relative',
            }}
        >
            <Box sx={{
                maxWidth: 1920,
                borderRadius: 1,
                bgcolor: '',
                position: 'relative',
            }}>
                <CardContent>
                    <Grid container spacing={1}>
                        <Box sx={{ my: 2 }}>
                            <Typography gutterBottom fontFamily='prompt' variant='h6' color='white'>
                                Logins Medical Company Limited.
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' variant='content' color='#F17834'>
                                บริษัท ล็อคอินส์ เมดดิคอล จำกัด
                            </Typography>

                            <Typography gutterBottom fontFamily='prompt' variant='caption' color='white'>
                                <ul>
                                    <li>555/139 ม. 1 ซ. มังกร-นาคดี ต. แพรกษาใหม่ อ. เมืองสมุทรปราการ จ. สมุทรปราการ 10280 (สำนักงานใหญ่)</li>
                                    <li>455/39 อาคาร Biz ถ. พัฒนาการ-อ่อนนุช ตัดใหม่ แขวงประเวศ เขตประเวศ กรุงเทพฯ 10250</li>
                                </ul>
                            </Typography>
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <Typography gutterBottom fontFamily='prompt' variant='content' color='#F17834'>Quick Links</Typography>
                            <Typography gutterBottom fontFamily='prompt' variant='caption' color='white'>
                                <ul>
                                    <li><Link to='main' smooth={true} duration={1000}>HOME</Link></li>
                                    <li><Link to='features' smooth={true} duration={1000}>About Us</Link></li>
                                    <li><Link to='presentaion' smooth={true} duration={1000}>New Feature</Link></li>
                                    <li><Link to='about' smooth={true} duration={1000}>Our Product</Link></li>
                                    <li><Link to='news' smooth={true} duration={1000}>NEWS</Link></li>
                                    <li><Link to='ourcustomer' smooth={true} duration={1000}>Our Customer</Link></li>
                                    <li><Link to='ourteams' smooth={true} duration={1000}>Our Teams</Link></li>
                                    <li><Link to='footer' smooth={true} duration={1000}>Contact US</Link></li>

                                </ul>
                            </Typography>
                        </Box>
                        <Box sx={{ my: 2 }}>
                            <Typography gutterBottom fontFamily='prompt' variant='content' color='#F17834'>Contact US</Typography>
                            <Typography gutterBottom fontFamily='prompt' variant='content' color='white'>
                                <ul >
                                    <li><CallIcon fontSize='small' sx={{ my: -0.5, mx: 1.5 }} />02-721-1160, 02-721-1611</li>
                                    <li><PhoneIphoneIcon fontSize='small' sx={{ my: -0.5, mx: 1.5 }} />081 133 4448</li>
                                    <li><MailIcon fontSize='small' sx={{ my: -0.5, mx: 1.5 }} />sale.loginsmedical@gmail.com</li>
                                </ul>
                            </Typography>
                        </Box>
                    </Grid>
                </CardContent>
                <hr color='gray' />
            </Box>
        </Grid>
        <Grid container
            sx={{
                textAlign: 'center',
                justifyContent: 'center',
                m: 1,
            }}>
            <Typography fontFamily='prompt' variant='caption' color='gray' >
                Copyright © 2025 All Rights Reserved Design by Logins Medical
            </Typography>
        </Grid>
    </div>
    )
};

export default Footer;