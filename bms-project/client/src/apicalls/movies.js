import { axiosInstance } from ".";

export const AddMovie = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/movie/add-movie', payload);
    return response.data;
  } catch (err) {
    return err;
  }
}

export const GetAllMovies = async (payload) => {
  try {
    const response = await axiosInstance.get('/api/movie/get-all-movies');
    return response.data;
  } catch (err) {
    return err;
  }
}