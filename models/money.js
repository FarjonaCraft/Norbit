const mongoose = require("mongoose");
//login: username: FarjonaCraft || Password: z11n.90bf
const moneySchema = mongoose.Schema({
    userName: String,
    userID: String,
    serverName: String,
    serverID: String,
    money: Number
});

module.exports = mongoose.model("Money", moneySchema);
