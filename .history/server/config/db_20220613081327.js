const mongoose = require('mongoose');

const connectDB = async () => {
    const connString = await mongoose.connect(process.env.MONGO_URI);
}