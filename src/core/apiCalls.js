import axios from "axios";
import { moviesURL, apiKey, apiLanguage, genreURL, movieCreditsURL, peopleURL, peopleDetailsURL, personCreditsURL, moviesDetails, searchMovieURL, searchPeopleURL } from './apiData';


const makeApiCall = async (url) => {
    const response = await axios.get(url);
    return await response.data;
};

export const GetPopularMovies = async (page) => {
    return makeApiCall(`${moviesURL}?api_key=${apiKey}&page=${page}&language=${apiLanguage}`);
};

export const GetMovieDetails = async (id) => {
    return makeApiCall(`${moviesDetails}/${id}?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetMoviesByQuery = async (query, page) => {
    if (!query) {
        return;
    }
    return makeApiCall(`${searchMovieURL}?api_key=${apiKey}&page=${page}&query=${query}`);
};

export const GetGenres = async () => {
    return makeApiCall(`${genreURL}?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetCredits = async (id) => {
    return makeApiCall(`${movieCreditsURL}/${id}/credits?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetPopularPeople = async (page) => {
    return makeApiCall(`${peopleURL}?api_key=${apiKey}&page=${page}&language=${apiLanguage}`)
};

export const GetPeopleDetails = async (id) => {
    return makeApiCall(`${peopleDetailsURL}/${id}?api_key=${apiKey}&language=${apiLanguage}`)
};

export const GetPeopleCredits = async (id) => {
    return makeApiCall(`${personCreditsURL}/${id}/credits?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetPeopleByQuery = async (query, page) => {
    if (!query) {
        return
    }
    return makeApiCall(`${searchPeopleURL}?api_key=${apiKey}&page=${page}&query=${query}`);
};

