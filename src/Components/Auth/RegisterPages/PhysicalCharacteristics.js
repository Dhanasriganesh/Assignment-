import React, { useState, useEffect } from 'react';
import { HeadingContainer, LoginHeading, LoginSub, PersonalInfoContainer, PersonalInfoHeading, SubHeadings } from '../Auth.Style';
import { AgeContainer, FormContainer, HeightDropdown, PhysicalCharacteristicsContainer } from './Styles/Register.styles';
import { PinkCheckImage, RadioColorOption, RadioContainer, RadioOptionImage, RadioOptionText, RadioOptionsCharacteristics } from '../../Radio/Radio.styles';
import pinkCheck from "../../../Assets/Images/pinkCheck.png";
import { languageData } from '../../LanguageData/Data.js';
import { useSelector } from 'react-redux';
import ApiClient from '../../../Config/index.config.js';

function PhysicalCharacteristics({ updateUserInfo, userInfo }) {
  const [selected, setSelected] = useState(null); // State to track the selected body type
  const [heightValues, setHeightValues] = useState(null);
  const [weightValues, setWeightValues] = useState(null);
  const [selectedSkin, setSelectedSkin] = useState(null); // State to track the selected skin color
  const [selectedHair, setSelectedHair] = useState(null); // State to track the selected hair color
  const lang = useSelector((store) => store?.language?.language);
  const [skinToneData, setSkinToneData] = useState(null);
  const [hairColorData, setHairColorData] = useState(null);

  const getHeight = async () => {
    try {
      const response = await ApiClient.get(`/auth/user-height`);
      setHeightValues(response.data.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const getWeight = async () => {
    try {
      const response = await ApiClient.get(`/auth/user-weight`);
      setWeightValues(response.data.data)
    }
    catch (error) {
      console.log(error)
    }
  }

  const getSkinTone = async () => {
    try {
      const response = await ApiClient.get("/user-preference/skin-tone");
      setSkinToneData(response.data.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  const getHairColor = async () => {
    try {
      const response = await ApiClient.get("/user-preference/hair-color");
      setHairColorData(response.data.data)
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getHeight()
    getWeight()
    getSkinTone()
    getHairColor()
  }, [])

  useEffect(() => {
    setSelected(userInfo.bodyType || null);
    setSelectedSkin(userInfo.SkinColor || null);
    setSelectedHair(userInfo.HairColor || null);
  }, [userInfo]);

  const handleSkinToneSelect = (value) => {
    setSelectedSkin(value);
    updateUserInfo({ SkinColor: value });
  };

  const handleHairColorSelect = (value) => {
    setSelectedHair(value);
    updateUserInfo({ HairColor: value });
  };

  const handleHeightSelect = (e) => {
    updateUserInfo({ height: e.target.value });
  };

  const handleWeightSelect = (e) => {
    updateUserInfo({ weight: e.target.value });
  };

  const getImage = (rawURL) => {
    const RAW_URL1 = rawURL.split("/d/");
    const RAW_URL2 = RAW_URL1[1].split("/view");
    const IMAGE_ID = RAW_URL2[0];
    return `https://drive.google.com/thumbnail?id=${IMAGE_ID}`
  }

  return (
    <PersonalInfoContainer>
      <HeadingContainer>
        <LoginHeading lang={lang}>{languageData[lang]?.physicalinfo}</LoginHeading>
        <LoginSub lang={lang}>{languageData[lang]?.personalinfodesc}</LoginSub>
      </HeadingContainer>




      <FormContainer>
        <HeightDropdown
          type="number"
          onChange={handleHeightSelect}
          value={userInfo.height || ''}
        >
          <option value="" disabled>
            {languageData[lang]?.heightplaceholder}
          </option>
          {heightValues?.map((height) => (
            <option value={height.id} key={height.id}>
              {height.name}
            </option>
          ))}
        </HeightDropdown>
        <HeightDropdown onChange={handleWeightSelect} value={userInfo.weight || ''}>
          <option value="" disabled selected>
            {languageData[lang]?.weightplaceholder}
          </option>
          {weightValues?.map((weight) => (
            <option value={weight.id} key={weight.id}>
              {weight.name}
            </option>
          ))}
        </HeightDropdown>
      </FormContainer>




      <PhysicalCharacteristicsContainer>

        <AgeContainer>
        </AgeContainer>
        <AgeContainer>
          <SubHeadings>Skin </SubHeadings>
          <RadioContainer>
            {skinToneData?.map((tone) => (
              <RadioColorOption key={tone.id} color={tone.color_code} active={selectedSkin === tone.id} onClick={() => handleSkinToneSelect(tone.id)} disabled={selectedSkin === tone.id}>
                {selectedSkin === tone.id && <PinkCheckImage src={pinkCheck} alt="img" />}
              </RadioColorOption>
            ))}
          </RadioContainer>
        </AgeContainer>
        <AgeContainer>
          <SubHeadings>Hair Color</SubHeadings>
          <RadioContainer>
            {hairColorData?.map((color) => (
              <RadioColorOption key={color.id} color={color.color_code} active={selectedHair === color.id} onClick={() => handleHairColorSelect(color.id)} disabled={selectedHair === color.id}>
                {selectedHair === color.id && <PinkCheckImage src={pinkCheck} alt="img" />}
              </RadioColorOption>
            ))}
          </RadioContainer>
        </AgeContainer>
      </PhysicalCharacteristicsContainer>
    </PersonalInfoContainer>
  );
}

export default PhysicalCharacteristics;
