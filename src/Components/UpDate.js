import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AddMovie, changeStat } from '../store/movieSlice';
import { v4 as uuidv4 } from 'uuid';


function UpDate({data}) {
  const dispatch = useDispatch()

  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle] = useState(data.title)
  const [desc,setDesc] = useState(data.description)
  const [poster,setPoster] = useState(data.posterUrl)
  const [rat,setRat] = useState(data.rating)

  const changeTitle =(e)=>{setTitle(e.target.value)}
  const changeDesc =(e)=>{setDesc(e.target.value)}
  const changePoster =(e)=>{setPoster(e.target.value)}
  

  const changeState=()=>{
    dispatch(changeStat())
    handleClose()
  }
  const saveChanges =()=>{
    handleClose();
    dispatch(AddMovie({id :data.id ,title : title , description : desc , posterUrl : poster , rating : rat, isUpdated : false}))}
  
  return (
    <div>
 
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Change Movie items</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
              name="title"
              placeholder={data.title}
              autoFocus
              onChange={changeTitle}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Movie Description</Form.Label>
            <Form.Control
              name="desc"
              placeholder={data.description}
              autoFocus
              onChange={changeDesc}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>posterUrl</Form.Label>
            <Form.Control
              name="poster"
              placeholder={data.posterUrl}
              autoFocus
              onChange={changePoster}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Rating name="no-value" value={null} max={10} onChange={(event, newValue) => {setRat(newValue)}} />
      <Modal.Footer>
        <Button variant="secondary" onClick={changeState}>
          Close
        </Button>
        <Button variant="primary" onClick={saveChanges} >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  )
}

export default UpDate