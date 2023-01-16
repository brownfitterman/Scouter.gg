import styled from "styled-components";
import styleVar from "../../assets/css/styleVar";

const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${styleVar.lightBlue};
  padding: 24px 80px;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 9;
  .logo-area {
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    padding: 12px 20px;
    .logo-area {
      img {
        width: 150px;
      }
    }
  }
  .social-links {
    display: flex;
    gap: 20px;
    cursor: pointer;
  }
`;

export default HeaderStyle;
