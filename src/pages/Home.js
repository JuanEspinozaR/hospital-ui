//import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import DoctorService from '../service/DoctorService'
import { Button, Container, Table } from 'react-bootstrap';
import DeleteConfirmation from '../component/DeleteComponent'
import ToastComponentNot from '../component/ToastComponentNot'
export const Home = () => {
    const [doctors, setDoctors] = useState([]);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastHeader, setToastHeader] = useState();
    const [toastMsj, setToastMsj] = useState();

    const submitDelete = (id) => {
        console.log("confirmación delete");
        setShowToast(true);
        setToastHeader('Gestion de doctores');
        setToastMsj('Se eliminó correctamente');
        setDisplayConfirmationModal(false);
    };
    // Hide the modal
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    };

    const { id } = useParams()
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await DoctorService.getAll(); //axios.get('http://localhost:3443/hospital/v1/api/doctor');
        setDoctors(result.data);
    };

    const deleteDoctor = async (id, index) => {
        setDeleteMessage('Would you like to remove ' + doctors[index].firstName + ' ' + doctors[index].lastName + ' info?');
        setDisplayConfirmationModal(true);
        //const result = await DoctorService.delete(id);//axios.delete("http://localhost:3443/hospital/v1/api/doctor/" + id);
        //loadUsers();
    }
    return (
        <Container>
            <Table className='table-borderless table-striped table-hover shadow'>
                <thead>
                    <tr>
                        <th scope='col'>
                            #
                        </th>
                        <th scope='col'>
                            Full name
                        </th>
                        <th scope='col'>
                            Location
                        </th>
                        <th scope='col'>
                            Description
                        </th>
                        <th scope='col'>
                            Salary
                        </th>
                        <th scope='col'>
                            <Link className='btn btn-outline-primary' to="add-doctor">
                                <i className="bi bi-plus-lg"></i>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr>
                            <td scope="row" key={index}>
                                <b>
                                    {index + 1}
                                </b>
                            </td>
                            <td>{doctor.firstName + ' ' + doctor.lastName}</td>
                            <td>{doctor.location}</td>
                            <td>{doctor.description}</td>
                            <td>{doctor.salary}</td>
                            <td>
                                <Link to={'/edit-doctor/' + doctor.id} className="btn btn-outline-primary mx-2">
                                    <i className="bi bi-pencil-square"></i>
                                </Link>
                                <Button type="button" variant='outline-danger'
                                    onClick={() => deleteDoctor(doctor.id, index)}>
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage} setShowToast={setShowToast} />
        </Container>
    )
}