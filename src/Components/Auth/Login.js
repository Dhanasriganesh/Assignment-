import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthWrapper, LogoImage, RegisterImageContainer, BackgroundImage, RegisterContainer, LoginOptionsContainer, ModalContent, ModalWrapper, Tab, LoginHeading, LoginSub, Phone2Input, ButtonContainer, ButtonStyle, FormtoLogin, ModalHeading, ModalSub, ModalResend, CloseButton, OtpButtonContainer, OtpButtonStyle, HeadingContainer, RegisterInnerContainer, ErrorDiv } from './Auth.Style'; // Import styled components from Auth.Style
import logo from "../../Assets/Images/Logo.png";
import OtpInput from 'react-otp-input';
import { StyledPhoneInput } from './RegisterPages/Styles/Register.styles';
import regImg from "../../Assets/Images/RegisterBackgroundImage.svg";
import { RxCross2 } from "react-icons/rx";
import ApiClient from '../../Config/index.config';
import { languageData } from '../LanguageData/Data';
import { useSelector } from 'react-redux';

function Login() {
    const location = useLocation();
    const navigate = useNavigate(); // Add useNavigate hook
    const [loading, setLoading] = useState(false); // State for loading indicator
    const [phoneNumber, setPhoneNumber] = useState("sa");
    const [otpModal, setOtpModal] = useState(false); // State for modal visibility
    const [otp, setOtp] = useState('');
    const lang= useSelector((store) => store?.language?.language)
    const [errorMessage, setErrorMessage] = useState(null)

    const login = async () => {
        try{
            const response = await ApiClient.post("/auth/send-otp", {
                "phone_number": phoneNumber,
            });
        }
        catch(error){
            console.log(error);
        }
        setLoading(false);
        setOtpModal(true);
        setErrorMessage(null);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading indicator
        login();
    };

    const verfiyOtp = async () => {
        try{
            const response = await ApiClient.post("/auth/login", {
                "phone_number": phoneNumber,
                "otp_code": otp,
            })
            setOtpModal(false);
        }
        catch(error){
            if(error?.response?.data?.error_code === "1007"){
                // User not Registered
                setErrorMessage("User not Registered")
            }
            else if(error?.response?.data?.error_code === "1008"){
                // Invalid OTP
                setErrorMessage("Invalid OTP")
            }
            else if(error?.response?.data?.error_code === "1009"){
                // OTP Expired
                setErrorMessage("OTP Expired")
            }
        }
    }

    const handleOtp = () => {
        setErrorMessage(null)
        verfiyOtp()
        setOtp('');
    }

    // Handeling Clearing of Error message when user writes the OTP
    useEffect(() => {
        setErrorMessage(null);
    },[otp])

    const handleCloseModal = () => {
        setErrorMessage(null)
        setOtpModal(false);
        setOtp('');
    }

    // Condition to check if all four digits are entered
    const isOtpComplete = otp.length === 4;

    return (
        <AuthWrapper >
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
                <HeadingContainer style={{marginTop:"4rem"}}>
                    <LoginHeading>
                        {languageData[lang]?.LoginHead}
                    </LoginHeading>
                    <LoginSub>{languageData[lang]?.Logindesc}</LoginSub>
                </HeadingContainer>
                <FormtoLogin onSubmit={handleSubmit}>
                    <StyledPhoneInput
                        country={phoneNumber}
                        onChange={(data) => setPhoneNumber(data)}
                        placeholder="Enter Number"
                        countryCodeEditable={true}
                        onEnterKeyPress={handleSubmit}
                    />
                    {/* <ButtonContainer> */}
                        <ButtonStyle type="submit" style={{width: "435px"}}>
                            {languageData[lang]?.Loginpaagebutton}
                        </ButtonStyle>
                    {/* </ButtonContainer> */}
                </FormtoLogin>
                </RegisterInnerContainer>
            </RegisterContainer>
            <RegisterImageContainer>
                <BackgroundImage src={regImg} />
                {/* <LogoImage src={logo} /> */}
            </RegisterImageContainer>

            {/* Modal */}
            {otpModal ?
                <ModalWrapper>
                <ModalContent>
                    <CloseButton onClick={handleCloseModal}><RxCross2 /></CloseButton>
                    <>
                        <ModalHeading>Just Checking in 💜</ModalHeading>
                        <ModalSub>Please enter the code you received on {phoneNumber.replace(/\d(?=.{3,8}$)/g, '*')}</ModalSub>
                    </>
                    <OtpInput
                        value={otp}
                        onChange={setOtp}
                        autofocus
                        renderSeparator={<span>&nbsp;&nbsp;</span>}
                        renderInput={(props) => <input {...props} />}
                        inputStyle={{ width: '80px', height: '76px', margin: '4px',fontSize: '20px', borderRadius: '8px',
                                        border: '1px solid #ccc', boxSizing: 'border-box', textAlign: 'center',
                        }}
                    />
                    {errorMessage ? <ErrorDiv>{errorMessage}</ErrorDiv> : null}
                    <ModalResend>Didn’t receive it? We’ll resend it</ModalResend>
                    <OtpButtonContainer>
                        <OtpButtonStyle onClick={handleOtp} disabled={!isOtpComplete}>
                            Continue
                        </OtpButtonStyle>
                    </OtpButtonContainer>
                </ModalContent>
            </ModalWrapper>
            :null}
            
        </AuthWrapper>
    );
}

export default Login;