import { Container, Row, Form, Col, Button } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import * as formik from 'formik';
import * as yup from 'yup';
import DoctorService from '../../service/DoctorService'


function AddDoctor() {
  const { Formik } = formik;
  let navigate = useNavigate();

  const schema = yup.object().shape({
    firstName: yup.string().trim().required("Firstname required"),
    lastName: yup.string().trim().required("Lastname required"),
    salary: yup.number().min(1.00, "Must be greater than 1.00").required("Salary required"),
    location: yup.string().trim().required("Location required"),
    description: yup.string().trim().min(10, "too short!").max(100, "too long!").required("Description required")
  });

  const onSubmit = async (values, actions) => {
    //alert("everything is ok!");
    // e.preventDefault();
    await DoctorService.save(values); //axios.post('http://localhost:3443/hospital/v1/api/doctor', doctor);
    navigate("/");
  }

  return (
    <Container>
      <Row>
        <Col md="6" border="rounded">
          <h2>Add new Doctor</h2>
          <Formik
            validationSchema={schema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={onSubmit}
            initialValues={{
              firstName: '',
              lastName: '',
              location: '',
              description: '',
              salary: ''
            }}
          >
            {({ handleSubmit, handleChange, values, touched, errors }) => (
              <Form onSubmit={handleSubmit} >
                <Form.Group>
                  <Form.Label>
                    First name
                  </Form.Label>
                  <Form.Control type='text'
                    placeholder='Type your first name'
                    name='firstName'
                    value={values.firstName}
                    onChange={handleChange}
                    isInvalid={!!errors.firstName} />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>

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
                    value={values.lastName}
                    onChange={handleChange}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Address
                  </Form.Label>
                  <Form.Control
                    type='text'
                    className='form-control'
                    placeholder='type your address'
                    value={values.location}
                    name='location'
                    onChange={handleChange}
                    isInvalid={!!errors.location} />
                  <Form.Control.Feedback type="invalid">
                    {errors.location}
                  </Form.Control.Feedback>
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
                    value={values.description}
                    name='description'
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                  <Form.Label>
                    Salary
                  </Form.Label>
                  <Form.Control
                    type='number'
                    step='any'
                    placeholder='type your salary'
                    value={values.salary}
                    onChange={handleChange}
                    name='salary'
                    isInvalid={!!errors.salary}
                  >
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.salary}
                  </Form.Control.Feedback>
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

            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
}

export default AddDoctor;