import React, { useState } from 'react'; // <-- เพิ่ม useState ที่นี่
import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Box
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { red } from '@mui/material/colors';
import CoverImg from '../../images/page-covers/hospital-main-cover.jpg';

const getCardData = () => {
    return {
        pageCoverUrl: CoverImg,
        cards: [
            {
                id: 1,
                title: 'กรุงเทพมหานคร',
                content: 'การติดตั้งระบบ Logins LAB ใน กรุงเทพมหานคร',
                hospitals: [
                    'รพ.เกษมราษฎร์ รามคำแหง',
                    'คณะสหเวชศาสตร์ จุฬาลงกรณ์',
                    'บ.กรุงเทพ พยาธิ-แลป',
                    'รพ.หลวงพ่อทวีศักดิ์ ชุตินฺธโร อุทิศ',
                    'รพ.บางนา 1',
                    'รพ.บางไผ่',
                    'รพ.ราชพิพัฒน์',
                    'รพ.วิชัยเวช แยกไฟฉาย',
                    'ศูนย์ผู้สูงอายุ มาสเตอร์ ซีเนียร์ โฮม',
                    'รพ.สายไหม CGH',
                    'รพ.สินแพทย์ ศรีนครินทร์',
                    'รพ.หลวงพ่อทวีศักดิ์ ชุตินฺธโร อุทิศ'
                ]
            },
            {
                id: 2,
                title: 'นครนายก',
                content: 'การติดตั้งระบบ Logins LAB ใน นครนายก',
                hospitals: [
                    'รพ.กองแพทย์ รร.เตรียมทหาร'
                ]
            },
            {
                id: 3,
                title: 'นนทบุรี',
                content: 'การติดตั้งระบบ Logins LAB ใน นนทบุรี',
                hospitals: [
                    'รพ.เวิลด์ เมดิคอล เซ็นเตอร์'
                ]
            },
            {
                id: 4,
                title: 'ปทุมธานี',
                content: 'การติดตั้งระบบ Logins LAB ใน ปทุมธานี',
                hospitals: [
                    'รพ.ธัญบุรี',
                    'รพ.ภัทร-ธนบุรี'
                ]
            },
            {
                id: 5,
                title: 'สระบุรี',
                content: 'การติดตั้งระบบ Logins LAB ใน สระบุรี',
                hospitals: [
                    'รพ.แก่งคอย',
                    'รพ.วิหารแดง',
                    'รพ.เสาไห้ฯ'
                ]
            },
            {
                id: 6,
                title: 'พระนครศรีอยุธยา',
                content: 'การติดตั้งระบบ Logins LAB ใน พระนครศรีอยุธยา',
                hospitals: [
                    'รพ.บางบาล',
                    'รพ.บางปะหัน',
                    'รพ.บ้านแพรก',
                    'รพ.ผักไห่',
                    'รพ.ศุภมิตรเสนา',
                    'รพ.เสนา',
                    'รพ.อุทัย'
                ]
            },
            {
                id: 7,
                title: 'สุพรรณบุรี',
                content: 'การติดตั้งระบบ Logins LAB ใน สุพรรณบุรี',
                hospitals: [
                    'รพ.ดอนเจดีย์',
                    'รพ.บางปลาม้า',
                    'รพ.สามชุก',
                    'รพ.อู่ทอง'
                ]
            },
            {
                id: 8,
                title: 'อ่างทอง',
                content: 'การติดตั้งระบบ Logins LAB ใน อ่างทอง',
                hospitals: [
                    'รพ.ไชโย',
                    'รพ.โพธิ์ทอง',
                    'รพ.อ่างทองเวชชการ 2'
                ]
            },
            {
                id: 9,
                title: 'สิงห์บุรี',
                content: 'การติดตั้งระบบ Logins LAB ใน สิงห์บุรี',
                hospitals: [
                    'รพ.ค่ายบางระจัน',
                    'รพ.ท่าช้าง',
                    'รพ.บางระจัน',
                    'รพ.พรหมบุรี',
                    'รพ.อินทร์บุรี'
                ]
            },
            {
                id: 10,
                title: 'ชัยนาท',
                content: 'การติดตั้งระบบ Logins LAB ใน ชัยนาท',
                hospitals: [
                    'รพ.มโนรมย์',
                    'รพ.วัดสิงห์',
                    'รพ.สรรคบุรี',
                    'รพ.สรรพยา',
                    'รพ.หนองมะโมง'
                ]
            },
            {
                id: 11,
                title: 'นครสวรรค์',
                content: 'การติดตั้งระบบ Logins LAB ใน นครสวรรค์',
                hospitals: [
                    'รพ.กองบิน 4',
                    'รพ.เก้าเลี้ยว',
                    'รพ.โกรกพระ',
                    'รพ.คลินิกแพทย์ธนวัศ',
                    'รพ.จิตเวชนครสวรรค์ฯ',
                    'รพ.ชุมตาบง',
                    'รพ.ตาคลี',
                    'รพ.บรรพตพิสัย',
                    'รพ.ไพศาลี',
                    'รพ.แม่วงก์'
                ]
            },
            {
                id: 12,
                title: 'นครปฐม',
                content: 'การติดตั้งระบบ Logins LAB ใน นครปฐม',
                hospitals: [
                    'รพ.จันทรุเบกษา',
                    'รพ.นครปฐม',
                    'รพ.สามพราน'
                ]
            },
            {
                id: 13,
                title: 'เพชรบุรี',
                content: 'การติดตั้งระบบ Logins LAB ใน เพชรบุรี',
                hospitals: [
                    'รพ.แก่งกระจาน'
                ]
            },
            {
                id: 14,
                title: 'ประจวบคีรีขันธ์',
                content: 'การติดตั้งระบบ Logins LAB ใน ประจวบคีรีขันธ์',
                hospitals: [
                    'รพ.ค่ายธนะรัชต์',
                    'รพ.กุยบุรี',
                    'รพ.สามร้อยยอด'
                ]
            },
            {
                id: 15,
                title: 'สมุทรปราการ',
                content: 'การติดตั้งระบบ Logins LAB ใน สมุทรปราการ',
                hospitals: [
                    'รพ.จุฬารัตน์ 3',
                    'รพ.บางนา 2',
                    'รพ.บางนา 5',
                    'รพ.บางพลี',
                    'รพ.พริ้นซ์สุวรรณภูมิ',
                    'รพ.เมืองสมุทรปากน้ำ'
                ]
            },
            {
                id: 16,
                title: 'สมุทรสาคร',
                content: 'การติดตั้งระบบ Logins LAB ใน สมุทรสาคร',
                hospitals: [
                    'รพ.มหาชัย 1',
                    'รพ.มหาชัย 2'
                ]
            }
        ]
    };
};

