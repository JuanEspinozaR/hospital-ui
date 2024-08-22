import React, { useState } from 'react'
//import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import DoctorService from '../../service/DoctorService'

export default function AddDoctor() {


  let navigate = useNavigate();
  const [doctor, setDoctor] = useState(
    {
      firstName: "",
      lastName: "",
      location: "",
      description: "",
      salary: ""
    }
  )

  const { firstName, lastName, location, description, salary } = doctor;

  const onInputChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await DoctorService.save(doctor); //axios.post('http://localhost:3443/hospital/v1/api/doctor', doctor);
    navigate("/");
  }
  return (
    <Container>
      <Row>
        <Col md="6" border="rounded">
          <h2>Add new Doctor</h2>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group className='mb-3'>
              <Form.Label>
                First name
              </Form.Label>
              <Form.Control type='text'
                className='form-control'
                placeholder='Type your first name'
                name='firstName'
                value={firstName}
                onChange={(e) => onInputChange(e)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Last name
              </Form.Label>
              <Form.Control
                type='text'
                className='form-control'
                placeholder='type you last name'
                name='lastName'
                value={lastName}
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Address
              </Form.Label>
              <Form.Control
                type='text'
                className='form-control'
                placeholder='type your address'
                value={location}
                name='location'
                onChange={(e) => onInputChange(e)} />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Description
              </Form.Label>
              <Form.Control
                type='text'
                as="textarea"
                className='form-control'
                placeholder='type description'
                rows={3}
                value={description}
                name='description'
                onChange={(e) => onInputChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                Salary
              </Form.Label>
              <Form.Control
                type='number'
                placeholder='type your salary'
                value={salary}
                onChange={(e) => onInputChange(e)}
                name='salary'
              >
              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Button
                type='submit'
                variant="outline-primary"
              >
                Guardar
              </Button>
              <Link className='btn btn-outline-danger mx-2' to="/">
                Cancel
              </Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
