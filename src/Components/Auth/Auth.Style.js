import styled, { css } from "styled-components";
import { media } from "../../Assets/Styles/utils";
import { Link } from "react-router-dom";
import Montserrat from "../../Assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Arabic:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400&display=swap');

</style>

export const AuthWrapper = styled.div`
  width: 100%;
  height: 100%;
  /* display: grid; */
  display: flex;
  /* grid-template-columns:60% 40%; */
  /* grid-template-rows: 100%; */
  /* padding-top:-10%; */
  /* ${media("medium")}{
    grid-template-columns:100%;
    padding-top:10%;
  } */
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
`;

export const RegisterImageContainer = styled.div`
  height: auto;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  position: relative;
  right: 0;
  top: 0;
  border: 0;
  width: 1000px;
  
  ${media("medium")} {
    display: none;
  }

`;

export const BackgroundImage = styled.img`
  height: auto;
  width: auto;
  margin-left: -8rem;
  
`;

export const LogoImage = styled.img`
  position: absolute;
  z-index: 1; /* Ensure logo appears on top of the background image */
`;

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
`;

export const RegisterInnerContainer = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  gap: 1rem;
  box-sizing: border-box;
`

export const LoginOptionsContainer = styled.div`
  width: 500px; /* Adjust according to your layout */
  height: 73px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:10px;
  gap: 10px; /* Adjust the gap between tabs */
  text-align: center;
  border-radius: 60px; /* Adjust according to your preference */
  border: 1px solid #646476;
  background: white;
  box-sizing: border-box;
  padding: 3px;
  font-weight: 500px;
  background-color: #F3EEF6;
`;

export const Tab = styled(Link)`
  cursor: pointer;
  background: #F3EEF6;
  flex: 1;
  height: 100%;
  color: #693BD7;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  font-size: 18px;
  width: 250px;
  transition: background-color 250ms ease-in;
  box-sizing: border-box;

  ${({ active, location }) => active && location === "/" && `
    background-color: #693BD7;
    color: white;
  `}

  ${({ active, location }) => active && location === "/login" && `
    background-color: #693BD7;
    color: white;
  `}
`;

export const PersonalInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`
export const LoginHeading = styled.div`
  font-family: "Libre Baskerville", serif;
  font-size: 45px;
  color: #693BD7;
  font-weight: 600;
  text-align: ${props => props.lang === "ar" ? "right" : "left"};
  margin-top: 2rem;
  width: 100%;
  line-height: 0px;
`;

export const LoginSub = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align:${props => props.lang === "ar" ? "right" : "left"};
  color: #646476;
  width: 100%;
`;

export const SubHeadings = styled.div`
  font-size: 20px;
  font-weight: 600;
  text-align: ${props => props.lang === "ar" ? "right" : "left"};
  color: #646476;
  width: 100%;
`;

export const FormtoLogin = styled.form`
  width: 100%;
/* padding:5vh; */
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap: 4rem;
  margin-top: 2rem;
`;

export const Phone2Input = styled(PhoneInput)`
  &.react-tel-input {
    margin: 10px 5%;
    padding: auto 10px;
    width: 60%;
    height: 52px;
    background-color: white;
    border: 1px solid #646476;
    direction: ltr;
    ${media("small")} {
      height: 64px;
    }
  }
  &.react-tel-input .flag-dropdown {
    height: 40px;
    background-color: white;
    border: none;
    margin: auto 7px;
    ${media("small")} {
      height: 50px;
    }
  }
  &.react-tel-input .selected-flag {
    width: 100%;
    height: 115%;
    background-color: white;
    border: none;
    &.hover {
      background-color: white;
    }
  }
  &.react-tel-input .sa {
    scale: 1.5;
    padding: auto 5px;
    margin-top: -8px;
    border: none;
  }
  &.react-tel-input .arrow {
    scale: 1.5;
    padding: auto 5px;
    direction: ltr;
  }

  &.react-tel-input .form-control {
    height: 52px;
    width: 100%;
    font-size: 0.8rem;
    border-radius: 0;
    background-color: white;
    border: none;
    padding-right: 0px;
    padding-left: 56px;
    border-right-width: 0px;
    direction: ltr;
    ${media("small")} {
      height: 64px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 0 0;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
`;
export const ErrorMessage = styled.div`
    color: red;
    font-size: 14px;
    margin-top: 5px;
`;
export const ButtonStyle = styled.button`
  width: 40%;
  height: 53px;
  border-radius: 5px;
  color: #ffffff;
  border-radius:30px;
  cursor:pointer;
  font-weight: 700;
  font-size: 18px;
  font-family: ${Montserrat};
  border: 2px solid #eeeeee;
  background-color: #693BD7;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${media("small")} {
    height: 64px;
  }
`;

// Create a styled component for the modal
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding:10px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  box-sizing: border-box;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  border-radius: 44px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #EFEDED;
  padding: 50px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  width: 833px;
  height: 644px;
  box-sizing: border-box;
  font-family: "Noto Sans Arabic", sans-serif;
  gap: 2rem;
`;

export const ModalHeading = styled.div`
  font-size: 45px;
  font-weight: 700;
  line-height: 80px;
  text-align: center;
  color:#646476;
`;

export const ModalSub = styled.div`
font-size: 18px;
font-weight: 500;
line-height: 38.02px;
text-align: center;
color:#646476;
`;

export const ErrorDiv = styled.div`
  
`

export const ModalResend = styled(Link)`
font-size: 18px;
font-weight: 400;
line-height: 38.02px;
text-align: center;
color: #7C6FDA;
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 24px;
  right: 24px;
  font-size: 24px;
  cursor: pointer;
  color: #646476;
`;

export const OtpButtonContainer = styled.div`
  width: 100%;
  padding: 0 0;
  border: none;
  margin: 5px 0px;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
`;
export const OtpButtonStyle = styled.button`
  width: 437px;
  border-radius: 44px;
  color: #ffffff;
  border-radius:30px;
  cursor:pointer;
  font-weight: normal;
  font-size: 20px;
  border: 2px solid #eeeeee;
  background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#693BD7')}; /* Change background color when disabled */
  height: 70px;
  ${media("small")} {
    height: 64px;
  }
`;

export const StyledStep = styled.div`
  color: white;
  width: 23px;
  height: 23px;
  font-size: 12px;
  background-color: white;
  border: 1px solid #646476;
  color: #646476;
  border-radius: 50%;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;

  ${(props) =>
    props.accomplished &&
    css`
      background-color: #DE6BFF;
      border: none;
      color: white;
    `}
`;

export const StyledCaptionContainer=styled.div`
  display:flex;
  width: auto;
  flex-direction:row;
  margin-bottom:10px;
  font-size: 14px;
  justify-content: space-around;
  width: 100%;
`;

export const StepTitle=styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  text-align:right;
`;

