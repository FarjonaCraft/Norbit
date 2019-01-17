const mongoose = require("mongoose");
const reportSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    UserID: String,
    reason: String,
    reportedBy: String,
    ReportedByID: String,
    time: String
});

module.exports = mongoose.model("Report", reportSchema);
