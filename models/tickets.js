const mongoose = require("mongoose");

const tickeSchema = new mongoose.Schema({
    cinemaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cinema",
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
    },
    Seats: [{
        type: Number,
        required: true
    }],
    watchers: [
        {
            name: {
                type: "String",
                required: true,
            },
            age: {
                type: Number,
                required: true,
            },
            gender: {
                type: String,
                required: true,
            },
        },
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    
    bookingDate: {
        type: Date,
        required: true,
    },
},
    {
        timestamps: true,
    }
);
const tickets = mongoose.model("tickets", tickeSchema);
module.exports = tickets;