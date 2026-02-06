const mongoose=require("mongoose");
const review = require("./review");
const Schema = mongoose.Schema;
const Review = require("./review.js");

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
    reviews: [
        {
            type: Schema.Types.ObjectId, 
            ref: "Review",
        },
    ],
});

listingSchema.post("findOneAndDelete", async function (listing) {
    if(listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews }});
    } 
});

const Listing  = mongoose.model("Listing",listingSchema);
module.exports = Listing;