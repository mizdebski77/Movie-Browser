import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name: "profile",
    initialState: {
        status: "loading",
        profile: [],
    },

    reducers: {
        fetchProfile: (state) => {
            state.status = "loading";
        },

        fetchProfileSuccess: (state, { payload: profile }) => {
            state.status = "success";
            state.profile = profile;
        },

        fetchProfileError: (state) => {
            state.status = "error";
        },
    }
});

export const { fetchProfile, fetchProfileError, fetchProfileSuccess } = profileSlice.actions;
export const selectProfileState = state => state.profile;

export const selectProfile = state => selectProfileState(state).profile;
export const selectProfileStatus = state => selectProfileState(state).status;

export default profileSlice.reducer;
