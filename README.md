# UrbanVista

A full-stack web application built to practice modern web development workflows. This project allows users to browse listings, view property details, and experience a seamless UI/UX similar to the original platform.

## 🚀 Features

* **User Authentication:** Secure login and signup functionality.
* **Browse Listings:** Explore various properties with high-quality images and descriptions.
* **Detailed Property View:** View amenities, location details, and pricing for specific listings.
* **Responsive Design:** Optimized for mobile, tablet, and desktop views using CSS/Tailwind.
* **Search & Filter:** Filter properties based on categories or locations.
* **Interactive Maps:** Integration with Mapbox or Google Maps to visualize property locations.

## 🛠 Tech Stack

* **Frontend:** HTML5, CSS3, JavaScript (ES6+), EJS (Template Engine)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (with Mongoose ODM)
* **Authentication:** Passport.js / JWT
* **Other Tools:** Cloudinary (Image storage), Mapbox (Geocoding/Maps), Dotenv (Environment Variables)

## 📁 Project Structure

```text
AIRBNB/
├── models/             # Mongoose schemas (User, Listing, Review)
├── public/             # Static assets (Images, CSS, Client-side JS)
├── routes/             # Express routes for listings, users, and reviews
├── utils/              # Helper functions and error handling
├── views/              # EJS templates for the UI
├── app.js              # Entry point of the application
├── .env.example        # Template for environment variables
└── package.json        # Dependencies and scripts

```

## ⚙️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/sakshi-mahajan27/UrbanVista.git
cd UrbanVista

```


2. **Install dependencies:**
```bash
npm install

```


3. **Set up environment variables:**
Create a `.env` file in the root directory and add your credentials:
```env
CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
MAPBOX_TOKEN=your_mapbox_token
ATLASDB_URL=your_mongodb_connection_string
SECRET=your_session_secret

```


4. **Run the application:**
```bash
node app.js

```


The app will be running at `http://localhost:8080` (or your specified port).

## 📜 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.

---

**Created by [Sakshi Mahajan**](https://www.google.com/search?q=https://github.com/sakshi-mahajan27)
