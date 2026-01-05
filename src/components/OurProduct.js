import React, { useState } from 'react';

// --- 1. Import Images (ตรวจสอบ Path และชื่อไฟล์เหล่านี้) ---
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

// --- 2. Import Material UI Components ---
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
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent'; 
import Grid from '@mui/material/Grid'; 

// --- 3. Import Product Detail Components (ตรวจสอบ Path และชื่อไฟล์เหล่านี้) ---
import LoginsLab from '../components/ProductsDetail/LoginsLab';
import LoginsBacteria from '../components/ProductsDetail/LoginsBacteria';
import LoginsCentralLab from '../components/ProductsDetail/LoginsCentralLab';
import LoginsBright from '../components/ProductsDetail/LoginsBright';
import LoginsPCU from '../components/ProductsDetail/LoginsPCU';
import LoginsOutlab from '../components/ProductsDetail/LoginsOutlab';
import LoginsRisk from '../components/ProductsDetail/LoginsRisk';
import HealthConnect from '../components/ProductsDetail/HealthConnect';
import LoginsQC from '../components/ProductsDetail/LoginsQC';
import LoginsQueue from '../components/ProductsDetail/LoginsQueue';
import LoginseDoc from '../components/ProductsDetail/LoginseDoc';
import LoginsInv from '../components/ProductsDetail/LoginsInv';


// --- 4. Product Data Array (ข้อมูลผลิตภัณฑ์) ---
const productList = [
    {
        image: limage1,
        title: 'LogInS LAB',
        description: 'ระบบจัดการและบริหารห้องปฎิบัติการงานพยาธิสำหรับ "โรงพยาบาล" ขนาดเล็กและขนาดใหญ่ สามารถรองรับการทำงานได้ทุกรูปแบบของห้องปฎิบัติการ และมีความยืดหยุ่นสูงต่อผู้ใช้งาน',
        component: LoginsLab,
    },
    {
        image: limage2,
        title: 'LogInS Bacteria',
        description: 'ระบบบริหารจัดการงานจุลชีววิทยา การตรวจรับสิ่งส่งตรวจ การลงผล Preliminary Report, Additional Report, Final Report การลงข้อมูล Organism & Sensitivity',
        component: LoginsBacteria,
    },
    {
        image: limage3,
        title: 'LogInS Central LAB',
        description: 'ระบบจัดการและบริหารห้องปฎิบัติการงานพยาธิสำหรับ "ศูนย์แล็ป" ขนาดเล็กและขนาดใหญ่ สามารถรองรับการทำงานได้ทุกรูปแบบและมีความยืดหยุ่นสูงต่อผู้ใช้งาน รวมระบบงานเกี่ยวข้องไว้ครบครัน',
        component: LoginsCentralLab,
    },
    {
        image: limage4,
        title: 'LogInS Bright',
        description: 'ระบบบริหารคลังโลหิต เป็นระบบช่วยในการจัดการงานบริหารในส่วนการลงข้อมูล ผู้บริจาคโลหิต การจองโลหิต การเบิกโลหิต การจ่ายโลหิต ซึ่งง่ายต่อการตรวจสอบและการใช้งาน',
        component: LoginsBright,
    },
    {
        image: limage5,
        title: 'LogInS PCU',
        description: 'ระบบ LogInS PCU ระบบที่จะช่วยอำนวยความสะดวกในการดูผลคนไข้อ Online ระหว่าง รพ. กับ รพ.สต. เพิ่่มความสะดวกและความถูกต้องของข้อมูล',
        component: LoginsPCU,
    },
    {
        image: limage6,
        title: 'LogInS Out LAB',
        description: 'ระบบการดูผลการตรวจ Out LAB สามารถ Online และส่งผลตรวจผ่านระบบได้อย่างถูกต้องและแม่นยำซึ่งสามารถส่งผลในรูปแบบเอกสารหรือรูปภาพได้',
        component: LoginsOutlab,
    },
    {
        image: limage7,
        title: 'LogInS Queue',
        description: 'LogInS Queue ระบบคิวสำหรับห้องปฏิบัติการ เป็นระบบที่มาช่วยในเรื่องการจัดลำดับการใช้บริการผู้ป่วยของห้องปฏิบัติการให้มีความสะดวกมากขึ้น',
        component: LoginsQueue,
    },
    {
        image: limage8,
        title: 'LogInS E-Doc',
        description: 'ระบบจัดเก็บและรวบรวมเอกสาร จัดหมวดหมู่ตามแบบตรวจประเมินระบบคุณภาพมาตรฐานงานเทคนิดการแพทย์ เรียกดู เพิ่ม แก้ไข และไฟล์เอกสารต่างๆ ได้',
        component: LoginseDoc,
    },
    {
        image: limage9,
        title: 'LogInS Risk Management',
        description: 'ระบบการบันทึกการควบคุมสิ่งที่ไม่สอดคล้องกับข้อกำหนด การระบุหัวข้อความเสี่ยง เลขอุบัติการณ์ หรือขั้นตอนไปจนถึงการระบุโปรแกรมความเสี่ยง',
        component: LoginsRisk,
    },
    {
        image: limage10,
        title: 'LogInS Health Connect',
        description: 'ระบบปงานตรวจสถขภาพที่รองรับการเชื่อต่อกับระบบ HIS ของโรงพยาบาล สามารถใช้ง่ายร่วมกับระบบห้องปฎิบัติการส่วนของสิ่งส่งตรวจและการดูผลตรวจและการออกรายงาน',
        component: HealthConnect,
    },
    {
        image: limage11,
        title: 'LogInS QC/ QC Online',
        description: 'เก็บรวบรวมข้อมูลคุณภาพของเครื่องตรวจวิเคราะห์แสดงกฎตาม Westgard Multirule และมีระบบคำนวณ Lab Mean กับ Lab SD สามารถลงข้อมูลผลและแปลผล IQC ได้',
        component: LoginsQC,
    },
    {
        image: limage12,
        title: 'LogInS Inv', 
        description: 'ระบบควบคุมจัดการวัสดุคงคลังและครุภัณฑ์ในห้องปฏิบัติการและศูนย์แล็ป',
        component: LoginsInv,
    },
];


