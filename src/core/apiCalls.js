import axios from "axios";
import { moviesURL, apiKey, apiLanguage, genreURL, movieCreditsURL, peopleURL, peopleDetailsURL, personCreditsURL } from './apiData';


const makeApiCall = async (url) => {
    const response = await axios.get(url);
    return await response.data;
};

export const GetPopularMovies = async (currentPage, query) => {

    return makeApiCall(`${moviesURL}?api_key=${apiKey}&page=${currentPage}&language=${apiLanguage}&query=${query}`);
};

export const GetGenres = async () => {
    return makeApiCall(`${genreURL}?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetCredits = async (id) => {
    return makeApiCall(`${movieCreditsURL}/${id}/credits?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetPopularPeople = async () => {
    return makeApiCall(`${peopleURL}?api_key=${apiKey}&page=${1}&language=${apiLanguage}`)
};

export const GetPeopleDetails = async (id) => {
    return makeApiCall(`${peopleDetailsURL}/${id}?api_key=${apiKey}&language=${apiLanguage}`)
};

export const GetPeopleCredits = async (id) => {
    return makeApiCall(`${personCreditsURL}/${id}/credits?api_key=${apiKey}&language=${apiLanguage}`);
}

