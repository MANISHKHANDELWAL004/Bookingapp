import { useState,useEffect } from 'react'
import axios from 'axios'
import { backendUrl } from '../App'
const AdminTable = () => {
    const [reservations,setReservations]=useState([])
    useEffect(()=>{
        const fetchReservations = async () => {
            try{
const response= await axios.get(backendUrl + '/api/reservations/get')
setReservations(response.data)
console.log(response.data)
            }catch(error){
                console.log("Error fetching reservations",error)
            }
        }
        fetchReservations()
    },[])

  return (
    <div>
      <h2>Reservations submitted</h2>
      <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
{
    reservations.length===0?(
      <tr>
        <td colSpan='6'>No reservations found</td>
      </tr>
    ):(

      reservations.map((res,index)=>{
        <tr key={index}>
          <td>{res.name}</td>
          <td>{res.email}</td>
          <td>{res.phone}</td>

          <td>{res.date}</td>
          <td>{res.time}</td>
          <td>
            <button>Delete</button>
          </td>
        </tr>
      })
    )
}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminTable



