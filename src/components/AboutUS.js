import React from 'react';
import fimage1 from '../images/1.svg';
import fimage2 from '../images/2.svg';
import fimage3 from '../images/3.svg';
import fimage4 from '../images/4.svg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';
import founderImg1 from '../images/founder.jpg';

const AboutUS = () => {

    const JustifyText = styled(Typography)(({ theme }) => ({
        textIndent: '2em',
        lineHeight: 1.8,
        // ใช้ props component เพื่อกำหนดให้เป็น <p> tag
        component: 'p',
    }));

    return (
        <div id='features'>
            <h1>ABOUT US</h1>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Box sx={{
                    maxWidth: '800',
                    borderRadius: 1,
                    bgcolor: '',
                }}
                >
                    <Card sx={{ m: 2 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="540"
                                maxWidth="800"
                                image={founderImg1}
                                alt="CompanyProfile"
                            />
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
                            COMPANY PROFILE (ความเป็นมาขององค์กร)
                        </Typography>
                        <Typography
                            fontFamily='prompt'
                            fontWeight='350'
                            fontSize="16px"
                            gutterBottom
                            variant='caption'
                            color='#1F233B'
                            display='block'
                            align='justify'
                            sx={{
                                '& p': {
                                    textIndent: '2em', // ย่อบรรทัดแรก
                                    marginTop: 0,
                                    marginBottom: '1em',
                                    lineHeight: 1.8
                                }
                            }}
                        >
                            <p>บริษัทล็อคอินส์ เมดดิคอล จำกัด ได้เปิดกิจการบริษัท เมื่อ 5 กันยายน พ.ศ. 2554
                                เพื่อรองรับงานในห้องปฏิบัติการ ของสถานพยาบาล และศูนย์ตรวจสุขภาพต่างๆ ด้วยระบบการจัดการข้อมูลสารสนเทศทางห้องปฏิบัติการ :
                                <b>Laboratory Management Information System (LMIS)</b> โดยใช้ชื่อโปรแกรม <b>LogInS LAB</b> เป็น <i>Software</i>
                                ที่ใช้เชื่อมโยงข้อมูลระหว่างระบบสารสนเทศโรงพยาบาล : Hospital Information System (HIS)
                                กับเครื่องตรวจวิเคราะห์แบบอัตโนมัติ ที่ใช้ในห้องปฏิบัติการ เพื่อให้มีการเชิ่่อมโยงข้อมูลแบบอัตโนมัติระหว่างกันได้
                                ระบบ LMIS เป็นระบบที่มีการใช้งานอย่างแพร่หลายทั้งในรูปแบบ Software นำเข้าจากต่างประเทศหรือ Software
                                ที่พัฒนาขึ้นโดย Programmer ภายในประเทศ ระบบ LMIS ที่นำมาใช้ส่วนใหญ่จะมีรูปลักษณ์ตายตัว ปรับเปลี่ยนไ ด้
                                เพียงบางส่วน อีกทั้งระบบส่วนใหญ่มีการใช้งานมาเป็นเวลานาน แต่ขาดการพัฒนาและบำรุงดูแลรักษา ทำให้ Software
                                เริ่มไม่ตอบสนองความต้องการและมาตรฐานงานเทคนิคการแพทย์ในบางข้อ ตามรายละเอียดคุณลักษณะโปรแกรมระบบสารสนเทศทางห้องปฏิบัติการ
                                ในประกาศข้อเสนอแนะของสภาเทคนิคการแพทย์ ปี 2555<br /></p>
                            <p>
                                บริษัท ล็อคอินส์ เมดดิคอล จำกัด เป็นบริษัทฯ ที่ดำเนินธุรกิจเกี่ยวกับการพัฒนา Software โดยเฉพาะภายใต้ชื่อ <b>LogInS LAB</b> ผู้พัฒนาโปรแกรม
                                การจัดการในห้องปฏิบัติการตามประกาศข้อเสนอแนะของสภาเทคนิคการแพทย์ ปี 2555 สามารถตอบโจทย์
                                หลายอย่างให้กับผู้ใช้ตามมาตรฐานของงานสภาเทคนิคการแพทย์ อีกทั้งยังเป็นโปรแกรมที่ผู้ใช้สามารถปรับแต่งได้
                                ตามความต้องการ และตามความเหมาะสมตามอัตลักษณ์ (<i>Identity</i>) ของแต่ละสถานพยาบาลได้ดี จึงเป็นบริษัทแรกที่ริเริ่ม
                                การเขียน Software ตามใจผู้ใช้ ให้สอดคล้องกับการที่โรงพยาบาลเริ่มจัดหาระบบที่ดี มีมาตรฐานรองรับและยกระดับ
                                ของโรงพยาบาลให้มีมาตรฐานและคุณภาพสูงขึ้น
                            </p>
                        </Typography>
                    </CardContent>
                </Box>
            </Grid>
            <Grid container
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <Card
                    sx={{
                        position: 'relative',
                        margin: "10px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        maxWidth: 345,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '2px 2px 5px rgba(209, 209, 209, 1)',
                        backgroundColor: '#F7F7F7',
                        
                        '&:hover': {
                            border: '1px solid #F17834', 
                            transition: 'all 0.3s ease-in-out',
                            //transform: 'scale(1.03)',
                        },
                    }}
                >
                    <CardMedia
                        component="img"
                        image={fimage1}
                        alt="Mission"
                        sx={{
                            objectFit: 'contain',
                            height: 100,
                            padding: '20px',
                            mt: '20px',
                            width: '100%',
                        }}
                    />
                    <Box
                        sx={{
                            m: 1.5,
                            textAlign: 'center',
                            p: 2,
                        }}
                    >
                        <Typography
                            gutterBottom
                            fontFamily="Prompt"
                            fontWeight={500}
                            variant="h5"
                            color="#F17834"
                            component="div"
                        >
                            FOUNDER
                        </Typography>
                        <JustifyText
                            gutterBottom
                            fontFamily="Prompt"
                            fontWeight={350}
                            fontSize="17px"
                            variant="caption"
                            color="#1F233B"
                            textAlign="justify center"
                        >
                            ทนพ.สุทัศน์ ภูยานนท์<br />
                            MT.Sutouch PhuyanonManaging<br />
                            Managing Director<br />
                        </JustifyText>
                    </Box>
                </Card>

                <Card
                    sx={{
                        position: 'relative',
                        margin: "10px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        maxWidth: 345,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '2px 2px 5px rgba(209, 209, 209, 1)',
                        backgroundColor: '#F7F7F7',

                        '&:hover': {
                            border: '1px solid #F17834', 
                            transition: 'all 0.3s ease-in-out',
                            //transform: 'scale(1.03)',
                        },
                    }}
                >
                    <CardMedia
                        component="img"
                        image={fimage2}
                        alt="Mission"
                        sx={{
                            objectFit: 'contain',
                            height: 100,
                            padding: '20px',
                            mt: '20px',
                            width: '100%',
                        }}
                    />
                    <Box
                        sx={{
                            m: 1.5,
                            textAlign: 'center',
                            p: 2,
                        }}
                    >
                        <Typography
                            gutterBottom
                            fontFamily="Prompt"
                            fontWeight={500}
                            variant="h5"
                            color="#F17834"
                            component="div"
                        >
                            SLOGAN
                        </Typography>
                        <JustifyText
                            gutterBottom
                            fontFamily="Prompt"
                            fontWeight={350}
                            fontSize="13px"
                            variant="caption"
                            color="#1F233B"
                            textAlign="justify center"
                        >
                            <p>"CONFIDANCE in MOTION" LogInS LAB<br />
                                <b>"คุณคิด เราทำ" </b><br /><i>you are given an identity of your own LMIS</i><br /> เพราะคุณคือผู้กำหนดอัตลักษณ์ของตัวเอง<br />
                            </p>
                        </JustifyText>
                    </Box>
                </Card>

                <Card
                    sx={{
                        position: 'relative',
                        margin: "10px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        maxWidth: 345,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '2px 2px 5px rgba(209, 209, 209, 1)',
                        backgroundColor: '#F7F7F7',
                        
                        '&:hover': {
                            border: '1px solid #F17834', 
                            transition: 'all 0.3s ease-in-out',
                           //transform: 'scale(1.03)',
                        },    
                    }}
                >
                    <CardMedia
                        component="img"
                        image={fimage3}
                        alt="Mission"
                        sx={{
                            objectFit: 'contain',
                            height: 100,
                            padding: '20px',
                            mt: '20px',
                            width: '100%',
                        }}
                    />
                    <Box
                        sx={{
                            m: 1.5,
                            textAlign: 'center',
                            p: 2,
                        }}
                    >
                        <Typography
                            gutterBottom
                            fontFamily="Prompt"
                            fontWeight={500}
                            variant="h5"
                            color="#F17834"
                            component="div"
                        >
                            VISION COMPANY
                        </Typography>
                        <JustifyText
                            gutterBottom
                            fontFamily="Prompt"
                            fontWeight={350}
                            fontSize="14px"
                            variant="caption"
                            color="#1F233B"
                            textAlign="justify"
                        >
                            จัดให้มีการผลิต และการพัฒนาโปรแกรมระบบการบริหารจัดการเครื่่องมือทางการแพทย์ต่างๆ
                            ในห้องปฏิบัติการ และใช้เทคโนโลยีสารสนเทศที่ทันสมัยเพื่อยกระดับให้มีคุณภาพตามหลักมาตรฐานสากล
                            พร้อมสู่การเป็นศูนย์กลางทางการแพทย์ในกลุ่มประเทศอาเซียน
                        </JustifyText>
                    </Box>
                </Card>

                <Card
                    sx={{
                        position: 'relative',
                        margin: "10px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        maxWidth: 345,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '2px 2px 5px rgba(209, 209, 209, 1)',
                        backgroundColor: '#F7F7F7',
                        
                        '&:hover': {
                            border: '1px solid #F17834', 
                            transition: 'all 0.3s ease-in-out',
                            //transform: 'scale(1.03)',
                        },
                    }}
                >
                    <CardMedia
                        component="img"
                        image={fimage4}
                        alt="Mission"
                        sx={{
                            objectFit: 'contain',
                            height: 100,
                            padding: '20px',
                            mt: '20px',
                            width: '100%',
                        }}
                    />
                    <Box
                        sx={{
                            m: 1.5,
                            textAlign: 'center',
                            p: 2,
                        }}
                    >
                        <Typography
                            gutterBottom
                            fontFamily="Prompt"
                            fontWeight={500}
                            variant="h5"
                            color="#F17834"
                            component="div"
                        >
                            MISSION COMPANY
                        </Typography>
                        <JustifyText
                            gutterBottom
                            fontFamily="Prompt"
                            fontWeight={350}
                            fontSize="14px"
                            variant="caption"
                            color="#1F233B"
                            textAlign="justify"
                        >
                            เพื่อเป็นศูนย์กลางการจัดการ และการให้บริการประสานงาน ในส่วนของข้อมูลภายในห้องปฏิบัติการ
                            และข้อมูลพื้นฐาน ของคนไข้ให้มีมาตรฐานความถูกต้อง และปลอดภัย เพื่อสนับสนุนงานศึกษาวิจัย
                            และพัฒนาระบบ เพื่อให้เป็นไปตามข้อเสนอแนะของสภาเทคนิคการแพทย์ ปี 2555
                        </JustifyText>
                    </Box>
                </Card>

            </Grid>
        </div >
    )
}

export default AboutUS;
