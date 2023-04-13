import axios from "axios";
import { moviesURL, apiKey, apiLanguage, genreURL, movieCreditsURL } from './apiData';


const makeApiCall = async (url) => {
    const response = await axios.get(url);
    return await response.data;
};

export const GetPopularMovies = async () => {
    return makeApiCall(`${moviesURL}?api_key=${apiKey}&page=${1}&language=${apiLanguage}`);
};

export const GetGenres = async () => {
    return makeApiCall(`${genreURL}?api_key=${apiKey}&language=${apiLanguage}`);
};

export const GetCredits = async (id) => {
    return makeApiCall(`${movieCreditsURL}/${id}/credits?api_key=${apiKey}&language=${apiLanguage}`);
};

