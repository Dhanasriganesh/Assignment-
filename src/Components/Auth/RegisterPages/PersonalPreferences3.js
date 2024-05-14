import React, { useState, useEffect } from 'react';
import { HeadingContainer, LoginHeading, LoginSub, PersonalInfoContainer } from '../Auth.Style';
import { AgeContainer, PhysicalCharacteristicsContainer } from './Styles/Register.styles';
import { ColorOptionImage, PartImage, PartsOptions, PatternOptionImage, PatternsOptions, RadioContainer, RadioOptionText } from '../../Radio/Radio.styles';
import { TopData, BottomData, FootData } from '../../data/data';
import pinkCheck from "../../../Assets/Images/pinkCheck.png";
import { languageData } from '../../LanguageData/Data';
import { useSelector } from 'react-redux';

function PersonalPreferences3({ updateUserInfo, userInfo }) {
  const [selectedTops, setSelectedTops] = useState(userInfo.Top || []);
  const [selectedBottom, setSelectedBottom] = useState(userInfo.Bottom || []);
  const [selectedFootwear, setSelectedFootwear] = useState(userInfo.Footwear || []);
  const lang=useSelector((store)=>store?.language?.language);

  const handleTopSelect = (TopName) => {
    const updatedTops = selectedTops.includes(TopName)
      ? selectedTops.filter(name => name !== TopName)
      : [...selectedTops, TopName];
    setSelectedTops(updatedTops);
    updateUserInfo({ ...userInfo, Top: updatedTops });
  };

  const handleBottomSelect = (BottomName) => {
    const updatedBottoms = selectedBottom.includes(BottomName)
      ? selectedBottom.filter(name => name !== BottomName)
      : [...selectedBottom, BottomName];
    setSelectedBottom(updatedBottoms);
    updateUserInfo({ ...userInfo, Bottom: updatedBottoms });
  };

  const handleFootwearSelect = (FootwearName) => {
    const updatedFootwear = selectedFootwear.includes(FootwearName)
      ? selectedFootwear.filter(name => name !== FootwearName)
      : [...selectedFootwear, FootwearName];
    setSelectedFootwear(updatedFootwear);
    updateUserInfo({ ...userInfo, Footwear: updatedFootwear });
  };

  useEffect(() => {
    // Prefill the selected values based on userInfo
    setSelectedTops(userInfo.Top || []);
    setSelectedBottom(userInfo.Bottom || []);
    setSelectedFootwear(userInfo.Footwear || []);
  }, [userInfo]);

  return (
    <></>
    // <PersonalInfoContainer>
    //   <HeadingContainer>
    //     <LoginHeading>{languageData[lang]?.personalpre}</LoginHeading>
    //     <LoginSub>{languageData[lang]?.prefrence1desc}</LoginSub>
    //   </HeadingContainer>
    //   <PhysicalCharacteristicsContainer>
          
    //   </PhysicalCharacteristicsContainer>
    // </PersonalInfoContainer>
  );
}

export default PersonalPreferences3;
