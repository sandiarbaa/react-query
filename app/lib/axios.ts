import axios from "axios";

// axios.create akan membuat konfigurasi global untuk si axios ini sendiri
export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// kalau memiliki banyak api yg berbeda, tinggal buat aja api instance / axios instance yg beda2 yg memiliki konfigurasi baseURL yg berbeda
