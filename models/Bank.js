const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema({
    bankName: { type: String, required: true },
    minimumScore: { type: Number, required: true},
    percentage: { type: String, required: true },
    address: {type:String, required:true},
    img_path:{type:String, required:true}
});

module.exports = mongoose.model("Bank", BankSchema);
