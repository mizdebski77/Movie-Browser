import axios from "axios";
import { apiKey, moviesURL } from "../../../../core/apiData";


export const GetPopularMovies = async (language, pageNumber) => {
  const response = await axios.get(moviesURL.replace('{pageNumber}', pageNumber), {
    params: {
      api_key: apiKey,
      language: language || 'en-US',
      sort_by: 'popularity.desc',
      include_adult: true,
      include_video: false,
      with_watch_monetization_types: 'flatrate'
    }
  });
  return response.data;
};
  