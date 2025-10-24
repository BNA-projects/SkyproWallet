import styled from "styled-components";
import { Link } from "react-router-dom";
import { textSizes } from "../../const";
import { NavLink } from "react-router-dom";
import { buttonStyles } from "../../const";

export const Header = styled.header`
  width: 100%;
  height: 64px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const HeaderBlock = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;

  padding-left: 120px;
  padding-right: 120px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const HeaderLinkText = styled(Link)`
  font-weight: ${textSizes.smallHeader.fontWeight};
  font-size: ${textSizes.smallHeader.fontSize};
  line-height: 170%;
  letter-spacing: 0px;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #000;
  @media (max-width: 600px) {
    font-weight: ${textSizes.small.fontWeight};
    font-size: ${textSizes.small.fontSize};
  }
`;

export const HeaderLinkExitText = styled(HeaderLinkText)`
  font-weight: 600;
  &:hover {
    color: ${buttonStyles.active.color};
    transition: all 0.3s ease;
  }
  @media (max-width: 600px) {
    font-weight: ${textSizes.medium.fontWeight};
    font-size: ${textSizes.small.fontSize};
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: block;
  display: "flex";
  justify-content: "space-between";
  align-items: "center";
  padding: "10px 40px";
  border-bottom: "1px solid #eee";
`;

export const HeaderLogo = styled(Link)`
  cursor: pointer;
  outline: none;
`;

export const HeaderLogoImg = styled.img`
  width: 144px;
  height: 19px;
  @media (max-width: 600px) {
    width: 109px;
    height: 14px;
  }
`;

export const HeaderNav = styled.nav`
  display: "flex";
  gap: "40px";
  align-items: "center";
`;
export const HeaderLinks = styled.div`
  display: flex;
  gap: 48px;
  @media (max-width: 600px) {
    gap: 8px;
  }
`;
export const HeaderNavLink = styled(NavLink)`
  font-weight: ${textSizes.smallHeader.fontWeight};
  font-size: ${textSizes.smallHeader.fontSize};
  line-height: 170%;
  text-align: center;
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease;

  &.active {
    color: #27ae60;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  &:hover {
    color: ${buttonStyles.active.color};
    transition: all 0.3s ease;
  }

  @media (max-width: 600px) {
    font-weight: ${textSizes.small.fontWeight};
    font-size: ${textSizes.small.fontSize};
  }
`;
// Мобильное меню
export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 600px) {
    display: block;
    &:hover {
      color: ${buttonStyles.active.color};
      transition: all 0.3s ease;
    }
  }
`;

export const MobileDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 20px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1001;
`;

export const MobileDropdownLink = styled.div`
  display: block;
  /* padding: 8px 12px; */
  white-space: nowrap;
  text-decoration: none;
  color: #000;
  outline: none;
  @media (max-width: 600px) {
    font-weight: ${textSizes.small.fontWeight};
    font-size: ${textSizes.small.fontSize};
  }
`;

export const MobileHeaderLogoImg = styled.img`
  width: 7px;
  height: 7px;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

export const MobileHeaderMenuItem = styled.div`
  display: flex;
  flex-direction: column;

  /* gap: 10px; */
  width: auto;
  height: 30px;
  padding: 7px 14px;
  border-radius: 24px;
  margin-top: 10px;
  opacity: 0.4;
  background-color: ${(props) => (props.$isActive ? "#dbffe9" : " #f1f1f1")};

  p {
    font-size: 10px;
    font-weight: 400;
    line-height: 100%;
    white-space: nowrap;
  }
`;
export const MobileMenuItemLink = styled(NavLink)`
  text-decoration: none;
  outline: none;
  color: #000;
  &.active {
    color: #1fa46c;
    background-color: #dbffe9;
  }
`;
