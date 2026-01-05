import React from 'react';
import cimage1 from '../../images/p-qc/qc-cover.jpg';
import bimage1 from '../../images/p-qc/qc-d-1.jpg';
import bimage2 from '../../images/p-qc/qc-d-2.png';
import bimage3 from '../../images/p-qc/qc-d-2-2.png';
import bimage4 from '../../images/p-qc/qc-d-3.png';
import bimage5 from '../../images/p-qc/qc-d-4-1.png';
import bimage6 from '../../images/p-qc/qc-d-4-2.png';
import bimage7 from '../../images/p-qc/qc-d-4-3.png';
import boimage1 from '../../images/p-qc/qconline-d-1.png';
import boimage2 from '../../images/p-qc/qconline-d-2.png';
import boimage3 from '../../images/p-qc/qconline-d-3.png';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

const LoginsQC = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS QC/QC ONLINE</h1>
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
                                    src="https://www.youtube.com/embed/wxkmYksg_RY?si=Of95cFm0k6y5yw2U"
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
                            (ระบบเก็บข้อมูลคุณภาพของเครื่องตรวจวิเคราะห์)
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            เก็บรวบรวมข้อมูลคุณภาพของเครื่องตรวจในการทำ QC แต่ละครั้งและแสดงรายละเอียดเป็นกราฟ และแสดงกฎตาม Westgard Multirule และมีระบบคำนวณ Lab Mean กับ Lab SD
                        </Typography>
                    </CardContent>
                </Box>
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
                                Logins QC
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                เก็บรวบรวมข้อมูลคุณภาพของเครื่องตรวจในการทำ QC แต่ละครั้งและแสดงรายละเอียดเป็นกราฟ และแสดงกฎตาม Westgard Multirule
                                และมีระบบคำนวณ Lab Mean กับ Lab SD
                            </Typography>
                        </CardContent>
                    </Box>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        1. Link ผลจากการทำที่เครื่องตรวจ
                                    </Typography>

                                    <li>1.1 ระบบสามารถ Link ผลจากเครื่องตรวจเข้าระบบได้อัตโนมัติ</li>
                                    <li>1.2 ระบบแสดงค่าผลที่เข้ามาใหม่ด้วยการแสดงแถบสีแดง </li>
                                    <li>1.3 ระบบแสดงค่าผล ที่ถูกอ่านแล้วด้วยแถบสีขาว </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage1}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        2. อ้างอิงจากกฎ Westgard Multirule
                                    </Typography>

                                    <li>2.1 ระบบแสดงผลการคำนวน ตามกฎ Westgard Multirule </li>
                                    <li>2.2 รระบบแสดงผลการคำนวนที่ช่อง Deviation </li>
                                    <li>2.3 คำนวณ LAB Mean LAB SD LAB CV  </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage3}
                            alt="CompanyProfile"
                        />
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage2}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        3. เปรียบเทียบผล
                                    </Typography>
                                    <li>3.1 ระบบสามารถแสดง กราฟ แยกเป็น Level ได้ </li>
                                    <li>3.2 ระบบสามารถแสดง กราฟ Level 1 และ Level 2 บนกราฟเดียวกันได้</li>
                                    <li>3.3 ระบบสามารถพิมพ์ข้อมูล และ กราฟ </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage4}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        4. สามารถ ลงบันทึก IQC การทบทวน และสามารพิมพ์แบบฟอร์ม IQC ได้
                                    </Typography>
                                    <li>4.1 การระบุ สภาพปัญหา</li>
                                    <li>4.2 การระบุ การทบทวน</li>
                                    <li>4.3 การพิมพ์เอกสาร IQC </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage5}
                            alt="CompanyProfile"
                        />
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage6}
                            alt="CompanyProfile"
                        />
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage7}
                            alt="CompanyProfile"
                        />
                    </Card>
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
                                Logins QC Online
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                ควบคุมคุณภาพ เครื่องตรวจวิเคราะห์ในระบบแม่ข่าย และลูกข่าย รักษาคุณภาพผลการวิเคราะห์ การปรับปรุงการปฏิบัติงาน เพื่อให้ได้มาซึ่งผลการวิเคราะห์ที่ถูกต้อง
                                น่าเชื่อถือ การให้บริการที่มีประสิทธิภาพที่ดีขึ้นอยู่ตลอดเวลา
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
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        การแสดงผลหน้า Dashboard
                                    </Typography>
                                    <li>- ระบบแสดงหน้าต่างการทำงานของเครื่องตรวจวิเคราะห์แต่ละเครื่อง</li>
                                    <li>- ระบบแสดงกราฟเมื่อมีผลเข้ามาในระบบ</li>
                                    <li>- แสดงการ ค่าบนกราฟ แบบรวม </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="400"
                            image={boimage1}
                            alt="CompanyProfile"
                        />
                        <CardMedia
                            component="img"
                            height="320"
                            image={boimage2}
                            alt="CompanyProfile"
                        />
                        <CardMedia
                            component="img"
                            height="440"
                            image={boimage3}
                            alt="CompanyProfile"
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
};

export default LoginsQC