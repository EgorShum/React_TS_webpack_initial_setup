import axios from 'axios';

const oxfordApi = axios.create({
  baseURL: 'https://od-api.oxforddictionaries.com/api/v2/entries/en-us/',
  headers: {
    app_id: process.env.OXFORD_ID,
    app_key: process.env.OXFORD_KEY,
  }
});
// export const setToken = (token) => {
//   if (token) {
//     window.localStorage.setItem('jwtToken', token);
//   } else {
//     window.localStorage.removeItem('jwtToken');
//   }
// };

// export const setTokenHeader = (token) => {
//   if (token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     setToken(token);
//   } else {
//     delete axios.defaults.headers.common.Authorization;
//     setToken();
//   }
// };

// export const apiPost = (url, data) => axios.post(url, data);
// export const apiGet = (url) => axios.get(url);
// export const apiDelete = (url, data) => axios.delete(url, data);