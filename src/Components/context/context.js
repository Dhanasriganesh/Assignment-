import React, { createContext, useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";

const LayoutDirectionContext = createContext();

export const useLayoutDirection = () => {
  return useContext(LayoutDirectionContext);
};

export const LayoutDirectionProvider = ({ children }) => {
  const [isRTL, setIsRTL] = useState(() => {
    const storedIsRTL = localStorage.getItem("isRTL");
    return storedIsRTL === "true";
  });

  const toggleLayoutDirection = (boolean) => {
    setIsRTL(boolean);
  };

  useEffect(()=>{
    const lang = localStorage.getItem("language");
    if(lang === 'ar'){
      setIsRTL(true)
    }
    else{
      setIsRTL(false)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("isRTL", isRTL.toString());

  }, [isRTL]);

  useEffect(() => {
    // After the language direction changes, update the root HTML element
    const rootHtml = document.getElementById("root-html");
    if (rootHtml) {
      rootHtml.setAttribute("dir", isRTL ? "rtl" : "ltr");
    }
  }, [isRTL]);

  return (
    <LayoutDirectionContext.Provider value={{ isRTL, toggleLayoutDirection }}>
      {children}
    </LayoutDirectionContext.Provider>
  );
};