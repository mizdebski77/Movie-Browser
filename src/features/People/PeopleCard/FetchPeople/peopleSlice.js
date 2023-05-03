import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        status: "loading",
        people: [],
        page: 1,
        query: null,
        totalResults: 0,
    },

    reducers: {
        fetchPeople: (state) => {
            state.status = "loading";
        },

        fetchPeopleSuccess: (state, { payload: people }) => {
            state.status = "success";
            state.people = people;
        },

        fetchPeopleError: (state) => {
            state.status = "error";
        },

        setPage: (state, { payload: page }) => {
            state.page = page;
        },

        setQuery: (state, { payload: query }) => {
            state.query = query;
            state.status = "loading"
        }
    }
});

export const { setQuery, setPage, fetchPeople, fetchPeopleSuccess, fetchPeopleError } = peopleSlice.actions;
export const selecPeopleState = state => state.people;

export const selectPeople = state => selecPeopleState(state).people.results;
export const selectStatus = state => selecPeopleState(state).status;
export const selectPage = state => selecPeopleState(state).page;
export const selectTotalPages = state => selecPeopleState(state).people.total_pages;
export const selectTotalResuults = state => selecPeopleState(state).people.total_results
export const selectQuery = (state) => selecPeopleState(state).query;



export default peopleSlice.reducer;