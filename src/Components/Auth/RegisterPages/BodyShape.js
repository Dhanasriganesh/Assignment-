import React, { useState, useEffect } from 'react';
import { HeadingContainer, LoginHeading, LoginSub, PersonalInfoContainer, SubHeadings } from '../Auth.Style';
import { AgeContainer, FormContainer, PhysicalCharacteristicsContainer } from './Styles/Register.styles';
import { BodyShapeContainer, PinkCheckImage, RadioContainer, RadioOptionImage, RadioOptionText, RadioOptionsCharacteristics } from '../../Radio/Radio.styles';
import pinkCheck from "../../../Assets/Images/pinkCheck.png";
import ApiClient from '../../../Config/index.config.js';
import { useSelector } from 'react-redux';

const BodyShape = ({updateUserInfo, nextButton, userInfo}) => {
    const [ShapeSelected, setShapeSelected] = useState(null)
    const [bodyShapeData, setBodyShapeData] = useState(null);
    const gender = useSelector((store) => store.userDetails.gender);


    const getBodyShape = async () => {
        try{
            const response = await ApiClient.get(`/user-preference/body-shape?gender=${gender}`);
            setBodyShapeData(response.data.data)
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
     getBodyShape()
    },[])

    const handleBodyShapeSelect = (value) => {
        setShapeSelected(value);
    };

    return(
        <PersonalInfoContainer>
            <HeadingContainer>
                <LoginHeading>Physical Characteristics</LoginHeading>
                <LoginSub>Hey there! We'd love to get to know you better to personalize your experience.</LoginSub>
            </HeadingContainer>
            <FormContainer >
            </FormContainer>
            <PhysicalCharacteristicsContainer>

            <AgeContainer>
                <SubHeadings>Body Shape</SubHeadings>
                <BodyShapeContainer>
                {bodyShapeData?.map((option) => (
                    <RadioOptionsCharacteristics key={option.id} active={ShapeSelected === option.id} onClick={() => handleBodyShapeSelect(option.id)} disabled={ShapeSelected === option.id}>
                        {ShapeSelected === option.id && <PinkCheckImage src={pinkCheck} alt="img" />}
                        <RadioOptionImage src={option.img_url}/>
                        <RadioOptionText>{option.name}</RadioOptionText>
                    </RadioOptionsCharacteristics>
                ))}
                </BodyShapeContainer>
            </AgeContainer>
            </PhysicalCharacteristicsContainer>
    </PersonalInfoContainer>
    )
} 

export default BodyShape;