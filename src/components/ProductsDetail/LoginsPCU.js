import React from 'react';
import limage1 from '../../images/p-pcu/pcu-cover.jpg';
import iimage1 from '../../images/p-pcu/ico_01.png';
import iimage2 from '../../images/p-pcu/ico_02.png';
import iimage3 from '../../images/p-pcu/ico_03.png';
import iimage4 from '../../images/p-pcu/ico_04.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
const LoginsPCU = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS PCU</h1>
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
                                    src="https://www.youtube.com/embed/esdRRH15oFg?si=L96ACSLaG6-VW2UL"
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
                            (ระบบบริหารงานห้องปฎิบัติการโรงพยาบาลส่งเสริมตำบล)
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                            ระบบ LogInS PCU เป็นระบบที่พัฒนาขึ้นเพื่อช่วยอำนวยความสะดวกในเส่วนของการสั่งรายการตรวจ LAB และการดูผลคนไข้ Online ระหว่างโรงพยาบาลกับโรงพยาบาลส่งเสริมสุขภาพตำบล
                            เพื่ออำนวยความสะดวกในการทำงาน ซึ่งทำให้รายการสั่งตรวจและผลของการตรวจที่ส่งผ่านระบบมีความผิดพลาดน้อยและมีความถูกต้องของข้อมูลมากขึ้้นด้วยการเชื่อมต่อกันด้วยระบบนี้ทั้งรายการตรวจและผลการตรวจ
                            ถูกผูกกับชื่อผู้ป่วยทำให้ไม่เกิดความผิดพลาดในการส่งรายการตรวจและผล นอกจากนี้้โรงพยาบาลส่งเสริมยังสามารถที่จะพิมพ์รายการตรวจหรือผลตรวจออกมาได้ และยังเข้าถึงประวัติการเข้ารับบริการของคนไข้ย้อนหลังได้

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
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                                ฟังก์ชั่นและความสามารถเด่น
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                ระบบบริหารงานห้องปฎิบัติการโรงพยาบาลส่งเสริมตำบลมีความโดดเด่นด้วยฟังก์ชั่นการเชื่อมต่อแบบสมฐูรณ์กับระบบLogins LAB สามารถจัดการเกี่ยวกับรายการตรวจ
                                จัดการเกี่ยวกับผลตรวจที่สามารถดูได้อย่างรวดเร็จจากโรงพยาบาลต้นส่งผลมาแบบ Online และยังสามารถเก็บประวัติคนไข้ และเรียกดูย้อนหลังได้ รวมถึงฟังก์ชั่นการเรียกรายงานก็ยังสามารถ
                                เรียกดูรายงานในรูปแบบที่เจ้าหน้าที่ต้องการได้

                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
            <Grid container
                direction="row"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexWrap: 'wrap',
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
                                    1. ระบบจัดการรายการตรวจ
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                    โรงพยาบาลสงเสริมตำบลสามารถเลือกรายการตรวจและกดส่งรายการตรวจพร้อมพิมพ์ Barcode ที่สามารถใช้งานกับโรงพยาบาลต้นสังกัดได้
                                    สามารถเข้ากับเครื่องตรวจวิเคราะห์ของโรงพยาบาลต้นสังกัดได้
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
                                    2. ระบบผลตรวจ Online
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                    โรงพยาบาลสงเสริมตำบลสามารถดูผลตรวจ Online ได้ เมื่อโรงพยาบาลต้นสังกัด Approve ผล ตัวระบบแจ้งสถานะเตือนส่วนของผลตรวจ ที่ออกแล้วสำหรับรายการตรวจนั้นๆและยังสามารถสั่งปริ้นผล LAB เองได้
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
                                    3. ระบบข้อมูลย้อนหลัง
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                    โรงพยาบาลสงเสริมตำบลสามารถดูผลตรวจของคนไข้แต่ละคนย้อนหลังได้ ด้วยการค้นหาผ่าน ชื่อ-สกุล หรือ HN ของคนไข้ และยังสามารถเรียกดูเป็นรูปแบบของรายงานได้ โดยรูปแบบของรรายงานสามารถออกแบบได้
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
                                    4. ป้องกันการสูญหายของข้อมูล
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                    ช่วยลดขั้นตอนเดินทางเพื่อนำผล LAB กลับมาที่โรงพยาบาลส่งเสริมตำบล สามารถป้องกันการสูญหายและยังสมารถปกป้องข้อมูลผลตรวจของคนไข้ที่เป็นเคสสำคัญๆได้อีกด้วย
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Grid>
        </div>
    )
}


export default LoginsPCU;