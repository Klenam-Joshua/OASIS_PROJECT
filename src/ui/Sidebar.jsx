import styled from "styled-components";
import Logo from "../../public/logo-light.png";
import Navbar from "./Navbar";

const StyledSidebar = styled.aside`
  background-color: white;
  grid-row: 1/-1;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 3rem;
`;

const LogoImg = styled.img`
  width: 60%;
  height: 50%;
`;
export default function Sidebar() {
  return (
    <StyledSidebar>
      <LogoWrapper>
        <LogoImg src={Logo} alt="Logo" />
      </LogoWrapper>
      <Navbar />
    </StyledSidebar>
  );
}
