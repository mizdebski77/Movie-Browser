import axios from "axios";

const apiKey = "7c90040c75201f76a993fda6ead4b277";
const URL = 'https://api.themoviedb.org/3/person/popular';

export const getPopularPeople = async (page, language) => {
    const response = await axios.get(URL, {
        params: {
            api_key: apiKey,
            language: language || 'en-US',
            sort_by: 'popularity.desc',
            include_adult: true,
            include_video: false,
            page: page || 1,
            with_watch_monetization_types: 'flatrate'
        }
    });
    return response.data;
};
