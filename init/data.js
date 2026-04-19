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
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
  },
  {
    title: "Urban Loft Retreat",
    description: "A stylish loft located in the center of Mumbai, perfect for exploring the vibrant city life.",
    image: {
      url: "https://images.unsplash.com/photo-1642406523779-26503e063e0d?w=600&auto=format&fit=crop&q=60",
      filename: "listingimage"
    },
    price: 2000,
    location: "Mumbai, Maharashtra",
    country: "India",
    category: "City",
    geometry: { type: "Point", coordinates: [72.8770, 19.0765] },
  },
  {
    title: "Himalayan Mountain Cabin",
    description: "A quiet cabin nestled in the Himalayas, ideal for unwinding in the beauty of nature.",
    image: {
      url: "https://images.unsplash.com/photo-1636598283264-664035b8d4e1?w=600",
      filename: "listingimage"
    },
    price: 850,
    location: "Manali, Himachal Pradesh",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [77.1892, 32.2432] },
  },
  {
    title: "Heritage Rajasthan Villa",
    description: "Stay in a restored villa in Jaipur surrounded by scenic desert landscapes and historic charm.",
    image: {
      url: "https://images.unsplash.com/photo-1670145867818-1fbbbd12e800?w=600",
      filename: "listingimage"
    },
    price: 2700,
    location: "Jaipur, Rajasthan",
    country: "India",
    category: "Farms",
    geometry: { type: "Point", coordinates: [75.7870, 26.9120] },
  },
  {
    title: "Rainforest Treehouse Escape",
    description: "A unique treehouse hidden in the rainforests of Wayanad—perfect for nature enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1718627830113-cb9f9186bece?w=600",
      filename: "listingimage"
    },
    price: 600,
    location: "Wayanad, Kerala",
    country: "India",
    category: "Treehouse",
    geometry: { type: "Point", coordinates: [76.1320, 11.6854] },
  },
  {
    title: "Goa Beachfront Condo",
    description: "A beachfront condo offering spectacular ocean views and sandy shores right outside your door.",
    image: {
      url: "https://images.unsplash.com/photo-1760773766930-2e4efd47f496?w=600",
      filename: "listingimage"
    },
    price: 2300,
    location: "Anjuna, Goa",
    country: "India",
    category: "Beach",
    geometry: { type: "Point", coordinates: [73.7407, 15.5730] },
  },
  {
    title: "Lakeside Retreat",
    description: "Spend your vacation by the serene Nainital lake surrounded by forest trails.",
    image: {
      url: "https://images.unsplash.com/photo-1606141006259-c87c7d116d0a?w=600",
      filename: "listingimage"
    },
    price: 1100,
    location: "Nainital, Uttarakhand",
    country: "India",
    category: "Lake",
    geometry: { type: "Point", coordinates: [79.4591, 29.3924] },
  },
  {
    title: "Penthouse with Skyline Views",
    description: "Luxury penthouse with panoramic Bangalore city views and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1588762240955-36fd2fb6ca15?w=600",
      filename: "listingimage"
    },
    price: 4000,
    location: "Bangalore, Karnataka",
    country: "India",
    category: "City",
    geometry: { type: "Point", coordinates: [77.5940, 12.9718] },
  },
  {
    title: "Gulmarg Ski Chalet",
    description: "A perfect stay for ski lovers, offering direct access to the snowy slopes of Kashmir.",
    image: {
      url: "https://images.unsplash.com/photo-1604178450035-38e6a54ffa0c?w=600",
      filename: "listingimage"
    },
    price: 2800,
    location: "Gulmarg, Jammu and Kashmir",
    country: "India",
    category: "Snow",
    geometry: { type: "Point", coordinates: [74.3805, 34.0484] },
  },
  {
    title: "Jaisalmer Desert Lodge",
    description: "Experience the wild Thar Desert while staying in a comfortable nature lodge.",
    image: {
      url: "https://images.unsplash.com/photo-1596753609642-a400c20ffde2?w=600",
      filename: "listingimage"
    },
    price: 3200,
    location: "Jaisalmer, Rajasthan",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [70.9083, 26.9157] },
  },

  // (continuing same pattern — only coordinates tweaked slightly)

  {
    title: "Luxury Villa with Infinity Pool",
    description: "A breathtaking villa in Lonavala featuring an infinity pool overlooking scenic Western Ghats.",
    image: {
      url: "https://images.unsplash.com/photo-1758692513983-ebf181d2ec2a?w=600",
      filename: "listingimage"
    },
    price: 3500,
    location: "Lonavala, Maharashtra",
    country: "India",
    category: "Pools",
    geometry: { type: "Point", coordinates: [73.4062, 18.7537] },
  },
  {
    title: "Fort Kochi Castle Stay",
    description: "Experience life in a historic stay surrounded by Kerala's colonial history.",
    image: {
      url: "https://images.unsplash.com/photo-1719408428587-3c2e8c06210d?w=600",
      filename: "listingimage"
    },
    price: 3800,
    location: "Kochi, Kerala",
    country: "India",
    category: "Castles",
    geometry: { type: "Point", coordinates: [76.2670, 9.9310] },
  },
  {
    title: "Pushkar Desert Pavilion",
    description: "A premium desert pavilion offering luxury in the serene sand dunes during the Pushkar fair.",
    image: {
      url: "https://images.unsplash.com/photo-1666056445196-1966baf89255?w=600",
      filename: "listingimage"
    },
    price: 4500,
    location: "Pushkar, Rajasthan",
    country: "India",
    category: "Camping",
    geometry: { type: "Point", coordinates: [74.5535, 26.4898] },
  },
  {
    title: "Coorg Forest Log Cabin",
    description: "A rustic log cabin surrounded by dense coffee plantations and peaceful wilderness.",
    image: {
      url: "https://images.unsplash.com/photo-1512818908771-583ff7531c14?w=600",
      filename: "listingimage"
    },
    price: 900,
    location: "Coorg, Karnataka",
    country: "India",
    category: "Mountains",
    geometry: { type: "Point", coordinates: [75.8069, 12.3375] },
  }
];

module.exports = { data: sampleListings };