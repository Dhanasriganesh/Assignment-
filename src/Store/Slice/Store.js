import { configureStore } from "@reduxjs/toolkit";
import userDetailsSlice from "./UserDetails/UserDetails.slice";
import languageSlice from "./language/language.slice";

const Store =  configureStore({
  reducer : {
      userDetails: userDetailsSlice,
      language: languageSlice,
  }
})

export default Store;
