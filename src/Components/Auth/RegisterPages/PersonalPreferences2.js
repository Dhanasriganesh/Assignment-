import React, { useState, useEffect } from 'react';
import { HeadingContainer, LoginHeading, LoginSub, PersonalInfoContainer, SubHeadings } from '../Auth.Style';
import { AgeContainer, PhysicalCharacteristicsContainer } from './Styles/Register.styles';
import { ColorOptionImage, PartImage, PartsOptions, PatternOptionImage, PatternsOptions, RadioContainer, RadioOptionText } from '../../Radio/Radio.styles';
import { patternData, colorsData, RevealData } from '../../data/data';
import pinkCheck from "../../../Assets/Images/pinkCheck.png";
import { languageData } from '../../LanguageData/Data';
import { useSelector } from 'react-redux';
import { TopData, BottomData, FootData } from '../../data/data';
import ApiClient from '../../../Config/index.config';

function PersonalPreferences2({ updateUserInfo, nextButton, userInfo }) {
  const [selectedPatterns, setSelectedPatterns] = useState(userInfo.Pattern || []);
  const [selectedColors, setSelectedColors] = useState(userInfo.Colors || []);
  const [clothColors, setClothColors] = useState(null)
  const lang=useSelector((store)=>store?.language?.language);

  const getClothColors = async () => {
    try{
      const response = await ApiClient.get(`/user-preference/cloth-color`)
      console.log(response.data.data)
      setClothColors(response?.data?.data)
    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getClothColors()
  },[])

  const handlePatternSelect = (patternName) => {
    const updatedPatterns = selectedPatterns.includes(patternName)
      ? selectedPatterns.filter(name => name !== patternName)
      : [...selectedPatterns, patternName];
    setSelectedPatterns(updatedPatterns);
    updateUserInfo({ ...userInfo, Pattern: updatedPatterns });
  };


  const handleColorSelect = (colorName) => {
    const updatedColors = selectedColors.includes(colorName)
      ? selectedColors.filter(name => name !== colorName)
      : [...selectedColors, colorName];
    setSelectedColors(updatedColors);
    updateUserInfo({ ...userInfo, Colors: updatedColors });
  };


  useEffect(() => {
    // Prefill the selected values based on userInfo
    setSelectedPatterns(userInfo.Pattern || []);
    setSelectedColors(userInfo.Colors || []);
  }, [userInfo]);

  const getImage = (rawURL) => {
    console.log(rawURL)
    const RAW_URL1 = rawURL.split("/d/");
    const RAW_URL2 = RAW_URL1[1].split("/view");
    const IMAGE_ID = RAW_URL2[0];
    return `https://drive.google.com/thumbnail?id=${IMAGE_ID}`
  }

  console.log(languageData[lang])

  return (
    <PersonalInfoContainer>
      <HeadingContainer>
        <LoginHeading lang={lang}>{languageData[lang]?.personalpre}</LoginHeading>
        <LoginSub lang={lang}>{languageData[lang]?.prefrence1desc}</LoginSub>
      </HeadingContainer>
      <PhysicalCharacteristicsContainer style={{gap: "4rem"}}>
          <AgeContainer>
            <SubHeadings lang={lang}>{languageData[lang]?.favouritepattern} <span style={{fontWeight: "normal"}}>({languageData[lang]?.selectmore})</span></SubHeadings> 
            <RadioContainer>
              {patternData?.map((pattern, index) => (
                <PatternsOptions key={index} active={selectedPatterns.includes(pattern.name)} onClick={() => handlePatternSelect(pattern.name)} disabled={selectedPatterns.includes(pattern.name)}>
                  {selectedPatterns.includes(pattern.name) && <img alt="img" src={pinkCheck} style={{
                    marginRight: "-10px",
                    alignSelf: "flex-start",
                    zIndex: "1",
                    marginTop: "7px",
                    marginLeft: "-10px"
                  }} />}
                  <PatternOptionImage src={pattern.imageUrl} />
                </PatternsOptions>
              ))}
            </RadioContainer>
          </AgeContainer>
          <AgeContainer>
            <SubHeadings lang={lang}>{languageData[lang]?.favouritecolor} <span style={{fontWeight: "normal"}}>({languageData[lang]?.selectmore})</span></SubHeadings> 
            <RadioContainer>
              {colorsData?.map((color, index) => (
                <PatternsOptions key={index} active={selectedColors.includes(color.name)} onClick={() => handleColorSelect(color.name)} disabled={selectedColors.includes(color.name)}>
                  {selectedColors.includes(color.name) && <img alt="img" src={pinkCheck} style={{
                    marginRight: "-10px",
                    alignSelf: "flex-start",
                    zIndex: "1",
                    marginTop: "7px",
                    marginLeft: "-10px"
                  }} />}
                  <ColorOptionImage src={color.imageUrl}/>
                </PatternsOptions>
              ))}
            </RadioContainer>
          </AgeContainer>
      </PhysicalCharacteristicsContainer>
    </PersonalInfoContainer>
  );
}

export default PersonalPreferences2;




/* Ellipse 33 */

// position: absolute;
// width: 50px;
// height: 48px;
// left: 91px;
// top: 828px;

// background: #B6A159;


/* Ellipse 34 */

// position: absolute;
// width: 50px;
// height: 48px;
// left: 106px;
// top: 864px;

// background: #F79336;


/* Ellipse 35 */

// position: absolute;
// width: 50px;
// height: 48px;
// left: 131px;
// top: 832px;

// background: #D0DA91;
