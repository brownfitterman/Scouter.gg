import styled from "styled-components";
import styleVar from "../../assets/css/styleVar";
import packed from "../../assets/images/100.svg";

const RatingCardStyle = styled.div`
  color: #ffffff;
  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
  .wrapper {
    position: sticky;
    top: 100px;
    z-index: 5;
    background: #161745;
    width: 100%;
    @media screen and (max-width: 767px) {
      top: 66px;
    }
  }
  .acton-strip {
    display: flex;
    justify-content: space-between;
    margin: 0px auto;
    padding: 28px 0 10px 0;
    max-width: 1061px;
    position: relative;
    @media screen and (max-width: 767px) {
      padding: 28px 0 105x 0;
      margin-bottom: 20px;
    }
    p {
      font-size: ${styleVar.font24};
      line-height: ${styleVar.lineHeight30};
      @media screen and (max-width: 767px) {
        font-size: 12px;
        line-height: 15px;
      }
      span {
        display: block;
        color: #ffc01f;
      }
    }
    .button-group {
      span {
        border: 1px solid #ffc01f;
        border-radius: 30px;
        color: #ffc01f;
        padding: 14px 34px;
        cursor: pointer;
        display: inline-block;
        @media screen and (max-width: 767px) {
          padding: 7px 20px 7px 7px;
          font-size: 12px;
          line-height: 15px;
        }
        &.sort-btn {
          background: #ffc01f;
          color: ${styleVar.lightBlue};
          margin-right: 23px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 5px solid ${styleVar.lightBlue};
            transform: rotate(180deg);
            top: 20px;
            right: 20px;
            @media screen and (max-width: 767px) {
              top: 13px;
              right: 7px;
            }
          }
          @media screen and (max-width: 767px) {
            margin-right: 10px;
          }
        }
      }
    }

    .sorting-block {
      position: absolute;
      right: 135px;
      background: #ffffff;
      border-radius: 10px;
      top: 50px;
      z-index: 3;
      color: #000;
      padding: 26px 30px 13px 30px;
      @media screen and (max-width: 767px) {
        position: fixed;
        right: 0;
        left: 0;
        bottom: 0;
        top: auto;
        width: 100%;
        border-radius: 0px;
      }
      h3 {
        font-weight: 700;
        font-size: 12px;
        line-height: 15px;
        @media screen and (max-width: 767px) {
          font-size: 16px;
          line-height: 19px;
        }
      }
      .sorting-btns {
        display: flex;
        flex-wrap: wrap;
        margin-top: 20px;
        div {
          border-radius: 5px 0px 0px 5px;
          border: 1px solid #ffc01f;
          width: 50%;
          height: 34px;
          text-align: center;
          font-weight: 400;
          font-size: 12px;
          margin-bottom: 17px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          img {
            width: 16px;
            margin-right: 10px;
            vertical-align: middle;
          }
          &:nth-child(2n) {
            border-radius: 0px 5px 5px 0px;
          }
          &.active {
            background: #ffc01f;
          }
        }
      }
    }
  }
  .rating-card-wrapper {
    display: flex;
    gap: 85px;
    flex-wrap: wrap;
    justify-content: center;
    @media screen and (max-width: 767px) {
      gap: 30px;
      padding: 0 10px;
    }
    .rating-cards {
      max-width: 488px;
      width: 100%;
      background: ${styleVar.lightBlue};
      border-radius: 10px;
      display: flex;
      padding: 21px 10px 26px 10px;
      gap: 10px;
      position: relative;

      .Packed {
        background: url("100.svg");
      }
      .Busy {
        background: url("80.svg");
      }
      .Calm {
        background: url("50.svg");
      }
      .Dead {
        background: url("25.svg");
      }
      .packed-status {
        background-size: cover;
        width: 118px;
        height: 118px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: -55px 0 10px -40px;
        z-index: 2;
      }
      .status {
        background: rgba(240, 28, 28, 0.15);
        border: 1px solid #f01c1c;
        border-radius: 15px;
        display: inline-block;
        font-size: 20px;
        line-height: 24px;
        padding: 3px 8px;
      }

      .rating-info {
        h2 {
          font-size: ${styleVar.font32};
          line-height: 39px;
          @media screen and (max-width: 767px) {
            font-size: ${styleVar.font20};
            line-height: 24px;
          }
        }
        .rating-star {
          padding: 9px 0;
          display: flex;
          gap: 10px;
          .fa {
            font-size: 20px;
            &.active {
              color: #faff00;
            }
          }
          .review-counts {
            font-size: ${styleVar.font16};
            line-height: 19px;
          }
        }
        .location {
          font-weight: 300;
          font-size: 16px;
          line-height: 19px;
          position: relative;
          padding-left: 25px;
          .fa {
            position: absolute;
            top: 10px;
            left: 0;
          }
        }
        .venue-distance {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          padding-top: 9px;
          .bars {
            font-size: 16px;
            line-height: 19px;
            color: #ffc01f;
            padding-right: 19px;
          }
          .bar-distance {
            font-size: 14px;
            line-height: 17px;
            .fa {
              color: #ffc01f;
              padding-right: 7px;
            }
          }
          .cardId {
            font-size: 20px;
            line-height: 24px;
            color: #ffc01f;
            position: absolute;
            right: 15px;
            bottom: 5px;
          }
        }
      }
    }
  }
`;

export default RatingCardStyle;
