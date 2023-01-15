import styled from "styled-components";
import styleVar from "../../assets/css/styleVar";

const CrowdFilterStyle = styled.div`
  color: ${styleVar.white};
  text-align: center;
  padding: 0 27px;
  .progress-bar0 {
    width: 25%;
    height: 6px;
    background: #ffc01f;
    position: fixed;
    top: 102px;
    left: 0;
    @media screen and (max-width: 767px) {
      top: 67px;
    }
  }
  .progress-bar1 {
    width: 50%;
    height: 6px;
    background: #ffc01f;
    position: fixed;
    top: 102px;
    left: 0;
    @media screen and (max-width: 767px) {
      top: 67px;
    }
  }
  .progress-bar2 {
    width: 75%;
    height: 6px;
    background: #ffc01f;
    position: fixed;
    top: 102px;
    left: 0;
    @media screen and (max-width: 767px) {
      top: 67px;
    }
  }
  .progress-bar3 {
    width: 100%;
    height: 6px;
    background: #ffc01f;
    position: fixed;
    top: 102px;
    left: 0;
    @media screen and (max-width: 767px) {
      top: 67px;
    }
  }
  .description {
    font-size: ${styleVar.font32};
    line-height: ${styleVar.lineHeight50};
    margin: 20px auto;
    max-width: 1000px;
    width: 100%;
    @media screen and (max-width: 767px) {
      font-size: 20px;
      line-height: 24px;
      text-align: left;
    }
  }
  .sub-heading {
    color: #acacac;
    font-size: ${styleVar.font24};
    line-height: ${styleVar.lineHeight30};
    @media screen and (max-width: 767px) {
      font-size: 16px;
      line-height: 19px;
      padding-top: 5px;
    }
  }
  .option-card-wraper {
    max-width: 530px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    margin: 0 auto;
    justify-content: space-between;
    margin-top: 15px;
    @media screen and (max-width: 767px) {
      gap: 25px;
      padding: 0 10px;
    }
    .option-card {
      width: 50%;
      max-width: 240px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #3c3f83;
      font-size: ${styleVar.font24};
      line-height: ${styleVar.lineHeight30};
      border-radius: 10px;
      @media screen and (max-width: 767px) {
        max-width: 130px;
        height: 130px;
        font-size: ${styleVar.font20};
        line-height: 24px;
      }
      &.active {
        background: #ffc01f;
        color: #3c3f83;
      }
      img {
        width: 34px;
        height: 38px;
        margin-bottom: 27px;
      }
    }
  }
  .button-group {
    display: flex;
    justify-content: space-between;
    margin: 30px 0 28px 0;
    button {
      min-width: 304px;
      border: 1px solid #ffc01f;
      font-size: ${styleVar.font32};
      line-height: 39px;
      padding: 14px;
      cursor: pointer;
      border-radius: 10px;
      @media screen and (max-width: 767px) {
        min-width: 138px;
        border: none;
        font-size: 20px;
        line-height: 24px;
        border-radius: 20px 0px 20px 0px;
      }
    }
    @media screen and (max-width: 767px) {
      margin: auto;
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    .back-btn {
      color: #ffc01f;
    }
    .next-btn {
      color: #3c3f83;
      background: #ffc01f;
    }
  }
`;

export default CrowdFilterStyle;
