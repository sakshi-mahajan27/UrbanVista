require("dotenv").config();

const mongoose = require("mongoose");
const initData = require("./init/data.js");
const Listing = require("./models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

async function seedDB() {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB");
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: new mongoose.Types.ObjectId("69e48007ea752a3768d97226")}));
    await Listing.insertMany(initData.data);
    console.log("Data inserted");
    mongoose.connection.close();
}

seedDB();