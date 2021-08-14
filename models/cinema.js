const mongoose = require('mongoose');

const CinemaSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    cinemaName: {
        type: String,
        index:true,
        required: true
    },
    locationOfCinema: {
        type: String,
        required: true
    },
    seats: {
        type: Number,
        default: 50
    },
    Movies: [{
        movieId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "movie"
        },
        from: {
            type: String,
            required: true
        },
        to: {
            type: String,
            required: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        }
    }]
});

const Cinema = mongoose.model('cinema', CinemaSchema);
module.exports = Cinema;