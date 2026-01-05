import React from 'react';
import limage1 from '../../images/p-loginsCentralLab/centrallab-cover.jpg';
import iimage1 from '../../images/p-loginsCentralLab/centrallab-i1.png';
import iimage2 from '../../images/p-loginsCentralLab/centrallab-i2.png';
import iimage3 from '../../images/p-loginsCentralLab/centrallab-i3.png';
import iimage4 from '../../images/p-loginsCentralLab/centrallab-i4.png';
import iimage5 from '../../images/p-loginsCentralLab/centrallab-i5.png';
import iimage6 from '../../images/p-loginsCentralLab/centrallab-i6.png';
import iimage7 from '../../images/p-loginsCentralLab/centrallab-i7.png';
import iimage8 from '../../images/p-loginsCentralLab/centrallab-i8.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

const CentralLab = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS CENTRAL LAB</h1>
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
                                    src="https://www.youtube.com/embed/i3tmY2lzoko?si=xsGYJvsjoS8ueTBk"
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
                            (ระบบบริหารงานห้องปฎิบัติการศูนย์ LAB)
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            เป็นการสร้างระบบการใช้งานห้องปฎิบัติการสำหรับ ศูนย์แล็ป ทั้งขนาดเล็กและขนาดใหญ่ โดยร่วมรวมระบบต่างๆไว้อย่างครบถ้วน ทั้งส่วนของการจัดการ ข้อมูลคนไข้ จัดการ Speciment
                            การเชื่อต่อกับเครื่องตรวจวิเคราะห์ในงานต่างๆ การรายงานผล การส่งผลไปยังสถานบริการอื่นๆ อีกทั้งยังผนวกงานส่วนของ จุลชีววิทยาเข้ามาเพื่อให้ครอบคุมในงานบริการในงานห้องปฎิบัติการอีกด้วย
                            โดยความยืดหยุ่นของระบบยังเป็นหัวใจสำคัยและเป็นอัตลักษณ์ของระบบ
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
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                ระบบบริหารงานห้องปฎิบัติการศูนย์ LAB สามารถจัดหมวดการทำงานออกเป็น 3 ส่วนหลักๆ โดยส่วนแรกเป็นงานบริหารงานส่วนของห้องปฎิบัติการ LAB ทั่วไป และส่วนที่ 2
                                เป็นส่วนของ งานจุลชีววิทยา หรืองาน Bacteria นั่นเอง และส่วนสุดท้ายจะเป็นส่วนของงานส่วนของการจัดการค่าบริการห้องปฎิบัตการ การสร้าง Package ราคา
                                หรือราคาของการตรวจต่างๆ โดยจำแนกฟังก์ชั่นการทำงานของระบบได้คร่าวๆ ดังนี้

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
                                    1. ระบบจัดการข้อมูลพื้นฐาน
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบสามารถจัดการข้อมูลพื้นฐานได้อย่างอิสระให้สอดคล้องการทำงานของเจ้าหน้าที่ของแต่ละหน่วยงานซึ่งมีความยืดหยุ่นสูง จึงสามารถรองรับศูนย์ LAB ขนาดใหญ่ได้
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
                                    2. ระบบจัดการข้อมูลพื้นฐาน
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบรองรับการลงทะเบียนคนไข้ ซึ่งสามารถเก็บเป็นประวัติของคนไข้และสามารถเรียกดูข้อมูลประวัติการรักษาย้อนหลังได้ มีความจำเป็นต่อการเข้ารับบริการของคนไข้ในห้องปฎิบัติการ
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
                                    3. ระบบห้องตรวจ LAB
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบสามารถรองรับงานห้องปฎิบัติการได้อย่างครบถ้วน การลงรับสิ่งส่งตรวจ การออก Barcode การลงผล การรายงานผล รวมถึงการออกเอกสารแบบฟอร์มการรายงานผล
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
                                    4. ระบบงานจุลชีววิทยา
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบสามารถเรียกรายการตรวจ ข้อมูล และประวัติการตรวจ ไปจนถึงการลงผลการตรวจ หรือ การลง Final Report สามารถเรียกดูรายงาน และสรุปสถิติ
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
                                    5. ระบบงานตรวจสุขภาพ
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบตั้งค่าการตรวจ รายการตรวจ สรุปผลตรวจ กำหนดราคาชุดตรวจ การลงผลและแปลผล และออกเล่มสรุปผล การตรวจสุขภาพได้อย่างสวยงาม
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
                                    6. ระบบงานบัญชี
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    สามารถรวบรวมระบบเกี่ยวกับเอกสารต่างๆ ทางบัญชีไว้ครบถ้วน สามารถแยกประเภทการชำระ สรุปยอดค่าบริการ การตั้งราคาย้อนหลัง รวมถึงการเรียกดูข้อมูลทางบัญชีย้อนหลัง
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
                                    7. ระบบการดูผลตรวจออนไลน์
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบสามารถออนไลน์ข้อมูลผลการตจรวจให้คนไข้หรือผู้ที่เกี่ยวข้อมสามารถเห็นผลการตรวจหรือประวัติได้ โดยมีการจัดการการเข้าถึงข้อมูลด้วยสิทธิ์ของแต่ละบุคคล
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
                                    8. Output Interface 
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบเชื่อมต่อการรับส่งข้อมูลภายนอก (Interface) ไม่ว่าจะเป็นส่วนของรายการส่งตรวจหรือผลตรวจระบบสามารถเรียกข้อมูล ส่งออก-นำเข้า เพื่อจัดการภายในได้
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </Grid>
        </div>
    )
}

export default CentralLab