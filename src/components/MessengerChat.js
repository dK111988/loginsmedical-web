import React, { useEffect } from 'react';

const MessengerChat = () => {
  useEffect(() => {
    // 1. ฟังก์ชันตั้งค่า SDK
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: 'v18.0'
      });
    };

    // 2. โหลด SDK script
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        // ถ้ามี SDK อยู่แล้ว ให้สั่ง Parse ใหม่เพื่อให้ Chat ปรากฏ
        if (window.FB) {
          window.FB.XFBML.parse();
        }
        return;
      }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/th_TH/sdk/xfbml.customerchat.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <div 
        className="fb-customerchat"
        attribution="biz_inbox" // ปรับตามมาตรฐานล่าสุดของ Meta
        page_id="110442531272528"
      >
      </div>
    </div>
  );
};

export default MessengerChat;