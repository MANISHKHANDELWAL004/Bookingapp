import React, { useState } from 'react'

const ReservationForm = () => {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        phone:'',
        date:'',
        time:''

    })
    const handleChanges=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const generateTimeslots=()=>{
        const slots=[]
        for(let hour=9; hour<21; hour++){
            const startHour=hour%12===0 ?12:hour%12;
            const startPeriod=hour<12 ?'AM':'PM';

            const endHour=(hour+1)%12===0 ?12:(hour+1)%12;
             const endPeriod=hour+1<12 ?'AM':'PM';
            slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`)
        }
        return slots;
    }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <form className='bg-white p-8 rounded-xl shadow-lg w-full max-w-md' action="">
        <h2 className='text-4xl font-semibold text-center text-gray-700 mb-3'>Book ur session</h2>
        <p className='text-lg font-semibold text-center text-gray-400 mb-6'>Pls fill out this form correctly</p>
        <input className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400' name='name' value={formData.name} onChange={handleChanges} type="text" placeholder="Full name" id="" required />
        <input className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400' name='email' value={formData.email} onChange={handleChanges} type="email" placeholder="Email" id="" required />
        <input className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400' name='phone' value={formData.phone} onChange={handleChanges} type="tel" placeholder="Phone number" id="" required />
        <input className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400' name='date' value={formData.date} onChange={handleChanges} type="date"  required />
       
       <select name='time' value={formData.time} onChange={handleChanges} required className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400'>
<option value="">Select Time</option>
{
    generateTimeslots().map((slot,index)=>(
        <option key={index} value={slot}>{slot}</option>
    ))
}
       </select>
       <button className='w-full bg-cyan-500 text-white p-3 rounded-lg hover:bg-cyan-600 transition-all duration-300' type='submit'>Book Now</button>
      </form>
    </div>
  )
}

export default ReservationForm
