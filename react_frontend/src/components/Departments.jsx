import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DepartmentsService from '../services/DepartmentsService'

const Departments = () => {

    const [departments, setDepartments] = useState([])

    const getAllDepartments = () => {
        DepartmentsService.getDepartments().then((response) => {
            setDepartments(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }

    useEffect(() => {
        getAllDepartments()
    }, [])

    const deleteDepartment = (id) => {
        DepartmentsService.deleteDepartment(id).then((response) => {
            getAllDepartments()
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='container'>
            <h1 className='text-center'>Departemente</h1>


            <div className="d-grid gap-2">
                <Link to='/add' className="btn btn-lg btn-primary" type="button">Adauga</Link>
            </div>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Code</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(
                            department => <tr key={department.id}>
                                <td>{department.id}</td>
                                <td>{department.name}</td>
                                <td>{department.address}</td>
                                <td>{department.code}</td>
                                <td>
                                    <Link to={`/update/${department.id}`} className='btn btn-outline-info'>Update</Link>
                                    <Link to={`/details/${department.id}`} className='btn btn-outline-primary' style={{ marginLeft: '10px' }}>Details</Link>
                                    <button type="button" className="btn btn-outline-danger" onClick={() => deleteDepartment(department.id)} style={{ marginLeft: '10px' }}>Delete</button>
                                    {/* <button type="button" className="btn btn-outline-primary" onClick={() => viewDepartment(department.id)} style={{ marginLeft: '10px' }}>Details</button> */}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Departments