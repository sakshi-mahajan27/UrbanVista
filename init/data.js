const sampleListings = [
  {
    title: "Serene Backwater Cottage",
    description:
      "Relax in this peaceful lakeside cottage surrounded by the lush backwaters of Kerala.",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/a-couple-of-houses-sitting-on-top-of-a-lush-green-hillside-0yzmwbDu228",
    },
    price: 900,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Urban Loft Retreat",
    description:
      "A stylish loft located in the center of Manhattan, perfect for exploring the vibrant city life.",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/modern-loft-interior-design-contemporary-style-3d-rendering-concept-r5MhxR_In0k",
    },
    price: 2000,
    location: "New York",
    country: "USA",
  },
  {
    title: "Himalayan Mountain Cabin",
    description:
      "A quiet cabin nestled in the Himalayas, ideal for unwinding in the beauty of nature.",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/architectural-photography-of-brown-wooden-house-hFzIoD0F_i8",
    },
    price: 850,
    location: "Manali",
    country: "India",
  },
  {
    title: "Vintage German Villa",
    description:
      "Stay in a restored villa in Bavaria surrounded by scenic countryside and historic charm.",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/white-and-brown-concrete-houses-TptU4Qo6F88",
    },
    price: 2700,
    location: "Bavaria",
    country: "Germany",
  },
  {
    title: "Rainforest Treehouse Escape",
    description:
      "A unique treehouse hidden in the rainforest—perfect for nature enthusiasts.",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/homes-nestled-in-a-lush-green-hillside-forest-eLc74fdV5FU",
    },
    price: 600,
    location: "Queensland",
    country: "Australia",
  },
  {
    title: "Sydney Beachfront Condo",
    description:
      "A beachfront condo offering spectacular ocean views and sandy shores right outside your door.",
    image: {
      filename: "listingimage",
      url: "https://unsplash.com/photos/a-beach-with-people-and-buildings-in-the-background-4jYYhzxCJCw",
    },
    price: 2300,
    location: "Sydney",
    country: "Australia",
  },
  {
    title: "Lakeside Retreat",
    description:
      "Spend your vacation by a serene lake surrounded by forest trails and fresh mountain air.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
    },
    price: 1100,
    location: "Montana",
    country: "USA",
  },
  {
    title: "Penthouse with Skyline Views",
    description:
      "Luxury penthouse with panoramic city views and modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    },
    price: 4000,
    location: "Chicago",
    country: "USA",
  },
  {
    title: "Bavarian Ski Chalet",
    description:
      "A perfect stay for ski lovers, offering direct access to the Bavarian Alps slopes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 2800,
    location: "Garmisch-Partenkirchen",
    country: "Germany",
  },
  {
    title: "Australian Outback Lodge",
    description:
      "Experience the wild Outback while staying in a comfortable nature lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    price: 3200,
    location: "Northern Territory",
    country: "Australia",
  },
  {
    title: "German Canal House",
    description:
      "A beautifully preserved canal-side house in the heart of Hamburg.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    },
    price: 1700,
    location: "Hamburg",
    country: "Germany",
  },
  {
    title: "Private Island Escape",
    description:
      "An exclusive island resort with privacy, luxury, and pristine beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972",
    },
    price: 9000,
    location: "Florida Keys",
    country: "USA",
  },
  {
    title: "Heritage Cottage Stay",
    description:
      "A charming heritage cottage located in the peaceful hills of Himachal Pradesh.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f",
    },
    price: 1000,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Classic Boston Brownstone",
    description:
      "A historic brownstone in the heart of Boston with elegant interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533619239233-6280475a633a",
    },
    price: 2500,
    location: "Boston",
    country: "USA",
  },
  {
    title: "Beachfront Bungalow",
    description:
      "A cozy bungalow by the beach offering stunning sunsets and private relaxation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602391833977-358a52198938",
    },
    price: 1900,
    location: "Goa",
    country: "India",
  },
  {
    title: "Australian Mountain Cabin",
    description:
      "A comfortable retreat surrounded by breathtaking mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
    },
    price: 1400,
    location: "Blue Mountains",
    country: "Australia",
  },
  {
    title: "Miami Art Deco Suite",
    description:
      "A sleek Art Deco suite in Miami's lively South Beach area.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/premium_photo-1670963964797-942df1804579",
    },
    price: 1700,
    location: "Miami",
    country: "USA",
  },
  {
    title: "Luxury Villa with Infinity Pool",
    description:
      "A breathtaking villa featuring an infinity pool overlooking scenic landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
    },
    price: 3500,
    location: "Gold Coast",
    country: "Australia",
  },
  {
    title: "Medieval Castle Stay",
    description:
      "Experience life in an ancient castle surrounded by historic German countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
    },
    price: 3800,
    location: "Heidelberg",
    country: "Germany",
  },
  {
    title: "Dubai Desert Pavilion",
    description:
      "A premium desert pavilion offering unmatched luxury in the serene sand dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090",
    },
    price: 4500,
    location: "Arizona Desert",
    country: "USA",
  },
  {
    title: "Rustic Forest Log Cabin",
    description:
      "A rustic log cabin surrounded by dense forests and peaceful wilderness.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f",
    },
    price: 900,
    location: "Black Forest",
    country: "Germany",
  },
  {
    title: "Greek-Style Beach Villa",
    description:
      "A beachside villa inspired by Greek architecture, now located on Australia's coast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f",
    },
    price: 2600,
    location: "Perth",
    country: "Australia",
  },
  {
    title: "Eco-Friendly Treehouse",
    description:
      "A sustainable treehouse offering a peaceful retreat in the Western Ghats.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7",
    },
    price: 700,
    location: "Wayanad",
    country: "India",
  },
  {
    title: "Colonial Cottage",
    description:
      "A charming colonial-style cottage in the quiet neighborhoods of Charleston.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904",
    },
    price: 1700,
    location: "Charleston",
    country: "USA",
  },
  {
    title: "Modern Tokyo Studio",
    description:
      "A compact and stylish studio apartment located in central Berlin.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    },
    price: 1600,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Lakeside Family Cabin",
    description:
      "A family-friendly lakeside cabin surrounded by wooded hiking trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce",
    },
    price: 1300,
    location: "Minnesota",
    country: "USA",
  },
  {
    title: "Overwater Luxury Villa",
    description:
      "An overwater villa offering unmatched luxury and panoramic ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
    },
    price: 5500,
    location: "Andaman Islands",
    country: "India",
  },
  {
    title: "Aspen Ski Chalet",
    description:
      "A luxurious chalet perfect for ski lovers visiting the snowy Aspen slopes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    },
    price: 4200,
    location: "Aspen",
    country: "USA",
  },
  {
    title: "Secluded Beach House",
    description:
      "A peaceful beach house located on the quiet shores of South Australia.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
    },
    price: 1900,
    location: "Adelaide",
    country: "Australia",
  },
];

module.exports = { data: sampleListings };
