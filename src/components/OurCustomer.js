import Grid from '@mui/material/Grid';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { red } from '@mui/material/colors';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import React from 'react';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/joy';
import DecryptedText from '../animation/decryptedText/DecryptedText';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import cimage1 from '../images/image-1.jpg';
import cimage2 from '../images/image-2.jpg';
import cimage3 from '../images/image-3.jpg';
import cimage4 from '../images/image-4.jpg';
import cimage5 from '../images/image-5.jpg';
import cimage6 from '../images/image-6.jpg';

const OurCustomer = () => {
    return (
        <>
            <div id='ourcustomer'>
                <h1><DecryptedText text="OUR CUSTOMER" /></h1>
                <Grid
                    container
                    spacing={1.5}
                    sx={{
                        justifyContent: "center",
                        alignItems: "flex-start",
                    }}
                >
                    <Grid item gl={1} sx={3} md={2} position= 'relative'>
                        <Card sx={{ maxWidth: 250}}>

                            <CardMedia
                                component="img"
                                height="200"
                                image={cimage1}
                                alt="ภาคกลาง"
                            />
                            <CardContent sx={{ p: 1 }}>
                                <Typography gutterBottom variant="h6" component="div" fontFamily='prompt'>
                                    ภาคกลาง
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    ติดตั้งทั้งหมด : จำนวน 44 โรงพยาบาล
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    รายชื่อโรงพยาบาล ดังนี้ :
                                </Typography>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                กรุงเทพมหานคร: 12 แห่ง
                                            </Typography>


                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="12px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.เกษมราษฎร์ รามคำแหง</li>
                                                <li>คณะสหเวชศาสตร์ จุฬาลงกรณ์</li>
                                                <li>บ.กรุงเทพ พยาธิ-แลป</li>
                                                <li>รพ.หลวงพ่อทวีศักดิ์ ชุตินฺธโร อุทิศ</li>
                                                <li>รพ.บางนา 1</li>
                                                <li>รพ.บางไผ่</li>
                                                <li>รพ.ราชพิพัฒน์</li>
                                                <li>รพ.วิชัยเวช แยกไฟฉาย</li>
                                                <li>ศูนย์ผู้สูงอายุ มาสเตอร์ ซีเนียร์ โฮม</li>
                                                <li>รพ.สายไหม CGH</li>
                                                <li>รพ.สินแพทย์ ศรีนครินทร์</li>
                                                <li>รพ.หลวงพ่อทวีศักดิ์ ชุตินฺธโร อุทิศ</li>
                                            </ul>
                                        </Typography>

                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel3-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                นครนายก: 1 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.กองแพทย์ รร.เตรียมทหาร</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel5-header"
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
                                            <Typography fontFamily='prompt' variant="content">

                                                นนทบุรี: 1 แห่ง
                                            </Typography>

                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.เวิลด์ เมดิคอล เซ็นเตอร์</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel6-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ปทุมธานี: 2 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ธัญบุรี</li>
                                                <li>รพ.ภัทร-ธนบุรี</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สระบุรี: 3 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.แก่งคอย</li>
                                                <li>รพ.วิหารแดง</li>
                                                <li>รพ.เสาไห้ฯ</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel8-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                พระนครศรีอยุธยา: 7 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.บางบาล</li>
                                                <li>รพ.บางปะหัน</li>
                                                <li>รพ.บ้านแพรก</li>
                                                <li>รพ.ผักไห่</li>
                                                <li>รพ.ศุภมิตรเสนา</li>
                                                <li>รพ.เสนา</li>
                                                <li>รพ.อุทัย</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สุพรรณบุรี: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ดอนเจดีย์</li>
                                                <li>รพ.บางปลาม้า</li>
                                                <li>รพ.สามชุก</li>
                                                <li>รพ.อู่ทอง</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                อ่างทอง: 3 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ไชโย </li>
                                                <li>รพ.โพธิ์ทอง </li>
                                                <li>รพ.อ่างทองเวชชการ 2</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สิงห์บุรี: 5 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ค่ายบางระจัน</li>
                                                <li>รพ.ท่าช้าง</li>
                                                <li>รพ.บางระจัน</li>
                                                <li>รพ.พรหมบุรี</li>
                                                <li>รพ.อินทร์บุรี</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel2-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ชัยนาท: 5 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.มโนรมย์</li>
                                                <li>รพ.วัดสิงห์</li>
                                                <li>รพ.สรรคบุรี</li>
                                                <li>รพ.สรรพยา</li>
                                                <li>รพ.หนองมะโมง</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                นครสวรรค์: 10 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.กองบิน 4</li>
                                                <li>รพ.เก้าเลี้ยว</li>
                                                <li>รพ.โกรกพระ</li>
                                                <li>รพ.คลินิกแพทย์ธนวัศ</li>
                                                <li>รพ.จิตเวชนครสวรรค์ฯ</li>
                                                <li>รพ.ชุมตาบง</li>
                                                <li>รพ.ตาคลี</li>
                                                <li>รพ.บรรพตพิสัย</li>
                                                <li>รพ.ไพศาลี</li>
                                                <li>รพ.แม่วงก์</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel4-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                นครปฐม: 3 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.จันทรุเบกษา</li>
                                                <li>รพ.นครปฐม</li>
                                                <li>รพ.สามพราน</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                เพชรบุรี: 1 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.แก่งกระจาน</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel7-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ประจวบคีรีขันธ์: 3 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ค่ายธนะรัชต์</li>
                                                <li>รพ.กุยบุรี</li>
                                                <li>รพ.สามร้อยยอด</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สมุทรปราการ: 6 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.จุฬารัตน์ 3</li>
                                                <li>รพ.บางนา 2</li>
                                                <li>รพ.บางนา 5</li>
                                                <li>รพ.บางพลี</li>
                                                <li>รพ.พริ้นซ์สุวรรณภูมิ</li>
                                                <li>รพ.เมืองสมุทรปากน้ำ</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สมุทรสาคร: 2 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.มหาชัย 1</li>
                                                <li>รพ.มหาชัย 2</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </CardContent>
                            <div />
                        </Card>
                    </Grid>
                    {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ภาคกลาง */}
                    <Grid item gl={1} sx={3} md={2} position= 'relative'>
                        <Card sx={{ maxWidth: 250 }}>

                            <CardMedia
                                component="img"
                                height="200"
                                image={cimage2}
                                alt="ภาคตะวันออก"
                            />
                            <CardContent sx={{ p: 1 }}>
                                <Typography gutterBottom variant="h6" component="div" fontFamily='prompt'>
                                    ภาคตะวันออก
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    ติดตั้งทั้งหมด : จำนวน 14 โรงพยาบาล
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    รายชื่อโรงพยาบาล ดังนี้ :
                                </Typography>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สระแก้ว: 2 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.คลองหาด</li>
                                                <li>รพ.วังน้ำเย็น</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ปราจีนบุรี: 1 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ศรีมหาโพธิ</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ฉะเชิงเทรา: 1 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.บางคล้า</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ชลบุรี: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.พนัสนิคม</li>
                                                <li>มหาวิทยาลัยบูรพา</li>
                                                <li>รพ.มะเร็งชลบุรี</li>
                                                <li>รพ.สัตหีบ กม.10</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ระยอง: 1 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.แกลง</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                จันทบุรี: 6 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.แก่งหางแมว</li>
                                                <li>รพ.เขาสุกิม</li>
                                                <li>รพ.ท่าใหม่</li>
                                                <li>รพ.นายายอาม</li>
                                                <li>รพ.มะขาม</li>
                                                <li>รพ.สองพี่น้อง</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </CardContent>

                        </Card>
                    </Grid>
                    {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ภาคตะวันออก */}
                    <Grid item gl={1} sx={3} md={2} position= 'relative'>
                        <Card sx={{ maxWidth: 250 }} >

                            <CardMedia
                                component="img"
                                height="200"
                                image={cimage3}
                                alt="ภาคตะวันออกเฉียงเหนือ"
                            />
                            <CardContent sx={{ p: 1 }}>
                                <Typography gutterBottom variant="h6" component="div" fontFamily='prompt'>
                                    ภาคตะวันออกเฉียงเหนือ
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    ติดตั้งทั้งหมด : จำนวน 97 แห่ง
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    รายชื่อโรงพยาบาล ดังนี้ :
                                </Typography>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                นครราชสีมา: 10 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ขามสะแกแสง</li>
                                                <li>รพ.เฉลิมพระเกียรติสมเด็จย่า 100 ปี เมืองยาง</li>
                                                <li>รพ.เดอะโกลเดนเกท</li>
                                                <li>รพ.โนนสูง</li>
                                                <li>รพ.บัวใหญ่</li>
                                                <li>รพ.บ้านเหลื่อม</li>
                                                <li>รพ.ปักธงชัย</li>
                                                <li>รพ.ปากช่องนานา</li>
                                                <li>รพ.ลำทะเมนชัย</li>
                                                <li>รพ.สีคิ้ว</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ชัยภูมิ: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.แก้งคร้อ</li>
                                                <li>รพ.จัตุรัส</li>
                                                <li>รพ.ชัยภูมิ</li>
                                                <li>รพ.ภูเขียวเฉลิมพระเกียรติ</li>
                                                <li>รพ.หนองบัวแดง</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ขอนแก่น: 10 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ขอนแก่น</li>
                                                <li>รพ.ค่ายศรีพัชรินทร</li>
                                                <li>รพ.โคกโพธิ์ไชย</li>
                                                <li>รพ.ชุมแพ</li>
                                                <li>รพ.บ้านไผ่</li>
                                                <li>รพ.เปือยน้อย</li>
                                                <li>รพ.พระยืน</li>
                                                <li>รพ.พล</li>
                                                <li>รพ.ภูผาม่าน</li>
                                                <li>รพ.แวงใหญ่</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                บุรีรัมย์: 10 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.กระสัง</li>
                                                <li>รพ.ค่ายสมเด็จเจ้าพระยามหากษัตริย์ศึก</li>
                                                <li>รพ.คูเมือง</li>
                                                <li>รพ.แคนดง</li>
                                                <li>รพ.นางรอง</li>
                                                <li>รพ.บุรีรัมย์ ราม</li>
                                                <li>รพ.ปะคำ</li>
                                                <li>รพ.พลับพลาชัย</li>
                                                <li>รพ.พุทไธสง</li>
                                                <li>รพ.สตึก</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สุรินทร์ : 5 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.โนนนารายณ์</li>
                                                <li>รพ.ปราสาท</li>
                                                <li>รพ.พนมดงรัก เฉลิมพระเกียรติ 80 พรรษา</li>
                                                <li>รพ.ลำดวน</li>
                                                <li>รพ.สังขะ</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ศรีสะเกษ: 5 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.กันทรลักษ์</li>
                                                <li>รพ.ขุนหาญ</li>
                                                <li>รพ.ปรางค์กู่</li>
                                                <li>รพ.ไพรบึง</li>
                                                <li>รพ.อุทุมพรพิสัย</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                อุบลราชธานี: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.50 พรรษา มหาวชิราลงกรณ</li>
                                                <li>รพ.ค่ายสรรพสิทธิประสงค์</li>
                                                <li>รพ.ตระการพืชผล</li>
                                                <li>รพ.พริ้นซ์ อุบลราชธานี</li>
                                                <li>รพ.ม่วงสามสิบ</li>
                                                <li>รพ.วารินชำราบ</li>
                                                <li>รพ.สมเด็จพระยุพราชเดชอุดม</li>
                                                <li>รพ.สรรพสิทธิประสงค์</li>
                                                <li>รพ.อุบลรักษ์ธนบุรี</li>
                                                <li>รพ.เอกชนร่มเกล้า</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                อำนาจเจริญ: 3 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ชานุมาน</li>
                                                <li>รพ.เสนางคนิคม</li>
                                                <li>รพ.หัวตะพาน</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ยโสธร: 3 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.กุดชุม</li>
                                                <li>รพ.ทรายมูล</li>
                                                <li>รพ.ยโสธร</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ร้อยเอ็ด: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ศรีสมเด็จ</li>
                                                <li>รพ.สุวรรณภูมิ</li>
                                                <li>รพ.หนองฮี</li>
                                                <li>รพ.อาจสามารถ</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                กาฬสินธุ์: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.กมลาไสย</li>
                                                <li>รพ.ท่าคันโท</li>
                                                <li>รพ.ยางตลาด</li>
                                                <li>รพ.สมเด็จพระยุพราชกุฉินารายณ์</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                มุกดาหาร: 2 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.พริ้นซ์ มุกดาหาร</li>
                                                <li>รพ.มุกดาหาร</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                นครพนม: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ท่าอุเทน</li>
                                                <li>รพ.นาแก</li>
                                                <li>รพ.โพนสวรรค์</li>
                                                <li>รพ.ศรีสงคราม</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สกลนคร: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.เจริญศิลป์</li>
                                                <li>รพ.นิคมน้ำอูน</li>
                                                <li>รพ.วานรนิวาส</li>
                                                <li>รพ.อากาศอำนวย</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                อุดรธานี: 14 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.กุดจับ</li>
                                                <li>รพ.กุมภวาปี</li>
                                                <li>รพ.กู่แก้ว</li>
                                                <li>รพ.ค่ายประจักษ์ศิลปาคม</li>
                                                <li>รพ.ไชยวาน</li>
                                                <li>รพ.โนนสะอาด</li>
                                                <li>รพ.บ้านผือ</li>
                                                <li>รพ.ประจักษ์ศิลปาคม</li>
                                                <li>รพ.เพ็ญ</li>
                                                <li>รพ.มะเร็งอุดร</li>
                                                <li>รพ.สมเด็จพระยุพราชบ้านดุง</li>
                                                <li>รพ.หนองแสง</li>
                                                <li>รพ.บ้านไร่</li>
                                                <li>รพ.ลานสัก</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                หนองบัวลำภู: 3 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.นาวัง เฉลิมพระเกียรติ 80 พรรษา</li>
                                                <li>รพ.ศรีบุญเรือง</li>
                                                <li>รพ.สุวรรณคูหา</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                เลย: 6 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.จิตเวชเลยราชนครินทร์</li>
                                                <li>รพ.เชียงคาน</li>
                                                <li>รพ.นาแห้ว</li>
                                                <li>รพ.วังสะพุง</li>
                                                <li>รพ.สมเด็จพระยุพราชด่านซ้าย</li>
                                                <li>รพ.หนองหิน</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                หนองคาย: 2 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ศรีเชียงใหม่</li>
                                                <li>รพ.สมเด็จพระยุพราชท่าบ่อ</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </CardContent>
                        </Card>
                    </Grid>
                    {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ภาคตตะวันออกเฉียงเหนือ */}
                    <Grid item gl={1} sx={3} md={2} position= 'relative'>
                        <Card sx={{ maxWidth: 250 }}>

                            <CardMedia
                                component="img"
                                height="200"
                                image={cimage4}
                                alt="ภาคตะวันตก"
                            />
                            <CardContent sx={{ p: 1 }}>
                                <Typography gutterBottom variant="h6" component="div" fontFamily='prompt'>
                                    ภาคตะวันตก
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    ติดตั้งทั้งหมด : จำนวน 7 แห่ง
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    รายชื่อโรงพยาบาล ดังนี้ :
                                </Typography >

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                กาญจนบุรี: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ค่ายสุรสีห์</li>
                                                <li>รพ.ทองผาภูมิ</li>
                                                <li>รพ.มะการักษ์</li>
                                                <li>รพ.สังขละบุรี</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ราชบุรี: 3 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.เจ็ดเสมียน</li>
                                                <li>รพ.บ้านคา</li>
                                                <li>รพ.สวนผึ้ง</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>


                            </CardContent>

                        </Card>
                    </Grid>
                    {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ภาคตะวันตก */}
                    <Grid item gl={1} sx={3} md={2} position= 'relative'>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={cimage5}
                                alt="ภาคตะวันออก"
                            />
                            <CardContent sx={{ p: 1 }}>
                                <Typography gutterBottom variant="h6" fontFamily='prompt'>
                                    ภาคใต้
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    ติดตั้งทั้งหมด : จำนวน 15 โรงพยาบาล
                                </Typography>
                                <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                    รายชื่อโรงพยาบาล ดังนี้ :
                                </Typography>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ชุมพร: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ท่าแซะ</li>
                                                <li>รพ.มาบอำมฤต</li>
                                                <li>รพ.สวี</li>
                                                <li>รพ.หลังสวน</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สุราษฎร์ธานี: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.กาญจนดิษฐ์</li>
                                                <li>รพ.ท่าชนะ</li>
                                                <li>รพ.ท่าโรงช้าง</li>
                                                <li>ศูนย์มะเร็งสุราษฎร์ธานี</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                พังงา: 1 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ตะกั่วป่า</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                กระบี่: 1 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.อ่าวลึก</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ภูเก็ต: 1 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.มิชชั่น ภูเก็ต</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                ตรัง: 4 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.กันตัง</li>
                                                <li>รพ.ตรัง</li>
                                                <li>รพ.สิเกา</li>
                                                <li>รพ.ห้วยยอด</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สตูล: 1 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.ละงู</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ArrowDropDownIcon />}
                                        aria-controls="panel1-content"
                                        id="panel9-header"
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
                                            <Typography fontFamily='prompt' variant="content">
                                                สงขลา: 2 แห่ง
                                            </Typography>
                                        </Grid>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                <li>รพ.สงขลานครินทร์</li>
                                                <li>รพ.สมเด็จพระบรมราชินีนาถ ณ อำเภอนาทวี</li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </CardContent>
                        </Card>
                    </Grid>
                    {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ภาคใต้ */}
                    <Grid item gl={1} sx={3} md={2} position= 'relative'>
                        <Card sx={{ maxWidth: 250 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={cimage6}
                                    alt="ภาคเหนือ"
                                />
                                <CardContent sx={{ p: 1 }}>
                                    <Typography gutterBottom variant="h6" component="div" fontFamily='prompt'>
                                        ภาคเหนือ
                                    </Typography>
                                    <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                        ติดตั้งทั้งหมด : จำนวน 51 แห่ง
                                    </Typography>
                                    <Typography fontFamily='prompt' variant="body2" sx={{ color: 'text.secondary' }}>
                                        รายชื่อโรงพยาบาล ดังนี้ :
                                    </Typography>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    กำแพงเพชร: 4 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.โกสัมพีนคร</li>
                                                    <li>รพ.คลองขลุง</li>
                                                    <li>รพ.ทรายทองวัฒนา</li>
                                                    <li>รพ.ทุ่งโพธิ์ทะเล</li>
                                                    <li>รพ.ไทรงาม</li>
                                                    <li>รพ.พรานกระต่าย</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    พิจิตร: 4 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.ชัยอรุณเวชการ</li>
                                                    <li>รพ.ทับคล้อ</li>
                                                    <li>รพ.บางมูลนาก</li>
                                                    <li>รพ.สมเด็จพระยุพราชตะพานหิน</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    เพชรบูรณ์: 6 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.น้ำหนาว</li>
                                                    <li>รพ.บึงสามพัน</li>
                                                    <li>รพ.วิเชียรบุรี</li>
                                                    <li>รพ.ศรีเทพ</li>
                                                    <li>รพ.หนองไผ่</li>
                                                    <li>รพ.หล่มสัก</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    พิษณุโลก: 6 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.ค่ายสมเด็จพระนเรศวรมหาราช</li>
                                                    <li>รพ.บางกระทุ่ม</li>
                                                    <li>รพ.พิษณุเวช</li>
                                                    <li>รพ.พุทธชินราช</li>
                                                    <li>รพ.รวมแพทย์พิษณุโลก</li>
                                                    <li>รพ.สมเด็จพระยุพราชนครไทย</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    สุโขทัย: 4 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.กงไกรลาศ</li>
                                                    <li>รพ.บ้านด่านลานหอย</li>
                                                    <li>รพ.ศรีนคร</li>
                                                    <li>รพ.สุวรรคโลก</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    ตาก: 3 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.แม่ระมาด</li>
                                                    <li>รพ.แม่สอด-ราม</li>
                                                    <li>รพ.วังเจ้า</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    แพร่: 2 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.ร้องกวาง</li>
                                                    <li>รพ.สอง</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    ลำพูน: 4 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.พริ้นซ์ ลำพูน</li>
                                                    <li>รพ.ศิริเวช ลำพูน</li>
                                                    <li>รพ.หริภุญชัย เมโมเรียล</li>
                                                    <li>รพ.หริภุญชัย ราม</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    น่าน: 2 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.เวียงสา</li>
                                                    <li>รพ.สมเด็จพระยุพราชปัว</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    พะเยา: 1 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.เชียงม่วน</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    เชียงใหม่: 7 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.เชียงดาว</li>
                                                    <li>รพ.ฝาง</li>
                                                    <li>รพ.แม่ตื่น</li>
                                                    <li>รพ.ราชเวชเชียงใหม่</li>
                                                    <li>รพ.สันป่าตอง</li>
                                                    <li>รพ.สารภี</li>
                                                    <li>รพ.อมก๋อย</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    แม่ฮ่องสอน: 7 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.ขุนยวม</li>
                                                    <li>รพ.ปางมะผ้า</li>
                                                    <li>รพ.ปาย</li>
                                                    <li>รพ.แม่ลาน้อย</li>
                                                    <li>รพ.แม่สะเรียง</li>
                                                    <li>รพ.ศรีสังวาลย์</li>
                                                    <li>รพ.สบเมย</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon />}
                                            aria-controls="panel1-content"
                                            id="panel9-header"
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
                                                <Typography fontFamily='prompt' variant="content">
                                                    เชียงราย: 1 แห่ง
                                                </Typography>
                                            </Grid>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography gutterBottom fontFamily='prompt' fontWeight='400' fontSize="13px" component="div">
                                                <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                                    <li>รพ.แม่สรวย</li>
                                                </ul>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    {/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| ภาคเหนือ */}
                </Grid>
            </div >
        </>
    )
}

export default OurCustomer