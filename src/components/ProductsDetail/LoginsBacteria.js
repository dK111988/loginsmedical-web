import React from 'react';
import limage1 from '../../images/p-bacteria/bateria-cover.jpg';
import limage2 from '../../images/p-bacteria/bacteria-d-1.jpg';
import limage3 from '../../images/p-bacteria/bacteria-d-2.jpg';
import limage4 from '../../images/p-bacteria/bacteria-d-3.jpg';
import limage5 from '../../images/p-bacteria/bacteria-d-4.jpg';
import limage6 from '../../images/p-bacteria/bacteria-d-5.jpg';
import limage7 from '../../images/p-bacteria/bacteria-d-6.jpg';
import limage8 from '../../images/p-bacteria/bacteria-d-7.jpg';
import limage9 from '../../images/p-bacteria/bacteria-d-8.jpg';
import limage10 from '../../images/p-bacteria/bacteria-d-9.jpg';
import limage11 from '../../images/p-bacteria/bacteria-d-10.jpg';
import limage12 from '../../images/p-bacteria/bacteria-d-11.jpg';
import limage13 from '../../images/p-bacteria/bacteria-d-12.jpg';
import limage14 from '../../images/p-bacteria/bacteria-d-13.jpg';
import limage15 from '../../images/p-bacteria/bacteria-d-14.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';



const LoginsBacteria = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS BACTEERIA</h1>
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
                                    src="https://www.youtube.com/embed/1O2f-RBXDVE?si=yals7WvhFFZr0_YN"
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
                    maxWidth: 800, // สามารถปรับ maxWidth ของส่วนเนื้อหาให้สัมพันธ์กับวิดีโอ
                    width: '100%',
                    borderRadius: 1,
                    bgcolor: ''
                }}>
                    <CardContent>
                        <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                            (ระบบปฎิบัติห้องจุลชีวะวิทยา)
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                            โปรแกรม LogInS BACTERIA ระบบบริหารจัดการงาน แบคทีเรียการตรวจรับสิ่งส่งตรวจ การลงผล Preliminary Report,
                            Additional Report, Final Report การลงข้อมูล Organism & Sensitivity
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
                                บริษัทล็อคอินส์ เมดดิคอล จำกัด ได้เปิด กิจการ บริษัท เมื่อ 5กันยายน พศ.2554
                                เพื่อรองรับงานในห้องปฏิบัติการ ของโรงพยาบาล สถานพยาบาล และศูนย์ตรวจสุขภาพต่างๆ
                                ด้วยระบบการจัดการข้อมูลสารสนเทศทางห้องปฏิบัติการ : Laboratory Management Information System (LMIS)
                                เทคนิคการแพทย์ ปี 2555
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        1. ตรวจรับสิ่งส่งตรวจ
                                    </Typography>
                                    <li>1.1 ลงรับสิ่งส่งตรวจ</li>
                                    <li>1.2 จำนวนที่ลงรับสิ่งส่งตรวจ</li>
                                    <li>1.3 รายละเอียดเพิ่มเติมของสิ่งส่งตรวจ</li>
                                    <li>1.4 วันที่ Collect Date</li>
                                    <li>1.5 สามารถพิมพ์ Barcode ยากตามสิ่งส่งตรวจที่ลงรับ</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="490"
                                maxWidth="800"
                                image={limage2}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        2. การรายงานผล
                                    </Typography>

                                    <li>2.1 Preliminary Report</li>
                                    <li>2.2 Additional Report </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="490"
                                maxWidth="800"
                                image={limage3}
                                alt="CompanyProfile"
                            />
                            <CardMedia
                                component="img"
                                height="490"
                                maxWidth="800"
                                image={limage4}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        3. การรายงานผล
                                    </Typography>

                                    <li>3.1 PColony Count </li>
                                    <li>3.2 Organism Isolate </li>
                                    <li>3.3 Sensitivity Test (ชุดยาทดสอบ) </li>
                                    <li>3.4 กรณีพบ MDR มีให้บันทึกสถานะ ตอนลงผลเชื้อ </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="490"
                                maxWidth="800"
                                image={limage5}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li>3.5 Sensitivity Antibiotic
                                    </li>
                                    <li>3.6 ลง Zone / Interpret
                                    </li>
                                    <li>3.7 การแปลผล Interpret ตามการตั้งค่า
                                    </li>
                                    <li>3.8 ลง MIC / Interpret MIC
                                    </li>
                                    <li>3.9 การแปลผล Interpret MIC
                                    </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="490"
                                maxWidth="800"
                                image={limage6}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li>3.10 Sensitivity Antibiotic
                                    </li>
                                    <li>3.11 ลง Zone / Interpret
                                    </li>
                                    <li>3.12 การแปลผล Interpret ตามการตั้งค่า
                                    </li>
                                    <li>3.13 ลง MIC / Interpret MIC
                                    </li>
                                    <li>3.14 การแปลผล Interpret MIC
                                    </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>

                            <CardMedia
                                component="img"
                                height="490"
                                maxWidth="800"
                                image={limage7}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        4. การรายงานผล Final Report
                                    </Typography>

                                    <li>4.1 หน้าสรุปรวม และรายงานผล Final Report </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>

                            <CardMedia
                                component="img"
                                height="540"
                                maxWidth="800"
                                image={limage8}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li>4.2 ใบรายงานผล Final Report </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>

                            <CardMedia
                                component="img"
                                height="490"
                                maxWidth="800"
                                image={limage9}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        5. การรายงานผลเข้า HIS
                                    </Typography>

                                    <li>5.1 แสดงหน้าจอการลงผลหน้าระบบ Logins Bacteria เพื่อส่งข้อมูลเข้า HIS </li>
                                    <li> 5.2 ลงผลแบบ TextFile </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>

                            <CardMedia
                                component="img"
                                height="430"
                                maxWidth="800"
                                image={limage10}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="430"
                                maxWidth="800"
                                image={limage11}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 5.2 ลงผลแบบ ImageFile </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="440"
                                maxWidth="800"
                                image={limage12}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 5.3 Biogram Report / Organism </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="440"
                                maxWidth="800"
                                image={limage13}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 5.4 Biogram Report / Drugs</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="440"
                                maxWidth="800"
                                image={limage14}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 5.5 Biogram Report / Summary</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="550"
                                maxWidth="800"
                                image={limage15}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
        </div>
    )
}

export default LoginsBacteria;