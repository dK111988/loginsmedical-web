import React from 'react';
import cimage1 from '../../images/p-inv/inv-cover.jpg';
import bimage1 from '../../images/p-inv/inv-d1.png';
import bimage1b from '../../images/p-inv/inv-d1-2.png';
import bimage2 from '../../images/p-inv/inv-d2.png';
import bimage2b from '../../images/p-inv/inv-d2-2.png';
import bimage3 from '../../images/p-inv/inv-d3.png';
import bimage3b from '../../images/p-inv/inv-d3-3.png';
import bimage4 from '../../images/p-inv/inv-d4.png';
import bimage5 from '../../images/p-inv/inv-d5-1.png';
import bimage5b from '../../images/p-inv/inv-d5-2.png';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

const LoginsInv = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS INVENTORY</h1>
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
                                    src="https://www.youtube.com/embed/0WKTPKdecAc?si=zyVlSmEkrgKsC_tH"
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
                            (ระบบคงคลังสินค้า)
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            เป็นระบบช่วยในการจัดการงานบริหารในส่วนน้ำยาหรือสินค้าอื่นๆ ทำให้ลดขั้นตอนการเก็บเอกสารในการส่งสินค้า สามารถออกรายงานได้
                            สามารถออกใบขอซื้อ  ออกใบสั่งซื้อ  สามารถลงรับสินค้า เบิก และแจ้งสินค้าคงเหลือ ให้ดูง่ายสะดวกในการใช้งาน.
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
                                ระบบคงคลังสินค้าของทาง Logins Medical แบ่งเป็น 2 ระบบหลักๆ ส่วนแรกเป็นระบบคลังสินค้าที่จัดการและบริหารคลังสินค้าคลังย่อย หรือคลังสินค้าห้องปฎิบัติการ
                                ส่วนต่อมาเป็นส่วนของงานจัดการคลังสินค้าคลังสินค้า ทั้งโรงพยาบาล ซึ่งเป็นงานบริหารคลังขนาดใหญ่โดยมีหลายๆ คลังย่อย เช่น ห้องยา ห้อง LAB ห้องหรืองานส่วนอื่นที่จำเป็นจะต้องเบิกสน้าค้าต่างๆเพื่อนำไปใช้งาน
                                ส่วนตัวคลังใหญ่ของโรงพยาบาลนั้นเป็นส่วนของงาน สั่งซื้อ-รับเข้า และจ่ายสินค้าให้กลับคลังย่อยต่างๆ ที่มีการเบิกสินค้าเข้ามา (ระบบเบิกสินค้าคลังย่อย) ส่วนเพิ่มเติมระบบยังสามารถเบิกหรือจองสินค้าจากคลังย่อยไปคลังย่อย                                ได้ ทำให้มีการกระจายสินค้าที่เบิกจากคลังใหญ่ไปในส่วนต่างๆได้อย่างอิสระ
                            </Typography>
                        </CardContent>
                    </Box>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        1. ระบบบันทึกใบขอซื้อ
                                    </Typography>
                                    ระบบถูกออกแบบมาเพื่อคลังสามารถออกใบเสนอซื้อ/ใบขอซื้อได้ โดยเชื่อมโยงไปถึงกระบวนการขออนุมัติขอซื้อและการออกเอกสารใบขอซื้อ ซึ่งรูปแบบเอกสารยังสามารถออกแบบ
                                    ได้ตวามความต้องการของหน่วยงานหรือองค์กร อำนวยความสะดวกไปจนถึงขั้นตอนการสั่งซื้อสามารถนำรายการที่คีย์ขอซื้อเพื่อดึงเข้าระบบสั่งซื้อโดยไม่ต้อง เพิ่มรายการใหม่
                                    <li>1.1 ระบบสามารถบันทึกรายการขอซื้อ และเลือกรายการสินค้าจากการตั้งค่าข้อมูลพื้นฐานได้</li>
                                    <li>1.2 เอกสารใบขอซื้อสามารถ ออกแบบ แบบฟอร์มตามความต้องการของผู้ใช้งานได้</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="510"
                            image={bimage1}
                            alt="CompanyProfile"
                        />
                        <br />
                        <CardMedia
                            component="img"
                            height="600"
                            image={bimage1b}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        2. ระบบบันทึกใบสั่งซื้อ
                                    </Typography>
                                    ระบบถูกออกแบบมาเพื่อนำรายการใบขอซื้อมาทำรายการเพื่อความสะดวกและการย่นเวลาในการสร้างเอกสารสั่งซื้อ ซึ่งรายการสามารถเพิ่มจากใบขอซื้อหรือลบออกจารายการได้
                                    และสามารถกำหนดสิทธิ์ผู้อนุมัติรายการสั่งซื้อโดยการผูกสิทธิ์กับ User ที่เข้าใช้งานระบบและเก็บ log เป็นข้อมูลหลังบ้านเพื่อสืบค้นการทำรายการย้อนหลังได้
                                    <li>2.1 ระบบสามารถบันทึกรายการขอซื้อ และเลือกรายการสินค้าจากการตั้งค่าข้อมูลพื้นฐานได้</li>
                                    <li>2.2 เอกสารใบสั่งซื้อสามารถ ออกแบบ แบบฟอร์มตามความต้องการของผู้ใช้งานได้</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="480"
                            image={bimage2}
                            alt="CompanyProfile"
                        />
                        <br />
                        <CardMedia
                            component="img"
                            height="800"
                            image={bimage2b}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        3. ระบบบริหารสินค้าและข้อมูลพื้นฐาน
                                    </Typography>
                                    เป็นการจัดเก็บข้อมูลเครื่องมือห้องปฏิบัติการ มีการจัดแบ่งประเภทเครื่องมือตั้งแต่การจัดซื้อการบำรุงรักษา และสามารถแนบเอกสารเกี่ยวกับเครื่องได้
                                    <li>3.1 การจัดการข้อมูลคลังสินค้า</li>
                                    <li>3.2 การกำหนดข้อมูลสินค้า</li>
                                    <li>3.3 ระบบการแจ้งเมื่อถึงจุดต่ำสุด </li>
                                    <li>3.4 ออกแบบ Barcode รายการสินค้า </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="480"
                            image={bimage3}
                            alt="CompanyProfile"
                        />
                        <br />
                        <CardMedia
                            component="img"
                            height="560"
                            image={bimage3b}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        4. Notify ผ่านระบบ Signal Messenger | IOS | Android | Mac | Windows | Linux
                                    </Typography>
                                    ระบบสามารถตั้งค่าการแจ้งเตือนไปยัง Application ได้ โดยข้อความแจ้งเตือนแสดงชื่อรายการสินค้าที่มีการตั้งค่าไว้
                                    <li>4.1 ระบบแจ้งเตือนสินค้าถึงจุด MIN</li>
                                    <li>4.2 ระบบแจ้งเตือนสินค้าถึงจุด MAX</li>
                                    <li>4.1 ระบบแจ้งเตือนสินค้าใกล้ถึงจุด Expire</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="600"
                            image={bimage4}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        5. สถิติและรายงาน
                                    </Typography>
                                    ระบบสามารถออกแบบ และพิมพ์ รายงานตามความต้องการเจ้าหน้าที่ผู้ใช้งานได้ เช่น
                                    <li>- รายงานบันทึกการตรวจรับน้ำยาและวัสดุ</li>
                                    <li>- รายงานคงคลัง</li>
                                    <li>- รายงานสินค้าคงเหลือ</li>
                                    <li>- รายงานสินค้าคงเหลือและยอดยกมา</li>
                                    <li>- รายงานแสดงการเบิกสินค้า</li>
                                    <li>- รายงานแสดงการรับสินค้า</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="420"
                            image={bimage5}
                            alt="CompanyProfile"
                        />
                        <br/>
                                                <CardMedia
                            component="img"
                            height="420"
                            image={bimage5b}
                            alt="CompanyProfile"
                        />
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
};
export default LoginsInv