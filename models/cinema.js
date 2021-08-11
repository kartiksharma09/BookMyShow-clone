const mongoose = require('mongoose');

const CinemaSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    cinemaName: {
        type: String,
        required: true
    },
    locationOfCinema: {
        type: String,
        index: true,
        required: true
    },
    seats:{
        type: Number,
        default: 50
    },
    Movies: [{
        movieId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: ""
        },
        time: {
            type: String,
            required: true
        }
    }]
});

const Cinema = mongoose.model('cinema', CinemaSchema);
module.exports = Cinema;