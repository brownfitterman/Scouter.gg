import styled from "styled-components";
import styleVar from "../../assets/css/styleVar";

const CookiesStripStyle = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  margin: auto;
  @media screen and (max-width: 767px) {
    display: block;
  }
  .cookies-content {
    font-weight: ${styleVar.fontRegular};
    background: ${styleVar.yellow};
    width: calc(100% - 360px);
    padding: 16px 48px 16px 38px;
    font-size: ${styleVar.font16};
    line-height: ${styleVar.lineHeight23};
    a {
      color: ${styleVar.lightBlue};
    }
    @media screen and (max-width: 767px) {
      padding: 16px;
      width: 100%;
    }
  }
  .cookies-box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 180px;
    padding: 16px 38px;
    text-align: center;
    cursor: pointer;
    font-size: ${styleVar.font20};
    line-height: ${styleVar.lineHeight23};
  }
  .cookies-setting {
    background: ${styleVar.lightBlue};
    color: ${styleVar.white};
    min-width: 180px;

    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
  .accept-cookies {
    background: ${styleVar.white};
    color: ${styleVar.lightBlue};
    min-width: 180px;
    @media screen and (max-width: 767px) {
      width: 100%;
    }
  }
`;

export default CookiesStripStyle;
