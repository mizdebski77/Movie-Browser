import { createSlice } from "@reduxjs/toolkit";

const creditsSlice = createSlice({
    name: "credits",
    initialState: {
        status: "loading",
        credits: [],
    },

    reducers: {
        fetchCredits: (state) => {
            state.status = "loading";
        },

        fetchCreditsSuccess: (state, { payload: credits }) => {
            state.status = "success";
            state.credits = credits;
        },

        fetchCreditsError: (state) => {
            state.status = "error";
        },
    }
});

export const { fetchCredits, fetchCreditsError, fetchCreditsSuccess } = creditsSlice.actions;
export const selectCreditsState = state => state.credits.credits;

export const selectCast = state => selectCreditsState(state).cast;


export default creditsSlice.reducer;