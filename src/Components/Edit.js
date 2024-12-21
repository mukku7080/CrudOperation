import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Edit = () => {

    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
        setPhone(localStorage.getItem('phone'));
    },[])
    const navigate = useNavigate();


    const handleedit = (e) => {
        e.preventDefault();
        axios.put(`https://6762fc2317ec5852cae7c0a3.mockapi.io/crud/${id}`, {
            name,
            email,
            phone
        }).then(()=>{
            navigate('/read');


        })


    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'>
                    <div className='text-center mt-3'>
                        <h1>Upate Section</h1>
                    </div>
                    <form action="" onSubmit={handleedit}>
                    <div className='form-group mb-3'>
                        <label htmlFor="">Name</label>
                        <input type="text" className='form-control' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="">Email</label>
                        <input type="text" className='form-control' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group mb-3'>
                        <label htmlFor="">Phone No</label>
                        <input type="text" className='form-control' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div className='d-grid'>
                        <input type="submit" value='Update' className='btn btn-primary' />
                    </div>

                    </form>
                 
                </div>
            </div>

        </div>
    )
}

export default Edit