import React from "react";
import ThankyouStyle from "./style";

const Thankyou = () => {
  return (
    <ThankyouStyle>
      <div className="description">
        My systems indicate that we haven’t expanded to your area. This could be
        an opportunity to help us, help others. Ping us with a message below and
        we will add places in your area.
      </div>
      <div className="thankyou">
        <div>
          <h1>Thanks!</h1>
          <p>We will DM you on IG in 60 mins with an update.</p>
        </div>
      </div>
      <div className="popup-overlay"></div>
    </ThankyouStyle>
  );
};

export default Thankyou;
