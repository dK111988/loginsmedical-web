import React from 'react';
import { useTheme } from '@mui/material/styles';
import aboutimage from '../images/about.png';
import featureimage1 from '../images/feature/feature1.jpg';
import featureimage2 from '../images/feature/feature2.jpg';
import featureimage3 from '../images/feature/feature3.jpg';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

const Feature = () => {
  const theme = useTheme();
  
  // กำหนดขนาด Grid item สำหรับ layout หลัก
  // บนจอขนาดเล็ก (xs) ให้เต็ม 12 คอลัมน์ (เรียงซ้อนกัน)
  // บนจอขนาดกลาง/ใหญ่ (md) ให้แบ่งเป็น 6 คอลัมน์ต่อส่วน (อยู่ข้างกัน)
  const mainGridSize = { xs: 12, md: 6 };

  return (
    <Box id='features' sx={{ py: 4 }}> {/* ใช้ Box แทน div และเพิ่ม padding แนวตั้ง */}
      <Grid 
        container 
        spacing={4} // เพิ่มระยะห่างระหว่าง Grid items
        justifyContent="center"
        alignItems="flex-start" // จัดตำแหน่งเนื้อหาให้อยู่ด้านบน
      >
        
        {/* === ส่วนรูปภาพหลัก === */}
        <Grid item {...mainGridSize}>
          <Card elevation={4} sx={{ maxWidth: 800, mx: 'auto' }}> {/* เพิ่มเงาและให้ Card อยู่กึ่งกลาง */}
            <CardActionArea>
              <CardMedia
                component="img"
                // ลบการกำหนด height/maxWidth แบบ hardcode บนคอมโพเนนต์ img ออก
                // แต่สามารถกำหนดความสูงขั้นต่ำสำหรับภาพใหญ่ได้ (minHeight)
                sx={{
                  width: '100%',
                  height: 'auto',
                  minHeight: 300, 
                  maxHeight: 515,
                  objectFit: 'cover'
                }}
                image={aboutimage}
                alt="CompanyProfile"
              />
            </CardActionArea>
          </Card>
        </Grid>
        
        {/* === ส่วนเนื้อหา/คำอธิบาย === */}
        <Grid item {...mainGridSize}>
          <Box sx={{ maxWidth: 800, mx: 'auto', p: { xs: 2, md: 0 } }}> {/* เพิ่ม padding สำหรับจอเล็ก */}
            <CardContent sx={{ p: 0 }}> {/* ลบ padding เริ่มต้นของ CardContent */}
              <Typography
                fontFamily='prompt'
                fontWeight='600'
                gutterBottom 
                variant='h4'
                color='#F17834'
              >
                New FEATURE 2025
              </Typography>
              <Typography
                fontFamily='prompt'
                fontWeight='600'
                gutterBottom 
                variant='h2'
                color='#2F365B'
                sx={{ mb: 2 }} // เพิ่ม margin bottom
              >
                LogInS BACTERIA
              </Typography>
              <Typography 
                component="p" // เปลี่ยน variant='caption' เป็น p เพื่อให้อ่านง่าย
                fontFamily='prompt' 
                fontSize="16px"
                gutterBottom 
                variant='body1' // ใช้ body1 แทน caption
                color='#1F233B' 
                sx={{ 
                  display: 'block',
                  textIndent: '2em', 
                  lineHeight: 1.8,
                  textAlign: 'justify' // เพิ่มการจัดข้อความให้ชิดขอบ
                }}
              >
                ระบบงานพยาธิวิทยา ระบบที่สามารถจัดการเกี่ยวกับลงทะเบียน ตรวจรับสิ่งส่งตรวจด้วย Barcode และยังสามารถ Runing Number ของสิ่งส่งตรวจได้
                ทั้งนี้มีระบบของการรายงานผลเบื้องต้น (Preliminary Report, Additional Report) และรายงานผล (Final Report),
                ระบบ Multi Result, Colony Count, Organism Isolate, MDR (ตั้งค่าการแปลผล)
                Sensitivity Test (ชุดยาทดสอบ) แสดงข้อมูลตามเชื้อ/กลุ่มเชื้อ สามารถดูผลการทดสอบยา Disk Diffusion Zone และ MIC &nbsp;แปลผล “S” ,”SDD”, “I” “R” ตามการตั้งค่า
                สามารถแสดงการเตือน การดื้อยา Intrinsic Resistance ได้ ซึ่งระบบยังสมารถ CLSI Update ให้เป็นปัจจุบันได้ สามารถศึกษาข้อมูลเพิ่มเติมได้จากหัวข้อ Logins Bacteria
              </Typography>

              {/* === ส่วนรูปภาพ Feature ย่อย === */}
              <Grid
                container
                spacing={2} // เพิ่ม spacing ระหว่างรูปภาพ
                sx={{
                  justifyContent: 'center',
                  mt: 3 // เพิ่ม margin top
                }}
              >
                {/* ใช้ Array.map() เพื่อลดโค้ดซ้ำซ้อน และใช้ Grid item */}
                {[featureimage1, featureimage2, featureimage3].map((img, index) => (
                  <Grid item key={index} xs={12} sm={4} md={4} sx={{ maxWidth: 250 }}> {/* กำหนดขนาด responsive สำหรับรูปย่อย */}
                    <CardMedia
                      component="img"
                      image={img}
                      alt={`Feature Image ${index + 1}`}
                      sx={{ 
                        height: 160, 
                        width: '100%', 
                        objectFit: 'cover',
                        borderRadius: 1 // เพิ่มขอบโค้ง
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default Feature;