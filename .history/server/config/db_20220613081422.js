const mongoose = require('mongoose');

const connectDB = async () => {
    const connString = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${connString.connection.host}`.cyan.underline.bold);
}