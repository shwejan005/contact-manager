const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log(
            "Database connected successfully",
            connect.connection.host,
            connect.connection.name
        )
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}

module.exports = connectDb;