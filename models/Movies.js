const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    movieName: {
        type: String,
        required: true,
    },
    posterUrl: {
        data: Buffer, contentType: String
    },
    timeDuration: {
        type: String,
        required: true,
    },
    genre : {
        type: String,
        enum:[ "Drama","Comedy","Thriller","Action","Horror","Cartoon"]
    },
    language:{
        type: String,
        enum:[ "Hindi","English","Punjabi"]
    },
    cast :[{
        actor:{
            type: String,
        },
        character:{
            type: String,
        },
        characterImg:{
            data: Buffer, contentType: String
        }
    }],
    aboutTheMovie:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    }

    
})

const movies = mongoose.model('Movie', movieSchema);

module.exports = movies;

