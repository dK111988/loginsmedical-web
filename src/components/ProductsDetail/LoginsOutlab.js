import React from 'react';
import oimage1 from '../../images/p-outlab/outlab-cover.jpg';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CardActionArea from '@mui/material/CardActionArea';

const LoginsOutlab = () => {
  return (
    <div id='product-detail'>
      <h1> LOGINS OUTLAB</h1>
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
                                    src="https://www.youtube.com/embed/esdRRH15oFg?si=L96ACSLaG6-VW2UL"
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

          maxWidth: 800,
          borderRadius: 1,
          bgcolor: ''
        }}>
          <CardContent>
            <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
              (ระบบรับผลตรวจเข้าโปรแกรมอัตโนมัติ )
            </Typography>
            <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
              เป็นระบบที่ถูกออกแบบมาเพื่ออำนวยความสะดวกสำหรับโรงพยาบาลที่ใช้งานระบบ LogInSLAB เท่านั้น และมีเคสที่ต้องส่งตรวจภายนอกหรือ เคส Outlab นั่นเอง
              ซึ่งหน้าที่และการทำงานของระบบ ระบบจะสามารถส่งรายการตรวจไปยัง ศูนย์ LAB ภายนอก พร้อมทั้ง Barcode เพื่อความสะดวกของทางศูนย์ตรวจ และรายการตรวจนั้น
              ได้รับการApprove จากศูนย์ตรวจแล้ว ระบบจะดึงใบผล หรือ Sacan ผลตรวจเข้าระบบเข้ามาแนบในระบบให้อัตโนมัติ ซึ่งรองรับไฟล์ ภาพและนามสกุลที่ตกลงกัน ณ
              ปัจจุบันมีการเชื่อมต่ออยู่กับ RIA, BRIA, TLC (ศูนย์แลบธนบุรี), N Health เป็นต้น

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
          maxWidth: '800',
          borderRadius: 1,
          bgcolor: ''
        }}
        >
          <Card sx={{ m: 2 }}>
            <CardContent>
              <Typography fontFamily='prompt' gutterBottom variant='h6' color='#F17834' >
                ฟังก์ชั่นและความสามารถเด่น
              </Typography>
              <Typography gutterBottom fontFamily='prompt' fontWeight='350'  fontSize="14px" sx={{ display: 'block' }}>
                ระบบสามารถช่วยตรวจสอบรายการสั่งตรวจที่ถูกต้อง ครบถ้วน และตรงกับชนิดตัวอย่างที่ส่งไปยังศูนย์ Lab ภายนอก (Outlab) โดยอัตโนมัติ เพื่อลดความคลาดเคลื่อนและป้องกันการสั่งซ้ำ
                เมื่อตรวจเสร็จและมีผลตรวจ ระบบจะดึงข้อมูลผลและแนบไฟล์ผลตรวจกลับมายังโรงพยาบาลทันที ทำให้รับข้อมูลได้อย่างรวดเร็วและครบถ้วน โดยไม่ต้องพิมพ์หรือแนบไฟล์ด้วยตนเอง
                ส่งผลให้คุณภาพการดูแลผู้ป่วยมีความต่อเนื่องและแม่นยำมากขึ้นระยะเวลาตั้งแต่ส่งตรวจถึงได้ผล TAT (turnaround time) ลดลงอย่างมีนัยสำคัญ อีกทั้งยังช่วยเพิ่มความแม่นยำและประสิทธิภาพในการทำงาน

              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </div>
  )
}

export default LoginsOutlab;