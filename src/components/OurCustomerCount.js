import React, { useState, useEffect, useRef } from 'react';
import { 
    Box, 
    Typography, 
    Grid, 
    Card, 
    CardMedia, 
    Dialog, 
    DialogContent, 
    IconButton, 
    useTheme, 
    useMediaQuery,
    DialogTitle 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CentralRegion from './CustomerRegion/CentralRegion';
import EasternRegion from './CustomerRegion/EasternRegion';
import NortheasternRegion from './CustomerRegion/NortheasternRegion';
import SouthernRegion from './CustomerRegion/SouthernRegion';
import WesternRegion from './CustomerRegion/WesternRegion'; 
import NorthernRegion from './CustomerRegion/NorthernRegion';
import cimage1 from '../images/image-1.jpg';
import cimage2 from '../images/image-2.jpg';
import cimage3 from '../images/image-3.jpg';
import cimage4 from '../images/image-4.jpg';
import cimage5 from '../images/image-5.jpg';
import cimage6 from '../images/image-6.jpg';

const CounterBox = ({ targetNumber, duration = 2000, label = "ค่าเริ่มต้น", subLabel = "", onClick }) => {
    // ... (Logic นับเลข คงเดิม)
    const finalTarget = Number(targetNumber) || 0;
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const newCount = Math.min(finalTarget, Math.floor((progress / duration) * finalTarget));
            setCount(newCount);
            if (progress < duration) {
                requestAnimationFrame(step);
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    requestAnimationFrame(step);
                    observer.unobserve(counterRef.current);
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, [duration, finalTarget]);

    return (
        <Box
            ref={counterRef}
            onClick={onClick}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
            component="section"
            sx={{
                textAlign: 'center',
                pt: { xs: 8, md: 12 },
                p: 2,
                flexGrow: 1, 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: '#2F365B', 
                color: '#ffffff', 
                cursor: onClick ? 'pointer' : 'default',
                transition: 'background-color 0.3s',
                '&:hover': {
                    backgroundColor: onClick ? '#3e4468' : 'inherit', 
                }
            }}
        >
            <Typography 
                variant="subtitle1" 
                sx={{ 
                    fontFamily: 'Prompt, sans-serif', 
                    color: '#ffffff', 
                    fontWeight: 600, 
                    fontSize: { xs: '1rem', md: '1.1rem' }, 
                    mb: 0.5 
                }}
            >
                {label}
            </Typography>

            {subLabel && (
                <Typography 
                    variant="caption" 
                    sx={{ 
                        fontFamily: 'Prompt, sans-serif', 
                        color: '#cccccc', 
                        fontSize: { xs: '0.75rem', md: '0.85rem' }, 
                        mb: 1 
                    }}
                >
                    {subLabel}
                </Typography>
            )}

            <Typography 
                variant="h3" 
                component="span"
                sx={{ 
                    fontFamily: 'Prompt, sans-serif',
                    color: '#F17834', 
                    fontWeight: 800, 
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                    lineHeight: 1
                }}
            >
                {count.toLocaleString()}
            </Typography>
        </Box>
    );
};
// --------------------------------------------------------------------------

function OurCustomerCount() {

    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState(null);
    const [dialogTitle, setDialogTitle] = useState('');
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenDialog = (regionName, contentComponent) => {
        setDialogTitle(regionName);
        setDialogContent(contentComponent);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setDialogContent(null);
        setDialogTitle('');
    };

    const handleCounterClick = (region, content) => {
        handleOpenDialog(region, content);
    };

    const customerRegions = [
        { name: "ภาคกลาง", count: 44, image: cimage1, component: CentralRegion },
        { name: "ภาคตะวันออก", count: 14, image: cimage2, component: EasternRegion },
        { name: "ภาคตะวันออกเฉียงเหนือ", count: 97, image: cimage3, component: NortheasternRegion },
        { name: "ภาคตะวันตก", count: 7, image: cimage4, component: WesternRegion },
        { name: "ภาคใต้", count: 15, image: cimage5, component: SouthernRegion },
        { name: "ภาคเหนือ", count: 51, image: cimage6, component: NorthernRegion },
    ];

    return (
        <Box
            id='ourcustomer'
            sx={{ 
                p: { xs: '30px 10px', md: '40px 6%' }, 
                textAlign: 'center', 
                backgroundColor: '#ffffff', 
                fontFamily: 'Prompt, sans-serif',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                
            }}
        > 
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
                OUR CUSTOMER
            </Typography>
            
            <Grid 
                container 
                spacing={3} 
                justifyContent="center" 
                alignItems="stretch" 
                sx={{ 
                    width: '100%', 
                    maxWidth: '1400px',
                    position: 'relative', 
                    zIndex: 10,           
                }}
            >
                {customerRegions.map((region, index) => (
                    
                    <Grid item 
                          xs={12}    
                          sm={3}     
                          md={3}     
                          lg={3}     
                          key={region.name}
                          sx={{ 
                            display: 'flex', 
                            flexBasis: { xs: '100%', sm: '25%', md: '25%', lg: '25%' },
                            maxWidth: { xs: '100%', sm: '25%', md: '25%', lg: '25%' },
                          }} 
                    >
                        
                        <Card 
                            elevation={4} 
                            sx={{ 
                                width: '100%', 
                                height: '100%', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                boxSizing: 'border-box',
                                borderRadius: '10px', 
                                overflow: 'hidden', 
                                border: '1px solid #e5e5e5',
                            }}
                        >
                            <Box 
                                sx={{ 
                                    width: '100%',
                                    position: 'relative', 
                                    paddingTop: '75%', 
                                    flex: 'none'
                                }}
                            >
                                <CardMedia 
                                    component="img" 
                                    image={region.image} 
                                    alt={region.name} 
                                    sx={{ 
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </Box>
                            
                            <CounterBox
                                targetNumber={region.count}
                                label={region.name}
                                subLabel="จำนวนโรงพยาบาลที่ติดตั้งระบบ"
                                onClick={() => handleCounterClick(region.name, <region.component />)}
                            />
                            
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="md"
                fullWidth={true}
            >
                <DialogTitle 
                    id="responsive-dialog-title"
                    sx={{ 
                        fontFamily: 'Prompt, sans-serif', 
                        fontWeight: 600, 
                        color: '#2F365B' 
                    }}
                >
                    {dialogTitle ? `รายละเอียดลูกค้า: ${dialogTitle}` : 'รายละเอียดเพิ่มเติม'}
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    {dialogContent}
                </DialogContent>
            </Dialog>
        </Box>
    );
}

export default OurCustomerCount;