import mongoose from 'mongoose';

const connectDB = async (url) => {
  mongoose.set('strictQuery', true)

  mongoose.connect(url)
    .then(() => console.log('Successfully connected to database'))
    .catch((error) => console.log('Error connecting to database: ', error));
};

export default connectDB
  