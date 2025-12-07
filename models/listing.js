const mongoose=require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    // image: {
    //     url: {
    //         type: String,
    //         default: "https://unsplash.com/illustrations/a-living-room-filled-with-furniture-and-a-painting-on-the-wall--pJGuTHRd6E"
    //     },
    //     filename: {
    //         type: String,
    //         default: "listingimage"
    //     }
    image:{
        type: String,
        default: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        set: (v) =>  v === "" 
        ? "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg" 
        : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing  = mongoose.model("Listing",listingSchema);
module.exports = Listing;