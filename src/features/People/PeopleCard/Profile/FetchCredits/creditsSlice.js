import { createSlice } from "@reduxjs/toolkit";

const personCreditsSlice = createSlice({
    name: "personCredits",
    initialState: {
        status: "loading",
        personCredits: [],
    },

    reducers: {
        fetchPersonCredits: (state) => {
            state.status = "loading";
        },

        fetchPersonCreditsSuccess: (state, { payload: personCredits }) => {
            state.status = "success";
            state.personCredits = personCredits;
        },

        fetchPersonCreditsError: (state) => {
            state.status = "error";
        },
    }
});

export const { fetchPersonCredits, fetchPersonCreditsError, fetchPersonCreditsSuccess } = personCreditsSlice.actions;
export const selectPersonCreditsState = state => state.personCredits;

export const selectCast = state => selectPersonCreditsState(state).personCredits.cast;


export default personCreditsSlice.reducer;