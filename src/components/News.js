import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import LoginsNewsComponent from './News/LoginsNews';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import newsimage1 from '../images/news/news1.jpg';



// --- STYLED COMPONENTS ---
const VideoWrapper = styled(Box)(({ theme }) => ({
    position: 'relative',
    paddingTop: '56.25%',
    borderRadius: theme.shape.borderRadius * 4,
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
    backgroundColor: '#000',
    marginBottom: theme.spacing(8),
    '& iframe': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        border: 0,
    }
}));
const LightCard = styled(Card)(({ theme }) => ({
    height: '100%',
    borderRadius: theme.shape.borderRadius * 4,
    boxShadow: 'none',
    background: 'linear-gradient(135deg, #e6e9f5 0%, #d8def2 100%)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(4, 5),
    minHeight: '350px',
    [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(15),
    }
}));
const DarkCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius * 4,
    boxShadow: 'none',
    backgroundColor: '#2a2a3c',
    color: '#fff',
    padding: theme.spacing(4, 5),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: '180px',
    height: '100%',
}));

// Style for Box/Grid Item
const ContentBox = styled(Box)(({ theme }) => ({
    minHeight: '300px',
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

}));

const LeftPanel = styled(ContentBox)(({ theme }) => ({

    color: theme.palette.text.primary,
}));

const RightPanel = styled(ContentBox)(({ theme }) => ({

    color: theme.palette.text.primary,
}));


