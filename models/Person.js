const mongoose = require("mongoose")
    const person = mongoose.model("person", {
        name: String,
        salary: Number,
        approved: Boolean,
})
module.exports = person
