import { axiosInstance } from ".";

export const AddTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatre/add-theatre",
      payload
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const GetAllTheatres = async () => {
  try {
    const response = await axiosInstance.get("/api/theatre/get-all-theatres");
    return response.data;
  } catch (err) {
    return err;
  }
};

export const GetAllTheatresByOwner = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatre/get-all-theatres-by-owner",
      payload
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const UpdateTheatre = async (payload) => {
  try {
    const response = await axiosInstance.put(
      "/api/theatre/update-theatre",
      payload
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const DeleteTheatre = async (theatreId) => {
  try {
    const response = await axiosInstance.delete(
      `/api/theatre/delete-theatre?theatreId=${theatreId}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

// Shows APIs

export const AddShow = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/theatre/add-show", payload);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const GetAllShowsByTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatre/get-all-shows-by-theatre",
      payload
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const DeleteShow = async (showId) => {
  try {
    const response = await axiosInstance.delete(
      `/api/theatre/delete-show?showId=${showId}`
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export const GetAllTheatresByMovie = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatre/get-all-theatres-by-movie",
      payload
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const GetShowById = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/theatre/get-show-by-id",
      payload
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};
