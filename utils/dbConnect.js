import mongoose from "mongoose";

const URI = `mongodb+srv://gaiisay:${process.env.MONGODB_PASSWORD}@cluster0.nhyoetz.mongodb.net/?retryWrites=true&w=majority`;

async function connectToDatabase() {
  await mongoose.connect(URI);
}

export default connectToDatabase;
