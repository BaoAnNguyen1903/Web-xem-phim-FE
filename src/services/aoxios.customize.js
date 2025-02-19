import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
})

// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

// Add a request interceptor
instance.interceptors.request.use(function (config) { 
  if (typeof window !== "undefined" && window && window.localStorage && 
  window.localStorage.getItem('access_token')) { 
  config.headers.Authorization = 'Bearer ' + window.localStorage.getItem('access_token'); 
  } 
  // Do something before request is sent 
  return config; 
  }, function (error) { 
  // Do something with request error 
  return Promise.reject(error); 
  }); 

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log(">>> check inside response: ", response)
    if (response.data && response.data.data) return response.data;
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response && error.response.data) return error.response.data;
    return Promise.reject(error);
  });

export default instance;