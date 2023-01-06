import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteMovie, updateStat } from '../store/movieSlice';


function Movie({data}) {
    const dispatch = useDispatch();

    const handleDelete =(e)=>{
        e.preventDefault(); 
        dispatch(deleteMovie(data.id))
    }
    const handleUpdate =(e)=>{
        e.preventDefault();
        dispatch(updateStat(data.id))
    }
    
    
  return (
    <div>
    <Card style={{ width: '18rem' , height : '50rem' }}>
      <Card.Img style={{height : '25rem'}} variant="top" src={data.posterUrl} />
      <Card.Body>
      <Card.Title>{data.title}</Card.Title>
      <Card.Text>
      {data.description}
      </Card.Text>
      </Card.Body>
      <div style={{display : 'flex'}}>
      <Button onClick={handleDelete} style={{width : '10rem'}} variant="danger">Delete</Button>
      <Button onClick={handleUpdate} style={{width : '10rem'}} variant="success">Update</Button>
      </div>
      <Rating style={{padding : '20px'}} name="read-only" value={data.rating} readOnly max={10} />
      
    </Card>
    </div>
  )
}

export default Movie