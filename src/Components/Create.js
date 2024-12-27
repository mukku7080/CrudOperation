import React,{useEffect, useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import styles from './Create.module.css'

const Create = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const navigate=useNavigate();
  

    const handelsubmit=(e) =>{
        e.preventDefault();
        axios.post('https://6762fc2317ec5852cae7c0a3.mockapi.io/crud',{
            name,
            email,
            phone
         }).then((response)=>{
            console.log(response.data);
            alert('Successfully inserted')
         }).catch((error)=>{
            console.log(error);
         })

    }
     
    return (
        <div className='container'>
          <div className='row mt-5'>
            <div className={`col-md-4 ${styles.space} `}style={{margin:'auto'}}>
                <form action="" onSubmit={handelsubmit}>
                <div className='form-group mb-3'>
                    <label htmlFor="">Name</label>
                    <input type="text" className='form-control' placeholder='Enter Name' name='name' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="">Email</label>
                    <input type="text" className='form-control' placeholder='Enter Email' name='email' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='form-group mb-3'>
                    <label htmlFor="">Phone No&nbsp;</label>
                    <input type="text" className='form-control' placeholder='Enter Phone No' name='number' onChange={(e)=>setPhone(e.target.value)} />
                </div>
                <div className='d-grid mb-3'>
                <input type="Submit"  className='btn btn-outline-primary'  />

                </div>
                <div className='d-grid'>
                <input type="button" value='ReadData' onClick={()=>{navigate('/read')}}  className='btn btn-outline-success' />

                </div>
                </form>
               
            </div>

        </div>

        </div>
      
    )
}

export default Create