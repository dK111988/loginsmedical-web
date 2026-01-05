import React from 'react';
import newsimage1 from '../../images/news/news1.jpg';
import newsimage2 from '../../images/news/news2.jpg';
import newsimage3 from '../../images/news/news3.jpg';
import newsimage4 from '../../images/news/news4.jpg';

import cimage1 from '../../images/news/p1.png';
import cimage2 from '../../images/news/p2.png';
import cimage3 from '../../images/news/p3.png';
import cimage4 from '../../images/news/p4.png';

import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

const LoginsNews = () => {
    return (
        <div id='product-detail'>
            <h1> LOGINS NEWS</h1>
            <Grid container
                direction="row"
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Card sx={{ m: 2 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="570"
                            maxWidth="800"
                            image={newsimage1}
                            alt="ภาคกลาง"
                        />
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='500' variant='h6' >
                                การประชุมวิชาการประจำปีสมาคมเทคนิคการแพทย์ครั้งที่ 47
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="16px" sx={{ display: 'block' }}>
                                “Advancing Health with Precision: The Future of Medical Technology”
                                บริษัท Logins medical และกลุ่มบริษัทในเครือ BTL : บริษัท Biozen บริษัท thaidiagnostics และ บริษัท Loginsmedical ร่วมเปิดบูธแสดงผลงานและสินค้า
                                อุปกรณณ์ และระบบทางห้องปฎิบัติการ นำโดย  ทนพ.สุทัศน์ ภูยานนท์ (คุณเอส) Managing Director ของบริษัท Logins medical ยกทีมนำเสนอระบบ จัดการและบริหาร ห้องปฎิบัติการ
                                ยกกองทัพ ทีมพัฒนาระบบและทีมงาน เข้าพูดคุยแลกเปลี่ยนนำเสนอข้อมูลในการพัฒนาระบบ ให้มีความใกล้ชิดกับผู้ใช้งานมากที่สุด อย่างที่เราภูมิใจนำเสนอตลอดมา "คุณคิด  เราทำ" โดยระบบ
                                ที่ยกมาอย่างยิ่งใหญ่ห้องระบบ Logins Bacteria ซึ่งได้ผ่านการยืนยันแล้วว่าสามารถช่วยเหลือการทำงานของงาน จุลวิทยา ได้อย่างดีเยี่ยมถึงแม้ระบบจะถูกปล่อยออกมาไม่นานแต่ก็สามารถเข้าถึงกลุ่มเจ้าหน้าที่
                                ที่ทำงานด้านจุลวิทยาได้เป็นอย่างดี ทั้งนี้ตัวระบบยังสามารถมีอัตราขยายได้ตามความต้องการของผู้ใช้งานในแต่ สถานพยาบาลอีกด้วย ซึ่งมีผู้ให้ความสนใจเป็นอย่างมาก
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ m: 2 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="570"
                            maxWidth="800"
                            image={newsimage2}
                            alt="ภาคกลาง"
                        />
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='500' variant='h6' >
                                Logins Medical Show case
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="16px" sx={{ display: 'block' }}>
                                เปิดแสดงผลงานระบบการจัดการห้องปฎิบัติการ LAB โดยปีนี้ทางบริษัทได้ผลักดันให้ระบบมีความฉลาดด้วยเทคเทคโนโลยี Ai ที่กำลังมาแรง
                                ผนวกเข้ากับการใช้งานเครื่องมือและอุปกรณืทางห้องปฎิบัติการ ทั้งนี้ยังคงยึดการใช้งานโดยมีเจ้าหน้าที่ผู้ปฎิบัติงานเป็นหลัก
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ m: 2 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="570"
                            maxWidth="800"
                            image={newsimage3}
                            alt="ภาคกลาง"
                        />
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='500' variant='h6' >
                                My Boss
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="16px" sx={{ display: 'block' }}>
                                ทนพ.สุทัศน์ ภูยานนท์ (คุณเอส) Managing Director บริษัท Logins medical เข้าชมงานและพูดคุยกับเจ้าหน้าที่จากหลายๆสถานพยาบาล
                                นำเสนอและขอคำปรึกษาในแนวทางที่เรากำลังก้าวไปพร้อมกับกับโลกแห่งยุค [Ai] ที่มามีส่วนสำคัณในกระบวนการทำงานห้องปฎิบัติการ LAB
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ m: 2 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="570"
                            maxWidth="800"
                            image={newsimage4}
                            alt="ภาคกลาง"
                        />
                        <CardContent>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='500' variant='h6' >
                                "เรากำลังก้าวกระโดด"
                            </Typography>
                            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="16px" sx={{ display: 'block' }}>
                                ด้วยการทำงานกับเจ้าหน้าที่อย่างใกล้ชิดตลอดมาทำให้เราเข้าใจการทำงานของเขจ้าหน้าที่ห้องปฎิบัติการอย่างลึกซึ่ง
                                และระบบที่ยืดหยุ่นและเป็นมิตรกับผู้ใช้งานอย่างเรากำลังก้าวกระโดดในตลาดระบบปฎิบัติการห้อง LAB
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid
                container
                direction="row"
                sx={{

                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: 'center',
                }}
            >
                <Box sx={{
                    width: '90%',

                }}
                >
                    <Typography gutterBottom fontFamily='prompt' fontWeight='500' variant='h6' >
                        "เอกสารนำเสนอระบบ"
                    </Typography>
                    <CardMedia
                        component="img"
                        height="Auto"

                        image={cimage1}
                        alt="CompanyProfile"
                    />
                    <CardMedia
                        component="img"


                        image={cimage2}
                        alt="CompanyProfile"
                    />
                    <CardMedia
                        component="img"


                        image={cimage3}
                        alt="CompanyProfile"
                    />
                    <CardMedia
                        component="img"

                        maxWidth="1024"
                        image={cimage4}
                        alt="CompanyProfile"
                    />

                    <Button
                        sx={{ m: 5 }}
                        variant="contained"
                        color="primary"
                        endIcon={<SimCardDownloadIcon />}
                        href="/images/news/lis-brochure2025.pdf"
                        download="lis-brochure2025.pdf"
                    >
                        Download PDF
                    </Button>
                </Box>
            </Grid >
        </div>
    )
};
export default LoginsNews;
