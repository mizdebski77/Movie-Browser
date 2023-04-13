import axios from "axios";
import { apiKey, peopleURL } from "../../../../core/apiData";


export const getPopularPeople = async (page, language) => {
    const response = await axios.get(peopleURL, {
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
