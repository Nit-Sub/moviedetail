import { useState , useEffect } from 'react'
const useFetch = (apiPath) => {
    const [data ,setData]=useState([])
    const url=`https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}`
    useEffect(() => {
        async function fetchMovies() {
          const response = await fetch(url)
          const json = await response.json();
          setData(json.results);
        }
        fetchMovies();
      }, [apiPath])
  return {data}
}

export default useFetch