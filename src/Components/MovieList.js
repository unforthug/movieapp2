import React from 'react'
import Movie from './Movie'
import { useSelector } from 'react-redux';
import './movieList.css'
import UpDate from './UpDate';


function MovieList() {
    const data = useSelector((state)=>state.movie.movies)
    console.log(data)
  return (
    <div className='container'>
        {data.map((el) => el.isUpdated ? <UpDate data={el}/> : <Movie data = {el}/>)}
    </div>
  )
}

export default MovieList
