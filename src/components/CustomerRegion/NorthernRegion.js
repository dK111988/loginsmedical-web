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
import CoverImg from '../../images/page-covers/hospital-main-cover-6.jpg';

const getCardData = () => {
  return {
    pageCoverUrl: CoverImg,
    cards: [
      {
        id: 1,
        title: "กำแพงเพชร",
        content: "การติดตั้งระบบ Logins LAB ใน กำแพงเพชร",
        hospitals: [
          "รพ.โกสัมพีนคร",
          "รพ.คลองขลุง",
          "รพ.ทรายทองวัฒนา",
          "รพ.ทุ่งโพธิ์ทะเล",
          "รพ.ไทรงาม",
          "รพ.พรานกระต่าย"
        ]
      },
      {
        id: 2,
        title: "พิจิตร",
        content: "การติดตั้งระบบ Logins LAB ใน พิจิตร",
        hospitals: [
          "รพ.ชัยอรุณเวชการ",
          "รพ.ทับคล้อ",
          "รพ.บางมูลนาก",
          "รพ.สมเด็จพระยุพราชตะพานหิน"
        ]
      },
      {
        id: 3,
        title: "พิษณุโลก",
        content: "การติดตั้งระบบ Logins LAB ใน พิษณุโลก",
        hospitals: [
          "รพ.ค่ายสมเด็จพระนเรศวรมหาราช",
          "รพ.บางกระทุ่ม",
          "รพ.พิษณุเวช",
          "รพ.พุทธชินราช",
          "รพ.รวมแพทย์พิษณุโลก",
          "รพ.สมเด็จพระยุพราชนครไทย"
        ]
      },
      {
        id: 4,
        title: "สุโขทัย",
        content: "การติดตั้งระบบ Logins LAB ใน สุโขทัย",
        hospitals: [
          "รพ.กงไกรลาศ",
          "รพ.บ้านด่านลานหอย",
          "รพ.ศรีนคร",
          "รพ.สุวรรคโลก"
        ]
      },
      {
        id: 5,
        title: "ตาก",
        content: "การติดตั้งระบบ Logins LAB ใน ตาก",
        hospitals: [
          "รพ.แม่ระมาด",
          "รพ.แม่สอด-ราม",
          "รพ.วังเจ้า"
        ]
      },
      {
        id: 6,
        title: "แพร่",
        content: "การติดตั้งระบบ Logins LAB ใน แพร่",
        hospitals: [
          "รพ.ร้องกวาง",
          "รพ.สอง"
        ]
      },
      {
        id: 7,
        title: "ลำพูน",
        content: "การติดตั้งระบบ Logins LAB ใน ลำพูน",
        hospitals: [
          "รพ.พริ้นซ์ ลำพูน",
          "รพ.ศิริเวช ลำพูน",
          "รพ.หริภุญชัย เมโมเรียล",
          "รพ.หริภุญชัย ราม"
        ]
      },
      {
        id: 8,
        title: "น่าน",
        content: "การติดตั้งระบบ Logins LAB ใน น่าน",
        hospitals: [
          "รพ.เวียงสา",
          "รพ.สมเด็จพระยุพราชปัว"
        ]
      },
      {
        id: 9,
        title: "พะเยา",
        content: "การติดตั้งระบบ Logins LAB ใน พะเยา",
        hospitals: [
          "รพ.เชียงม่วน"
        ]
      },
      {
        id: 10,
        title: "เชียงใหม่",
        content: "การติดตั้งระบบ Logins LAB ใน เชียงใหม่",
        hospitals: [
          "รพ.เชียงดาว",
          "รพ.ฝาง",
          "รพ.แม่ตื่น",
          "รพ.ราชเวชเชียงใหม่",
          "รพ.สันป่าตอง",
          "รพ.สารภี",
          "รพ.อมก๋อย"
        ]
      },
      {
        id: 11,
        title: "แม่ฮ่องสอน",
        content: "การติดตั้งระบบ Logins LAB ใน แม่ฮ่องสอน",
        hospitals: [
          "รพ.ขุนยวม",
          "รพ.ปางมะผ้า",
          "รพ.ปาย",
          "รพ.แม่ลาน้อย",
          "รพ.แม่สะเรียง",
          "รพ.ศรีสังวาลย์",
          "รพ.สบเมย"
        ]
      },
      {
        id: 12,
        title: "เชียงราย",
        content: "การติดตั้งระบบ Logins LAB ใน เชียงราย",
        hospitals: [
          "รพ.แม่สรวย"
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

const NorthernRegion = () => {
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
          ภาคเหนือ
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

export default NorthernRegion;