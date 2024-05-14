import styled from "styled-components";
import { media } from "../../Assets/Styles/utils";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SliderContainer1 = styled.div`
  position: relative; /* Ensure position context for absolute positioning */
  width: 100%;
  height: 470px;
  padding-bottom: 60px;
  background: #D9D9D9;
  border-radius: 55px;
  z-index: 1; /* Set lower z-index */
`;

export const SliderContainer = styled.div`
  width: 100%;
  overflow: hidden;
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 18px;
  z-index: 2; /* Set higher z-index */
`;

export const SliderImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  flex-direction: column;
`;

export const SliderImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
`;
