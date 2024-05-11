import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://stogashi:Etc6hfbuJm6iadb@cluster0.jl4zplk.mongodb.net/next-market?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Success: Connected to MongoDB");
  } catch (error) {
    console.log(error);
    console.log("Failed: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
