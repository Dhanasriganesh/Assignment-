import styled from "styled-components";
import { media } from "../../Assets/Styles/utils";
import { createGlobalStyle } from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Arabic:wght@100..900&display=swap');
</style>


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Noto Sans Arabic';
    
  }
`;



export const HeaderNav=styled.div`
width:100%;
display:flex;
justify-content:space-between;
align-items:center;
padding:20px;
font-family:"Noto Sans Arabic", sans-serif;
`;
export const Logoround=styled.img`
width: 118px;
height: 88px;
padding-left:15px;
padding-right:15px;
// top: 304px;
// left: 1059px;
// padding: 0px 0.38px 0px 0.38px;
display:flex;
justify-content:center;
align-items:center;
gap: 0px;
// opacity: 0px;
`
;
export const LogoImage=styled.img`
width:100px;
height:80px;
margin-left:20px;
justify-content:center;
// padding-left:20px;
`;

export const LogoText=styled.span`
font-family: Noto Sans Arabic;
font-size: 24px;
font-weight: 400;
line-height: 50.69px;
text-align: left;
`;
export const Welcome=styled.div`width:100%;
height:100%;
display:flex;
align-items:center;
flex-direction:column;
justify-content:center;
gap:20px;
`;
export const WelcomeDiv=styled.div`
height:200px;
display:flex;
align-items:center;
justify-content:center;
gap:20px;
`;

export const WelcomeText=styled.span`
font-family: Noto Sans Arabic;
font-size: 50px;
font-weight: 800;
line-height: 105.6px;
text-align: left;
color:#646476;
`;

export const WelcomeImage=styled.div`
border:1px solid black;
border-radius:50%;
height:150px;
width:150px;
display:flex;
align-items:center;
`;

export const LoginInfoContianer=styled.div`
width:100%;
height:100%;
padding:50px 0px;
display:flex;
align-items:center;
justify-content:center;
background: linear-gradient(180deg, #FFF4FB 0%, #F3DBFE 13.5%, #CFECF8 81.5%, #E8F7FC 100%);
`;

export const LoginContainer=styled.div`
width:800px;
height:100%;
background:white;
border-radius:15px;
display:flex;
flex-direction:column;
padding:20px;
`;

export const Links=styled.div`
display:flex;
align-items:center;
justify-content:center;
gap:20px;
width:100%;
box-shadow:0px 4px 4px rgb(0,0,0,0.4);
`;
export const LogLink=styled.span`
font-weight:700;
font-size:16px;
display:flex;
padding:20px;
color: ${(props)=> props.active?"#693BD7":"gray"};
border-bottom:${(props)=>props.active?"2px solid #693BD7":"none"};
`;