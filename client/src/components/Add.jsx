import React, { useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';

function Add() {

    const [ name,setName ] = useState('');
    const [ price,setPrice ] = useState('');
    const [ description,setDescription ] = useState('');

    const handleClick = async(e)=>{
        e.preventDefault()
        try {

            let response = await axios.post("http://localhost:5000/api/createproduct",{
                name:name,
                price:price,
                description:description
            })
            console.log(response.data);
            if(response.data){
                alert("created");

                setPrice('');
                setName('');
                setDescription('')

            }
        } catch (error) {
            console.log(error.response.data.message);
        }
    }



  return (
    <div>
        <form onSubmit={handleClick}>
            <div>
                <input type="text" placeholder='enter a name' value={name} 
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <input type="number" placeholder='Enter price' value={price}
                onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder='Description' value={description} 
                onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div>
                <button type='submit'>Add</button>
                <Link to="/"><button>View</button></Link>
            </div>
        </form>
    </div>
  )
}

export default Add