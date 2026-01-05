import React from 'react';
import limage1 from '../../images/p-healthconnect/healthconnect-cover.jpg';
import iimage1 from '../../images/p-healthconnect/p-1.png';
import iimage2 from '../../images/p-healthconnect/p-2.png';
import iimage3 from '../../images/p-healthconnect/p-3.png';
import iimage4 from '../../images/p-healthconnect/p-4.png';
import iimage5 from '../../images/p-healthconnect/p-5.png';
import iimage6 from '../../images/p-healthconnect/p-6.png';
import iimage7 from '../../images/p-healthconnect/p-7.png';
import iimage8 from '../../images/p-healthconnect/p-8.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

const HealthConnect = () => {
  return (
        <div id='product-detail'>
            <h1> LOGINS HEALTH CONNECT</h1>
            <Grid container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                 {/* กำหนด maxWidth ให้ Box ที่ครอบ Card เพื่อควบคุมขนาดสูงสุดของวิดีโอ */}
                <Box sx={{
                    maxWidth: 800, // กำหนดความกว้างสูงสุดที่เหมาะสม เช่น 800px หรือตามที่คุณต้องการ
                    width: '100%',  // ให้ Box กว้างเต็มพื้นที่เท่าที่จะทำได้
                    borderRadius: 1,
                    bgcolor: ''
                }}>
                    <Card sx={{ m: 0 }}> {/* ปรับ margin ของ Card เป็น 0 หรือตามต้องการ */}
                        <CardActionArea>
                            <Box sx={{
                                position: 'relative',
                                width: '100%',
                                paddingBottom: '56.25%', // 16:9 aspect ratio
                                height: 0,
                                overflow: 'hidden',
                            }}>
                                <iframe
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 0,
                                    }}
                                    src="https://www.youtube.com/embed/QuMzMOBcJ80?si=PFETkmIEDot0aoFX"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                >
                                </iframe>
                            </Box>
                        </CardActionArea>
                    </Card>
                </Box>
                <Box sx={{

                    maxWidth: 800,
                    borderRadius: 1,
                    bgcolor: ''
                }}>
                    <CardContent>
                        <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                            (ระบบงานตรวจสุขภาพ HIS Link)
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            ระบบงานที่ร่วบรวมงานตรวจสุขภาพ การคัดกรอง การสั่งรายการตรวจ การตรวจรับสิ่งส่งตรวจจนถึงการออกผลตรวจทางห้องปฎิบัติการ ที่รองรับการเชื่อมต่อข้อมูลจากระบบ HIS ของโรงพยาบาลเป็นหลัก
                            เป็นการสั่งรายการตรวจต่างจากระบบ HIS Link to LIS ซึ่งแยกออกจากการทำงานห้องปฎิบัติการแื่นๆของโรงพยาบาล
                        </Typography>
                    </CardContent>
                </Box>
            </Grid>

            <Grid container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box sx={{
                    maxWidth: '800',
                    borderRadius: 1,
                    bgcolor: ''
                }}
                >
                    <CardContent>
                        <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                            ฟังก์ชั่นและความสามารถเด่น
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            ระบบสามารถเชื่อมต่อกับระบบของ HIS การดึงประวัติการเชื่อรายการสั่งตรวจ มีระบบที่สามารถตรวจสอบหรือดูประวัติการตรวจของคนไข้ได้ 
                            ทั้งนี้ระบบยังสามารถออกรูปเล่มตรวจสุขภาพได้ซึ่งสามารถออกแบบในรูปแบบตามความต้องการของทางศูนย์ตรวจ หรือของโรงพยาบาลได้
                        </Typography>
                    </CardContent>
                </Box>
            </Grid>
            <Grid container
                direction="row"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',

                }}
            >
                <div className='product-detail-box'>
                    <Card sx={{ m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={iimage1}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    1. ระบบจัดการข้อมูล
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบนำเข้าข้อมูลต่างๆจากระบบ HIS เช่น ข้อมูลคนไข้ ข้อมูลคัดกรอง ข้อมูลการตรวจร่างกาย LAB X-RAY เป็นต้น
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>
                <div className='product-detail-box'>
                    <Card sx={{ m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={iimage2}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    2. ระบบสิ่งตรวจ
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    การพิมพ์ Barcode แยกตามการตรวจ / แยกตามสิ่งส่งตรวจ รองรับการออกแบบ Barcode ให้เข้ากับระบบ LIS
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>
                <div className='product-detail-box'>
                    <Card sx={{ m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={iimage3}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    3. ระบบ Check-In
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบ Check-In ระบบรองรับการเข้าจุดตรวจ ด้วยการยิง Barcode สิ่งส่งตรวจเพื่อน Check-in ผ่านสิ่งส่งตรวจได้
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                                <div className='product-detail-box'>
                    <Card sx={{ m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={iimage4}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    4. ระบบบันทึกผลการตรวจ
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                   ระบบรองรับการบันทึกผลการตรวจได้ ทัั้งเครื่องและการลงผลจากการ Key in และผลการตรวจที่เป็นรูปภาพหรือผลตรวจ X-Ray
                                   </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                                <div className='product-detail-box'>
                    <Card sx={{ m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={iimage5}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    5. ระบบนำเข้าผลการตรวจ
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบรองรับการนำเข้าผลตรวจด้วย Excel ด้วย Template ที่สร้างจากระบบสามารถนำเข้าผลครั้้งละหลายๆรายการได้ 
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                                <div className='product-detail-box'>
                    <Card sx={{ m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={iimage6}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    6. ระบบแปลผลตรวจ
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบสามารถแปลผลการตรวจอัตโนมัติได้ ด้วยการตัั้งค่าผลตรวจเชื่อโยงกับค่าการตรวจของห้องปฎิบัติการ พร้อมคำแนะนำแพทย์
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                                <div className='product-detail-box'>
                    <Card sx={{ m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={iimage7}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    7. สมุดตรวจสุขภาพ
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบสามารถสร้างรูปเล่มการตรวจสุขภาพ และยังสามารถออกแบบรูปเล่มได้ตามความต้องการหรือตามรูปแบบของหน่วยงานทีี่ใช้งานได้อีกด้วย
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                                <div className='product-detail-box'>
                    <Card sx={{ m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={iimage8}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    8. ระบบ Report
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบสามารถออกรายงานหรือสถิติต่างๆ ที่เป็นผลจากระบบได้ แและยังสามารถออกแบบรายงานตามความต้องการของหน่วยงานได้
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                
            </Grid>
        </div>
    )
}


export default HealthConnect;