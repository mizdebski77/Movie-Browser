import axios from "axios";
import { moviesURL, apiKey, apiLanguage, genreURL, movieCreditsURL, peopleURL, peopleDetailsURL, personCreditsURL, moviesDetails, searchMovieURL } from './apiData';


const makeApiCall = async (url) => {
    const response = await axios.get(url);
    return await response.data;
};

export const GetPopularMovies = async (currentPage) => {
    return makeApiCall(`${moviesURL}?api_key=${apiKey}&page=${currentPage}&language=${apiLanguage}`);
};

export const GetMovieDetails = async (id) => {
    return makeApiCall(`${moviesDetails}/${id}?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetMoviesByQuery = async (query, currentPage) => {
    if (!query) {
        return;
    }
    return makeApiCall(`${searchMovieURL}?api_key=${apiKey}&page=${currentPage}&query=${query}`);
};

export const GetGenres = async () => {
    return makeApiCall(`${genreURL}?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetCredits = async (id) => {
    return makeApiCall(`${movieCreditsURL}/${id}/credits?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetPopularPeople = async (currentPage) => {
    return makeApiCall(`${peopleURL}?api_key=${apiKey}&page=${currentPage}&language=${apiLanguage}`)
};

export const GetPeopleDetails = async (id) => {
    return makeApiCall(`${peopleDetailsURL}/${id}?api_key=${apiKey}&language=${apiLanguage}`)
};

export const GetPeopleCredits = async (id) => {
    return makeApiCall(`${personCreditsURL}/${id}/credits?api_key=${apiKey}&language=${apiLanguage}`);
}

