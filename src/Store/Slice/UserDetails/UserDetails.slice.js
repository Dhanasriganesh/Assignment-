import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: null,
    country: null,
    city: null,
    phoneNumber: null,
    ageGroupId: null,
    gender: null,
    height: null,
    weight: null,
    bodyType: null,
    skinTone: null,
    hairColor: null,
    pattern: [],
    colors: [],
    bodyParts: [],
    top: [],
    bottom: [],
    liked: [],
    disLiked: []
}

const UserDetails = createSlice({
    name:'userDetails',
    initialState,

    reducers:{
        setUserDetails:(state, action) => {
            state.name = action?.payload?.name || state.name;
            state.country = action?.payload?.country || state.country;
            state.city = action?.payload?.city || state.email;
            state.phoneNumber = action?.payload?.phoneNumber || state.phoneNumber;
            state.ageGroupId = action?.payload?.ageGroupId || state.ageGroupId;
            state.gender = action?.payload?.gender || state.gender;
            state.height = action?.payload?.height || state.height;
            state.weight = action?.payload?.weight || state.weight;
            state.bodyType = action?.payload?.bodyType || state.bodyType;
            state.skinTone = action?.payload?.skinTone || state.skinTone;
            state.hairColor = action?.payload?.hairColor || state.hairColor;
            state.patterns = action?.payload?.patterns || state.patterns;
            state.colors = action?.payload?.colors || state.colors;
            state.bodyParts = action?.payload?.bodyParts || state.bodyParts;
            state.top = action?.payload?.top || state.top;
            state.bottom = action?.payload?.bottom || state.bottom;
            state.liked = action?.payload?.liked || state.liked;
            state.disliked = action?.payload?.disliked || state.disLiked;
        },
    }
})

export const {setUserDetails} = UserDetails.actions;
export default UserDetails.reducer;