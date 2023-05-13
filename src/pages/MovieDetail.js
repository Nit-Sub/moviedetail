import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
  const params = useParams();
  const [data, setData]=useState([])
  useEffect(()=>{
    async function fetchDetail(){
      const response = await fetch(`https://api.themoviedb.org/3/movie/${params}?api_key=fcc6d85d62f934ad475896c695d21990`)
      const json = await response.json();
      setData(json)
      console.log(data)
    }
    fetchDetail();
  },[])
  return (
    <>
    <main>
      <section>
        <div></div>
        <div></div>
      </section>
    </main>
    </>
  )
}
