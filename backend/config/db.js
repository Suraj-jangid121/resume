import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb://SURAJ123:Sur445%40%40@ac-rvpyn0z-shard-00-00.6yalr6s.mongodb.net:27017,ac-rvpyn0z-shard-00-01.6yalr6s.mongodb.net:27017,ac-rvpyn0z-shard-00-02.6yalr6s.mongodb.net:27017/?ssl=true&replicaSet=atlas-ado9ss-shard-0&authSource=admin&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;