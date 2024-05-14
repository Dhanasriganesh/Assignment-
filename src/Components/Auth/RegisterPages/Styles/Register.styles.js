import styled from "styled-components";
import ReactFlagsSelect from 'react-flags-select';
import { RegionDropdown } from "react-country-region-selector";
import { Phone2Input } from "../../Auth.Style";
import { media } from "../../../../Assets/Styles/utils";
<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
</style>

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const inputStyles = `
  width: 435px;
  height: 57px;
  border: 1px solid rgba(91, 98, 117, 0.73);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  display: "flex";
  align-items: "center",
  justify-content: "center",
  color: #646476;
  font-size: 18px;
  &::placeholder {
    font-family: "Montserrat", sans-serif;
  }
`;

export const FormTextInput = styled.input`
  ${inputStyles}
  width: 435px;
  height: 57px;
  box-sizing: border-box;
  padding-left: 1rem;
`;

export const StyledFlagSelect = styled(ReactFlagsSelect)`
  /* ${inputStyles}
  width: 435px;
  height: 57px; */
  width: 435px;
  border-radius: 8px;
  border:none;
  box-sizing: border-box;
  color: #646476;
  font-size: 18px;
  &::placeholder {
    font-family: "Montserrat", sans-serif;
  }
`;

export const StyledCitySelect = styled(RegionDropdown)`
  ${inputStyles}
  box-sizing: border-box;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #646476;
  font-weight: normal;
  font-size: 18px;
  &::placeholder {
    font-family: "Montserrat", sans-serif;
  }
`;

export const StyledPhoneInput = styled(Phone2Input)`
  &.react-tel-input {
    background-color: red;
    width: 435px;
    height: 57px;
    background-color: white;
    border: 1px solid #646476;
    border-radius: 8px;
    direction: ltr;
    display: flex;
    ${media("small")} {
      height: 64px;
    }
  }
  &.react-tel-input .flag-dropdown {
    height: 10px;
    background-color: white;
    border: none;
    margin: auto 7px;
    background-color: red;
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
    height: 100%;
    width: 100%;
    font-size: 0.8rem;
    border-radius: 8px;
    border: none;
    padding-right: 0px;
    padding-left: 56px;
    border-right-width: 0px;
    direction: ltr;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #646476;
    font-size: 18px;
    &::placeholder {
      font-family: "Montserrat", sans-serif;
    }
    ${media("small")} {
      height: 64px;
    }
  }
`;

export const PhysicalCharacteristicsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 2rem;
`

export const AgeContainer = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const AgeInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const AgeSelectContainer=styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  gap: 1rem;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const HeightContainer=styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-evenly;
`;
export const HeightDropdown=styled.select`
    ${inputStyles}
    padding-left: 1rem;
    margin-bottom: 1rem;
`;

export const AstheticCaroseul=styled.div`
  width: 550px;
`;

export const LikeContainer = styled.div`
  width: 500px;
  display: flex;
  margin-top:20px;
  margin-bottom:50px;
  justify-content:center;
  margin-left:-20px;
  gap:10px;
  /* Add additional styles for icons if needed */
`;
export const Like = styled.div`
  background: ${props => props.isLiked ? '#67cf6e' : 'white'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisLike = styled.div`
  background: ${props => props.isDisliked ? '#f74a59' : 'white'};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;