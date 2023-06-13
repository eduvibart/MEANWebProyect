const mongoose = require("mongoose");

const uri = process.env.MONGODBURI;

module.exports = () => mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);
