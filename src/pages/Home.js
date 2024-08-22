//import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";
import DoctorService from '../service/DoctorService'
import { Button, Container, Table } from 'react-bootstrap';
export const Home = () => {
    const [doctors, setDoctors] = useState([]);


    const { id } = useParams()
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await DoctorService.getAll(); //axios.get('http://localhost:3443/hospital/v1/api/doctor');
        setDoctors(result.data);
    };

    const deleteDoctor = async (id) => {
        const result = await DoctorService.delete(id);//axios.delete("http://localhost:3443/hospital/v1/api/doctor/" + id);
        loadUsers();
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
                                <Button type="button" variant='outline-secondary' >
                                    <i className="bi bi-eye"></i>
                                </Button>
                                <Link to={'/edit-doctor/' + doctor.id} className="btn btn-outline-primary mx-2">
                                    <i className="bi bi-pencil-square"></i>
                                </Link>
                                <Button type="button" variant='outline-danger'
                                    onClick={() => deleteDoctor(doctor.id)}>
                                    <i className="bi bi-trash"></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}