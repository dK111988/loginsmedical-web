import React from 'react';
import limage1 from '../../images/p-loginsBright/bright-cover.jpg';
import bimage1 from '../../images/p-loginsBright/bright-d-1.jpg';
import bimage2 from '../../images/p-loginsBright/bright-d-2.png';
import bimage3 from '../../images/p-loginsBright/bright-d-3.png';
import bimage4 from '../../images/p-loginsBright/bright-d-4.png';
import bimage5 from '../../images/p-loginsBright/bright-d-5.png';
import bimage6 from '../../images/p-loginsBright/bright-d-6.png';
import bimage7 from '../../images/p-loginsBright/bright-d-7.png';
import bimage8 from '../../images/p-loginsBright/bright-d-8.png';
import bimage9 from '../../images/p-loginsBright/bright-d-9.png';
import bimage10 from '../../images/p-loginsBright/bright-d-10.png';
import bimage11 from '../../images/p-loginsBright/bright-d-11.png';
import bimage12 from '../../images/p-loginsBright/bright-d-12.png';
import bimage13 from '../../images/p-loginsBright/bright-d-13.png';
import bimage14 from '../../images/p-loginsBright/bright-d-14.png';
import bimage15 from '../../images/p-loginsBright/bright-d-15.png';
import bimage16 from '../../images/p-loginsBright/bright-d-16.png';
import bimage17 from '../../images/p-loginsBright/bright-d-17.png';
import bimage18 from '../../images/p-loginsBright/bright-d-18.png';
import bimage19 from '../../images/p-loginsBright/bright-d-19.png';
import bimage20 from '../../images/p-loginsBright/bright-d-20.png';
import bimage21 from '../../images/p-loginsBright/bright-d-21.png';
import bimage22 from '../../images/p-loginsBright/bright-d-22.png';
import bimage23 from '../../images/p-loginsBright/bright-d-23.png';
import bimage24 from '../../images/p-loginsBright/bright-d-24.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

