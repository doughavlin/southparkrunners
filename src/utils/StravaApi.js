import axios from "axios";

const client_id = `82803`;
const client_secret = `0bddb26eefa1d1e9fdc930987ad97e5454b94883`;
const refresh_token = `6ddf604a8163030b9e76a0ba6549d3dbe50c622e`;
const base_url = `https://www.strava.com/api/v3/`

const getAuthToken = () => {
  return axios
    .request({
      url: `${base_url}oauth/token?client_id=${client_id}&client_secret=${client_secret}&refresh_token=${refresh_token}&grant_type=refresh_token`,
      method: "POST",
      headers: {
        Accept: "*/*",
      },
    })
    .then(function (response) {
      localStorage.setItem('access_token', response.data.access_token)
      localStorage.setItem('expires_in', response.data.expires_in)
      resolve()
    });
};

const strava = axios.create({
  baseURL: base_url,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

export {strava, getAuthToken}
