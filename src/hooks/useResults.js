import { useEffect, useState } from 'react'
import { strava, getAuthToken} from '../utils/StravaApi'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  
  const routesApi = async routeIds => {
    if (localStorage.getItem('expires_in') < 10) { // this is false if no expires_in is defined
      await getAuthToken()
    }

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
