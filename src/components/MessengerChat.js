import React, { useEffect } from 'react';

const MessengerChat = () => {
  useEffect(() => {
    // 1. สร้างฟังก์ชันสำหรับโหลด SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml            : true,
        version          : 'v18.0' // ใช้เวอร์ชันล่าสุด
      });
    };

    // 2. แทรกสคริปต์ Facebook ลงในหน้าเว็บ
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      {/* ใส่ Page ID ของคุณที่นี่ */}
      <div 
        className="fb-customerchat"
        attribution="install_email"
        page_id="110442531272528" 
      >
      </div>
    </>
  );
};

export default MessengerChat;