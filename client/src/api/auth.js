import axios from "./axios";

const API = "https://3.147.2.94/api";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginRequest = (user) => axios.post(`/login`, user);

export const verityTokenRequest = () => axios.get(`/verify`);
