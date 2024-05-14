
import React, { useState, useEffect } from 'react';
import { HeadingContainer, LoginHeading, LoginSub, PersonalInfoContainer, SubHeadings } from '../Auth.Style';
import { AgeContainer, AgeInnerContainer, AgeSelectContainer, FormContainer, FormTextInput, StyledCitySelect, StyledFlagSelect, StyledPhoneInput, StyledRegionSelect } from './Styles/Register.styles';
import { getCountryCallingCode } from 'react-phone-number-input';
import { AgeRadio, GenderImage, GenderRadio } from '../../Radio/Radio.styles';
import MaleIcon from "../../../Assets/Images/MaleIcon.svg";
import FemaleIcon from "../../../Assets/Images/FemaleIcon.svg";
import { useSelector } from 'react-redux';
import { languageData } from '../../LanguageData/Data';
import ApiClient from '../../../Config/index.config';

function PersonalInformation({ updateUserInfo, userInfo }) {
    const [ageGroups, setAgeGroups] = useState(null)
    const [name, setName] = useState(userInfo.name || "");
    const [country, setCountry] = useState(userInfo.country || "Country");
    const [city, setCity] = useState(userInfo.city || "City");
    const [phno, setPhno] = useState(userInfo.phone_number || "");
    const [selected, setSelected] = useState(userInfo.age_group_id || null); // State to track the selected radio button
    const [gender, setGender] = useState(userInfo.gender || null);
    const lang=useSelector((store)=>store?.language?.language);

    useEffect(() => {
        setName(userInfo.name || "");
        setCountry(userInfo.country || "Country");
        setCity(userInfo.city || "City");
        setPhno(userInfo.phone_number || "");
        setSelected(userInfo.age_group_id || null);
        setGender(userInfo.gender || null);
    }, [userInfo]);


    const getAgeGroups = async () => {
        try{
            const response = await ApiClient.get("auth/user-age-group");
            setAgeGroups(response?.data?.data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getAgeGroups();
    },[])

    const handleNameChange = (e) => {
        const newName = e.target.value;
        setName(newName);
        updateUserInfo({ ...userInfo, name: newName });
    };

    const handleCountrySelect = (code) => {
        setCountry(code);
        setPhno(getCountryCallingCode(code));
        updateUserInfo({ ...userInfo, country: code });
    };

    const handleCitySelect = (val) => {
        setCity(val);
        updateUserInfo({ ...userInfo, city: val });
    };

    const handlePhoneChange = (data) => {
        setPhno(data);
        updateUserInfo({ ...userInfo, phone_number: data });
    };

    const handleAgeSelect = (value) => {
        setSelected(value);
        updateUserInfo({ ...userInfo, age_group_id: value });
    };

    const handleGenderSelect = (value) => {
        setGender(value);
        updateUserInfo({ ...userInfo, gender: value });
    };

    return (
        <PersonalInfoContainer>
            <HeadingContainer>
                <LoginHeading lang={lang}>
                    {languageData[lang]?.personalinfo}
                </LoginHeading>
                <LoginSub style={{fontWeight: "normal"}} lang={lang}>
                    {languageData[lang]?.personalinfodesc}
                </LoginSub>
            </HeadingContainer>
            <FormContainer>
                <FormTextInput
                    placeholder={languageData[lang]?.nameplaceholder}
                    type='text'
                    value={name}
                    onChange={handleNameChange}
                    required
                />
                <StyledFlagSelect
                    selected={country}
                    onSelect={handleCountrySelect}
                    placeholder={languageData[lang]?.countryplaceholder}
                    searchable
                    searchPlaceholder='Select Country'
                    className='CountrySelect'
                    fullWidth={true}
                    selectedSize={16}
                />
                <StyledCitySelect country={country} countryValueType="short" value={city} onChange={handleCitySelect}/>
                <StyledPhoneInput international value={phno} onChange={handlePhoneChange}
                                    enableSearch={true} placeholder="xxxxxx" countryCodeEditable={true}
                />
                <AgeContainer>
                        <SubHeadings lang={lang}>{languageData[lang]?.selectage}</SubHeadings>
                    <AgeInnerContainer>
                        <AgeSelectContainer>
                            <AgeRadio active={selected === "12 to 14"} onClick={() => handleAgeSelect("12 to 14")} disabled={selected === "12 to 14"}>
                                12 to 16
                            </AgeRadio>
                            <AgeRadio active={selected === "15 to 17"} onClick={() => handleAgeSelect("15 to 17")} disabled={selected === "15 to 17"}>
                                17 to 30
                            </AgeRadio>
                        </AgeSelectContainer>
                        <AgeSelectContainer>
                            <AgeRadio active={selected === "18 to 20"} onClick={() => handleAgeSelect("18 to 20")} disabled={selected === "18 to 20"}>
                                31 to 45
                            </AgeRadio>
                            <AgeRadio active={selected === "21 to 25"} onClick={() => handleAgeSelect("21 to 25")} disabled={selected === "21 to 25"}>
                                Above 45
                            </AgeRadio>
                        </AgeSelectContainer>
                    </AgeInnerContainer>
                </AgeContainer>
                <AgeContainer>
                        <SubHeadings lang={lang}>{languageData[lang]?.AreYou}</SubHeadings>
                        <AgeSelectContainer>
                                <GenderRadio active={gender === "MALE"} onClick={() => handleGenderSelect("MALE")} disabled={gender === "MALE"}>
                                {languageData[lang]?.male}
                                    <GenderImage lang={lang}  style={{transform: "rotateY(180deg)", right: "-5px"}} src={MaleIcon} alt="MALE" />
                                </GenderRadio>
                                <GenderRadio active={gender === "FEMALE"} onClick={() => handleGenderSelect("FEMALE")} disabled={gender === "FEMALE"}>
                                {languageData[lang]?.female}
                                    <GenderImage  src={FemaleIcon} lang={lang} alt="FEMALE" />
                                </GenderRadio>
                        </AgeSelectContainer>
                </AgeContainer>
            </FormContainer>
        </PersonalInfoContainer>
    );
}

export default PersonalInformation;