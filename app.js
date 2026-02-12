const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js")
const session=require("express-session");
const flash=require("connect-flash");

const sessionOptions={
    secret:"mysupersecretcode",
    resave:false,
    saveUninitialized:true,
    cookie:{
      expires:Date.now() + 1000 * 60 * 60 * 24 * 7,
      maxAge:1000 * 60 * 60 * 24 * 7,
      httpOnly:true, //to prevent cross site scripting attacks, it will not allow client side js to access the cookie
    },
};

app.get("/", (req, res) => {
    res.send("Hi");
});

app.use(session(sessionOptions));
app.use(flash());

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

main().then(() => {
    console.log("connected to db");
}).catch(err => {
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/urbanvista');
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,  "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs',ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.all(/.*/, (req,res,next) => {
  next(new ExpressError(404,"Page Not Found!"));
});

app.use((err, req, res, next) => {
  let {statusCode=400, message="Something went wrong"} = err; 
  //res.status(statusCode).send(message);
  res.status(statusCode).render("listings/error.ejs",{message});
});

app.listen(8080, () => {
  console.log("server listening to port 8080");
});