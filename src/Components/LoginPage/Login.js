import React, { useState, useEffect } from 'react'
import { HeaderNav, Links, LogLink, LoginContainer, LoginInfoContianer, LogoImage, LogoText, Welcome, WelcomeDiv, WelcomeImage, WelcomeText,Logoround } from './Login.styles'
import logo from "../../Assets/Images/image 1.png";
import Female from "../../Assets/Images/et_profile-female.png";
import PersonalInformation from '../Auth/RegisterPages/PersonalInformation';
import PhysicalCharacteristics from '../Auth/RegisterPages/PhysicalCharacteristics';
import PersonalPreferences1 from '../Auth/RegisterPages/PersonalPreferences1';
import PersonalPreferences2 from '../Auth/RegisterPages/PersonalPreferences2';
import PersonalPreferences3 from '../Auth/RegisterPages/PersonalPreferences3';
import regImg from "../../Assets/Images/RegisterBackgroundImage.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutDirection } from '../context/context';
import { setLanguage } from '../../Store/Slice/language/language.slice';
import { languageData } from '../LanguageData/Data';
import BodyParts from '../Auth/RegisterPages/BodyParts';
import BodyShape from '../Auth/RegisterPages/BodyShape';
import { setUserDetails } from '../../Store/Slice/UserDetails/UserDetails.slice';
import { ButtonContainer, ButtonStyle } from '../Auth/Auth.Style';
import ApiClient from '../../Config/index.config';
function Login() {
    const { isRTL, toggleLayoutDirection } = useLayoutDirection();
    const lang = useSelector((store) => store?.language?.language);
    const [index, setIndex] = useState(1);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null)
    const [userInfo, setUserInfo] = useState({
        name: "",
        country: "",
        city: "",
        phone_number: "",
        age_group_id: "",
        gender: "",
        // height: 0,
        // weight: 0,
        // bodyShape: "",
        // SkinTone: "",
        // HairColor: "",
        // Pattern: [],
        // Colors: [],
        // BodyParts: [],
        // Top: [],
        // Bottom: [],
        // Liked: [],
        // DisLiked: []
    });
    useEffect(() => {
        // Reset userInfo when the component mounts
        setUserInfo({
            name: "",
            country: "",
            city: "",
            phone_number: "",
            age_group_id: "",
            gender: "",
            // height: 0,
            // weight: 0,
            // bodyShape: "",
            // SkinTone: "",
            // HairColor: "",
            // Pattern: [],
            // Colors: [],
            // BodyParts: [],
            // Top: [],
            // Bottom: [],
            // Liked: [],
            // DisLiked: []
        });
    }, []);
    console.log(lang)
    console.log(languageData[lang]);
    const handleClick = () => {
        toggleLayoutDirection(!isRTL);
        dispatch(setLanguage(!isRTL ? "ar" : "en"));
        // localStorage.setItem('language', lang === 'ar' ? 'en' : 'ar');

    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const Register = async () => {
        try {
            dispatch(setUserDetails({
                name: userInfo?.name, country: userInfo?.country, city: userInfo?.city,
                phoneNumber: userInfo?.phone_number, ageGroupId: userInfo?.age_group_id, gender: userInfo?.gender
            }))
            const response = await ApiClient.post("/auth/register", userInfo);
        }
        catch (error) {
            console.log(error);
            if (error?.response?.data?.error_code === "1001") {
                // Invalid Email address is provided
                setErrorMessage("Invalid Email address")
            }
            else if (error?.response?.data?.error_code === "1002") {
                // Invalid phone number is provided
                setErrorMessage("Invalid phone number")
            }
            else if (error?.response?.data?.error_code === "1003") {
                // User with this email already exists
                setErrorMessage("User with this email already exists")
            }
            else if (error?.response?.data?.error_code === "1004") {
                // User with this phone number already exists
                setErrorMessage("User with this phone number already exists")
            }
            else if (error?.response?.data?.error_code === "1005") {
                // Requested data not found
                setErrorMessage("Requested data not found")
            }
            else if (error?.response?.data?.error_code === "1006") {
                // Invalid parameters are provided
                setErrorMessage("Invalid parameters are provided")
            }
        }
    }

    const nextButton = () => {
        // Check if all required fields are filled
        if (userInfo.name && userInfo.country && userInfo.phone_number && userInfo.city && userInfo.gender && userInfo.age_group_id) {
            if (index === 1) {
                Register()
            }
            if (index < 7) {
                setIndex(prevIndex => prevIndex + 1);
                scrollToTop();
            } else if (index === 7) {
                setShowModal(true); // Show the modal
                // Submit the user information here
                console.log("User Info:", userInfo);
            }
        } else {
            // Handle case when required fields are not filled
            alert("Please fill out all the required fields (name, country, city, gender, age).");
        }
    };

    const prevButton = () => {
        if (index > 1) {
            setIndex(prevIndex => prevIndex - 1);
            scrollToTop(); // Scroll to the top of the page
        }
    };

    // Function to update user information
    const updateUserInfo = (info) => {
        setUserInfo(prevInfo => ({ ...prevInfo, ...info }));
    };

    const closeModal = () => {
        setShowModal(false);
    };
    return (<>
        <HeaderNav>
            <LogoText>الرئيسية</LogoText>
            <LogoImage src={logo}  />
        </HeaderNav>
        <Welcome>
            <WelcomeDiv>
                <WelcomeText>سمية الحربي</WelcomeText>
                <WelcomeImage>
                    <Logoround src={Female} />
                </WelcomeImage>
            </WelcomeDiv>
            <Links>
            <LogLink active={index===1} lang={lang}>{languageData[lang]?.personalinfo}</LogLink>
            <LogLink active={index===2 || index===3} lang={lang}>{languageData[lang]?.physicalinfo}</LogLink>
            <LogLink active={index >=4} lang={lang}>{languageData[lang]?.personalpre}</LogLink>
            </Links>
        </Welcome>
        <LoginInfoContianer>
            <LoginContainer>
                {index === 1 && <PersonalInformation updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo} />}
                {index === 2 && <PhysicalCharacteristics updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo} />}
                {index === 3 && <BodyShape updataUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo}></BodyShape>}
                {index === 4 && <PersonalPreferences1 updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo} />}
                {index === 5 && <PersonalPreferences2 updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo} />}
                {index === 6 && <BodyParts updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo} />}
                {/* {index === 7 && <PersonalPreferences3 updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo} />} */}

                <ButtonContainer>
                    {index === 1 ? (
                        <ButtonStyle
                            style={{
                                width: "144px", height: "53px", borderRadius: "9px", cursor: "none",
                                border: "none", zIndex: "-10000", background: "transparent", fontWeight: "normal",
                            }}>
                        </ButtonStyle>
                    ) : (
                        <ButtonStyle
                            onClick={prevButton}
                            disabled={index === 1}
                            style={{
                                width: "144px", height: "53px", background: "grey", borderRadius: "9px",
                                fontWeight: "normal", gap: "1rem"
                            }}>
                            <FaArrowRightLong style={{ transform: "rotateY(180deg)" }} /> Back
                        </ButtonStyle>
                    )}

                    <ButtonStyle
                        onClick={nextButton}
                        style={{
                            width: "144px", height: "53px", borderRadius: "9px", fontWeight: "normal", gap: "1rem",
                            pointerEvents: userInfo.name && userInfo.country && userInfo.phone_number && userInfo.city && userInfo.gender && userInfo.age_group_id ? 'auto' : 'none',
                            opacity: userInfo.name && userInfo.country && userInfo.phone_number && userInfo.city && userInfo.gender && userInfo.age_group_id ? 1 : 0.5
                        }}
                        disabled={!(userInfo.name && userInfo.country && userInfo.phone_number && userInfo.city && userInfo.gender && userInfo.age_group_id)}
                    >
                        {languageData[lang]?.next} <FaArrowRightLong style={{ transform: lang === 'ar' ? 'rotate(180deg)' : 'none' }} />
                    </ButtonStyle>
                </ButtonContainer>
            </LoginContainer>

        </LoginInfoContianer>
        <button onClick={handleClick}>Change Layout Direction</button>
    </>
    )
}

export default Login