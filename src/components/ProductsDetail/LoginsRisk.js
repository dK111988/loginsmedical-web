import React from 'react';
import limage1 from '../../images/p-loginsRisk/risk-cover.jpg';
import iimage1 from '../../images/p-loginsRisk/p-1.png';
import iimage2 from '../../images/p-loginsRisk/p-2.png';
import iimage3 from '../../images/p-loginsRisk/p-3.png';

import dimage1 from '../../images/p-loginsRisk/d-1.png';
import dimage2 from '../../images/p-loginsRisk/d-2.png';
import dimage3 from '../../images/p-loginsRisk/d-3.png';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

const LoginsRisk = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS RISK MANAGEMENT</h1>
            <Grid
                container
                spacing={2}
                sx={{ padding: { xs: 2, sm: 4 } }}
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
                                    src="https://www.youtube.com/embed/tKuZRtosDTw?si=WZ5Jd-brRPyc5TPq"
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
                            (ระบบบริหารความเสี่ยง)
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            ระบบบริหารความเสี่ยง เป็นระบบช่วยในการจัดการบันทึกข้อมูลความเสี่ยงที่เกิดขึ้น เป็นความเสี่ยงที่เกิดขึ้นในโรงพยาบาล หรือ ความเสี่ยงที่เกิดขึ้นในห้อง LAB
                            โดยรูปแบบการทำงานนั้นอ้างอิงการใช้งานจริงจากเจ้าหน้าที่ผู้ให้บริการในห้อง LAB เป็นต้น สามารถบันทึกข้อความความเสี่ยง แยกหัวข้อเรื่อง เลขอุบัติการณ์ ความรุนแรง
                            รวมถึงประเภทความเสี่ยงและการแก้ไข

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
                            ระบบบริหารความเสี่ยง หรือ  Logins Risk Management เป็นการร่วมรวมข้อมูลที่เจ้าหน้าที่บันทึกความเสี่ยงจากการบันทึก มาลงบนระบบซึ่งมีการเก็บข้อมูล
                            ในฐานข้อมูลอย่างเป็นระเบียบ หน้าจอการทำงานสอดคล้องกับการทำงานของเจ้าหน้าที่ และยังสามารถออกรายงานหรือเอกสารใบ IR ได้อีกด้วยช่วยอำนวยความสะอวกแก่เจ้าหน้าที่ผู้ใช้งาน
                            เป็นอย่างมาก
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
                                    1. ระบบจัดการข้อมูลพื้นฐาน
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
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
                                    2. ระบบหน้ารายการความเสี่ยง
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    หน้าจอแสดงรายการ เลขอุบัติการ ขั้นตอนและความรุนแรงและสามารถค้นหารายการความเสี่ยงได้
                                    ด้วยปรเภท Miss / Near Miss หน่วยงานที่เกิด หน่วยงานที่พบ หรือโปรแกรมความเสี่ยงที่ระบุไว้
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
                                    3. ระบบบันทึกความเสี่ยง
                                </Typography>
                                <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                    ระบบสามารถบันทึกข้อมูลเลขอุบัติการณ์ หน่วยงานที่เกิด/ที่พบ หัวข้อเรื่อง ความรุนแรง การบันทึกเหตุการ
                                    และยังมีส่วนของความเห็นของกรรมการบริหารความเสี่ยงและสามารถพิมพ์ออกแบบฟอร์ม IR ได้
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
                <CardContent>
                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                        หน้ารายการความเสี่ยง
                    </Typography>
                </CardContent>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="202"

                        image={dimage1}
                        alt="CompanyProfile"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                        หน้ารายบันทึกความเสี่ยง
                    </Typography>
                </CardContent>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="685"

                        image={dimage2}
                        alt="CompanyProfile"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                        ตัวอย่างใบ IR
                    </Typography>
                </CardContent>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="1139"

                        image={dimage3}
                        alt="CompanyProfile"
                    />
                </CardActionArea>
            </Grid>
        </div>
    )
}

export default LoginsRisk;