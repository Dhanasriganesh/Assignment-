import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { HeadingContainer, LoginHeading, LoginSub, PersonalInfoContainer, SubHeadings } from '../Auth.Style';
import { AgeContainer, AstheticCaroseul, DisLike, Like } from './Styles/Register.styles';
import { SliderContainer, SliderImageContainer, SliderImage, SliderContainer1 } from '../../Slider/Slider.styles';
import { LikeContainer } from './Styles/Register.styles';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { LikePreferencesData } from '../../data/data';
import { GoDotFill } from "react-icons/go";
import { GoDot } from "react-icons/go";
import { languageData } from '../../LanguageData/Data';
import { useSelector } from 'react-redux';

function PersonalPreferences1({ updateUserInfo, userInfo }) {
  const [likedItems, setLikedItems] = useState(userInfo.Liked || []);
  const [dislikedItems, setDislikedItems] = useState(userInfo.DisLiked || []);
  const lang = useSelector((store) => store?.language?.language);

  const handleLikeSelect = (item) => {
    const isLiked = likedItems.includes(item);
    const isDisliked = dislikedItems.includes(item);

    if (!isLiked) {
      // If the item is not already liked, add it to liked and remove it from disliked
      const newLiked = [...likedItems, item];
      const newDisliked = dislikedItems.filter(name => name !== item);
      setLikedItems(newLiked);
      setDislikedItems(newDisliked);
      // Update user information here
      updateUserInfo({ Liked: newLiked, DisLiked: newDisliked });
    } else {
      // If the item is already liked, remove it from liked
      const newLiked = likedItems.filter(name => name !== item);
      setLikedItems(newLiked);
      // Update user information here
      updateUserInfo({ Liked: newLiked, DisLiked: dislikedItems });
    }
  };

  const handleDislikeSelect = (item) => {
    const isDisliked = dislikedItems.includes(item);
    const isLiked = likedItems.includes(item);

    if (!isDisliked) {
      // If the item is not already disliked, add it to disliked and remove it from liked
      const newDisliked = [...dislikedItems, item];
      const newLiked = likedItems.filter(name => name !== item);
      setDislikedItems(newDisliked);
      setLikedItems(newLiked);
      // Update user information here
      updateUserInfo({ Liked: newLiked, DisLiked: newDisliked });
    } else {
      // If the item is already disliked, remove it from disliked
      const newDisliked = dislikedItems.filter(name => name !== item);
      setDislikedItems(newDisliked);
      // Update user information here
      updateUserInfo({ Liked: likedItems, DisLiked: newDisliked });
    }
  };

  useEffect(() => {
    // Prefill the selected values based on userInfo
    setLikedItems(userInfo.Liked || []);
    setDislikedItems(userInfo.DisLiked || []);
  }, [userInfo]);

  const CustomPrevArrow = (props) => {
    const { onClick, style } = props;
    return (
      <div
        className="slick-prev"
        style={{ ...style, left: 10, zIndex: 999, color: 'black', fontSize: '25px' }}
        onClick={onClick}
      >
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { onClick, style } = props;
    return (
      <div
        className="slick-next"
        style={{ ...style, right: 10, zIndex: 999, color: 'black', fontSize: '25px' }}
        onClick={onClick}
      >
      </div>
    );
  };

  const settings = {
    infinite: true,
    dots: true,
    speed: 700,
    cssEase: "linear",
    slidesToShow: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    appendDots: dots => (
      <div style={{ borderRadius: "10px", padding: "0px", alignContent: "center", marginLeft: "-4%" }}>
        <ul style={{ margin: "0px" }}>
          {dots.map((dot, index) => (
            <li key={index} style={{ display: "inline-block", margin: "0 5px" }}>
              {dot.props.className === "slick-active" ? <GoDotFill size={24} /> : <GoDot />}
            </li>
          ))}
        </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };


  return (
    <PersonalInfoContainer>
      <HeadingContainer>
        <LoginHeading lang={lang}>{languageData[lang]?.personalpre}</LoginHeading>
        <LoginSub></LoginSub>

      </HeadingContainer>
      <AgeContainer>
        <SubHeadings lang={lang}>{languageData[lang]?.prefrence1desc}</SubHeadings>
      </AgeContainer>
      <AstheticCaroseul>
        <SliderContainer1>
          <SliderContainer>
            <Slider {...settings}>
              {LikePreferencesData.map((item, index) => (
                <SliderImageContainer key={index}>
                  <SliderImage src={item.imageUrl} alt={`Preference ${item.name}`} />
                  <LikeContainer>
                    <DisLike
                      isDisliked={dislikedItems.includes(item.name)}
                      onClick={() => handleDislikeSelect(item.name)}
                      disabled={dislikedItems.includes(item.name)}
                    >
                      <IoHeartDislikeOutline color={'black'} />
                    </DisLike>
                    <Like
                      isLiked={likedItems.includes(item.name)}
                      onClick={() => handleLikeSelect(item.name)}
                      disabled={likedItems.includes(item.name)}
                    >
                      <IoMdHeartEmpty color={'black'} />
                    </Like>
                  </LikeContainer>
                </SliderImageContainer>
              ))}
            </Slider>
          </SliderContainer>
        </SliderContainer1>
      </AstheticCaroseul>
    </PersonalInfoContainer>
  );
}

export default PersonalPreferences1;

