import React, { useState, useEffect, useId } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthWrapper, LogoImage, RegisterImageContainer, BackgroundImage, RegisterContainer, LoginOptionsContainer, Tab, ButtonContainer, ButtonStyle, ModalWrapper, ModalContent, RegisterInnerContainer } from './Auth.Style';
import logo from "../../Assets/Images/Logo.png";
import { MultiStepProgressBar } from './MultiStepProgressBar';
import PersonalInformation from './RegisterPages/PersonalInformation';
import PhysicalCharacteristics from './RegisterPages/PhysicalCharacteristics';
import PersonalPreferences1 from './RegisterPages/PersonalPreferences1';
import PersonalPreferences2 from './RegisterPages/PersonalPreferences2';
import PersonalPreferences3 from './RegisterPages/PersonalPreferences3';
import regImg from "../../Assets/Images/RegisterBackgroundImage.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { useLayoutDirection } from '../context/context';
import { setLanguage } from '../../Store/Slice/language/language.slice';
import { languageData } from '../LanguageData/Data';
import ApiClient from '../../Config/index.config';
import { setUserDetails } from '../../Store/Slice/UserDetails/UserDetails.slice';
import BodyShape from './RegisterPages/BodyShape';
import BodyParts from './RegisterPages/BodyParts';

function Register() {
    const location = useLocation();
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
        try{
            dispatch(setUserDetails({name: userInfo?.name, country: userInfo?.country, city: userInfo?.city,
                                    phoneNumber: userInfo?.phone_number, ageGroupId: userInfo?.age_group_id, gender: userInfo?.gender}))
            const response = await ApiClient.post("/auth/register", userInfo);
        }
        catch(error){
            console.log(error);
            if(error?.response?.data?.error_code === "1001"){
                // Invalid Email address is provided
                setErrorMessage("Invalid Email address")
            }
            else if(error?.response?.data?.error_code === "1002"){
                // Invalid phone number is provided
                setErrorMessage("Invalid phone number")
            }
            else if(error?.response?.data?.error_code === "1003"){
                // User with this email already exists
                setErrorMessage("User with this email already exists")
            }
            else if(error?.response?.data?.error_code === "1004"){
                // User with this phone number already exists
                setErrorMessage("User with this phone number already exists")
            }
            else if(error?.response?.data?.error_code === "1005"){
                // Requested data not found
                setErrorMessage("Requested data not found")
            }
            else if(error?.response?.data?.error_code === "1006"){
                // Invalid parameters are provided
                setErrorMessage("Invalid parameters are provided")
            }
        }
    }

    const nextButton = () => {
        // Check if all required fields are filled
        if (userInfo.name && userInfo.country && userInfo.phone_number &&  userInfo.city && userInfo.gender && userInfo.age_group_id) {
            if(index === 1){
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

    return (
        <>
        <AuthWrapper>
            <RegisterContainer>
                <RegisterInnerContainer>
                    <LoginOptionsContainer active={location.pathname === "/login"}
                        location={location.pathname}>
                        <Tab
                            to={"/"}
                            active={location.pathname === "/"}
                            location={location.pathname}
                        >
                            {languageData[lang]?.signup}
                        </Tab>
                        <Tab
                            to={"/login"}
                            active={location.pathname === "/login"}
                            location={location.pathname}
                        >
                            {languageData[lang]?.Login}
                        </Tab>
                    </LoginOptionsContainer>

                    <MultiStepProgressBar step={index} showModal={showModal} />

                    {index === 1 && <PersonalInformation updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo}/>}
                    {index === 2 && <PhysicalCharacteristics updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo}/>}
                    {index === 3 && <BodyShape updataUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo}></BodyShape>}
                    {index === 4 && <PersonalPreferences1 updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo}/>}
                    {index === 5 && <PersonalPreferences2 updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo}/>}
                    {index === 6 && <BodyParts updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo}/>}
                    {index === 7 && <PersonalPreferences3 updateUserInfo={updateUserInfo} nextButton={nextButton} userInfo={userInfo}/>}  
                    
                    <ButtonContainer>
                        {index === 1 ? (
                            <ButtonStyle
                                style={{ width: "144px", height: "53px", borderRadius: "9px", cursor:"none",
                                        border:"none", zIndex:"-10000", background:"transparent", fontWeight:"normal",
                                }}>
                            </ButtonStyle>
                        ) : (
                            <ButtonStyle
                                onClick={prevButton}
                                disabled={index === 1}
                                style={{ width: "144px", height: "53px", background: "grey", borderRadius: "9px",
                                        fontWeight:"normal", gap: "1rem"
                                }}>
                                <FaArrowRightLong style={{transform: "rotateY(180deg)"}} /> Back
                            </ButtonStyle>
                        )}

                        <ButtonStyle
                            onClick={nextButton}
                            style={{ width: "144px", height: "53px", borderRadius: "9px", fontWeight:"normal", gap: "1rem",
                                pointerEvents: userInfo.name && userInfo.country && userInfo.phone_number && userInfo.city && userInfo.gender && userInfo.age_group_id ? 'auto' : 'none',
                                opacity: userInfo.name && userInfo.country && userInfo.phone_number && userInfo.city && userInfo.gender && userInfo.age_group_id ? 1 : 0.5
                            }}
                            disabled={!(userInfo.name && userInfo.country && userInfo.phone_number && userInfo.city && userInfo.gender && userInfo.age_group_id)}
                        >
                            {languageData[lang]?.next} <FaArrowRightLong style={{transform: lang === 'ar' ? 'rotate(180deg)' : 'none'}}/>
                        </ButtonStyle>
                    </ButtonContainer>

                </RegisterInnerContainer>
            </RegisterContainer>

            <RegisterImageContainer>
                <BackgroundImage src={regImg} />
                {/* <LogoImage src={logo} /> */}
            </RegisterImageContainer>

            {/* {showModal ?
            <ModalWrapper>
            <ModalContent style={{ display: "flex", flexDirection: "column", width: "600px" }}>
                <button onClick={closeModal}>Close</button>
                <h2>User Information:</h2>
                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "30vh" }}>
                    <div style={{ flex: "1", padding: "5px" }}>
                        <p>Name: {userInfo.name}</p>
                        <p>Country: {userInfo.country}</p>
                        <p>Region: {userInfo.region}</p>
                        <p>Phone Number: {userInfo.phoneNumber}</p>
                        <p>Age: {userInfo.age}</p>
                        <p>Gender: {userInfo.gender}</p>
                        <p>Pattern: [{userInfo.Pattern.join(', ')}]</p>
                        <p>Colors: [{userInfo.Colors.join(', ')}]</p>
                        <p>Body Parts: [{userInfo.BodyParts.join(', ')}]</p>
                        <p>Top Wear: [{userInfo.Top.join(', ')}]</p>
                        <p>Bottom Wear: [{userInfo.Bottom.join(', ')}]</p>
                    </div>
                    <div style={{ flex: "1", padding: "5px" }}>
                        <p>Liked: [{userInfo.Liked.join(', ')}]</p>
                        <p>Disliked: [{userInfo.DisLiked.join(', ')}]</p>
                        <p>Height: {userInfo.height}</p>
                        <p>Weight: {userInfo.weight}</p>
                        <p>Body Type: {userInfo.bodyType}</p>
                        <p>Skin Color: {userInfo.SkinColor}</p>
                        <p>Hair Color: {userInfo.HairColor}</p>
                    </div>
                </div>
            </ModalContent>
        </ModalWrapper>
            : null} */}
        </AuthWrapper>
        <button onClick={handleClick}>Change Layout Direction</button>
        </>
    );
}

export default Register;