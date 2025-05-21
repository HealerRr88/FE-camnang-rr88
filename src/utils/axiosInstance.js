import axios from 'axios';
import { baseURL } from '../config/api';

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000, // 10s timeout
});

// Nếu muốn tự động gắn token authentication (nếu cần) thì thêm interceptors tại đây

export default axiosInstance;