const LoginsBright = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS BRIGHT</h1>
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
                                    src="https://www.youtube.com/embed/o16uLp5t2Vg?si=c0wavEUkjYJ7nkkR"
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
                            (ระบบบริหารคลังโลหิต )
                        </Typography>
                        <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                            ระบบบริหารคลังโลหิต เป็นระบบช่วยในการจัดการงานบริหารในส่วน การลงข้อมูล ผู้บริจาคโลหิต การจอง การเบิก การจ่าย โลหิต ง่ายต่อการตรวจสอบและการใช้งาน
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
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                Logins Bright (ระบบบริหารคลังโลหิต) เพื่อลดขั้นตอนและข้อผิดพลาดในการลงรับ โลหิต การจ่าย และการยืนยันซึ่งมีผลกับคนไข้โดยตรง
                                ทางเราจึงสร้างสรรค์ระบบที่มาอำนวนความสะดวกทั้งการ รับโหหติการระบุข้อมูลสำคัญการจัดเก็บประวัติทั้งการลงรับ และการรับเลือดของคนไข้ไปพร้อมกัน
                                รองรับได้ทั้งการเชื่อ HIS และ Stand alone
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        1. บันทึกลงรับโลหิตเข้าคลัง
                                    </Typography>
                                    <li>1.1 ระบบลงข้อมูลการลงรับโลหิตเข้าคลัง</li>
                                    <li>1.2 ระบบ Barcode Scanner ยิงข้อมูลโลหิตที่หน้าถุง ลดความผิดพลาดในการลงข้อมูล</li>
                                    <li>1.3 บันทึกการตรวจคุณภาพ เลขที่ใบส่ง/ จำนวน/ อุณหภูมิ/ การบรรจุหีบห่อ/ การขนส่ง</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="660"

                                image={bimage1}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        2. ระบบการจองโลหิต
                                    </Typography>

                                    <li>2.1 ระบบลงข้อมูลการจองโลหิต</li>
                                    <li>2.2 ระบบลงบันทึกการลงรับใบขอโลหิต </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="550"
                                image={bimage2}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        3. การบันทึกข้อมูลการทดสอบโลหิต
                                    </Typography>
                                    <li>3.1 ลงข้อมูล Crossmatching </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="530"
                                maxWidth="800"
                                image={bimage3}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li>3.2 เลือด 1 ถุง สามารถจองและทำ Cross matching ได้หลายๆคนจนกว่าจะมีการยืนยันคล้องถุง </li>

                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="500"
                                maxWidth="800"
                                image={bimage4}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li>3.3 ลงข้อมูล Blood Grouping (Cell Grouping) </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="530"
                                maxWidth="800"
                                image={bimage5}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li>3.4 ลงข้อมูล Antibody Screening </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="480"
                                maxWidth="800"
                                image={bimage6}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li>3.5 การบันทึกผลการ Crossmatch มารดา </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="455"
                                maxWidth="800"
                                image={bimage7}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li>3.6 Antigen Typing Identification</li>
                                    <li>3.7 Antibody Identification</li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="560"
                                maxWidth="800"
                                image={bimage8}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        4. ระบบการจ่ายโลหิต
                                    </Typography>

                                    <li>4.1 ระบบยืนยันการคล้องเลือด </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="390"
                                maxWidth="800"
                                image={bimage9}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li>4.2 พิมพ์ใบคล้องโลหิต </li>
                                    <li>4.3 ระบบยืนยันการจ่ายโลหิต </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="550"
                                maxWidth="800"
                                image={bimage10}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                    <Card sx={{ m: 2 }}>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        5. ระบบบันทึกข้อมูลหลังรับโลหิต
                                    </Typography>

                                    <li>5.1 ระบบลงข้อมูลปฏิกิริยาหลังรับเลือด </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>

                            <CardMedia
                                component="img"
                                height="1030"
                                maxWidth="800"
                                image={bimage11}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 5.2 แสดงประวัติการรับเลือด และการบันทึกข้อมูลแต่ละถุงเลือด
                                    </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="565"
                                maxWidth="800"
                                image={bimage12}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        6. ระบบการทำงานหน้าหลัก การจองและการจ่าย
                                    </Typography>
                                    <li> 6.1 ระบบตรวจสอบจำนวนโลหิต </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="460"
                                maxWidth="800"
                                image={bimage13}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 6.2 ระบบแจ้งเตือนวันหมดอายุ แสดงจำนวนวันที่เหลือ </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="440"
                                maxWidth="800"
                                image={bimage14}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 6.3 แสดงสถานะถุงเลือดที่ถูก รอจ่ายหรือถุงเลือดที่คล้องแล้ว </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="430"
                                maxWidth="800"
                                image={bimage15}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 6.4 แสดงสถานะรายการจองเลือด ขั้นตอนการดำเนินการ </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="430"
                                maxWidth="800"
                                image={bimage16}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 6.5 รายละเอียดการจองเลือด </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="450"
                                maxWidth="800"
                                image={bimage17}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 6.6 ระยะเวลาที่กำหนด ระบบปลดใบคล้องที่เกินกำหนด  </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="450"
                                maxWidth="800"
                                image={bimage18}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 6.7 ระบบตรวจสอบสถานะถุงเลือด แสดงรายการบันทึกข้อมูล  </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="400"
                                maxWidth="800"
                                image={bimage19}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        7. ระบบลงทะเบียนผู้บริจาคโลหิต
                                    </Typography>
                                    <li> 7.1 สามารถลงทะเบียนผู้บริจาคโลหิต </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="435"
                                maxWidth="800"
                                image={bimage20}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <li> 7.2 สามารถลงข้อมูลรายละเอียดการคัดกรอง/ ผลการตรวจ </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="550"
                                maxWidth="800"
                                image={bimage21}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        8. มีระบบสำหรับการออกหน่วย
                                    </Typography>
                                    <li> 8.1 สามารนำข้อมูลรายละเอียดการบริจาคเพื่อตรวจสอบในการรับบริจาคได้ </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="480"
                                maxWidth="800"
                                image={bimage22}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        9. ระบบการแจ้งเตือน เพื่อป้องกันข้อมูลผิดพลาด
                                    </Typography>
                                    <li> 9.1 มีระบบการแจ้งเตือนในความเสี่ยงทุกๆหน้าจอ </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="510"
                                maxWidth="800"
                                image={bimage23}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350' fontSize="14px" sx={{ display: 'block' }}>
                                <ul>
                                    <Typography fontFamily='prompt' gutterBottom variant='body2' color='#F17834' >
                                        9. Report รายงาน (ระบบสามารถเพิ่มเติมรายงานได้)
                                    </Typography>
                                    <li> 9.1 รายงานระยะเวลาการ Crossmatching </li>
                                    <li> 9.2 รายงานสรุปการ Crossmatching </li>
                                    <li> 9.3 รายงานสรุปข้อมูล ปฏิกิริยาการรับเลือด </li>
                                    <li> 9.4 รายงานแสดงการจ่ายเลือด </li>
                                    <li> 9.5 รายงานแสดงการลงรับเลือด </li>
                                    <li> 9.6 รายงานแสดงการลงรับเลือดแยกตามแหล่งที่มา </li>
                                    <li> 9.7 รายงานสถิติสรุปตามประเภทโลหิต ประจำเดือน </li>
                                    <li> 9.8 รายงานสรุปทะเบียนรายชื่อผู้บริจาค </li>
                                    <li> 9.9 รายชื่อผู้บริจาคติดเชื้อ </li>
                                    <li> 9.10 รายชื่อผู้บริจาครับเข็ม </li>
                                </ul>
                            </Typography>
                        </CardContent>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="570"
                                maxWidth="800"
                                image={bimage24}
                                alt="CompanyProfile"
                            />
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
        </div>
    )
}
export default LoginsBright;