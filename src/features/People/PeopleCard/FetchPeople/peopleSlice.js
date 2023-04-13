import { createSlice } from "@reduxjs/toolkit";

const peopleSlice = createSlice({
    name: "people",
    initialState: {
        status: "loading",
        people: [],
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
    }
});

export const { fetchPeople, fetchPeopleSuccess, fetchPeopleError } = peopleSlice.actions;
export const selecPeopleState = state => state.people;

export const selectPeople = state => selecPeopleState(state).people.results;
export const selectStatus = state => selecPeopleState(state).status;
export const xd = state => selecPeopleState(state).people;


export const getProfileByID = (state, personID) => {
    const people = selectPeople(state);
    if (people && people.length > 0) {
        return people.find(person => person.id === parseInt(personID));
    }
    return undefined;
}


export default peopleSlice.reducer;