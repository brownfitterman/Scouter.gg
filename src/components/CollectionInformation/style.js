import styled from "styled-components";
import styleVar from "../../assets/css/styleVar";

const CollectionInformationStyle = styled.div`
  color: ${styleVar.white};
  .description {
    font-size: ${styleVar.font32};
    line-height: ${styleVar.lineHeight50};
    margin: 28px auto;
    max-width: 1000px;
    width: 100%;
    text-align: center;
    @media screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 25px;
      padding: 0 20px;
    }
  }
  .infoform {
    background: ${styleVar.lightBlue};
    padding: 18px 20px 0;
    max-width: 553px;
    width: 90%;
    min-height: 415px;
    margin: 0 auto;
    border-radius: 20px;
    padding: 30px 60px 0 25px;
    position: relative;
    .form-group {
      display: flex;
      margin-bottom: 24px;
      .label {
        width: 30%;
        font-size: ${styleVar.font24};
        line-height: ${styleVar.lineHeight30};
        @media screen and (max-width: 767px) {
          font-size: 12px;
          line-height: 30px;
        }
        small {
          color: #ff0000;
        }
      }
      input {
        border-bottom: 1px solid #fff;
        width: 70%;
        color: #ffc01f;
        font-size: ${styleVar.font20};
        line-height: ${styleVar.lineHeight30};
        padding-left: 10px;

        @media screen and (max-width: 767px) {
          font-size: 12px;
          line-height: 12px;
        }
      }
      textarea {
        border-bottom: 1px solid #fff;
        display: block;
        word-wrap: break-word;
        word-break: break-all;
        height: 60px;
        width: 70%;
        color: #ffc01f;
        font-size: ${styleVar.font20};
        line-height: ${styleVar.lineHeight30};
        padding-left: 10px;
        @media screen and (max-width: 767px) {
          font-size: 12px;
          line-height: 12px;
        }
      }
    }

    .cta {
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${styleVar.yellow};
      color: ${styleVar.lightBlue};
      width: 100%;
      padding: 24px 0;
      font-size: ${styleVar.font32};
      line-height: ${styleVar.lineHeight30};
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
      text-align: center;
      cursor: pointer;
    }
  }
`;

export default CollectionInformationStyle;
