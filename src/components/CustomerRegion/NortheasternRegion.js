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
import CoverImg from '../../images/page-covers/hospital-main-cover-3.jpg';

const getCardData = () => {
  return {
    pageCoverUrl: CoverImg,
    cards: [
      {
        "id": 1,
        "title": "นครราชสีมา",
        "content": "การติดตั้งระบบ Logins LAB ใน นครราชสีมา",
        "hospitals": [
          "รพ.ขามสะแกแสง",
          "รพ.เฉลิมพระเกียรติสมเด็จย่า 100 ปี เมืองยาง",
          "รพ.เดอะโกลเดนเกท",
          "รพ.โนนสูง",
          "รพ.บัวใหญ่",
          "รพ.บ้านเหลื่อม",
          "รพ.ปักธงชัย",
          "รพ.ปากช่องนานา",
          "รพ.ลำทะเมนชัย",
          "รพ.สีคิ้ว"
        ]
      },
      {
        "id": 2,
        "title": "ชัยภูมิ",
        "content": "การติดตั้งระบบ Logins LAB ใน ชัยภูมิ",
        "hospitals": [
          "รพ.แก้งคร้อ",
          "รพ.จัตุรัส",
          "รพ.ชัยภูมิ",
          "รพ.ภูเขียวเฉลิมพระเกียรติ",
          "รพ.หนองบัวแดง"
        ]
      },
      {
        "id": 3,
        "title": "ขอนแก่น",
        "content": "การติดตั้งระบบ Logins LAB ใน ขอนแก่น",
        "hospitals": [
          "รพ.ขอนแก่น",
          "รพ.ค่ายศรีพัชรินทร",
          "รพ.โคกโพธิ์ไชย",
          "รพ.ชุมแพ",
          "รพ.บ้านไผ่",
          "รพ.เปือยน้อย",
          "รพ.พระยืน",
          "รพ.พล",
          "รพ.ภูผาม่าน",
          "รพ.แวงใหญ่"
        ]
      },
      {
        "id": 4,
        "title": "บุรีรัมย์",
        "content": "การติดตั้งระบบ Logins LAB ใน บุรีรัมย์",
        "hospitals": [
          "รพ.กระสัง",
          "รพ.ค่ายสมเด็จเจ้าพระยามหากษัตริย์ศึก",
          "รพ.คูเมือง",
          "รพ.แคนดง",
          "รพ.นางรอง",
          "รพ.บุรีรัมย์ ราม",
          "รพ.ปะคำ",
          "รพ.พลับพลาชัย",
          "รพ.พุทไธสง",
          "รพ.สตึก"
        ]
      },
      {
        "id": 5,
        "title": "สุรินทร์",
        "content": "การติดตั้งระบบ Logins LAB ใน สุรินทร์",
        "hospitals": [
          "รพ.โนนนารายณ์",
          "รพ.ปราสาท",
          "รพ.พนมดงรัก เฉลิมพระเกียรติ 80 พรรษา",
          "รพ.ลำดวน",
          "รพ.สังขะ"
        ]
      },
      {
        "id": 6,
        "title": "ศรีสะเกษ",
        "content": "การติดตั้งระบบ Logins LAB ใน ศรีสะเกษ",
        "hospitals": [
          "รพ.กันทรลักษ์",
          "รพ.ขุนหาญ",
          "รพ.ปรางค์กู่",
          "รพ.ไพรบึง",
          "รพ.อุทุมพรพิสัย"
        ]
      },
      {
        "id": 7,
        "title": "อุบลราชธานี",
        "content": "การติดตั้งระบบ Logins LAB ใน อุบลราชธานี",
        "hospitals": [
          "รพ.50 พรรษา มหาวชิราลงกรณ",
          "รพ.ค่ายสรรพสิทธิประสงค์",
          "รพ.ตระการพืชผล",
          "รพ.พริ้นซ์ อุบลราชธานี",
          "รพ.ม่วงสามสิบ",
          "รพ.วารินชำราบ",
          "รพ.สมเด็จพระยุพราชเดชอุดม",
          "รพ.สรรพสิทธิประสงค์",
          "รพ.อุบลรักษ์ธนบุรี",
          "รพ.เอกชนร่มเกล้า"
        ]
      },
      {
        "id": 8,
        "title": "อำนาจเจริญ",
        "content": "การติดตั้งระบบ Logins LAB ใน อำนาจเจริญ",
        "hospitals": [
          "รพ.ชานุมาน",
          "รพ.เสนางคนิคม",
          "รพ.หัวตะพาน"
        ]
      },
      {
        "id": 9,
        "title": "ยโสธร",
        "content": "การติดตั้งระบบ Logins LAB ใน ยโสธร",
        "hospitals": [
          "รพ.กุดชุม",
          "รพ.ทรายมูล",
          "รพ.ยโสธร"
        ]
      },
      {
        "id": 10,
        "title": "ร้อยเอ็ด",
        "content": "การติดตั้งระบบ Logins LAB ใน ร้อยเอ็ด",
        "hospitals": [
          "รพ.ศรีสมเด็จ",
          "รพ.สุวรรณภูมิ",
          "รพ.หนองฮี",
          "รพ.อาจสามารถ"
        ]
      },
      {
        "id": 11,
        "title": "กาฬสินธุ์",
        "content": "การติดตั้งระบบ Logins LAB ใน กาฬสินธุ์",
        "hospitals": [
          "รพ.กมลาไสย",
          "รพ.ท่าคันโท",
          "รพ.ยางตลาด",
          "รพ.สมเด็จพระยุพราชกุฉินารายณ์"
        ]
      },
      {
        "id": 12,
        "title": "มุกดาหาร",
        "content": "การติดตั้งระบบ Logins LAB ใน มุกดาหาร",
        "hospitals": [
          "รพ.พริ้นซ์ มุกดาหาร",
          "รพ.มุกดาหาร"
        ]
      },
      {
        "id": 13,
        "title": "นครพนม",
        "content": "การติดตั้งระบบ Logins LAB ใน นครพนม",
        "hospitals": [
          "รพ.ท่าอุเทน",
          "รพ.นาแก",
          "รพ.โพนสวรรค์",
          "รพ.ศรีสงคราม"
        ]
      },
      {
        "id": 14,
        "title": "สกลนคร",
        "content": "การติดตั้งระบบ Logins LAB ใน สกลนคร",
        "hospitals": [
          "รพ.เจริญศิลป์",
          "รพ.นิคมน้ำอูน",
          "รพ.วานรนิวาส",
          "รพ.อากาศอำนวย"
        ]
      },
      {
        "id": 15,
        "title": "อุดรธานี",
        "content": "การติดตั้งระบบ Logins LAB ใน อุดรธานี",
        "hospitals": [
          "รพ.กุดจับ",
          "รพ.กุมภวาปี",
          "รพ.กู่แก้ว",
          "รพ.ค่ายประจักษ์ศิลปาคม",
          "รพ.ไชยวาน",
          "รพ.โนนสะอาด",
          "รพ.บ้านผือ",
          "รพ.ประจักษ์ศิลปาคม",
          "รพ.เพ็ญ",
          "รพ.มะเร็งอุดร",
          "รพ.สมเด็จพระยุพราชบ้านดุง",
          "รพ.หนองแสง",
          "รพ.บ้านไร่",
          "รพ.ลานสัก"
        ]
      },
      {
        "id": 16,
        "title": "หนองบัวลำภู",
        "content": "การติดตั้งระบบ Logins LAB ใน หนองบัวลำภู",
        "hospitals": [
          "รพ.นาวัง เฉลิมพระเกียรติ 80 พรรษา",
          "รพ.ศรีบุญเรือง",
          "รพ.สุวรรณคูหา"
        ]
      },
      {
        "id": 17,
        "title": "เลย",
        "content": "การติดตั้งระบบ Logins LAB ใน เลย",
        "hospitals": [
          "รพ.จิตเวชเลยราชนครินทร์",
          "รพ.เชียงคาน",
          "รพ.นาแห้ว",
          "รพ.วังสะพุง",
          "รพ.สมเด็จพระยุพราชด่านซ้าย",
          "รพ.หนองหิน"
        ]
      },
      {
        "id": 18,
        "title": "หนองคาย",
        "content": "การติดตั้งระบบ Logins LAB ใน หนองคาย",
        "hospitals": [
          "รพ.ศรีเชียงใหม่",
          "รพ.สมเด็จพระยุพราชท่าบ่อ"
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

const NortheasternRegion = () => {
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
          ภาคตะวันออก
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

export default NortheasternRegion;