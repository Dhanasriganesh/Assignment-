import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import { StepTitle, StyledCaptionContainer, StyledStep } from "./Auth.Style";
import { FaCheck } from "react-icons/fa";
import { useSelector } from "react-redux";
import { languageData } from "../LanguageData/Data";

export const MultiStepProgressBar = (props) => {
    const { step, showModal } = props;
    const lang=useSelector((store)=>store?.language?.language);

    return (<>
        <div style={{ width: "75%", margin: "2vh auto" }}>
            <ProgressBar style={{transform: lang === 'ar' ? 'rotate(180deg)' : 'none'}}
                percent={((step - 1) * 100) / 2}
                filledBackground="linear-gradient(to right, #de6bff, #7a32e4)"
                height="3px"
            >
                <Step transition="scale" style={{transform: lang === 'ar' ? 'rotate(180deg)' : 'none'}}>
                    {({ accomplished }) => (
                        <StyledStep accomplished={accomplished}>{accomplished && step === 1 ? 1 : <FaCheck />}</StyledStep>
                    )}

                </Step> 
                <Step transition="scale" style={{transform: lang === 'ar' ? 'rotate(180deg)' : 'none'}}>
                    {({ accomplished }) => (
                        <StyledStep accomplished={accomplished}>{accomplished && step === 2 ? 2 : <FaCheck />}</StyledStep>
                    )}
                </Step>
                <Step transition="scale" style={{transform: lang === 'ar' ? 'rotate(180deg)' : 'none'}}>
                    {({ accomplished }) => (
                        <StyledStep accomplished={accomplished || showModal}>{accomplished || showModal ? <FaCheck /> : 3}</StyledStep>
                    )}
                </Step>
            </ProgressBar>
        </div>
        <StyledCaptionContainer>
            <StepTitle>{languageData[lang]?.personalinfo}</StepTitle>
            <StepTitle >{languageData[lang]?.physicalinfo}</StepTitle>
            <StepTitle >{languageData[lang]?.personalpre}</StepTitle>
        </StyledCaptionContainer>
        </>
    );
}
