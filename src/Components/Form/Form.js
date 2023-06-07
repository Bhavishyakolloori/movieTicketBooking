import React from 'react'
import './Form.css'
import {useForm} from 'react-hook-form'
import { useParams } from 'react-router-dom'
function Form() {
  
  let {register,handleSubmit,formState:{errors}}=useForm()
  let nam=useParams();
  let place=nam.name;
  
// Make the HTTP POST request to the API endpoint
let pushDat=(data)=>{
  console.log(data)
fetch('http://localhost:4000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {console.log(data)})
    .catch((error) => {console.timeLog(error) });
  }


  return (
    <div className='container mx-auto'>
    
        <h1 className='text-white display-3'>Ticket Booking Form</h1>
      
      <form onSubmit={handleSubmit(pushDat)}>
        
        <label htmlFor='movie name' className='text-white fs-5'>Movie name</label>
        <input type='text' className='fs-4' value={place} placeholder={place} readOnly  {...register("MovieName")}/> 
      

        <label htmlFor="name" className='text-white fs-5'>Name:</label>
        <input  type="text"  id="name"  {...register("Name",{required:true})} />

        <label htmlFor="email"className='text-white fs-5'>Email:</label>
        <input type="email"   id="email"   {...register("Email",{required:true})}  />

        <label htmlFor="numberOfTickets"className='text-white fs-5'>Number of Tickets:</label>
        <input type="number" id="numberOfTickets" {...register("NoofTickets",{required:true})} />



        <div className='mx-auto'>
        <button type="submit" className='btn text-white fw-bold btn-primary w-25 '>Book Tickets</button>
        </div>

        
      </form>
    </div>
  )
}

export default Form;