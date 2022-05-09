import { useEffect, useState } from 'react'
import axios from "axios";

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const refresh_token = process.env.REACT_APP_REFRESH_TOKEN;
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
      return response.data.access_token
    });
};

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  
  const routesApi = async routeIds => {
    const access_token = await getAuthToken();
    const strava = axios.create({
      baseURL: "https://www.strava.com/api/v3/",
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    let buildRoutes = []
    Promise.all(
      routeIds.map(routeId => {
        return new Promise((resolve) => {
          strava.get(`/routes/${routeId}`)
            .then(response => {
              const {id, name, map_urls: {url: image}, description, distance, elevation_gain} = response.data
              buildRoutes.push({id, name, image, description, distance, elevation_gain})
              resolve()
            })
            .catch(error => {
              setErrorMessage(error.message)
            })
          })
        })
      )
    .then(() => {
      setResults(buildRoutes)
    })
  };

  useEffect(() => {
    routesApi(['2952772360778945206','2952771661144450644','2952770892841393938'])
    }, [])

  return [routesApi, results, errorMessage]
};
