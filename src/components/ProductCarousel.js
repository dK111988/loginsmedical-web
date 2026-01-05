import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// MUI Components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles'; 

// Scroll Link
import { Link } from 'react-scroll';

// Images
import limage1 from '../images/Loginslab.png';
import limage2 from '../images/bacteria.png';
import limage3 from '../images/central.png';
import limage4 from '../images/blood.png';
import limage5 from '../images/pcu.png';
import limage6 from '../images/outlab.png';
import limage7 from '../images/queue.png';
import limage8 from '../images/edoc.png';
import limage9 from '../images/risk.png';
import limage10 from '../images/healthConnect.png';
import limage11 from '../images/qc.png';
import limage12 from '../images/invplus.png';

// --- Data Array ---
const products = [
    { id: 1, img: limage1, title: 'Logins Lab', linkTo: 'about' },
    { id: 2, img: limage2, title: 'Logins Bacteria', linkTo: 'rec-product' },
    { id: 3, img: limage3, title: 'Central Lab', linkTo: 'rec-product' },
    { id: 4, img: limage4, title: 'Logins Bright', linkTo: 'rec-product' },
    { id: 5, img: limage5, title: 'Logins PCU', linkTo: 'rec-product' },
    { id: 6, img: limage6, title: 'Logins OutLab', linkTo: 'rec-product' },
    { id: 7, img: limage7, title: 'Logins OutLab', linkTo: 'rec-product' },
    { id: 8, img: limage8, title: 'Logins E-Doc', linkTo: 'rec-product' },
    { id: 9, img: limage9, title: 'Logins Risk', linkTo: 'rec-product' },
    { id: 10, img: limage10, title: 'Health Connect', linkTo: 'rec-product' },
    { id: 11, img: limage11, title: 'QC/QC Online', linkTo: 'rec-product' },
    { id: 12, img: limage12, title: 'Inventory Plus', linkTo: 'rec-product' },
];

const ProductCarousel = () => {
    const theme = useTheme();

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000, 
        slidesToShow: 6, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: { slidesToShow: 4, slidesToScroll: 1 }
            },
            {
                breakpoint: 900,
                settings: { slidesToShow: 3, slidesToScroll: 1 }
            },
            {
                breakpoint: 600,
                settings: { 
                    slidesToShow: 2, 
                    slidesToScroll: 1,
                    dots: false 
                }
            },
            {
                breakpoint: 480,
                settings: { 
                    slidesToShow: 2, 
                    slidesToScroll: 1,
                    dots: false 
                } 
            }
        ]
    };

    return (
        <Box 
            component="section" 
            sx={{ 
                width: '100%', 
                py: 6,           
                backgroundColor: '#FAFAFA', 
                overflow: 'hidden' 
            }}
        >
            <Container maxWidth="xl"> 
                <Box sx={{
                    "& .slick-dots li button:before": {
                        // ✅ ขนาด Dots เล็ก 6px
                        fontSize: "6px", 
                        // ✅ สี Dots ส้ม #F17834
                        color: "#F17834" 
                    },
                    "& .slick-slide": {
                        padding: "0 10px" 
                    }
                }}>
                    <Slider {...settings}>
                        {products.map((item) => (
                            <Box key={item.id} sx={{ textAlign: 'center', py: 2 }}>
                                <CardActionArea 
                                    // ✅ ปิด Click Effect (Ripple Effect)
                                    disableRipple={true}
                                    sx={{ 
                                        borderRadius: 2, 
                                        p: 1,
                                        transition: 'transform 0.2s',
                                        // ✅ กำหนด Hover Effect: ขยายขนาด + ยกเลิกพื้นหลังจางๆ ของ MUI
                                        '&:hover': { 
                                            transform: 'scale(1.05)',
                                            '@media (hover: hover)': {
                                                backgroundColor: 'transparent',
                                            },
                                            '&.Mui-focusVisible': {
                                                backgroundColor: 'transparent',
                                            }
                                        },
                                    }}
                                >
                                    <Link to={item.linkTo} smooth={true} duration={1000} style={{ textDecoration: 'none' }}>
                                        <Box 
                                            sx={{ 
                                                height: 100, 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                mb: 1
                                            }}
                                        >
                                            <CardMedia
                                                component="img"
                                                image={item.img}
                                                alt={item.title}
                                                sx={{
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    objectFit: 'contain',
                                                    width: 'auto'
                                                }}
                                            />
                                        </Box>
                                        <CardContent sx={{ p: 0 }}>
                                            <Typography 
                                                fontFamily='Prompt' 
                                                variant='caption' 
                                                color='#1F233B' 
                                                fontWeight="bold"
                                                sx={{ display: 'block', lineHeight: 1.2 }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
}

export default ProductCarousel;