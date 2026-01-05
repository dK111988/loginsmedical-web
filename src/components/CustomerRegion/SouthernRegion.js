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
import CoverImg from '../../images/page-covers/hospital-main-cover-5.jpg';

const getCardData = () => {
  return {
    pageCoverUrl: CoverImg,
    cards: [
      {
        id: 1,
        title: "ชุมพร",
        content: "การติดตั้งระบบ Logins LAB ใน ชุมพร",
        hospitals: [
          "รพ.ท่าแซะ",
          "รพ.มาบอำมฤต",
          "รพ.สวี",
          "รพ.หลังสวน"
        ]
      },
      {
        id: 2,
        title: "สุราษฎร์ธานี",
        content: "การติดตั้งระบบ Logins LAB ใน สุราษฎร์ธานี",
        hospitals: [
          "รพ.กาญจนดิษฐ์",
          "รพ.ท่าชนะ",
          "รพ.ท่าโรงช้าง",
          "ศูนย์มะเร็งสุราษฎร์ธานี"
        ]
      },
      {
        id: 3,
        title: "พังงา",
        content: "การติดตั้งระบบ Logins LAB ใน พังงา",
        hospitals: [
          "รพ.ตะกั่วป่า"
        ]
      },
      {
        id: 4,
        title: "กระบี่",
        content: "การติดตั้งระบบ Logins LAB ใน กระบี่",
        hospitals: [
          "รพ.อ่าวลึก"
        ]
      },
      {
        id: 5,
        title: "ภูเก็ต",
        content: "การติดตั้งระบบ Logins LAB ใน ภูเก็ต",
        hospitals: [
          "รพ.มิชชั่น ภูเก็ต"
        ]
      },
      {
        id: 6,
        title: "ตรัง",
        content: "การติดตั้งระบบ Logins LAB ใน ตรัง",
        hospitals: [
          "รพ.กันตัง",
          "รพ.ตรัง",
          "รพ.สิเกา",
          "รพ.ห้วยยอด"
        ]
      },
      {
        id: 7,
        title: "สตูล",
        content: "การติดตั้งระบบ Logins LAB ใน สตูล",
        hospitals: [
          "รพ.ละงู"
        ]
      },
      {
        id: 8,
        title: "สงขลา",
        content: "การติดตั้งระบบ Logins LAB ใน สงขลา",
        hospitals: [
          "รพ.สงขลานครินทร์",
          "รพ.สมเด็จพระบรมราชินีนาถ ณ อำเภอนาทวี"
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

const SouthernRegion = () => {
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
          ภาคใต้
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

export default SouthernRegion;