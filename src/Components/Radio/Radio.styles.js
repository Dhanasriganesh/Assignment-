import styled from "styled-components";
import checkIcon from "../../Assets/Images/CheckIcon.svg"

export const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 1rem;
`;

export const AgeRadio = styled.div`
  cursor: pointer;
  width: 142px;
  height: 50px;
  border-radius: 100px;
  border: 1px solid #545454;
  color: ${({ active }) =>
    active ? "white" : "#646476;"}; /* Set text color based on active state */
  background-color: ${({ active }) =>
    active
      ? "#693BD7"
      : "transparent"}; /* Set background color based on active state */
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s;
  font-size: 14px;

  &:disabled {
    opacity: 0.5; /* Dim the button when disabled */
    pointer-events: none; /* Disable pointer events when disabled */
  }
`;

export const GenderRadio = styled.div`
  cursor: pointer;
  width: 191px;
  height: 120px;
  border-radius: 10px;
  font-size: 30px;
  color: ${({ active }) =>
    active ? "white" : "#646476"}; /* Set text color based on active state */
  background-color: ${({ active }) =>
    active
      ? "#6e6eff"
      : "rgba(91, 98, 117, 0.2)"}; /* Set background color based on active state */
  display: flex;
  align-items: center;
  justify-content: start;
  text-decoration: none;
  padding: 1rem;
  transition: background-color 0.3s, color 0.3s;
  box-sizing: border-box;
  position: relative;

  &:disabled {
    opacity: 0.2; /* Dim the button when disabled */
    pointer-events: none; /* Disable pointer events when disabled */
  }
`;

export const GenderImage = styled.img`
  position: absolute;
  height: 100;
  bottom: 0px;
  right: 1rem;
  transform: ${({ lang }) => (lang === 'ar' ? 'rotateY(180deg)' : 'none')};
  margin-right:${({ lang }) => (lang === 'ar' ? '36%' : '-15px')};
`

export const RadioOptionsCharacteristics = styled.div`
  width: 112px;
  height: 220px;
  cursor: pointer;
  border-radius: 10px;
  background: #5b627533 /* Set background color based on active state */;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  gap: 2px;
  box-sizing: border-box;
`;

export const PinkCheckImage = styled.img`
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 1;
`;

export const RadioOptionImage = styled.img`
  width: 86px;
  height: 125px;
`;
export const RadioOptionText = styled.span`
  font-size: 13px;
  font-weight: normal;
  text-align: center;
  height: 1rem;
  width: 100%;
  overflow: hidden;
`;

export const RadioColorOption = styled.div`
  width: 107px;
  height: 45px;
  border-radius: 19px;
  cursor: pointer;
  background-color: ${(props) => props?.color};
  position: relative;
`;

export const PatternsOptions = styled.div`
  width: 110px;
  height: 110px;
  background: #5b627533;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10px;
`;

export const PatternOptionImage = styled.img`
  width: 82px;
  height: 82px;
  border-radius: 50%;
`;

export const ColorOptionImage = styled.img`
  width: 75px;
  height: 65px;
`;

export const PartsOptions = styled.div`
  width: 110px;
  height: 110px;
  background: #5b627533;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const PartImage = styled.img`
  width: 60%;
  height: 60%;
`;

export const BodyShapeContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  gap: 14px;
  box-sizing: border-box;
`;


export const BodyPartsOuterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  gap: 2rem;
  box-sizing: border-box;
`

export const BodyPartsImageContainer = styled.div`
  width: 50%;
  background-color: rgba(91, 98, 117, 0.2);
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 100%;
`

export const BodyPartsImage = styled.img`
  height: 80%;
`

export const BodyPartsListingContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 8px;
  height: 100%;
`
export const BodyPartsListing = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 52px;
  width: 100%;
  background-color: rgba(91, 98, 117, 0.05);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 0 1.6rem 0 1.6rem;
  gap: 1rem;
`

export const BodyPartsSelect = styled.input`
  width: 22px;
  height: 22px;
  /* accent-color: #DE6BFF; */
  border:none;
  border: 1px solid red;
  &:checked:after {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: relative;
    background-color: #DE6BFF;
    content: "✔";
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: visible;
    color: white
  }
`
