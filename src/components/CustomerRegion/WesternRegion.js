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
import CoverImg from '../../images/page-covers/hospital-main-cover-4.jpg';

const getCardData = () => {
  return {
    pageCoverUrl: CoverImg,
    cards: [
  {
    id: 1,
    title: "กาญจนบุรี",
    content: "การติดตั้งระบบ Logins LAB ใน กาญจนบุรี", 
    hospitals: ["รพ.ค่ายสุรสีห์", "รพ.ทองผาภูมิ", "รพ.มะการักษ์", "รพ.สังขละบุรี"]
  },
  {
    id: 2,
    title: "ราชบุรี",
    content: "การติดตั้งระบบ Logins LAB ใน ราชบุรี",
    hospitals: ["รพ.เจ็ดเสมียน", "รพ.บ้านคา", "รพ.สวนผึ้ง"]
  },
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

const WesternRegion = () => {
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
          ภาคตะวันตก
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

export default WesternRegion;