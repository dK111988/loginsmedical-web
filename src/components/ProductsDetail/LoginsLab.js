import React from 'react';
import limage1 from '../../images/p-loginsLab/logins-cover.jpg';
import limage2 from '../../images/p-loginsLab/logins-tools.jpg';
import limage3 from '../../images/p-loginsLab/logins-lab.jpg';
import limage4 from '../../images/p-loginsLab/logins-tansfer.jpg';
import limage5 from '../../images/p-loginsLab/logins-backup.jpg';
import limage6 from '../../images/p-loginsLab/logins-detail.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';


const LoginsLab = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS LAB</h1>
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
                                    src="https://www.youtube.com/embed/i2xoIbEebpk?si=2Q39PcYudtZW7t1S"
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
                            LOGINS LAB (ระบบบริหารงานห้องปฎิบัติการ LAB)
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14x" sx={{ display: 'block' }}>
                            เป็นระบบจัดการและบริหารงานห้องปฎิบัติการแล็บสำหรับโรงพยาบาลทั้งขนาดเล็กและขนาดใหญ่ โดย Concept เป็นการสร้างระบบการใช้งานห้องปฎิบัติการ LAB
                            ให้มีความเป็นเอกลักษณ์หรือ เป็นเฉพาะสำหรับสถานบริการแต่ละที่ ซึ่งส่วนนี้เป็นหัวใจที่ทำให้ระบบมีความยืดหยุ่นในการทำงานสูง สามารถจัดการและร่วมแนวคิดในการ
                            จัดการการติดตั้งในการใช้งานตั้งแต่เริ่มตลอดจนการใช้งานจริงเพื่อให้เจ้าหน้าที่ผู้ใช้งานไม่รู้สึกขัดต่อการปฎิบัติงานของแต่ละที่ อีกทั้งอำนวยความสะดวกและดูแลด้วยทีมที่
                            มีความเชี่ยวชาญ

                        </Typography>
                    </CardContent>
                </Box>
                <Box sx={{

                    maxWidth: 800,
                    borderRadius: 1,
                    bgcolor: ''
                }}>
                    <CardContent>
                        <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                            หลักการทำงานของ Software และเทคโนลียีที่ใช้
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            การทำงานของโปรแกรม LogInS LAB จะมีโปรแกรมที่เปิดใช้งานอยู่ด้วยกัน 4 ตัว คือ

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
                    flexWrap: 'wrap',
                }}
            >
                <div className='product-detail-box'>
                    <Card sx={{ m: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={limage2}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography gutterBottom fontFamily='prompt' variant='h6' >
                                    LogInS Tools
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    เป็นตัวกลางที่ใช้ดึงข้อมูล ใบ LAB ชื่อผู้ป่วยและรูปเข้ามาในระบบ LIS และส่งข้อมูลการรายผลเข้าระบบ HIS ของโรงพยาบาล
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>
                <div className='product-detail-box'>
                    <Card sx={{ m: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={limage3}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography gutterBottom fontFamily='prompt' variant='h6' >
                                    LogInS LAB
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    โปรแกรม สำหรับบันทึกการใช้งานบันทึกผล-รับผล ต่างๆ โดยมีการออกแบบหน้าจอ UI ด้วยเป็นมิตรและอำนวยความสะดวกแก่ผู้ใช้มากที่สุด
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>
                <div className='product-detail-box'>
                    <Card sx={{ m: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={limage4}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography gutterBottom fontFamily='prompt' variant='h6' >
                                    LogInS Tranfers
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ตัวกลาง สำหรับการเชื่อมต่อการรับส่งข้อมูลระหว่างเครื่องตรวจ Automate และระบบ LIS โดยมีการตรวจสอบค่าต่างๆ ให้ถูกต้องตรงตามที่ผู้ใช้ต้องการ
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>
                <div className='product-detail-box'>
                    <Card sx={{ m: 1 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                maxWidth="800"
                                image={limage5}
                                alt="ภาคกลาง"
                            />
                            <CardContent>
                                <Typography gutterBottom fontFamily='prompt' variant='h6' >
                                    LogInS Backup
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    โปรแกรมสำรองข้อมูลอัตโนมัติ ที่สามารถกำหนดเวลาในการสำรองข้อมูลตามความต้องการได้ โดยสามารถเลือกหรือกำหนดเวลา หรือตำแหน่งในการสำรองข้อมูลได้
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
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
                                จุดเด่น LogInS LAB
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                บริษัทล็อคอินส์ เมดดิคอล จำกัด ได้เปิด กิจการ บริษัท เมื่อ 5กันยายน พศ.2554
                                เพื่อรองรับงานในห้องปฏิบัติการ ของโรงพยาบาล สถานพยาบาล และศูนย์ตรวจสุขภาพต่างๆ
                                ด้วยระบบการจัดการข้อมูลสารสนเทศทางห้องปฏิบัติการ : Laboratory Management Information System (LMIS)

                                เทคนิคการแพทย์ ปี 2555

                            </Typography>
                        </CardContent>
                        <CardActionArea>

                            <CardMedia
                                component="img"
                                height="400"
                                maxWidth="800"
                                image={limage6}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>

                </Box>

            </Grid>

            <Grid container
                sx={{
                    display: 'flex-start',
                    justifyContent: 'flex-start',
                    alignContent: 'sflex-start',
                    flexWrap: 'wrap',
                }}
            >

                <Box sx={{

                    maxWidth: 800,
                    borderRadius: 1,
                    bgcolor: ''
                }}>
                    <CardContent>
                        <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                            ฟังก์ชั่นและความสามารถเด่น
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            <ul>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    1. ก่อนรับ Lab
                                </Typography>

                                <li>1.1 ตรวจสอบใบ Lab จาก HIS และบันทึกหน้าจอ</li>
                                <li>1.2 ข้อมูลอาการสำคัญ Diag สิทธิการรักษา Note</li>
                                <li>1.3 แจ้งเตือนให้ใส่ถุงมือกับเลือดที่มีความเสี่ยง</li>
                                <li>1.4 ปกปิดชื่อจาก HIS</li>
                                <li>1.5 ปฏิเสธสิ่งส่งตรวจ เหตุผล โทรแจ้ง</li>
                            </ul>
                            <ul>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    2. รับใบ Lab
                                </Typography>
                                <li>2.1 Barcode มีหมายเลขคิวตรวจเข้าเครื่อง</li>
                                <li>2.2 แสดง TAT พร้อมแจ้งเตือนก่อนเลยเวลา</li>
                            </ul>
                            <ul>
                                <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                    3. รายงานผล
                                </Typography>
                                <li>3.1.กราฟผลจากเครื่อง</li>
                                <li>3.2.กราฟผล 5 ครั้งล่าสุด ผลเฉลี่ย</li>
                                <li>3.3.การรายงานผล 2 รูปแบบ</li>
                                <li>3.4 Cell Counter แจ้งเตือน Diff Count</li>
                                <li>3.5 ลงรายละเอียด ตัวอย่าง IgG, IgM, Sensitivity HIV</li>
                                <li>3.6 สูตร eGFR CKD-EPI,CG,MDRD,SE </li>
                                <li>3.7 ค่าผิดปกติ แยกเพศ,ช่วงอายุ,จำนวนวัน,แรกเกิด</li>
                                <li>3.8 โทรแจ้งค่าวิกฤต ผลด่วน </li>
                                <li>3.9 Note ส่งต่อเวร,Note ผู้ป่วย</li>
                                <li>3.10 ภาระงาน เจาะเลือด,ปั่นเลือด,Smear,ย้อม Slide</li>
                                <li>3.11 การรายงานค่าวิกฤติ</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Box>
            </Grid>
        </div>
    )
}

export default LoginsLab