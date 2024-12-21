import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ApiCall = () => {
        const [post ,setPost]=useState([])
        const baseurl='https://localhost:7255/WeatherForecast';

    useEffect(()=>{
         
                    axios.get(baseurl).then((response)=>{
                    setPost(response.data)
                    }).catch((error)=>{
                        console.log(error)
                    })

        // fetch("https://localhost:7255/WeatherForecast")
        // .then((response)=>{
        //         response.json().then((result)=>{
        //             setPost(result);
        //     })
        // })
    },[])
    
  return (
    <div>
        
        <ul>
            {post.map(value=>
            {
                return(
                    <>
                        <li>{value.date}</li>
                        <li>{value.temperatureF}</li>
                        <li>{value.temperatureC}</li>
                        <li>{value.summary}</li>
                    </>
                )
            })}
        </ul>
    </div>
  )
}

export default ApiCall