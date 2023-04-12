import axios from "axios"
import { apiKey, genreURL } from "../../../../core/apiData"

export const getGenres = async (language) => {
    const response = await axios.get(genreURL, {
        params: {
            api_key: apiKey,
            language: language || 'en-US',
        }
    });
    return response.data;
}