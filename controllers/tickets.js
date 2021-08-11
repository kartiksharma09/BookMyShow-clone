const Ticket = require("../models/tickets");
const Movie = require("../models/Movies");
const Cinema = require("../models/cinema");
const { validationResult } = require("express-validator");


const validations = (req) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return errors;
    } else {
        return false;
    }
};

const bookTickets = async (req, res, next) =>{
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
    const { Seats, watchers, bookingDate } = req.body

    // Find the movie is available or not
    const movie = await Movie.findOne({ movieId });
    if (!movie){
        return next({
            status: 404,
            errors: errors.array()
        })
    }

    const cinema = await Cinema.findOne({ cinemaId })
    let seats = cinema.seats;

    const Tickets = await Ticket.findOne({ cinemaId })
    if (Tickets){
        const BookedTickets = Tickets.Seats
        for (var index = 0; index < seats.length; index++){
            if (BookedTicket.includes(Seats[index])) {
                return next({
                    status: 400,
                    errors: ["These tickets are already book", Seats[index]]
                })
            }
            if (Seats[index]>seats){
                return next({
                    status: 404,
                    errors: ["These seat not Found", Seats[index]]
                })
            }
        }
    }

    const TicketInfo = {
        Seats: Seats,
        watchers: watchers,
        bookingDate: bookingDate,
        userId :req.user.id,
        movieId : movieId,
        cinemaId : cinemaId,
    }

    const tickets = new Ticket(TicketInfo);
    const response = await tickets.save();

    if (response) {
        return next({
            status: 200,
            errors: response
        })
    }
}

// const cancel tickets
const cancelTicket = async (req, res, next) => {
    const response = await Ticket.findOneAndDelete({ _id: req.params.ticketId, userId: req.user.id });
    if (!response) {
        return nex({
            status: 404,
            errors: "Tickets Not found"
        })
    }
    return next({
        status: 200,
        errors: "ticket cancel"
    })
}

// get Booked Tikets
const GetTickets = async (req, res, next) => {
    const tickets = await Ticket.find({ userId: req.user.id }).populate('cinemaId');
    if (!tickets.length) {
        return next({ status: 400, errors: "You have not booked any ticket" });
    }
    res.status(200).json(tickets);
};

module.exports = { bookTickets, cancelTicket, GetTickets }

