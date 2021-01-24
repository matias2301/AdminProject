const mongoose = requiere('mongoose');
require('dotenv').config({ path: '.env' });

const connectDB = async () => {
    try {
        await mongoose.connect( process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('Database connected');
    } catch (error) {
        console.log(error);
        process.exit(1); // stop the app
    }
}

module.exports = connectDB;