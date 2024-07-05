const mongoose = require("mongoose");


userSchema = new mongoose.Schema({
    systemid : {
        type : String,
    },
    department : {
        type : String,
    },
    status : {
        type : String,
    },
});

const User = mongoose.model("User", userSchema);


module.exports = User;

