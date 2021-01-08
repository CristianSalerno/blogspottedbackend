require('dotenv').config();


module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.MONGO_URI
}