const OurProduct = () => {
    const [open, setOpen] = useState(false);
    const [dialogContent, setDialogContent] = useState(null); 
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpenDialog = (Component) => {
        setDialogContent(<Component />);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box id='rec-product' sx={{ 
            // **RESPONSIVE FIX:** ปรับ Padding ตามขนาดหน้าจอ
            p: { xs: '30px 10px', md: '40px 6%' }, 
            textAlign: 'center', 
            backgroundColor: '#ffffff',
            width: '100%',
            fontFamily: 'Prompt, sans-serif', 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: 'auto', 
        }}> 
            
            {/* --- ส่วนหัวข้อ: ลบ Subtitle และปรับ Responsive Title --- */}
            <Typography variant="h2" component="h1" 
                sx={{ 
                    // **RESPONSIVE FIX:** กำหนด Margin Bottom 5 และ Font Size 
                    mb: 5, 
                    fontWeight: 800, 
                    color: '#2F365B',
                    textTransform: 'uppercase',
                    // **RESPONSIVE FIX:** ปรับขนาด Font ให้เล็กลงในหน้าจอ Mobile/Tablet
                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
                    fontFamily: 'Prompt, sans-serif',
                }}
            >
                OUR PRODUCTS
            </Typography>
            {/* -------------------------------------------------------- */}
            
            {/* Grid Container: **alignItems="stretch"** บังคับความสูงเท่ากัน */}
            <Grid container spacing={4} justifyContent="center" alignItems="stretch" sx={{ width: '100%', maxWidth: '1400px' }}> 
                {productList.map((product, index) => (
                    
                    // Grid Item: **HARD FIX** และ Responsive Breakpoints
                    <Grid item 
                          xs={12}    
                          sm={6}     // 2 คอลัมน์บนจอ Tablet
                          md={3}     // 4 คอลัมน์บนจอ Desktop
                          lg={3}     
                          key={product.title}
                          sx={{ 
                            display: 'flex', 
                            // **HARD FIX** เพื่อป้องกัน 4 คอลัมน์ล้ม
                            flexBasis: { xs: '100%', sm: '50%', md: '25%' },
                            maxWidth: { xs: '100%', sm: '50%', md: '25%' },
                          }} 
                    >
                        
                        <Card 
                            elevation={3} 
                            sx={{ 
                                width: '100%', 
                                height: '100%', 
                                display: 'flex', 
                                flexDirection: 'column', 
                                boxSizing: 'border-box',
                                borderRadius: '10px', 
                                backgroundColor: '#ffffff', 
                                border: '1px solid #e5e5e5', 
                                cursor: 'pointer', 
                                transition: 'transform 0.3s, box-shadow 0.3s, border 0.3s',
                                '&:hover': {
                                    boxShadow: '2px 2px 12px rgba(255, 195, 54, 0.411)',
                                    border: '1px solid #F17834', 
                                    transform: 'translateY(-5px)', 
                                }
                            }}
                        >
                            {/* Card Media (รูปภาพ) */}
                            <Box sx={{ 
                                // **RESPONSIVE FIX:** ลด Padding บนจอเล็ก 
                                p: { xs: 1.5, md: 2 }, pt: { xs: 3, md: 4 }, 
                                display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 'none', 
                            }}>
                                <CardMedia
                                    component="img"
                                    sx={{ 
                                        objectFit: 'contain', 
                                        // **RESPONSIVE FIX:** ลดขนาดรูปภาพบนจอเล็ก
                                        height: { xs: 70, md: 90 }, 
                                        width: { xs: 70, md: 90 } 
                                    }}
                                    image={product.image}
                                    alt={product.title}
                                />
                            </Box>
                            
                            {/* Card Content: **flexGrow: 1** เพื่อยืดพื้นที่ตรงกลาง */}
                            <CardContent sx={{ 
                                p: 2, pt: 1, textAlign: 'center',
                                display: 'flex', flexDirection: 'column',
                                flexGrow: 1, 
                                minHeight: 0, 
                                minWidth: 0, 
                            }}>
                                <Typography 
                                    component="div"
                                    sx={{ 
                                        flex: 'none', 
                                        overflowWrap: 'break-word', 
                                        wordBreak: 'break-word', 
                                        color: '#F17834', 
                                        fontWeight: '600', 
                                        // **RESPONSIVE FIX:** ลดขนาด Font Title บนจอเล็ก
                                        fontSize: { xs: '1.1rem', md: '1.25rem' }, 
                                        mb: 1, 
                                    }} 
                                >
                                    {product.title}
                                </Typography>
                                
                                <Typography 
                                    fontFamily='Prompt' 
                                    fontWeight='300' 
                                    // **RESPONSIVE FIX:** ลดขนาด Font Description บนจอเล็ก
                                    fontSize={{ xs: '13px', md: '14px' }}
                                    color='#4a4a4a'
                                    sx={{ 
                                        flexGrow: 1, 
                                        lineHeight: 1.5,
                                        mb: 2, 
                                        display: '-webkit-box', 
                                        WebkitLineClamp: 5, 
                                        WebkitBoxOrient: 'vertical', 
                                        overflow: 'hidden', 
                                        textOverflow: 'ellipsis',
                                        overflowWrap: 'break-word', 
                                        wordBreak: 'break-word',
                                    }} 
                                >
                                    {product.description}
                                </Typography>
                            </CardContent>
                            
                            {/* Card Actions (ปุ่ม): **mt: 'auto'** (Sticky Footer) */}
                            <Box sx={{ p: 2, pt: 0, textAlign: 'center', mt: 'auto', flex: 'none' }}>
                                <Button 
                                    variant="outlined" 
                                    onClick={() => handleOpenDialog(product.component)} 
                                    sx={{ 
                                        color: '#F17834', 
                                        borderColor: '#F17834',
                                        '&:hover': {
                                            borderColor: '#e06520',
                                            backgroundColor: '#fef3ec', 
                                        },
                                        fontWeight: 600,
                                        // **RESPONSIVE FIX:** ลดขนาด Font ปุ่มบนจอเล็ก
                                        fontSize: { xs: '12px', md: '13px' },
                                        padding: '6px 16px'
                                    }}
                                >
                                    OPEN MORE DETAIL
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            
            {/* Dialog Component (Modal สำหรับแสดงรายละเอียด) */}
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

        </Box>
    );
};

export default OurProduct;