const SimpleCard = ({ id, title, content, hospitals }) => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = () => {
        setExpanded(!expanded);
    };
    const uniqueId = id || title;
    return (
        <Card elevation={3} sx={{
            height: '100%',
            backgroundColor: '#eeeeee',
        }}>
            <CardContent>
                <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{ fontFamily: 'Prompt' }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1, fontFamily: 'Prompt' }}
                >
                    {content}
                </Typography>

                <Accordion
                    expanded={expanded}
                    onChange={handleChange}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls={`panel-${uniqueId}-content`}
                        id={`panel-${uniqueId}-header`}
                    >
                        <Grid
                            container
                            spacing={0.5}
                            direction="row"
                            sx={{
                                justifyContent: "flex-start",
                                alignItems: "center",
                            }}
                        >
                            <LocalHospitalIcon sx={{ color: red[500] }} fontSize="small" />
                            <Typography
                                sx={{ fontFamily: 'Prompt', variant: 'content' }}
                            >
                                ติดตั้งระบบทั้งหมดจำนวน: {hospitals.length || 0} แห่ง
                            </Typography>
                        </Grid>
                    </AccordionSummary>

                    <AccordionDetails TransitionProps={{}}>
                        {hospitals && hospitals.length > 0 ? (
                            <Typography
                                gutterBottom
                                sx={{ fontFamily: 'Prompt' }}
                                fontWeight='400'
                                fontSize="12px"
                                component="div"
                            >
                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0 }}>
                                    {hospitals.map((hospital, idx) => (
                                        <li key={idx}>{hospital}</li>
                                    ))}
                                </ul>
                            </Typography>
                        ) : (
                            <Typography sx={{ fontFamily: 'Prompt', fontSize: "12px" }}>ไม่มีข้อมูลโรงพยาบาล</Typography>
                        )}
                    </AccordionDetails>
                </Accordion>

            </CardContent>
        </Card>
    );
};

const CentralRegion = () => {
    const hospitalData = getCardData();
    const cards = hospitalData.cards;
    const pageCoverUrl = hospitalData.pageCoverUrl;

    if (!cards || cards.length === 0) {
        return
        <Container maxWidth="lg"
            sx={{ py: 4 }}>
            <Typography
                sx={{ fontFamily: 'Prompt' }}
                align="center">ไม่พบข้อมูลภาคกลาง
            </Typography>
        </Container>;
    }

    return (
        <React.Fragment>
            <Box
                sx={{
                    height: { xs: '30vh', md: '40vh' },
                    width: '100%',
                    backgroundImage: `url(${pageCoverUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
                    mb: 4,
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    align="center"
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Prompt'
                    }}
                >
                    ภาคกลาง
                </Typography>
            </Box>

            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                >
                    {cards.map((card) => (
                        <Grid
                            item
                            key={card.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                            sx={{ display: 'flex' }}
                        >
                            <SimpleCard
                                id={card.id}
                                title={card.title}
                                content={card.content}
                                hospitals={card.hospitals}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </React.Fragment>
    )
};

export default CentralRegion;