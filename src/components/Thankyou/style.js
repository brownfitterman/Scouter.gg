import styled from "styled-components";
import styleVar from "../../assets/css/styleVar";

const ThankyouStyle = styled.div`
  color: ${styleVar.white};
  text-align: center;
  .description {
    font-size: ${styleVar.font32};
    line-height: ${styleVar.lineHeight50};
    margin: 28px auto;
    width: 1000px;
  }
  .thankyou {
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 695px;
    width: 100%;
    height: 450px;
    color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 20px;
    padding: 47px;
    z-index: 2;
    h1 {
      color: #ffc01f;
      font-size: 64px;
      line-height: ${styleVar.lineHeight50};
      margin-bottom: 84px;
      @media screen and (max-width: 767px) {
        font-size: 30px;
        line-height: 3rem;
        margin-bottom: 10px;
      }
    }
    p {
      font-weight: 700;
      font-size: 36px;
      line-height: 37px;
      color: #161743;
      @media screen and (max-width: 767px) {
        font-size: 20px;
        line-height: 32px;
      }
    }
  }
  .popup-overlay {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(7.5px);
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export default ThankyouStyle;
