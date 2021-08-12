const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    adminId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    movieName: {
        type: String,
        required: true,
    },
    posterUrl: {
        type: String,
        required: true
    },
    timeDuration: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        enum: ["drama", "comedy", "thriller", "action", "horror", "cartoon"]
    },
    language: {
        type: String,
        enum: ["hindi", "english", "punjabi"]
    },
    cast: [{
        actor: {
            type: String,
        },
        character: {
            type: String,
        },
        characterImg: {
            type: String,
            required: true
        }
    }],
    aboutTheMovie: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    releaseDetails: [{
        cinemaName: {
            type: String,
            required: true
        },
        locationOfCinema: {
            type: String,
            required: true
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
            type: String,
            required: true
        },
        endDate: {
            type: String,
            required: true
        }
    }]
});

const movies = mongoose.model('movie', movieSchema);

module.exports = movies;