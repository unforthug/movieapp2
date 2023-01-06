import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from '@mui/material';
import { AddMovie } from '../store/movieSlice';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

function Adding() {
  const dispatch = useDispatch()

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const [poster,setPoster] = useState('')
  const [rat,setRat] = useState('')

  const changeTitle =(e)=>{setTitle(e.target.value)}
  const changeDesc =(e)=>{setDesc(e.target.value)}
  const changePoster =(e)=>{setPoster(e.target.value)}

  const saveChanges =()=>{
    handleClose();
    dispatch(AddMovie({id :uuidv4(),title : title , description : desc , posterUrl : poster , rating : rat, isUpdated : false}))}
  

  return (
    <div>
         <>
      <Button style={{backgroundColor : 'darkblue' , fontSize : '1.75rem', width : '10rem',height : '3rem'}} variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the movie title here"
                autoFocus
                onChange={changeTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Description</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the movie Description here"
                autoFocus
                onChange={changeDesc}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>posterUrl</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the posterUrl here"
                autoFocus
                onChange={changePoster}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Rating name="no-value" value={null} max={10} onChange={(event, newValue) => {setRat(newValue)}} />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChanges} >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Adding