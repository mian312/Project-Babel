import mongoose from "mongoose";

// Function to establish a connection to MongoDB
function connectToMongo(URL) {
    // Connect to MongoDB using the provided MONGO_URL with specific options
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,         // Use the new URL parser
        useUnifiedTopology: true,     // Use the new Server Discover and Monitoring engine
    });

    // Check if the application is not in production mode
    if (process.env.NODE_ENV !== "production") {
        // Access the MongoDB connection
        const mDb = mongoose.connection;

        // When the MongoDB connection is successfully opened
        mDb.on("open", () => {
            console.log("MongoDB is connected");
        });

        // When there's an error in the MongoDB connection
        mDb.on("error", (error) => {
            console.error("MongoDB connection error:", error);
        });
    }
}

// Export the connectToMongo function for reuse in your application
export default connectToMongo;
