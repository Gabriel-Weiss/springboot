import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import DepartmentsService from '../services/DepartmentsService'

const Add = () => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [code, setCode] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    const saveOrUpdate = (e) => {
        e.preventDefault();
        const department = { name, address, code }

        if (id) {
            DepartmentsService.updateDepartment(id, department).then((response) => {
                navigate('/');
            }).catch(error => { console.log(error) })
        } else {
            DepartmentsService.addDepartment(department).then((response) => {
                navigate('/');
            }).catch(error => { console.log(error) })
        }
    }

    useEffect(() => {
        DepartmentsService.getDepartmentById(id).then((response) => {
            setName(response.data.name)
            setAddress(response.data.address)
            setCode(response.data.code)
        }).catch(error => {
            console.log(error)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const title = () => {
        if (id) {
            return <h1 className='text-center'>Update</h1>
        } else {
            return <h1 className='text-center'>Add</h1>
        }
    }

    return (
        <div>
            <div className='container '>
                <br />
                <br />
                <br />
                {title()}
                <div className="input-group mb-3">
                    <span className="input-group-text">Address</span>
                    <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Name</span>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">Code</span>
                    <input type="text" className="form-control" value={code} onChange={(e) => setCode(e.target.value)} />
                </div>
                <div className="input-group mb-3" >
                    <button type="button" className="btn btn-outline-success btn-lg" onClick={(e) => saveOrUpdate(e)}>Adauga</button>
                    <Link to={'/'} type="button" className="btn btn-outline-danger btn-lg">Renunta</Link>
                </div>
            </div>
        </div>
    )
}

export default Add