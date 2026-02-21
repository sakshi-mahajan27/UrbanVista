const sampleListings = [
  {
    title: "Serene Backwater Cottage",
    description: "Relax in this peaceful lakeside cottage surrounded by the lush backwaters of Kerala.",
    image: {
      url: "https://images.unsplash.com/photo-1739066499621-f8940330b32f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingimage"
    },
    price: 900,
    location: "Alleppey, Kerala",
    country: "India",
    category: "Lake",
  },
  {
    title: "Urban Loft Retreat",
    description: "A stylish loft located in the center of Mumbai, perfect for exploring the vibrant city life.",
    image: {
      url: "https://images.unsplash.com/photo-1642406523779-26503e063e0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFVyYmFuJTIwTG9mdCUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 2000,
    location: "Mumbai, Maharashtra",
    country: "India",
    category: "City",
  },
  {
    title: "Himalayan Mountain Cabin",
    description: "A quiet cabin nestled in the Himalayas, ideal for unwinding in the beauty of nature.",
    image: {
      url: "https://images.unsplash.com/photo-1636598283264-664035b8d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGltYWxheWFuJTIwTW91bnRhaW4lMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 850,
    location: "Manali, Himachal Pradesh",
    country: "India",
    category: "Mountains",
  },
  {
    title: "Heritage Rajasthan Villa",
    description: "Stay in a restored villa in Jaipur surrounded by scenic desert landscapes and historic charm.",
    image: {
      url: "https://images.unsplash.com/photo-1670145867818-1fbbbd12e800?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmludGFnZSUyMEdlcm1hbiUyMFZpbGxhfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 2700,
    location: "Jaipur, Rajasthan",
    country: "India",
    category: "Farms",
  },
  {
    title: "Rainforest Treehouse Escape",
    description: "A unique treehouse hidden in the rainforests of Wayanad—perfect for nature enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1718627830113-cb9f9186bece?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmFpbmZvcmVzdCUyMFRyZWVob3VzZSUyMEVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 600,
    location: "Wayanad, Kerala",
    country: "India",
    category: "Treehouse",
  },
  {
    title: "Goa Beachfront Condo",
    description: "A beachfront condo offering spectacular ocean views and sandy shores right outside your door.",
    image: {
      url: "https://images.unsplash.com/photo-1760773766930-2e4efd47f496?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwZnJvbnQlMjByZXRyZWF0fGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 2300,
    location: "Anjuna, Goa",
    country: "India",
    category: "Beach",
  },
  {
    title: "Lakeside Retreat",
    description: "Spend your vacation by the serene Nainital lake surrounded by forest trails.",
    image: {
      url: "https://images.unsplash.com/photo-1606141006259-c87c7d116d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxha2UlMjBzaWRlJTIwcmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 1100,
    location: "Nainital, Uttarakhand",
    country: "India",
    category: "Lake",
  },
  {
    title: "Penthouse with Skyline Views",
    description: "Luxury penthouse with panoramic Bangalore city views and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1588762240955-36fd2fb6ca15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVudGhvdXNlJTIwd2l0aCUyMFNreWxpbmUlMjBWaWV3c3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 4000,
    location: "Bangalore, Karnataka",
    country: "India",
    category: "City",
  },
  {
    title: "Gulmarg Ski Chalet",
    description: "A perfect stay for ski lovers, offering direct access to the snowy slopes of Kashmir.",
    image: {
      url: "https://images.unsplash.com/photo-1604178450035-38e6a54ffa0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hhbGV0fGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 2800,
    location: "Gulmarg, Jammu and Kashmir",
    country: "India",
    category: "Snow",
  },
  {
    title: "Jaisalmer Desert Lodge",
    description: "Experience the wild Thar Desert while staying in a comfortable nature lodge.",
    image: {
      url: "https://images.unsplash.com/photo-1596753609642-a400c20ffde2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXVzdHJhbGlhbiUyME91dGJhY2slMjBMb2RnZXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 3200,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    category: "Camping",
  },
  {
    title: "Delhi Colonial House",
    description: "A beautifully preserved colonial-style house in the heart of Chanakyapuri.",
    image: {
      url: "https://images.unsplash.com/photo-1746263969346-93f7fd94ea39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdlcm1hbiUyMENhbmFsJTIwSG91c2V8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 1700,
    location: "New Delhi, Delhi",
    country: "India",
    category: "City",
  },
  {
    title: "Private Island Escape",
    description: "An exclusive island resort with privacy, luxury, and pristine beaches in the Andamans.",
    image: {
      url: "https://images.unsplash.com/photo-1560946237-cab0777bc180?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJlYWNoJTIwVmlsbGF8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 9000,
    location: "Havelock Island, Andaman",
    country: "India",
    category: "Beach",
  },
  {
    title: "Heritage Cottage Stay",
    description: "A charming heritage cottage located in the peaceful hills of Himachal Pradesh.",
    image: {
      url: "https://images.unsplash.com/photo-1599551623527-a6d24ab601b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGVyaXRhZ2UlMjBDb3R0YWdlJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 1000,
    location: "Shimla, Himachal Pradesh",
    country: "India",
    category: "Mountains",
  },
  {
    title: "Classic Kolkata Mansion",
    description: "A historic mansion in the heart of North Kolkata with elegant interiors.",
    image: {
      url: "https://images.unsplash.com/photo-1717858219993-02733a74eda7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVyaXRhZ2UlMjBDb3R0YWdlJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 2500,
    location: "Kolkata, West Bengal",
    country: "India",
    category: "City",
  },
  {
    title: "Varkala Beachfront Bungalow",
    description: "A cozy bungalow by the cliffside beach offering stunning sunsets.",
    image: {
      url: "https://images.unsplash.com/photo-1692417045306-bb61bfe7afd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBzaWRlJTIwYnVuZ2xvd3xlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 1900,
    location: "Varkala, Kerala",
    country: "India",
    category: "Beach",
  },
  {
    title: "Mussoorie Mountain Cabin",
    description: "A comfortable retreat surrounded by breathtaking Himalayan scenery.",
    image: {
      url: "https://images.unsplash.com/photo-1758707686485-3e5d7246dcce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGltYWxheWFuJTIwTW91bnRhaW4lMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 1400,
    location: "Mussoorie, Uttarakhand",
    country: "India",
    category: "Mountains",
  },
  {
    title: "Pondicherry French Suite",
    description: "A sleek suite in Pondicherry's lively French Quarter area.",
    image: {
      url: "https://images.unsplash.com/photo-1763914735075-f0f643266e40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGVyaXRhZ2UlMjBDb3R0YWdlJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 1700,
    location: "Pondicherry",
    country: "India",
    category: "Beach",
  },
  {
    title: "Luxury Villa with Infinity Pool",
    description: "A breathtaking villa in Lonavala featuring an infinity pool overlooking scenic Western Ghats.",
    image: {
      url: "https://images.unsplash.com/photo-1758692513983-ebf181d2ec2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFZpbGxhJTIwd2l0aCUyMEluZmluaXR5JTIwUG9vbHxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 3500,
    location: "Lonavala, Maharashtra",
    country: "India",
    category: "Pools",
  },
  {
    title: "Fort Kochi Castle Stay",
    description: "Experience life in a historic stay surrounded by Kerala's colonial history.",
    image: {
      url: "https://images.unsplash.com/photo-1719408428587-3c2e8c06210d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVkaWV2YWwlMjBDYXN0bGUlMjBTdGF5fGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 3800,
    location: "Kochi, Kerala",
    country: "India",
    category: "Castles",
  },
  {
    title: "Pushkar Desert Pavilion",
    description: "A premium desert pavilion offering luxury in the serene sand dunes during the Pushkar fair.",
    image: {
      url: "https://images.unsplash.com/photo-1666056445196-1966baf89255?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RHViYWklMjBEZXNlcnQlMjBQYXZpbGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 4500,
    location: "Pushkar, Rajasthan",
    country: "India",
    category: "Camping",
  },
  {
    title: "Coorg Forest Log Cabin",
    description: "A rustic log cabin surrounded by dense coffee plantations and peaceful wilderness.",
    image: {
      url: "https://images.unsplash.com/photo-1512818908771-583ff7531c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGltYWxheWFuJTIwTW91bnRhaW4lMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 900,
    location: "Coorg, Karnataka",
    country: "India",
    category: "Mountains",
  },
  {
    title: "Lakshadweep Beach Villa",
    description: "A beachside villa offering pristine blue waters and white sand.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2glMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 2600,
    location: "Agatti, Lakshadweep",
    country: "India",
    category: "Beach",
  },
  {
    title: "Eco-Friendly Treehouse",
    description: "A sustainable treehouse offering a peaceful retreat in the Western Ghats.",
    image: {
      url: "https://images.unsplash.com/photo-1587913696806-280ef35f1e19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJlZWhvdXNlfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 700,
    location: "Munnar, Kerala",
    country: "India",
    category: "Treehouse",
  },
  {
    title: "Lucknow Nawab Cottage",
    description: "A charming heritage-style cottage in the quiet neighborhoods of Lucknow.",
    image: {
      url: "https://images.unsplash.com/photo-1677207859975-e15e721aa382?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sb25pYWwlMjBDb3R0YWdlfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 1700,
    location: "Lucknow, Uttar Pradesh",
    country: "India",
    category: "City",
  },
  {
    title: "Modern Hyderabad Studio",
    description: "A compact and stylish studio apartment located in HITEC City.",
    image: {
      url: "https://images.unsplash.com/photo-1661619870331-861133b1e0f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29sb25pYWwlMjBDb3R0YWdlfGVufDB8fDB8fHww",
      filename: "listingimage"
    },
    price: 1600,
    location: "Hyderabad, Telangana",
    country: "India",
    category: "City",
  },
  {
    title: "Bhimtal Family Cabin",
    description: "A family-friendly lakeside cabin surrounded by wooded hiking trails in the Himalayas.",
    image: {
      url: "https://images.unsplash.com/photo-1578439297699-eb414262c2de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJlYWNoJTIwVmlsbGF8ZW58MHx8MHx8fDA%3D",
      filename: "listingimage"
    },
    price: 1300,
    location: "Bhimtal, Uttarakhand",
    country: "India",
    category: "Lake",
  },
  {
    title: "Mahabalipuram Luxury Villa",
    description: "An overwater villa offering luxury and panoramic views of the Bay of Bengal.",
    image: {
      url: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmVhY2glMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
      filename: "listingimage"
    },
    price: 5500,
    location: "Mahabalipuram, Tamil Nadu",
    country: "India",
    category: "Beach",
  },
  {
    title: "Auli Ski Chalet",
    description: "A luxurious chalet perfect for ski lovers visiting the snowy slopes of Uttarakhand.",
    image: {
      url: "https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingimage"
    },
    price: 4200,
    location: "Auli, Uttarakhand",
    country: "India",
    category: "Snow",
  },
  {
    title: "Kovalam Beach House",
    description: "A peaceful beach house located on the quiet shores of South Kerala.",
    image: {
      url: "https://images.unsplash.com/photo-1739066499621-f8940330b32f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      filename: "listingimage"
    },
    price: 1900,
    location: "Kovalam, Kerala",
    country: "India",
    category: "Beach",
  },
];

module.exports = { data: sampleListings };
