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

const bookTickets = async (req, res, next) => {
    // valodation 
    const errors = validations(req);
    if (errors) {
        return next({
            status: 400,
            errors: errors.array()
        });
    }
    
    const cinemaId = req.params.cinemaId
    const movieId = req.params.movieId

    // Initializing from the req.body
    const { Seats, watchers, userId, bookingDate } = req.body

    const TicketInfo = {
        Seats: Seats,
        watchers: watchers,
        bookingDate: bookingDate
    }

    // Find the movie is available or not
    const movie = await Movie.findOne({ movieId });
    console.log(movie)
    if (!movie) {
        return next({
            status: 404,
            errors: errors.array()
        })
    }

    // Insure the tickets is booked
    const bookedTickets = await ticketsBooked(req.params.cinemaId);
    console.log(bookedTickets)

    const cinema = await Cinema.findOne({ cinemaId: cinemaId })
    console.log(cinema)

    // Not available seats
    let seats = cinema.seats;
    console.log(seats)
    const selected_tickets = Seats
    isBooked = seats.filter((bookedTicket) => {
        return bookedTickets.includes(bookedTicket);
    })
    
    var responce = false
    for (let index = 0; index < selected_tickets.length; index++) {
        if (seats[index].includes(selected_tickets[index])) {
            responce = true
        } else {
            responce = false
            return next({
                status: 404,
                errors: ["Theses seats are not found", selected_tickets[index]]
            })
        }

        if (isBooked.length > 0) {
            return next({
                status: 400,
                errors: "These tickets are already book"
            })
        }
    }

    if (responce === true) {
        TicketInfo.userId = req.user.user.id
        TicketInfo.movieId = movieId
        TicketInfo.cinemaId = cinemaId

        const Tickets = new Ticket(TicketInfo);
        console.log(Tickets)

        await Tickets.save();
        return next({
            status: 200,
            errors: Tickets
        })
    }
}

module.exports = { bookTickets }

