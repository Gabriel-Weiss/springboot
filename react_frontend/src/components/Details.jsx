import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import logo from '../dp-img.png'
import DepartmentsService from '../services/DepartmentsService'

const Details = () => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [code, setCode] = useState('')
    const { id } = useParams()

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

    return (
        <div className='container-md'>
            <br />
            <br />
            <div className='mx-auto'>
                <div className="card col-mb-3 offset-md-3" style={{ width: '540px' }}>
                    <div className="row">
                        <div class="col-md-4 my-auto">
                            <img src={logo} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">Details</h2>
                                <p className="card-text">Details of selected department on the card</p>
                            </div>
                            <div className="d-grid gap-3">
                                <div className="p-2 bg-light border mx-2"><label className='me-2'>Address:</label>{address}</div>
                                <div className="p-2 bg-light border mx-2"><label className='me-2'>Name:</label>{name}</div>
                                <div className="p-2 bg-light border mx-2"><label className='me-2'>Code:</label>{code}</div>
                            </div>
                            <div className="card-body">
                                <Link to={'/'} type="button" className="btn btn-outline-secondary btn-lg">Inapoi</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details