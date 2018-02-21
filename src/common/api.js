// Base API Configuration

import axios from 'axios';

export const API = axios.create({
  baseURL: '//api.openweathermap.org/data/2.5/'
});

API.interceptors.request.use(function (config) {
  // Set common parameters for each API request.
  config.params.APPID = '3e29e0b0c6882a3b0947e866c5289ea1';
  config.params.units = 'imperial';
  return config;
}, function (error) {
  return Promise.reject(error);
});