const Ticket = require("../models/tickets");

const ticketsBooked = async (movieId) => {
    let tickets = await Ticket.find({ busId });
    tickets = tickets.map((ticket) => ticket.seats);
    let bookedTickets = [].concat.apply([], tickets);
    return bookedTickets;
};

module.exports = { ticketsBooked };