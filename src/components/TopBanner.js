import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import bwImage from '../images/news/bw.png';

export default function TopBanner() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return null;
    }

    return (
        <Box
            sx={{
                width: '100%',
                backgroundColor: '#1a1a1a',
                backgroundImage: 'linear-gradient(to bottom, #333333 0%, #1a1a1a 100%)',
                color: '#fff',
                position: 'relative',
                zIndex: 1200,
                py: { xs: 3, md: 3 },
                borderBottom: '1px solid #444',
                boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
            }}
        >
            <Container maxWidth="xl" sx={{ py: 0 }}>
                <Grid
                    container
                    spacing={{ xs: 2, md: 4 }}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        flexDirection: { xs: 'column', md: 'row' }
                    }}
                >
                    <Grid item xs={12} md={5}
                        sx={{
                            textAlign: { xs: 'center', md: 'right' },
                            order: { xs: 2, md: 1 }
                        }}
                    >
                        <Typography
                            variant="h4"
                            fontFamily="Prompt"
                            fontWeight="bold"
                            sx={{
                                letterSpacing: '1px',
                                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '2.125rem' },
                                lineHeight: 1.4,
                                display: 'block' 
                            }}
                        >
                            ธ สถิตในดวงใจไทยตราบนิจนิรันดร์
                        </Typography>
                    </Grid>

                    <Grid item xs={12} md={2}
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            order: { xs: 1, md: 2 },
                            mb: { xs: 1, md: 0 } 
                        }}
                    >
                        <Box
                            component="img"
                            src={bwImage}
                            alt="Center Image"
                            sx={{
                                height: { xs: '120px', md: '140px' },
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} md={5}
                        sx={{
                            textAlign: { xs: 'center', md: 'left' },
                            order: { xs: 3, md: 3 }
                        }}
                    >
                        <Typography
                            variant="body1"
                            fontFamily="Prompt"
                            sx={{
                                opacity: 1,
                                mb: 1,
                                fontWeight: 400,
                                fontSize: { xs: '0.9rem', md: '1rem' },
                                display: 'block'
                            }}
                        >   
                            <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }} />
                            น้อมรำลึกในพระมหากรุณาธิคุณ และร่วมถวายอาลัย <br/> สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ
                            <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }} />
                            พระบรมราชชนนีพันปีหลวง
                        </Typography>
             
                        <Box
                            sx={{
                                width: '50px',
                                height: '1px',
                                backgroundColor: '#fff',
                                mx: 'auto', 
                                my: 1.5,
                                opacity: 0.6,
                                display: { xs: 'block', md: 'none' } 
                            }}
                        />

                        <Typography
                            variant="caption"
                            fontFamily="Prompt"
                            sx={{
                                opacity: 0.7,
                                fontSize: { xs: '0.75rem', md: '0.75rem' },
                                display: 'block',
                                mt: 1
                            }}
                        >
                            ข้าพระพุทธเจ้า คณะกรรมการ ผู้บริหาร และพนักงาน
                            <Box component="span" sx={{ display: { xs: 'block', md: 'inline' } }} />
                            บริษัท ล็อคอินส์ เมดดิคอล จำกัด
                        </Typography>
                    </Grid>

                </Grid>
            </Container>

            <IconButton
                onClick={() => setIsVisible(false)}
                sx={{
                    position: 'absolute',
                    top: 5,
                    right: 5,
                    color: '#fff',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    '&:hover': { backgroundColor: 'rgba(255,255,255,0.2)' },
                    zIndex: 10000
                }}
                size="small"
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Box>
    );
}