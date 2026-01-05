import React from 'react';
import { Link } from 'react-scroll';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';

import newsimage1 from '../images/news/popupbanner.jpg';
import newsimage2 from '../images/news/mobile.jpg';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    overflow: 'visible',
  },
  '& .MuiDialogContent-root': {
    padding: 0,
    border: 'none',
    overflow: 'hidden', // ตัดหิมะที่ตกเลยขอบรูปภาพ
    position: 'relative', // เพื่อให้หิมะเทียบตำแหน่งกับกรอบนี้
    borderRadius: '12px',
  },
}));

// ฟังก์ชันสร้างหิมะสุ่ม
const Snowflakes = () => {
  return [...Array(20)].map((_, i) => {
    const size = Math.random() * 5 + 2 + 'px'; // ขนาด 2-7px
    const left = Math.random() * 100 + '%';    // ตำแหน่งแนวนอน
    const duration = Math.random() * 3 + 2 + 's'; // ความเร็ว 2-5 วินาที
    const delay = Math.random() * 5 + 's';        // ดีเลย์เริ่มตก
    
    return (
      <div
        key={i}
        className="snowflake"
        style={{
          width: size,
          height: size,
          left: left,
          animationDuration: duration,
          animationDelay: delay,
          filter: 'blur(1px)', // ทำให้ดูนวลเหมือนหิมะจริง
        }}
      />
    );
  });
};

const Header = () => {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => setOpen(false);

  const currentImage = isMobile ? newsimage2 : newsimage1;

  return (
    <div id='main'>
      <BootstrapDialog maxWidth='md' open={open} onClose={handleClose}>
        {/* ปุ่มปิดวงกลมสีส้ม ลอยอยู่นอกขอบ */}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            // ปรับตำแหน่งให้ออกไปนอกขอบรูปภาพ
            right: { xs: -5, sm: -15}, // บนมือถือขยับเข้าหน่อยกันหลุดจอ / บนคอมขยับออก
            top: { xs: -5, sm: -15 }, // ขยับขึ้นไปด้านบน
            zIndex: 10,

            // --- ปรับแต่งส่วนสีส้มและวงกลม ---
            backgroundColor: '#ff6600',
            color: '#fff',              
            borderRadius: '50%',        
            padding: '0px',            
            boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',

            '&:hover': {
              backgroundColor: '#e65c00', // สีส้มที่เข้มขึ้นเวลาเอาเมาส์ไปชี้
              transform: 'scale(1.1)',    // ขยายใหญ่ขึ้นเล็กน้อยเวลา Hover
              transition: 'all 0.2s ease-in-out',
            },
          }}
        >
          <CloseIcon sx={{ fontSize: { xs: '20px', sm: '28px' } }} />
        </IconButton>

        <DialogContent>
          {/* ส่วนของหิมะ */}
          <Snowflakes />
          
          <CardMedia
            sx={{
              maxWidth: isMobile ? '100%' : 950,
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            component="img"
            image={currentImage}
            alt="Banner 2026"
          />
        </DialogContent>
      </BootstrapDialog>

      {/* เนื้อหาหน้าเว็บเดิม */}
      <div className='pr-heading'>
        <h2>LOGINS MEDICAL</h2>
        <h1><span>CONFIDENCE</span> in MOTION</h1>
        <div className='header-btns'>
          <Link to='footer' smooth={true} duration={1000} className='header-btn'>CONTACT US</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;