import axios from 'axios';

// Will point at deployed backend later.
// For now, this is a placeholder — mock data is used in constants.js
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('cms_techub_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const login = (username, password) =>
  api.post('/api/auth/login', { username, password });

export const submitBooking = (data) => api.post('/api/bookings', data);
export const submitContact  = (data) => api.post('/api/contact', data);

export const getServices = () => api.get('/api/services');
export const getService  = (id) => api.get(`/api/services/${id}`);
export const getProducts = () => api.get('/api/products');
export const getPartners = () => api.get('/api/partners');

export default api;
