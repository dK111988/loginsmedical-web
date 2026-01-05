import React from 'react';
import cimage1 from '../../images/p-edoc/edoc-cover.jpg';
import bimage1 from '../../images/p-edoc/edoc-d1.png';
import bimage2 from '../../images/p-edoc/edoc-d2.png';
import bimage3 from '../../images/p-edoc/edoc-d3.png';
import bimage4 from '../../images/p-edoc/edoc-d4.png';
import bimage5 from '../../images/p-edoc/edoc-d5.png';
import bimage6 from '../../images/p-edoc/edoc-d6.png';
import bimage7 from '../../images/p-edoc/edoc-d7.png';
import bimage8 from '../../images/p-edoc/edoc-d8.png';
import bimage9 from '../../images/p-edoc/edoc-d9.png';
import bimage10 from '../../images/p-edoc/edoc-d10.png';


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
const LoginseDoc = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS E-DOC LA Support</h1>
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
                            (ระบบจัดเก็บและรวบรวมเอกสาร)
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            ระบบจัดเก็บและรวบรวมเอกสาร จัดหมวดหมู่ตามแบบตรวจประเมินระบบคุณภาพมาตรฐานงานเทคนิดการแพทย์ สามารถ เรียกดู เพิ่ม แก้ไข และ ไฟล์เอกสารต่างๆได้ด้วยตัวท่านเอง
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
                                ฟังก์ชั่นและความสามารถเด่น
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                เป็นระบบที่จัดทำเพื่อช่วยการทำงานด้านเอกสารคุณภาพของห้องปฎิบัติการ LAB โดยการทำแบบสอบถามการใช้งานและเพื่อให้สอดคล้องกับนโยบายของทางเทคนิคการแพทย์
                                ระบบจึงมีการแบ่งหมวดหมู่ออกเป็น 10 หมวด โดยระบบของการจัดเก็บเอกสารสามารถอัปโหลดไฟล์เอกสารได้หลายรูปแบบ เช่น JPG, JPEG, PNG, DOC, XLX, PDF เป็นต้นซึ่งเอกสารในรูปแบบของไฟล์ DOC
                                ระบบสามารถเรียกเอกสารขึ้นมาเพื่อแก้ไขและยังสามารถบันทึกการแก้ไข และแบ่งสิทธิ์การเข้าถึงไฟล์เอกสารแต่ละประเภทไว้อย่างชัดเจน โดย 10 หมวดเอสารมีดังนี้
                            </Typography>
                        </CardContent>
                    </Box>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        1. องค์กรและการบริหาร
                                    </Typography>
                                    เป็นส่วนของการบันทึกข้อมูลองค์กรและงานบริหาร  การประชุมภายในและภายนอกองค์กร
                                    <li>1.1 บันทึกการสื่อสารระหว่างกลุ่มงาน</li>
                                    <li>1.2 รายงานค่าวิกฤติ</li>
                                    <li>1.3 เพิ่มรายการตรวจ</li>
                                    <li>1.4 สอบทวนการเก็บตัวอย่าง</li>
                                    <li>1.5 ขอผลด่วน</li>
                                    <li>1.6 บันทึกอื่นๆ</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="560"
                            image={bimage1}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        2. บุคลากร
                                    </Typography>
                                    เป็นส่วนของการบันทึกข้อมูลบุคลากร โดยแยกหัวข้อไว้ชัดเจนทั้งส่วนประวัติและประวัติการทำงาน โดยสามารถแนบเอกสารต่างได้ทั้งรูปภาพและ แบบเอกสาร
                                    <li>2.1 ข้อมูลการศึกษา </li>
                                    <li>2.2 ประวัติการทำงาน รับราชการ </li>
                                    <li>2.3 บันทึกประวัติสุขภาพบุคลากร</li>
                                    <li>2.4 หน้าที่ความรับผิดชอบ</li>
                                    <li>2.5 คุณสมบัติที่เหมาะสม</li>
                                    <li>2.6 แบบสำรวจ Training Need</li>
                                    <li>2.7 แบบประเมินผลการฝึกอบรมในงาน</li>
                                    <li>2.8 แแผนการฝึกอบรมบุคลากร</li>
                                    <li>2.9 บันทึกการอบรม</li>
                                    <li>2.10 แบบบันทึกการฝึกอบรมหน้างาน</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="620"
                            image={bimage2}
                            alt="CompanyProfile"
                        />

                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        3. เครื่องมือห้องปฏิบัติการ
                                    </Typography>
                                    เป็นการจัดเก็บข้อมูลเครื่องมือห้องปฏิบัติการ มีการจัดแบ่งประเภทเครื่องมือตั้งแต่การจัดซื้อการบำรุงรักษา และสามารถแนบเอกสารเกี่ยวกับเครื่องได้
                                    <li>3.1 แบ่งประเภท</li>
                                    <li>3.2 การบันทึกข้อมูลเครื่องมือ รูปภาพ ชื่อ รุ่น ยี่ห้อ วัตถุประสงค์ ราคา เลขทะเบียน เป็นต้น</li>
                                    <li>3.3 ประวัติเครื่องมือ </li>
                                    <li>3.4 ข้อมูลการสอบเทียบ </li>
                                    <li>3.5 แผนการบำรุงรักษา</li>
                                    <li>3.6 ปบันทึกการบำรุงรักษา </li>
                                    <li>3.7 ปประวัติการซ่อม </li>
                                    <li>3.8 ทดสอบเครื่องตรวจ </li>

                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="480"
                            image={bimage3}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        4. การจัดซื้อและการใช้บริการภายนอก
                                    </Typography>
                                    เป็นรูปแบบของการทำงานร่วมกับระบบคลังสินค้า Logins Inventory ซึ่งเป็นระบบจัดทำเพื่องานบริหารงานคลังสินค้า
                                    <li>4.1 ระบบ ลังสินค้า</li>
                                    <li>4.2 ระบบ ในรับสินค้า</li>
                                    <li>4.3 ระบบ รายงาน</li>
                                    <li>4.4 ระบบ ราายงานและเอกสาร LA </li>

                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="380"
                            image={bimage4}
                            alt="CompanyProfile"
                        />
                    </Card>
                                        <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        5. การควบคุมกระบวนการ
                                    </Typography>
                                    เป็นแนบเอกสารการควบคุมกระบวนการของทางห้องปฎิบัติการ
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage5}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        6. เอกสารคุณภาพ
                                    </Typography>
                                    เป็นการจัดการเอกสารคุณภาพในหมวดต่างๆ

                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage6}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        7. การควบคุมสิ่งที่ไม่สอดคล้องกับข้อกำหนด
                                    </Typography>
                                    เป็นรูปแบบของการทำงานร่วมกับ ระบบจัดการความเสี่ยง Logins Risk Management ทางห้องปฎิบัติการ LAB
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="620"
                            image={bimage7}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        8. การตรวจติดตามภายใน
                                    </Typography>
                                     เป็นการจัดการเอกสารด้วยการอัปโหลดเอกสารสำคัญไว้ในระบบ

                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage8}
                            alt="CompanyProfile"
                        />
                    </Card>
                                        <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        9. กระบวนการพัฒนาคุณภาพอย่างต่อเนื่อง
                                    </Typography>
                                    เป็นการจัดการเอกสารด้วยการอัปโหลดเอกสารสำคัญไว้ในระบบ

                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage9}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        10. การตอบสนองความต้องการของผู้ใช้บริการ
                                    </Typography>
                                    ระบบบันทึกข้อมูล การให้คำปรึกษา และการบันทึกข้อมูลการขอคำปรึกษา ซึ่งสามารถบันทึกประเภท วันเวลาในการขอ/ให้ คำปรึกษาในช่องทางต่างๆได้
                                    และยังเพิ่มเติมรายละเอียด ผู้ขอ/ผู้ให้คำปรึกษา จากหน่วยงานต่างๆบันทึกเป็นประวัติไว้ในระบบ

                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="430"
                            image={bimage10}
                            alt="CompanyProfile"
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
};
export default LoginseDoc