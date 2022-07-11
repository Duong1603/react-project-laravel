import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState } from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup,
    Label,
    Input,
} from "reactstrap";

const Create = () => {
    const [modal, setModal] = useState(false);
    
    const handleCloseShow = () => {
        setModal(!modal)
    }
    return (

        <div>
            <h1>HELLO mỸ lINH</h1>
            <Button
                color="danger"
                onClick={handleCloseShow}
            >
                Click Me
            </Button>
            <Modal  isOpen={modal} toggle={handleCloseShow} >

                <form encType="multipart/form-data" method="put">
                    <ModalHeader toggle={handleCloseShow}>Bog Create</ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Label for="model">Hãng</Label>
                            <Input id="model" name="hãng" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Màu</Label>
                            <Input id="description" name="màu" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="produced_on">Produced_on</Label>
                            <Input type="date" id="produced_on" name="produced_on" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="image">Image</Label>
                            <Input id="fileupload" type="file" name="image" />
                            {/* <img id="preview-img" className="img-thumbnail img-fluid" src='' /> */}
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="primary"> Update </Button>
                        <Button color="secondary"   onClick={handleCloseShow}> Cancel </Button>
                    </ModalFooter>
                </form>
            </Modal>
        </div>


    )
}

export default Create;