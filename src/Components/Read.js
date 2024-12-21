import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

const Read = () => {
    const [data, setData] = useState([])
    const navigate=useNavigate();


    const getData=()=>{
        axios.get('https://6762fc2317ec5852cae7c0a3.mockapi.io/crud').then((response) => {

            setData(response.data)

        }).catch((error) => {
            console.log(error);
        })
    }
     function handeledit(item) {
        localStorage.setItem('id',item.id);
        localStorage.setItem('name',item.name);
        localStorage.setItem('email',item.email);
        localStorage.setItem('phone',item.phone);
        navigate('/edit');
        
    }


    const deleteData=(id)=>{
        axios.delete(`https://6762fc2317ec5852cae7c0a3.mockapi.io/crud/${id}`)
        .then(()=>{
            getData();
        })
    }
    useEffect(() => {
       getData();
    },[]);

    return (
        <div className='container'>
        <div className='mt-2 mb-3'>
          <input type="Submit" value='Create Data' onClick={()=>{navigate('/')}}  className='btn btn-outline-success' />

        </div>

            <table className='table  table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        data.map((value) => {
                            return (
                                <tr>
                                    <td>{value.id}</td>
                                    <td>{value.name}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td><button type='button' className='btn btn-outline-primary btn-sm' onClick={()=>{handeledit(value)}}>Edit</button></td>
                                    <td><button type='button' className='btn btn-outline-danger btn-sm' onClick={()=>{if(window.confirm('Are You sure !')){deleteData(value.id)}}}>Delete</button></td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}

export default Read