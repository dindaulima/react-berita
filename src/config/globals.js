import axios from "axios";

export const baseGeneralURL = "http://learn.hackatown.online/api";

export const axiosGeneral = axios.create({
  baseURL: baseGeneralURL
});

