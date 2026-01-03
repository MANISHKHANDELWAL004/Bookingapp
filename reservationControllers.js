import Reservation from '../models/reservationModel.js'
const createReservation = async (req, res) => {
 try{
    const {name, email, phone, date, time} = req.body
    if(!name || !email || !phone || !date || !time){
        return res.json({success:false,message:"All fields are required"})
         
    }
    const newReservation =new Reservation({name, email, phone, date, time})
 await newReservation.save()
    return res.json({success:true,message:"Reservation created",reservation:newReservation})

 }catch(error){
 res.json({success:false,message:'Error creating reservation'})


 }
}
const getReservation = async (req, res) => {
 try{
    const reservations = await Reservation.find()
    return res.json({success:true,message:"Reservations fetched",reservations})
 }catch(error){
 res.json({success:false,message:'Error fetching reservations'})

 }
 
}

const deleteReservation = async (req, res) => {
 try{
    const {id} = req.params
    const reservation = await Reservation.findByIdAndDelete(id)
    return res.json({success:true,message:"Reservation deleted",reservation})
 }catch(error){
 res.json({success:false,message:'Error deleting reservation'})
}
}

export {
    createReservation,
    getReservation,
    deleteReservation
}