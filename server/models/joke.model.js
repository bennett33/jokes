const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	setup: {
        type: String,
        required: [true, "Setup is required"],
        minLength: [6, "Setup must be at least 6 characters long"]
    },
	punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minLength: [6, "Punchline must be at least 6 characters long"]
    }
}, {timestamps : true});


// OPTION 1
const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;


// OPTION 2
// can exports 2 things at once. can make another schema and export both
// module.exports.Joke = mongoose.model('Joke', JokeSchema);