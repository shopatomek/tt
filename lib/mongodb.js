import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

const checkMongoDBConnection = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("MongoDB connected");
  } else {
    console.log("MongoDB connection failed");
  }
};

checkMongoDBConnection();
