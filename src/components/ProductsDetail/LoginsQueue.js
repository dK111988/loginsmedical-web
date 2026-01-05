import React from 'react';
import bimage1 from '../../images/p-loginsQueue/queue-d-1.png';
import bimage9 from '../../images/p-loginsQueue/queue-d-2.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

const LoginsQueue = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS QUEUE</h1>
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
                                    src="https://www.youtube.com/embed/w_pucrHRNPg?si=m71SHuMsRlQrMtNa"
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

                    maxWidth: 950,
                    borderRadius: 1,
                    bgcolor: ''
                }}>
                    <CardContent>
                        <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                            (ระบบจัดการคิวในสถานพยาบาล )
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                            ระบบที่เข้ามามีส่วนสำคัญในงานบริการด้วยเทคโนโลยีเข้ามีส่วนร่วมจึงสามารถแสดงการจองคิว การลำดับคิวรวมถึงการพ่วงต่ออุปกรณ์ที่อำนวนความสะดวกใน
                            การใช้งานอื่นๆ ซึ่งระบบการจัดลำดับคิวในโรงพยาบาลมีส่วนสำคัญในการใช้บริการซึ่งเป็นนโยบายของสาธารณสุขที่มีการจัดลำดับความสำคัญไว้อย่างชัดเจน
                            ทางบริษัทเล็งเห็นความสำคัญนี้จึงจัดทำระบบการจัดลำดับความสำคัญในการเข้ารับบริการในโรงพยาบาลโดยจะมีทั้งที่แยกปผนกหรือเป็นระบบคิวโดยรวมทั้งโรงพยาบาล
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
                    maxWidth: '500',
                    borderRadius: 1,
                    bgcolor: ''
                }}
                >
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                                ฟังก์ชั่นและความสามารถเด่น
                            </Typography>
                            <Typography fontFamily='prompt' gutterBottom variant='content' color='#F17834' >
                                LogInS Queue
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                ระบบคิวสำหรับห้องปฏิบัติการ: เป็นระบบที่มาช่วยในเรื่องการจัดลำดับการใช้บริการผู้ป่วยของห้องปฏิบัติการให้มีความสะดวกมากขึ้น ซึ่งระบบสามารถเรียกชื่อ-นามสกุล ช่องบริการ
                                แยกตามที่ระบุไว้ได้อย่างสะดวกซึ่งการจัดลำดับการเรียกนั้นเป็นไปตามที่เจ้าหน้าที่จัดการหน้าการงานทำงาน ส่วนนี้ยังผนวกเข้ากับระบบการรับแล็ปเพื่อให้ผู้ใช้บริการมายังจุดบริการพร้อมทั้งรับแล็ปพร้อมดำเนินการขั้นตอนทางห้องปฎิบัติการต่อไป
                            </Typography>
                            <Typography fontFamily='prompt' gutterBottom variant='content' color='#F17834' >
                                LogInS Smart Queue
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                ระบบคิวที่ช่วยอำนวยความสะดวก เพื่อเรียกคนไข้เฉพาะตามแผนกต่างๆของโรงพยาบาลเช่น ห้องการเงิน ห้องจ่ายยาและห้องแพทย์ เป็นลักษณะที่คล้ายกับการเรียกคิวของห้องปฎิบัติการ LAB
                                แต่เป็นระบบที่จัดลำดับคนไข้ไว้ตามคิวจริงและเรียกโดยการสแกน เลข HN เลขบัตรประจำตัวหรือ การค้นหาด้วยชื่อจากเอกสารเข้ารับบริการซึ่งส่วนนี้สามารถแยกได้หลากหลายแปนกของโรงพยาบาล การขานชื่อ-สกุล ช่องบริการยังสามารถทำได้เหมือนการเรียกคิวแบบห้องปฎิบัติการLAB
                            </Typography>
                            <Typography fontFamily='prompt' gutterBottom variant='content' color='#F17834' >
                                LogInS Smart Queue Auto
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                เป็นระบบจัดการคิวแบบเบ็ดเสร็จ  โดยโปรแกรมสามารถบริหารจัดการคิวเพื่อนำส่งคนไข้จุดแรกจนถึงจุดสุดท้ายของการรักษา โดยใช้รหัสหมายเลขแทนการเรียกชื่อคนไข้ โดยการลำดับคนไข้นั้นจะเป็นไปตามการลงทะเบียนเข้ารับบริการของคนไข้
                                และจัดหมวดหมู่ความสำคัญของคนไข้ได้จากการลงทะเบียนเรียงตาม เด็ก ผู้สูงอายุ พระภิกษาสงฆ์ เป็นต้น
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        1. การออกคิวลำดับผู้เข้ารับบริการ
                                    </Typography>
                                    <li>ระบบทำหน้าที่ออกบัตรคิวเพื่อเรียกเข้าไปคัดแยกประเภทผู้ป่วยในลำดับต่อไป</li>
                                </ul>
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        2. การออกแยกประเภทการเข้ารับบริการ
                                    </Typography>
                                    <li>ระบบทำหน้าที่ออกบัตรคิวเพื่อแยกประเภทผู้ป่วย โดยลำดับความสำคัญและประเภทการเข้ารับบริการ</li>
                                </ul>
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        3. จุดคัดกรอง และจุดซักประวัติ
                                    </Typography>
                                    <li>ระบบทำหน้าที่เรียกคิวผู้ป่วยที่มารอเข้ารับบริการ ถูกส่งแยกประเภทมายังจุดคัดกรอง</li>
                                </ul>
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        4. จุด ก่อน/ หลัง เข้าพบแพทย์
                                    </Typography>
                                    <li>ระบบทำหน้าที่เรียกคิวผู้ป่วยที่ถูกคัดกรองแล้ว เพื่อไปยังจุดรับยา/การเงิน/พบแพทย์ หรือบริการอื่นๆ ตามประเภทผู้ป่วยที่ถูกคัดแยก</li>
                                </ul>
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        5. จุดห้องปฎิบัติการ LAB
                                    </Typography>
                                    <li>ระบบทำหน้าที่เรียกคิวผู้ป่วย ที่ถูกส่งมาจาก ห้องตรวจ เมื่อคนไข้มีความจำเป็นจะต้องรายการตรวจเพิ่มเติมจากคำสั่งแพทย์</li>
                                    <li>คนไข้จะถูกส่วกลับไปยัง จุด ก่อน/หลัง พบแพทย์ เพื่อรอเข้าพบแพทย์ รอผม LAB ประกอบการวินิจฉัย</li>
                                    <li>ระบบรองรับการเรียกคิว พร้อมพิมพ์ Barcode สิ่งส่งตรวจ ตามรายการส่งตรวจ</li>
                                    <li>ระบบรองรับการเรียกคิว พร้อมพิมพ์ Barcode สิ่งส่งตรวจ ตามรายการส่งตรวจ ด้วยเครื่อง Labelling
                                    </li>
                                </ul>
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        6. จุด ห้องการเงิน
                                    </Typography>
                                    <li>ระบบทำหน้าที่เรียกคิวผู้ป่วย ที่ถูกส่งมาจาก ห้องตรวจ เมื่อเสร็จขั้นตอนการวินิจฉัย</li>

                                </ul>
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        7. จุดห้องจ่ายยา
                                    </Typography>
                                    <li>ระบบทำหน้าที่เรียกคิวผู้ป่วย ที่ถูกส่งมาจาก ห้องตรวจ หากไม่มีค่าบริการทางการแพทย์</li>
                                    <li>ระบบทำหน้าที่เรียกคิวผู้ป่วย ที่ถูกส่งมาจาก ห้องการเงิน หากมีค่าบริการทางการแพทย์</li>
                                    <li>ผู้ป่วยหรือผู้มารับบริการ รับยาและกลับบ้าน</li>
                                </ul>
                            </Typography>

                        </CardContent>

                        <CardMedia
                            component="img"
                            height="2920"

                            image={bimage1}
                            alt="CompanyProfile"
                        />
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                                        รายงานและสถิติ
                                    </Typography>

                                    <li>ระบบสามารถออกแบบรายงานระยะเวลารอคอยตามคำสั่งตรวจ</li>
                                    <li>ระบบสามารถออกแบบรายงาน ในรูปตามที่เจ้าหน้าที่ต้องการได้ ตารางข้อมูล หรือ ในรูปแบบกราฟต่างๆ</li>
                                    <li>ระบบสามารถออกแบบรายงาน แยกตามแผนกต่างๆได้</li>
                                </ul>
                            </Typography>
                        </CardContent>
                       
                            <CardMedia
                                component="img"
                                height="2900"
                                maxWidth="800"
                                image={bimage9}
                                alt="CompanyProfile"
                            />
                     
                    </Card>
                </Box>
            </Grid>
        </div>
    )
}

export default LoginsQueue