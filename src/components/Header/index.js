import React from "react";
import HeaderStyle from "./style";
import BrandLogo from "../../assets/images/brand-logo.png";
import Instagram from "../../assets/images/instagram.svg";
import Tiktok from "../../assets/images/tiktok.svg";
import Discord from "../../assets/images/discord.svg";
const header = ({ setStep }) => {
  return (
    <HeaderStyle>
      <div className="logo-area">
        <img src={BrandLogo} alt="" onClick={() => setStep(1)} />
      </div>
      <div className="social-links">
        <div>
          <img src={Instagram} alt="" />
        </div>
        <div>
          <img src={Tiktok} alt="" />
        </div>
        <div>
          <img src={Discord} alt="" />
        </div>
      </div>
    </HeaderStyle>
  );
};

export default header;
