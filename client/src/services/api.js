import API from '../../services/api';

const API = API.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default API;