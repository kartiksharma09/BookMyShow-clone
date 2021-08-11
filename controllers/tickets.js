const Ticket = require("../models/tickets");
const Movie = require("../models/Movies");
const Cinema = require("../models/cinema");
const { validationResult } = require("express-validator");
const { ticketsBooked } = require("../Surches/BookTickets"); 

const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors;
    } else {
        return false;
    }
};

const bookTickets = async(req, res, next)=>{
    try {
        // valodation 
        const error = validation(req);
        if (!error.isEmpty()){
            return res.status(400).json(error)
        }

        const cinemaId = req.params.cinemaId
        const movieId = req.params.movieId

        // Initializing from the req.body
        const { Seats, watchers, userId, bookingDate } = req.body

        const TicketInfo = {
            Seats:Seats,
            watchers:watchers,
            bookingDate:bookingDate
        }

        // Find the movie is available or not
        const movie = await Movie.findOne({ movieId });
        if (!movie) {
            return res.status(404).json({ msg: "Movie Not Found" });
        }
        
        // Insure the tickets is booked
        const bookedTickets = await ticketsBooked(req.params.cinemaId);
        const cinema = await Cinema.findOne({ cinemaId: cinemaId })

        // Not available seats
        let seats = cinema.seats;
        const selected_tickets = Seats
        isBooked = seats.filter((bookedTicket)=>{
            return bookedTickets.includes(bookedTicket);
        })

        var responce = false
        for (let index = 0; index < selected_tickets.length; index++){
            if (seats[index].includes(selected_tickets[index])){
                responce = true
            } else {
                responce = false
                return res.status(404).json({ "seats Not found": selected_tickets[index] })
            }

            if (isBooked.length>0){
                return res.status(400).json({ "msg": "These tickets are already book" })
            }
        }

        if (responce === true) {
            TicketInfo.userId = req.user.user.id
            TicketInfo.movieId = movieId
            TicketInfo.cinemaId = cinemaId

            const Tickets = new Ticket(TicketInfo);
            console.log(Tickets)

            await Tickets.save();
            return res.status(200).json(Tickets);
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({ "msg": "server error" })
    }
};

module.exports = { bookTickets }

