import React, { useEffect } from 'react';

const MessengerChat = () => {
  useEffect(() => {
    // 1. สร้าง fbAsyncInit ไว้รองรับการโหลด SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v18.0' // ตรวจสอบ Version ล่าสุดใน Dashboard อีกครั้ง
      });
    };

    // 2. ฟังก์ชันโหลด SDK Script
    const loadSDK = () => {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          if (window.FB) window.FB.XFBML.parse();
          return;
        }
        js = d.createElement(s); 
        js.id = id;
        js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadSDK();
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      {/* ต้องตรวจสอบใน Meta Business Suite ว่าได้ Whitelist Domain ของคุณแล้วหรือยัง 
        ไปที่: การตั้งค่า > กล่องข้อความ > ปลั๊กอินแชท
      */}
      <div 
        className="fb-customerchat"
        attribution="biz_inbox"
        page_id="110442531272528"
      >
      </div>
    </>
  );
};

export default MessengerChat;