import axios from 'axios';

export const reqresAxios = axios.create({
  baseURL: 'https://reqres.in/api',
});

export const imdbAxios = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'f7b67d9afdb3c971d4419fa4cb667fbf',
  },
});

export const beAxios = axios.create({
  baseURL: 'https://milantv-be.herokuapp.com/api/',
});
