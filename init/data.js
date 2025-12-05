const sampleListings = [
  {
    title: "Serene Backwater Cottage",
    description:
      "Relax in this peaceful lakeside cottage surrounded by the lush backwaters of Kerala.",
    image: "https://images.unsplash.com/photo-1739066499621-f8940330b32f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 900,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Urban Loft Retreat",
    description:
      "A stylish loft located in the center of Manhattan, perfect for exploring the vibrant city life.",
    image: "https://images.unsplash.com/photo-1642406523779-26503e063e0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFVyYmFuJTIwTG9mdCUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D",
    price: 2000,
    location: "New York",
    country: "USA",
  },
  
  {
    title: "Himalayan Mountain Cabin",
    description:
      "A quiet cabin nestled in the Himalayas, ideal for unwinding in the beauty of nature.",
    image: "https://images.unsplash.com/photo-1636598283264-664035b8d4e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGltYWxheWFuJTIwTW91bnRhaW4lMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
    price: 850,
    location: "Manali",
    country: "India",
  },
  {
    title: "Vintage German Villa",
    description:
      "Stay in a restored villa in Bavaria surrounded by scenic countryside and historic charm.",
    image: "https://images.unsplash.com/photo-1670145867818-1fbbbd12e800?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VmludGFnZSUyMEdlcm1hbiUyMFZpbGxhfGVufDB8fDB8fHww",
    price: 2700,
    location: "Bavaria",
    country: "Germany",
  },
  {
    title: "Rainforest Treehouse Escape",
    description:
      "A unique treehouse hidden in the rainforest—perfect for nature enthusiasts.",
    image: "https://images.unsplash.com/photo-1718627830113-cb9f9186bece?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UmFpbmZvcmVzdCUyMFRyZWVob3VzZSUyMEVzY2FwZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 600,
    location: "Queensland",
    country: "Australia",
  },
  {
    title: "Sydney Beachfront Condo",
    description:
      "A beachfront condo offering spectacular ocean views and sandy shores right outside your door.",
    image: "https://images.unsplash.com/photo-1760773766930-2e4efd47f496?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNoJTIwZnJvbnQlMjByZXRyZWF0fGVufDB8fDB8fHww",
    price: 2300,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Lakeside Retreat",
    description:
      "Spend your vacation by a serene lake surrounded by forest trails and fresh mountain air.",
    image: "https://images.unsplash.com/photo-1606141006259-c87c7d116d0a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxha2UlMjBzaWRlJTIwcmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D",
    price: 1100,
    location: "Montana",
    country: "USA",
  },
  {
    title: "Penthouse with Skyline Views",
    description:
      "Luxury penthouse with panoramic city views and modern amenities.",
    image: "https://images.unsplash.com/photo-1588762240955-36fd2fb6ca15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVudGhvdXNlJTIwd2l0aCUyMFNreWxpbmUlMjBWaWV3c3xlbnwwfHwwfHx8MA%3D%3D",
    price: 4000,
    location: "Chicago",
    country: "USA",
  },
  {
    title: "Bavarian Ski Chalet",
    description:
      "A perfect stay for ski lovers, offering direct access to the Bavarian Alps slopes.",
    image: "https://images.unsplash.com/photo-1604178450035-38e6a54ffa0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hhbGV0fGVufDB8fDB8fHww",
    price: 2800,
    location: "Garmisch-Partenkirchen",
    country: "Germany",
  },
  {
    title: "Australian Outback Lodge",
    description:
      "Experience the wild Outback while staying in a comfortable nature lodge.",
    image: "https://images.unsplash.com/photo-1596753609642-a400c20ffde2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXVzdHJhbGlhbiUyME91dGJhY2slMjBMb2RnZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 3200,
    location: "Northern Territory",
    country: "Australia",
  },
  {
    title: "German Canal House",
    description:
      "A beautifully preserved canal-side house in the heart of Hamburg.",
    image: "https://images.unsplash.com/photo-1746263969346-93f7fd94ea39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEdlcm1hbiUyMENhbmFsJTIwSG91c2V8ZW58MHx8MHx8fDA%3D",
    price: 1700,
    location: "Hamburg",
    country: "Germany",
  },
  {
    title: "Private Island Escape",
    description:
      "An exclusive island resort with privacy, luxury, and pristine beaches.",
    image: "https://images.unsplash.com/photo-1560946237-cab0777bc180?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJlYWNoJTIwVmlsbGF8ZW58MHx8MHx8fDA%3D",
    price: 9000,
    location: "Florida Keys",
    country: "USA",
  },
  {
    title: "Heritage Cottage Stay",
    description:
      "A charming heritage cottage located in the peaceful hills of Himachal Pradesh.",
    image: "https://images.unsplash.com/photo-1599551623527-a6d24ab601b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGVyaXRhZ2UlMjBDb3R0YWdlJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D",
    price: 1000,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Classic Boston Brownstone",
    description:
      "A historic brownstone in the heart of Boston with elegant interiors.",
    image: "https://images.unsplash.com/photo-1717858219993-02733a74eda7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGVyaXRhZ2UlMjBDb3R0YWdlJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D",
    price: 2500,
    location: "Boston",
    country: "USA",
  },
  {
    title: "Beachfront Bungalow",
    description:
      "A cozy bungalow by the beach offering stunning sunsets and private relaxation.",
    image: "https://images.unsplash.com/photo-1692417045306-bb61bfe7afd4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBzaWRlJTIwYnVuZ2xvd3xlbnwwfHwwfHx8MA%3D%3D",
    price: 1900,
    location: "Goa",
    country: "India",
  },
  {
    title: "Australian Mountain Cabin",
    description:
      "A comfortable retreat surrounded by breathtaking mountain scenery.",
    image: "https://images.unsplash.com/photo-1758707686485-3e5d7246dcce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGltYWxheWFuJTIwTW91bnRhaW4lMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
    price: 1400,
    location: "Blue Mountains",
    country: "Australia",
  },
  {
    title: "Miami Art Deco Suite",
    description:
      "A sleek Art Deco suite in Miami's lively South Beach area.",
    image: "https://images.unsplash.com/photo-1763914735075-f0f643266e40?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGVyaXRhZ2UlMjBDb3R0YWdlJTIwU3RheXxlbnwwfHwwfHx8MA%3D%3D",
    price: 1700,
    location: "Miami",
    country: "USA",
  },
  {
    title: "Luxury Villa with Infinity Pool",
    description:
      "A breathtaking villa featuring an infinity pool overlooking scenic landscapes.",
    image: "https://images.unsplash.com/photo-1758692513983-ebf181d2ec2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFZpbGxhJTIwd2l0aCUyMEluZmluaXR5JTIwUG9vbHxlbnwwfHwwfHx8MA%3D%3D",
    price: 3500,
    location: "Gold Coast",
    country: "Australia",
  },
  {
    title: "Medieval Castle Stay",
    description:
      "Experience life in an ancient castle surrounded by historic German countryside.",
    image: "https://images.unsplash.com/photo-1719408428587-3c2e8c06210d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVkaWV2YWwlMjBDYXN0bGUlMjBTdGF5fGVufDB8fDB8fHww",
    price: 3800,
    location: "Heidelberg",
    country: "Germany",
  },
  {
    title: "Dubai Desert Pavilion",
    description:
      "A premium desert pavilion offering unmatched luxury in the serene sand dunes.",
    image: "https://images.unsplash.com/photo-1666056445196-1966baf89255?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RHViYWklMjBEZXNlcnQlMjBQYXZpbGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    price: 4500,
    location: "Arizona Desert",
    country: "USA",
  },
  {
    title: "Rustic Forest Log Cabin",
    description:
      "A rustic log cabin surrounded by dense forests and peaceful wilderness.",
    image: "https://images.unsplash.com/photo-1512818908771-583ff7531c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGltYWxheWFuJTIwTW91bnRhaW4lMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
    price: 900,
    location: "Black Forest",
    country: "Germany",
  },
  {
    title: "Greek-Style Beach Villa",
    description:
      "A beachside villa inspired by Greek architecture, now located on Australia's coast.",
    image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhY2glMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    price: 2600,
    location: "Perth",
    country: "Australia",
  },
  {
    title: "Eco-Friendly Treehouse",
    description:
      "A sustainable treehouse offering a peaceful retreat in the Western Ghats.",
    image: "https://images.unsplash.com/photo-1587913696806-280ef35f1e19?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJlZWhvdXNlfGVufDB8fDB8fHww",
    price: 700,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Colonial Cottage",
    description:
      "A charming colonial-style cottage in the quiet neighborhoods of Charleston.",
    image: "https://images.unsplash.com/photo-1677207859975-e15e721aa382?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29sb25pYWwlMjBDb3R0YWdlfGVufDB8fDB8fHww",
    price: 1700,
    location: "Charleston",
    country: "USA",
  },
  {
    title: "Modern Tokyo Studio",
    description:
      "A compact and stylish studio apartment located in central Berlin.",
    image: "https://images.unsplash.com/photo-1661619870331-861133b1e0f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q29sb25pYWwlMjBDb3R0YWdlfGVufDB8fDB8fHww",
    price: 1600,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Lakeside Family Cabin",
    description:
      "A family-friendly lakeside cabin surrounded by wooded hiking trails.",
    image: "https://images.unsplash.com/photo-1578439297699-eb414262c2de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJlYWNoJTIwVmlsbGF8ZW58MHx8MHx8fDA%3D",
    price: 1300,
    location: "Minnesota",
    country: "USA",
  },
  {
    title: "Overwater Luxury Villa",
    description:
      "An overwater villa offering unmatched luxury and panoramic ocean views.",
    image: "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QmVhY2glMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    price: 5500,
    location: "Andaman Islands",
    country: "India",
  },
  {
    title: "Aspen Ski Chalet",
    description:
      "A luxurious chalet perfect for ski lovers visiting the snowy Aspen slopes.",
    image: "https://images.unsplash.com/photo-1575403071235-5dcd06cbf169?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 4200,
    location: "Aspen",
    country: "USA",
  },
  {
    title: "Secluded Beach House",
    description:
      "A peaceful beach house located on the quiet shores of South Australia.",
    image: "https://images.unsplash.com/photo-1739066499621-f8940330b32f?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1900,
    location: "Adelaide",
    country: "Australia",
  },
];

module.exports = { data: sampleListings };
