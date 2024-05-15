import React, { useState, useEffect } from 'react';
import { HeadingContainer, LoginHeading, LoginSub, PersonalInfoContainer, SubHeadings } from '../Auth.Style';
import { AgeContainer, PhysicalCharacteristicsContainer } from './Styles/Register.styles';
import { BodyPartsImage, BodyPartsImageContainer, BodyPartsListing, BodyPartsListingContainer, BodyPartsOuterContainer, BodyPartsSelect, ColorOptionImage, PartImage, PartsOptions, PatternOptionImage, PatternsOptions, RadioContainer, RadioOptionText } from '../../Radio/Radio.styles';
import { patternData, colorsData, RevealData } from '../../data/data';
import pinkCheck from "../../../Assets/Images/pinkCheck.png";
import ApiClient from '../../../Config/index.config';
import { useSelector } from 'react-redux';
import bodyPartImage from "../../../Assets/Images/Belly 1.png"

const BodyParts = ({updateUserInfo, nextButton, userInfo}) => {
    const gender = useSelector((store) => store.userDetails.gender);
    const [selectedParts, setSelectedParts] = useState(userInfo.BodyParts || []);
    const [bodyRevealParts, setBodyRevealParts] = useState(null)
    // const [bodyPartImage, setBodyPartImage] = useState(null)

    const getBodyRevealParts = async () => {
        try{
          const response = await ApiClient.get(`/user-preference/body-part?gender=${gender}`)
          setBodyRevealParts(response?.data?.data)
          // setBodyPartImage(response?.data?.data[0]?.img_url)
        }
        catch(error){
          console.log(error)
        }
      }

      const handlePartSelect = (part) => {
        // setBodyPartImage(part.img_url)
        const updatedParts = selectedParts.includes(part.id)
          ? selectedParts.filter(name => name !== part.id)
          : [...selectedParts, part.id];
        setSelectedParts(updatedParts);
        updateUserInfo({ ...userInfo, BodyParts: updatedParts });
      };

      useEffect(() => {
        getBodyRevealParts();
      },[])

    return (
        <PersonalInfoContainer>
            <HeadingContainer>
                <LoginHeading>Personal Preferences</LoginHeading>
                <LoginSub>Hey there! We'd love to get to know you better to personalize your experience.</LoginSub>
            </HeadingContainer>
            <PhysicalCharacteristicsContainer style={{gap: "4rem"}}>
                <AgeContainer>
                    <SubHeadings>Identify the parts you don't mind showing</SubHeadings>
                    <BodyPartsOuterContainer>
                        <BodyPartsListingContainer>
                            {bodyRevealParts?.map((part) => (
                            <BodyPartsListing key={part.id}>
                                <BodyPartsSelect name="body parts" type="radio" onClick={() => handlePartSelect(part)}/>
                                {part?.name}
                            </BodyPartsListing>
                            ))}
                        </BodyPartsListingContainer>
                        <BodyPartsImageContainer>
                            <BodyPartsImage src={bodyPartImage} alt="img"/>
                        </BodyPartsImageContainer>
                    </BodyPartsOuterContainer>
                    <RadioContainer>
                    
                    </RadioContainer>
                </AgeContainer>
            </PhysicalCharacteristicsContainer>
    </PersonalInfoContainer>
    )
}

export default BodyParts;