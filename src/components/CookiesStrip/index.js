import React, { useState, useEffect } from "react";
import CookiesStripStyle from "./style";

const CookiesStrip = ({ step }) => {
  const [cookieAccepted, setCookieAccepted] = useState(false);

  useEffect(() => {
    setCookieAccepted(localStorage.getItem("cookie_accepted"));
  }, [localStorage]);

  return (
    <CookiesStripStyle>
      {!cookieAccepted && step == 1 && (
        <>
          <div className="cookies-content">
            By clicking "Accept All Cookies", you agree to the storing of
            cookies on your device to enhance site navigation, analyze site
            usage, and assist in our marketing efforts.{" "}
            <a href="#">Read Scouter’s cookie policy here.</a>
          </div>
          <div className="cookies-setting cookies-box">Cookies Settings</div>
          <div
            className="accept-cookies cookies-box"
            onClick={() => {
              localStorage.setItem("cookie_accepted", true);
              setCookieAccepted(true);
            }}
          >
            Accept All Cookies
          </div>
        </>
      )}
    </CookiesStripStyle>
  );
};

export default CookiesStrip;
