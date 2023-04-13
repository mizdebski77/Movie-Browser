import axios from "axios"
import { apiKey, peopleDetailsURL } from "../../../../../core/apiData"

export const getPeopleDetails = async (personID, language) => {
    const response = await axios.get(peopleDetailsURL, {
        params: {
            api_key: apiKey,
            language: language || 'en-US',
        }
    });
    return response.data;
};