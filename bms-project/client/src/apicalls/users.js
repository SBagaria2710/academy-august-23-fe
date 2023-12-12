import { axiosInstance } from ".";

// Register
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/user/register', payload);
    return response.data;
  } catch (err) {
    return err;
  }
}

export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post('/api/user/login', payload);
    return response.data;
  } catch (err) {
    return err;
  }
}

export const GetCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('/api/user/get-current-user', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    return response.data;
  } catch (err) {
    return err;
  }
}