const Ticket = require("../models/tickets");

const ticketsBooked = async (cinemaId) => {
    let tickets = await Ticket.find({ cinemaId });
    tickets = tickets.map((ticket) => ticket.seats);
    let bookedTickets = [].concat.apply([], tickets);
    return bookedTickets;
};

module.exports = { ticketsBooked };