function News() {
    const youtubeVideoUrl = "https://www.youtube.com/embed/i3tmY2lzoko?si=4aNI61JKeDFVNbsJ";

    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState(null);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenDialog = (Component) => {
        setDialogContent(<LoginsNewsComponent />);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box
            id='news'
            sx={{
                py: 6,
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
                fontFamily: 'Prompt'
            }}>

            <Box sx={{
                px: { xs: 2, sm: 4, md: 6, lg: 8 },
                maxWidth: '1280px',
                margin: '0 auto',
            }}>

                {/* --- 1. GENERAL PAGE HEADER: NEWS | EVENT --- */}
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="h2" component="h1"
                        sx={{
                            mb: 5,
                            fontWeight: 800,
                            color: '#2F365B',
                            textTransform: 'uppercase',
                            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                            fontFamily: 'Prompt, sans-serif',
                            position: 'relative',
                        }}
                    >
                        NEWS | EVENTS
                    </Typography>
                </Box>

                {/* 2. VIDEO SECTION */}
                <VideoWrapper>
                    <iframe
                        src={youtubeVideoUrl}
                        title="Logins Central LAB"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </VideoWrapper>

                <Box sx={{
                    flexGrow: 1,

                    mb: 3,
                    overflow: 'hidden'
                }}>

                    {/* Grid container: columns={16} */}
                    <Grid container spacing={2} columns={16}>
                        <Grid item xs={16} md={8}>
                            <LeftPanel>
                                <Typography
                                    gutterBottom
                                    variant="h3"
                                    component="h2"
                                    sx={{
                                      
                                        color: '#1F233B',
                                        fontFamily: "'Prompt', sans-serif",
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2rem', md: '3rem' },
                                        position: 'relative',
                                        zIndex: 1,
                                    }}
                                >
                                    All News and Event
                                </Typography>

                                {/* ปุ่มที่เปิด Dialog */}
                                <Button
                                    variant="contained" fontFamily='prompt'
                                    onClick={handleOpenDialog} // Linked to Dialog handler
                                    sx={{
                                        mt: 2,
                                        width: 'fit-content',
                                        backgroundColor: '#F17834',
                                        borderRadius: theme.shape.borderRadius,
                                        '&:hover': {
                                            backgroundColor: '#1F233B',
                                            borderRadius: theme.shape.borderRadius,
                                        }
                                    }}
                                >
                                    Open More News and Event
                                </Button>
                            </LeftPanel>
                        </Grid>
                        <Grid size={{ xs: 12, md: 5, lg: 8 }}>
                            <RightPanel>
                                <Typography gutterBottom fontFamily='prompt' variant="body1" sx={{ fontSize: '1.2rem', lineHeight: 1.8, position: 'relative', }}>
                                    ร่วบรวมกิจกรรมและข่าวสารสำหรับท่านสมาชิกและเจ้าหน้าที่ ที่เข้ามาเยี่ยมชมเว็บไซต์
                                    พร้อมทั้งสามารถดาวน์โหลดเอกสารนำเสนอระบบทั้งหมดของบริษัทและขอเข้านำเสนอระบบ
                                </Typography>
                            </RightPanel>
                        </Grid>
                    </Grid>
                </Box>

                {/* --- 4. CARDS SECTION --- */}

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>

                        <Grid size={{ xs: 12, md: 5, lg: 6 }}>
                            <CardMedia
                                component="img"
                                height="100%"
                                image={newsimage1}
                                alt="CompanyProfile"
                                sx={(theme) => ({
                                    borderRadius: theme.shape.borderRadius,
                                    boxShadow: theme.shadows[2],
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: { xs: 250, sm: 350 },
                                    objectFit: 'cover',
                                    position: 'relative',
                                })}
                            />
                        </Grid>

                        <Grid size={{ xs: 12, md: 5, lg: 3 }}>
                            <Card sx={{
                                minHeight: { xs: 'auto', md: '300px' },
                                padding: (theme) => theme.spacing(4),
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: '100%',
                                borderRadius: theme.shape.borderRadius,
                                boxShadow: theme.shadows[2],
                                backgroundColor: '#1F233B',
                                position: 'relative',
                            }}>
                                <CardContent>
                                    <Typography fontFamily='Prompt, sans-serif' variant="h5" sx={{ fontSize: '1.6rem', lineHeight: 1.8, color: '#FFF' }}>
                                        to Future
                                    </Typography>
                                    <Typography fontFamily='Prompt, sans-serif' variant="body2" sx={{ color: '#999999' }}>
                                        บริษัท logins medical และกลุ่มบริษัทในเครือ BTL ก้าวเข้าสู่ ปีที่ 30 ของการก้าวเข้าในส่วนของระบบจัดการห้องปฎิบัติการ และเรายังพัฒนาก้าวต่อไปยังไม่หยุดยั้ง และระบบ Ai ที่เข้าลังเข้ามา
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid size={{ xs: 12, md: 5, lg: 3 }}>
                            <Card sx={{// Min height for larger screens
                                padding: (theme) => theme.spacing(4),
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                height: '100%',
                                borderRadius: theme.shape.borderRadius,
                                boxShadow: theme.shadows[2],
                                backgroundColor: '#1F233B',
                                position: 'relative',
                            }}>
                                <CardContent>
                                    <Typography fontFamily='Prompt, sans-serif' variant="h5" sx={{ fontSize: '1.6rem', lineHeight: 1.8, color: '#FFF' }}>
                                        BOSS
                                    </Typography>
                                    <Typography fontFamily='Prompt, sans-serif' variant="body2" sx={{ color: '#999999' }}>
                                        คุณสุทัศน์ Boss ของเรากล่าวในงานไว้ว่า "โลกทุกวันนี้มันไปเร็วมากข้อมูลสารสนเทศเป็นสิ่งทีี่ต้องการความถูกต้องแม่นยำและรวดเร็ว ก้าวต่อไปของเรา คือ Ai เราจะได้เห็นการจัดการข้อมูลพวกนี้ด้วย Ai เร็วๆนี้"
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

            </Box> {/* End of Max-width Box */}


            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{ '& .MuiDialog-paper': { minWidth: { md: '60%', lg: '70%', xl: '70%' }, minHeight: '90%' } }}
            >
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        zIndex: 10,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent dividers>
                    {dialogContent}
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

        </Box >
    );
}

export default News;