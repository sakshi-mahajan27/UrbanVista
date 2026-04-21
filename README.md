<p align="center">
  <img src="https://img.shields.io/badge/UrbanVista-Property%20Listings-0D9488?style=for-the-badge&logo=homebridge&logoColor=white" alt="UrbanVista" />
</p>

<h1 align="center">🏙️ UrbanVista</h1>

<p align="center">
  <em>A modern, full-stack property listing platform built with Node.js, Express & MongoDB</em>
</p>

<p align="center">
  <a href="https://urbanvista-yigm.onrender.com">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-Visit_UrbanVista-0D9488?style=for-the-badge" alt="Live Demo" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/EJS-B4CA65?style=flat-square&logo=ejs&logoColor=black" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Mapbox-000000?style=flat-square&logo=mapbox&logoColor=white" />
  <img src="https://img.shields.io/badge/Passport.js-34E27A?style=flat-square&logo=passport&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed_on-Render-46E3B7?style=flat-square&logo=render&logoColor=white" />
</p>

---

## 📌 About

UrbanVista is a full-stack web application inspired by Airbnb, built to demonstrate modern web development skills. Users can browse property listings, view detailed information with interactive maps, leave reviews, and manage their own listings — all within a clean, responsive interface.

> **🌐 Try it live:** [**urbanvista-yigm.onrender.com**](https://urbanvista-yigm.onrender.com)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **User Authentication** | Secure signup, login & session management via Passport.js |
| 🏠 **Browse Listings** | Explore properties with high-quality images and descriptions |
| 📄 **Detailed Property View** | View amenities, location details, pricing & reviews |
| 📱 **Responsive Design** | Optimized for mobile, tablet, and desktop viewports |
| 🔍 **Search & Filter** | Filter properties by categories or locations |
| 🗺️ **Interactive Maps** | Mapbox integration for visual property locations |
| ☁️ **Cloud Image Storage** | Seamless image uploads via Cloudinary |
| ⭐ **Reviews & Ratings** | Users can leave and manage reviews on listings |

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | HTML5, CSS3, JavaScript (ES6+), EJS, Bootstrap |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | Passport.js (Local Strategy) |
| **Cloud Services** | Cloudinary (Images), Mapbox (Geocoding & Maps) |
| **Deployment** | Render |

---

## 📁 Project Structure

```text
UrbanVista/
├── models/             # Mongoose schemas (User, Listing, Review)
├── public/             # Static assets (Images, CSS, Client-side JS)
├── routes/             # Express routes for listings, users, and reviews
├── utils/              # Helper functions and error handling
├── views/              # EJS templates for the UI
├── app.js              # Entry point of the application
├── .env                # Environment variables (not committed)
└── package.json        # Dependencies and scripts
```

---

## ⚙️ Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sakshi-mahajan27/UrbanVista.git
   cd UrbanVista
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:
   ```env
   CLOUD_NAME=your_cloudinary_name
   CLOUD_API_KEY=your_api_key
   CLOUD_API_SECRET=your_api_secret
   MAPBOX_TOKEN=your_mapbox_token
   ATLASDB_URL=your_mongodb_connection_string
   SECRET=your_session_secret
   ```

4. **Start the server**
   ```bash
   node app.js
   ```
   The app will be running at `http://localhost:8080`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an [issue](https://github.com/sakshi-mahajan27/UrbanVista/issues) or submit a pull request.

---

## 📜 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

---

<p align="center">
  <b>Built with ❤️ by <a href="https://github.com/sakshi-mahajan27">Sakshi Mahajan</a></b>
</p>

<p align="center">
  <a href="https://urbanvista-yigm.onrender.com">
    <img src="https://img.shields.io/badge/🌐_View_Live_Project-0D9488?style=for-the-badge" alt="View Live Project" />
  </a>
</p>
