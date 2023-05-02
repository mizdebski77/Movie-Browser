import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        status: "loading",
        people: [],
        page: 1,
    },

    reducers: {
        fetchPeople: (state) => {
            state.status = "loading";
        },

        fetchPeopleSuccess: (state, { payload: people }) => {
            state.status = "success";
            state.people = people;
        },

        setPage: (state, { payload: page }) => {
            state.page = page;
        },

        fetchPeopleError: (state) => {
            state.status = "error";
        },
    }
});

export const { setPage, fetchPeople, fetchPeopleSuccess, fetchPeopleError } = peopleSlice.actions;
export const selecPeopleState = state => state.people;

export const selectPeople = state => selecPeopleState(state).people.results;
export const selectStatus = state => selecPeopleState(state).status;
export const selectPage = state => selecPeopleState(state).page;




export default peopleSlice.reducer;