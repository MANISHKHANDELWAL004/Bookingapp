import express from 'express'
import { createReservation, getReservation, deleteReservation } from '../controllers/reservationControllers.js'
const router = express.Router()

// Create a new reservation
router.post('/create', createReservation)

// Get all reservations
router.get('/get', getReservation)



// Delete a reservation
router.delete('/delete/:id', deleteReservation)

export default router
