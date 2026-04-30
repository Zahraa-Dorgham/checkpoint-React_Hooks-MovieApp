import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Row from 'react-bootstrap/Row'; 
import Modal from 'react-bootstrap/Modal';
import "./AddMovie.css";

function AddMovie({movies, setmovies}) {
    const [newmovie, setnewmovie] = useState({
        name: "",
        description: "",
        posterURL: "",
        rating: ""
    });
    const handlechange = (e) => {
            setmovies([...movies, newmovie]);
            setnewmovie({
                name: "",
                description: "",
                posterURL: "",
                rating: ""
            });
            handleToggle();
      
    }
    // const handlechange = (e) => {
    //     setnewmovie({ ...movies, newmovie })
    // }
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <>
            <button className="add" onClick={handleToggle}>
                + Add Movie
            </button>

            <Modal show={show} onHide={handleToggle} centered className="my-modal">
                <div className="modal-content">
                    <img src='https://i.pinimg.com/1200x/4e/59/d0/4e59d0e1035ebaf9e4bdd7ab9eb3d000.jpg' />

                    <Modal.Header className="modal-header">
                        <h3>Add New Movie</h3>
                    </Modal.Header>

                    <Modal.Body className="modal-body">
                        <Form>
                            <Form.Group className="input-group">
                                <Form.Label>Movie Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter movie name" onChange={(e) => setnewmovie({...newmovie, name: e.target.value})} />
                            </Form.Group>

                            <Form.Group className="input-group">
                                <Form.Label>Movie Description</Form.Label>
                                <Form.Control type="text" placeholder="Enter movie description" onChange={(e) => setnewmovie({...newmovie, description: e.target.value})} />
                            </Form.Group>

                            <Form.Group className="input-group">
                                <Form.Label>Movie Image</Form.Label>
                                <Form.Control type="text" placeholder="Enter image URL" onChange={(e) => setnewmovie({...newmovie, posterURL: e.target.value})} />
                            </Form.Group>

                            <Form.Group className="input-group">
                                <Form.Label>Movie Rating</Form.Label>
                                <Form.Control type="number" placeholder="Enter rating (1-5)" onChange={(e) => setnewmovie({...newmovie, rating: e.target.value})} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer className="modal-footer">
                        <button className="btn-cancel" onClick={handleToggle}>Cancel</button>
                        <button className="btn-save" onClick={handlechange}>Save Movie</button>
                    </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}

export default AddMovie;