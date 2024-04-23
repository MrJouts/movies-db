const dotenv = require("dotenv");
dotenv.config();
module.exports = {
    port: process.env.PORT,
    moviesKey: process.env.MOVIES_API_KEY,
};
