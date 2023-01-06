import React from 'react'
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { SearchMovie } from '../store/movieSlice';

function Search() {

  const dispatch = useDispatch()

  const handleChange=(e)=>{
    console.log(e.target.value)
    dispatch(SearchMovie(e.target.value))
  }

  return (
    <div style={{backgroundColor : 'rgb(70, 70, 175)' , color : 'lightblue'}} >
        <input onChange={handleChange} style={{border : 'Darkblue solid', width : '450px'}} placeholder='Search by Movie name' />
        <b><p>Search By Rating</p></b>
        <Rating name="no-value" value={null} max={10} />
    </div>
  )
}

export default Search