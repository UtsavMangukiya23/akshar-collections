const products = [
  // ===== DESIGNER SAREES =====
  {
    id: 1,
    name: "Royal Banarasi Silk Saree",
    category: "sarees",
    subcategory: "Designer Sarees",
    price: 8999,
    originalPrice: 14999,
    discount: 40,
    rating: 4.8,
    reviewCount: 234,
    image: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/9419149/pexels-photo-9419149.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Exquisite Banarasi silk saree featuring intricate zari work with traditional motifs. This luxurious saree is perfect for weddings, festivals, and special occasions. The rich silk fabric drapes beautifully and the gold zari detailing adds a regal touch.",
    sizes: ["Free Size"],
    colors: ["Maroon", "Royal Blue", "Emerald Green"],
    fabric: "Pure Banarasi Silk",
    occasion: "Wedding, Festival",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["bestseller", "trending"],
    reviews: [
      { name: "Priya Sharma", rating: 5, comment: "Absolutely stunning saree! The quality of silk is premium and zari work is exquisite.", date: "2025-12-15" },
      { name: "Anita Patel", rating: 5, comment: "Perfect for my daughter's wedding. Received many compliments!", date: "2025-11-20" },
      { name: "Kavya Reddy", rating: 4, comment: "Beautiful saree, slightly different shade than shown but still gorgeous.", date: "2025-10-08" }
    ]
  },
  {
    id: 2,
    name: "Kanjivaram Temple Border Saree",
    category: "sarees",
    subcategory: "Designer Sarees",
    price: 12499,
    originalPrice: 19999,
    discount: 38,
    rating: 4.9,
    reviewCount: 189,
    image: "https://images.pexels.com/photos/9419023/pexels-photo-9419023.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/9419023/pexels-photo-9419023.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8750030/pexels-photo-8750030.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "A magnificent Kanjivaram silk saree with iconic temple border design. Handwoven by master artisans from Tamil Nadu, this saree embodies centuries of weaving tradition. The rich pallu and contrasting border make it a statement piece.",
    sizes: ["Free Size"],
    colors: ["Deep Red", "Purple", "Teal"],
    fabric: "Pure Kanjivaram Silk",
    occasion: "Wedding, Pooja",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["premium", "bestseller"],
    reviews: [
      { name: "Meena Iyer", rating: 5, comment: "Museum-quality weaving. This is a true heirloom piece.", date: "2025-12-01" },
      { name: "Lakshmi Rao", rating: 5, comment: "Worth every rupee. The silk quality is extraordinary.", date: "2025-11-15" }
    ]
  },
  {
    id: 3,
    name: "Chanderi Silk Cotton Saree",
    category: "sarees",
    subcategory: "Designer Sarees",
    price: 4999,
    originalPrice: 7999,
    discount: 38,
    rating: 4.6,
    reviewCount: 312,
    image: "https://images.pexels.com/photos/8229217/pexels-photo-8229217.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/8229217/pexels-photo-8229217.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/31540070/pexels-photo-31540070.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/31540113/pexels-photo-31540113.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8387170/pexels-photo-8387170.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Lightweight and elegant Chanderi saree with delicate butis and golden border. Known for its sheer texture and glossy transparency, this saree is a perfect blend of comfort and elegance for daytime events.",
    sizes: ["Free Size"],
    colors: ["Peach", "Mint Green", "Powder Blue"],
    fabric: "Chanderi Silk Cotton",
    occasion: "Casual, Office, Festival",
    careInstructions: "Gentle hand wash or dry clean",
    inStock: true,
    tags: ["trending"],
    reviews: [
      { name: "Sneha Gupta", rating: 5, comment: "So lightweight and comfortable! Perfect for summer functions.", date: "2025-12-10" }
    ]
  },
  // ===== PARTY WEAR SAREES =====
  {
    id: 4,
    name: "Sequin Embroidered Georgette Saree",
    category: "sarees",
    subcategory: "Party Wear Sarees",
    price: 5999,
    originalPrice: 9999,
    discount: 40,
    rating: 4.7,
    reviewCount: 156,
    image: "https://images.pexels.com/photos/2723624/pexels-photo-2723624.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/2723624/pexels-photo-2723624.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/9419251/pexels-photo-9419251.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/13162239/pexels-photo-13162239.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/12850136/pexels-photo-12850136.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Dazzling party wear saree in premium georgette fabric with all-over sequin embroidery and stone work. The designer blouse piece adds a contemporary touch. Perfect for cocktail parties and evening events.",
    sizes: ["Free Size"],
    colors: ["Black", "Navy Blue", "Wine"],
    fabric: "Premium Georgette",
    occasion: "Party, Reception, Sangeet",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["new-arrival", "trending"],
    reviews: [
      { name: "Riya Malhotra", rating: 5, comment: "Absolutely gorgeous! Shines beautifully under party lights.", date: "2025-12-05" }
    ]
  },
  {
    id: 5,
    name: "Pre-Draped Designer Saree",
    category: "sarees",
    subcategory: "Party Wear Sarees",
    price: 7499,
    originalPrice: 11999,
    discount: 37,
    rating: 4.5,
    reviewCount: 98,
    image: "https://images.pexels.com/photos/8750028/pexels-photo-8750028.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/8750028/pexels-photo-8750028.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/35212993/pexels-photo-35212993.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/32161001/pexels-photo-32161001.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/31540114/pexels-photo-31540114.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Modern pre-draped saree gown with elegant pleating and embellished belt. Combines the grace of a saree with the ease of a gown. Features 3D floral embroidery and a contemporary silhouette.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Champagne Gold", "Rose Pink", "Midnight Blue"],
    fabric: "Lycra & Net",
    occasion: "Party, Reception, Cocktail",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["new-arrival"],
    reviews: [
      { name: "Divya Kapoor", rating: 4, comment: "Love the concept! So easy to wear and looks stunning.", date: "2025-11-28" }
    ]
  },
  {
    id: 6,
    name: "Satin Silk Ruffle Saree",
    category: "sarees",
    subcategory: "Party Wear Sarees",
    price: 3999,
    originalPrice: 6499,
    discount: 38,
    rating: 4.4,
    reviewCount: 201,
    image: "https://images.pexels.com/photos/31540065/pexels-photo-31540065.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/31540065/pexels-photo-31540065.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/1162983/pexels-photo-1162983.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/9419149/pexels-photo-9419149.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8750030/pexels-photo-8750030.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Trendy ruffle saree in luxurious satin silk with cascading layers. The soft drape and shimmering fabric create a show-stopping look. Comes with a matching designer blouse piece.",
    sizes: ["Free Size"],
    colors: ["Coral", "Lilac", "Sage Green"],
    fabric: "Satin Silk",
    occasion: "Party, Sangeet, Engagement",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["trending"],
    reviews: []
  },
  // ===== WEDDING LEHENGAS =====
  {
    id: 7,
    name: "Bridal Velvet Lehenga Choli",
    category: "lehengas",
    subcategory: "Wedding Lehengas",
    price: 24999,
    originalPrice: 39999,
    discount: 38,
    rating: 4.9,
    reviewCount: 87,
    image: "https://images.pexels.com/photos/12062663/pexels-photo-12062663.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/12062663/pexels-photo-12062663.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/13022612/pexels-photo-13022612.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/25309046/pexels-photo-25309046.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/6145287/pexels-photo-6145287.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Stunning bridal lehenga in rich velvet with heavy zardozi embroidery, stone work, and intricate hand embellishments. Includes matching choli and dual-tone net dupatta. A showstopper for your special day.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Bridal Red", "Maroon", "Deep Pink"],
    fabric: "Pure Velvet",
    occasion: "Wedding, Bridal",
    careInstructions: "Professional dry clean only",
    inStock: true,
    tags: ["premium", "bestseller"],
    reviews: [
      { name: "Neha Joshi", rating: 5, comment: "My dream bridal lehenga! The embroidery is breathtaking.", date: "2025-12-12" },
      { name: "Pooja Singh", rating: 5, comment: "Worth every penny. Felt like a queen on my wedding day!", date: "2025-11-25" }
    ]
  },
  {
    id: 8,
    name: "Pastel Organza Lehenga Set",
    category: "lehengas",
    subcategory: "Wedding Lehengas",
    price: 15999,
    originalPrice: 24999,
    discount: 36,
    rating: 4.7,
    reviewCount: 134,
    image: "https://images.pexels.com/photos/33343580/pexels-photo-33343580.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/33343580/pexels-photo-33343580.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/33343615/pexels-photo-33343615.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/11726516/pexels-photo-11726516.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8752674/pexels-photo-8752674.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Dreamy pastel lehenga in lightweight organza with delicate thread embroidery and sequin accents. Features a scalloped border and matching dupatta. Perfect for engagement, mehendi, or reception.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blush Pink", "Powder Blue", "Mint"],
    fabric: "Organza",
    occasion: "Engagement, Reception, Mehendi",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["trending", "new-arrival"],
    reviews: [
      { name: "Shraddha Jain", rating: 5, comment: "Ethereal beauty! Perfect for my engagement ceremony.", date: "2025-12-08" }
    ]
  },
  {
    id: 9,
    name: "Raw Silk Flared Lehenga",
    category: "lehengas",
    subcategory: "Wedding Lehengas",
    price: 18999,
    originalPrice: 29999,
    discount: 37,
    rating: 4.8,
    reviewCount: 76,
    image: "https://images.pexels.com/photos/29370686/pexels-photo-29370686.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/29370686/pexels-photo-29370686.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/11702815/pexels-photo-11702815.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/12959396/pexels-photo-12959396.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/1139450/pexels-photo-1139450.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Majestic raw silk lehenga with a dramatic flared silhouette. Features intricate Mughal-inspired embroidery with resham, dabka, and kundan work. Complete with matching choli and embroidered dupatta.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Royal Blue", "Emerald", "Wine"],
    fabric: "Raw Silk",
    occasion: "Wedding, Sangeet, Reception",
    careInstructions: "Professional dry clean only",
    inStock: true,
    tags: ["premium"],
    reviews: [
      { name: "Aarti Mehta", rating: 5, comment: "The flare is magnificent! Twirling in this was pure joy.", date: "2025-11-18" }
    ]
  },
  {
    id: 10,
    name: "Net Embroidered Lehenga",
    category: "lehengas",
    subcategory: "Wedding Lehengas",
    price: 11999,
    originalPrice: 18999,
    discount: 37,
    rating: 4.6,
    reviewCount: 165,
    image: "https://images.pexels.com/photos/11740278/pexels-photo-11740278.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/11740278/pexels-photo-11740278.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/12796883/pexels-photo-12796883.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/12762494/pexels-photo-12762494.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/12411105/pexels-photo-12411105.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Elegant net lehenga with beautiful thread and pearl embroidery. The multi-layered skirt creates a dreamy look. Includes a matching crop top choli and scalloped dupatta.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Peach", "Lavender", "Ice Blue"],
    fabric: "Net with Satin Lining",
    occasion: "Wedding, Sangeet, Engagement",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["trending"],
    reviews: []
  },
  // ===== KURTIS =====
  {
    id: 11,
    name: "Chikankari Cotton Kurti",
    category: "kurtis",
    subcategory: "Kurtis",
    price: 1299,
    originalPrice: 2499,
    discount: 48,
    rating: 4.6,
    reviewCount: 567,
    image: "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/28512779/pexels-photo-28512779.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/28512776/pexels-photo-28512776.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/13178920/pexels-photo-13178920.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Elegant Lucknowi Chikankari hand-embroidered kurti in soft cotton fabric. Features intricate floral patterns that are timeless and graceful. Perfect for daily wear to office to casual outings.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["White", "Light Pink", "Sky Blue", "Lemon Yellow"],
    fabric: "Pure Cotton",
    occasion: "Daily Wear, Office, Casual",
    careInstructions: "Machine wash cold, do not bleach",
    inStock: true,
    tags: ["bestseller", "trending"],
    reviews: [
      { name: "Nisha Agarwal", rating: 5, comment: "So comfortable and elegant! The Chikankari work is authentic.", date: "2025-12-14" },
      { name: "Deepika Verma", rating: 4, comment: "Good quality cotton. Perfect for office wear.", date: "2025-11-30" }
    ]
  },
  {
    id: 12,
    name: "Anarkali Embroidered Kurti Set",
    category: "kurtis",
    subcategory: "Kurtis",
    price: 2499,
    originalPrice: 4499,
    discount: 44,
    rating: 4.7,
    reviewCount: 321,
    image: "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/35521738/pexels-photo-35521738.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/20702674/pexels-photo-20702674.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/1580274/pexels-photo-1580274.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Graceful Anarkali kurti set with beautiful thread embroidery and mirror work. The flared silhouette flatters every body type. Comes with matching palazzo pants and dupatta.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Rust", "Teal", "Mustard"],
    fabric: "Rayon",
    occasion: "Festival, Party, Casual",
    careInstructions: "Hand wash in cold water",
    inStock: true,
    tags: ["bestseller"],
    reviews: [
      { name: "Rashmi Kumar", rating: 5, comment: "Beautiful set! The mirror work catches light perfectly.", date: "2025-12-02" }
    ]
  },
  {
    id: 13,
    name: "Block Print Straight Kurti",
    category: "kurtis",
    subcategory: "Kurtis",
    price: 999,
    originalPrice: 1799,
    discount: 44,
    rating: 4.4,
    reviewCount: 445,
    image: "https://images.pexels.com/photos/28213774/pexels-photo-28213774.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/28213774/pexels-photo-28213774.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/20604437/pexels-photo-20604437.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/5393310/pexels-photo-5393310.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Hand block-printed straight kurti in breathable cotton. Featuring traditional Rajasthani block printing techniques with natural dyes. A wardrobe essential that pairs well with palazzos or churidars.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Indigo", "Red", "Green", "Black"],
    fabric: "Cotton",
    occasion: "Daily Wear, Office, Casual",
    careInstructions: "Machine wash cold, wash separately for first 2 washes",
    inStock: true,
    tags: [],
    reviews: [
      { name: "Sonia Rawat", rating: 4, comment: "Nice print quality. Comfortable for daily wear.", date: "2025-11-10" }
    ]
  },
  {
    id: 14,
    name: "Silk Blend Festive Kurti",
    category: "kurtis",
    subcategory: "Kurtis",
    price: 1999,
    originalPrice: 3499,
    discount: 43,
    rating: 4.5,
    reviewCount: 198,
    image: "https://images.pexels.com/photos/20702674/pexels-photo-20702674.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/20702674/pexels-photo-20702674.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/19556879/pexels-photo-19556879.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/28512776/pexels-photo-28512776.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/35521738/pexels-photo-35521738.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Luxurious silk blend kurti with zari weaving and brocade details. The rich texture and elegant design make it perfect for festivals and celebrations. Features side slit and mandarin collar.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Gold", "Maroon", "Navy"],
    fabric: "Silk Blend",
    occasion: "Festival, Party, Pooja",
    careInstructions: "Dry clean recommended",
    inStock: true,
    tags: ["new-arrival"],
    reviews: []
  },
  {
    id: 15,
    name: "Palazzo Kurti Dupatta Set",
    category: "kurtis",
    subcategory: "Kurtis",
    price: 1799,
    originalPrice: 2999,
    discount: 40,
    rating: 4.3,
    reviewCount: 276,
    image: "https://images.pexels.com/photos/1580274/pexels-photo-1580274.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/1580274/pexels-photo-1580274.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/28512779/pexels-photo-28512779.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/13178920/pexels-photo-13178920.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/20604437/pexels-photo-20604437.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Complete ethnic set with A-line kurti, flowing palazzo pants, and printed dupatta. The coordinated set offers effortless style for any occasion. Made from premium cotton blend for all-day comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Teal Set", "Pink Set", "Yellow Set"],
    fabric: "Cotton Blend",
    occasion: "Casual, Festival, Office",
    careInstructions: "Machine wash cold",
    inStock: true,
    tags: ["trending"],
    reviews: []
  },
  // ===== WOMEN DRESSES =====
  {
    id: 16,
    name: "Indo-Western Fusion Gown",
    category: "dresses",
    subcategory: "Women Dresses",
    price: 6999,
    originalPrice: 11999,
    discount: 42,
    rating: 4.7,
    reviewCount: 143,
    image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/2810283/pexels-photo-2810283.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8770996/pexels-photo-8770996.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Stunning Indo-Western fusion gown that blends Indian embroidery with Western silhouette. Features a fitted bodice with flared skirt, cape sleeves, and intricate beadwork. A perfect choice for modern celebrations.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Burgundy", "Emerald", "Midnight Blue"],
    fabric: "Georgette & Satin",
    occasion: "Party, Reception, Cocktail",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["new-arrival", "trending"],
    reviews: [
      { name: "Tanvi Saxena", rating: 5, comment: "The fusion of Indian and Western is done so beautifully!", date: "2025-12-06" }
    ]
  },
  {
    id: 17,
    name: "Printed Maxi Ethnic Dress",
    category: "dresses",
    subcategory: "Women Dresses",
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    rating: 4.5,
    reviewCount: 234,
    image: "https://images.pexels.com/photos/8770996/pexels-photo-8770996.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/8770996/pexels-photo-8770996.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/1580274/pexels-photo-1580274.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8229217/pexels-photo-8229217.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Elegant ethnic print maxi dress in flowing silhouette. Features traditional Indian prints in a modern dress format. The tie-waist detail creates a flattering shape. Perfect for brunches and day events.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue Floral", "Red Paisley", "Green Tribal"],
    fabric: "Rayon Crepe",
    occasion: "Casual, Brunch, Day Events",
    careInstructions: "Hand wash cold",
    inStock: true,
    tags: [],
    reviews: [
      { name: "Priyanka Das", rating: 4, comment: "Love the prints! Very comfortable and flattering.", date: "2025-11-22" }
    ]
  },
  {
    id: 18,
    name: "Embroidered Sharara Dress",
    category: "dresses",
    subcategory: "Women Dresses",
    price: 4499,
    originalPrice: 7999,
    discount: 44,
    rating: 4.6,
    reviewCount: 178,
    image: "https://images.pexels.com/photos/2810283/pexels-photo-2810283.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/2810283/pexels-photo-2810283.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8752674/pexels-photo-8752674.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/20790057/pexels-photo-20790057.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Glamorous sharara dress with heavy threadwork and mirror embroidery. The one-piece design offers the look of a traditional sharara set with modern convenience. Perfect for festive celebrations.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Rani Pink", "Turquoise", "Coral"],
    fabric: "Georgette",
    occasion: "Festival, Party, Mehendi",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["bestseller"],
    reviews: [
      { name: "Isha Banerjee", rating: 5, comment: "Such a gorgeous piece! Love the easy one-piece design.", date: "2025-12-03" }
    ]
  },
  {
    id: 19,
    name: "Cotton Tiered Ethnic Dress",
    category: "dresses",
    subcategory: "Women Dresses",
    price: 1999,
    originalPrice: 3499,
    discount: 43,
    rating: 4.3,
    reviewCount: 312,
    image: "https://images.pexels.com/photos/8387170/pexels-photo-8387170.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/8387170/pexels-photo-8387170.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/31540070/pexels-photo-31540070.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8229217/pexels-photo-8229217.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/13178920/pexels-photo-13178920.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Breezy tiered cotton dress with hand-block printed ethnic motifs. The relaxed fit and natural cotton fabric make it perfect for summer. Features quicker pockets and adjustable tie waist.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Indigo Block", "Red Block", "Natural"],
    fabric: "Pure Cotton",
    occasion: "Daily Wear, Casual, Vacation",
    careInstructions: "Machine wash cold",
    inStock: true,
    tags: [],
    reviews: []
  },
  {
    id: 20,
    name: "Velvet Anarkali Floor Gown",
    category: "dresses",
    subcategory: "Women Dresses",
    price: 8999,
    originalPrice: 14999,
    discount: 40,
    rating: 4.8,
    reviewCount: 95,
    image: "https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/805367/pexels-photo-805367.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/2810283/pexels-photo-2810283.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8770996/pexels-photo-8770996.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Regal velvet Anarkali floor-length gown with gold zardozi embroidery on bodice and sleeves. The rich velvet fabric and flowing silhouette create a majestic appearance. Perfect for winter weddings.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Deep Wine", "Forest Green", "Royal Purple"],
    fabric: "Velvet",
    occasion: "Wedding, Reception, Winter Party",
    careInstructions: "Professional dry clean only",
    inStock: true,
    tags: ["premium", "new-arrival"],
    reviews: [
      { name: "Pallavi Nair", rating: 5, comment: "Felt absolutely regal in this gown. The velvet quality is outstanding!", date: "2025-12-11" }
    ]
  },
  // ===== ETHNIC COLLECTIONS =====
  {
    id: 21,
    name: "Patola Ikat Silk Dupatta",
    category: "ethnic",
    subcategory: "Ethnic Collections",
    price: 3499,
    originalPrice: 5999,
    discount: 42,
    rating: 4.7,
    reviewCount: 89,
    image: "https://images.pexels.com/photos/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8750030/pexels-photo-8750030.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/31540072/pexels-photo-31540072.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/31540080/pexels-photo-31540080.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Authentic Patola double ikat silk dupatta handwoven in Gujarat. Each piece takes weeks to create with the traditional ikat technique. A versatile accessory that elevates any ethnic outfit.",
    sizes: ["Free Size"],
    colors: ["Red & Green", "Blue & Gold", "Multi"],
    fabric: "Pure Patola Silk",
    occasion: "Festival, Wedding, All Occasions",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: ["premium"],
    reviews: [
      { name: "Rupal Shah", rating: 5, comment: "Authentic Patola work. Adds instant elegance to any outfit.", date: "2025-11-14" }
    ]
  },
  {
    id: 22,
    name: "Zardozi Embroidered Clutch",
    category: "ethnic",
    subcategory: "Ethnic Collections",
    price: 1499,
    originalPrice: 2499,
    discount: 40,
    rating: 4.5,
    reviewCount: 234,
    image: "https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/5409535/pexels-photo-5409535.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/5409533/pexels-photo-5409533.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Handcrafted ethnic clutch with rich zardozi embroidery and bead detailing. The velvet base and golden closure chain make it a perfect companion for your ethnic ensembles.",
    sizes: ["One Size"],
    colors: ["Red", "Green", "Blue", "Black"],
    fabric: "Velvet with Zardozi",
    occasion: "Wedding, Party, Festival",
    careInstructions: "Wipe with soft cloth",
    inStock: true,
    tags: ["trending"],
    reviews: []
  },
  {
    id: 23,
    name: "Banarasi Silk Stole",
    category: "ethnic",
    subcategory: "Ethnic Collections",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    rating: 4.6,
    reviewCount: 156,
    image: "https://images.pexels.com/photos/31540072/pexels-photo-31540072.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/31540072/pexels-photo-31540072.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/28054615/pexels-photo-28054615.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/31540080/pexels-photo-31540080.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/8750030/pexels-photo-8750030.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Luxurious Banarasi silk stole with detailed zari weaving and traditional motifs. Can be styled as a dupatta, scarf, or wrap. The rich silk has a beautiful drape and sheen.",
    sizes: ["Free Size"],
    colors: ["Beige & Gold", "Pink & Silver", "Black & Gold"],
    fabric: "Banarasi Silk",
    occasion: "All Occasions",
    careInstructions: "Dry clean only",
    inStock: true,
    tags: [],
    reviews: []
  },
  {
    id: 24,
    name: "Kundan Jewelry Set",
    category: "ethnic",
    subcategory: "Ethnic Collections",
    price: 4999,
    originalPrice: 8499,
    discount: 41,
    rating: 4.8,
    reviewCount: 312,
    image: "https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    images: [
      "https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/5409535/pexels-photo-5409535.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop",
      "https://images.pexels.com/photos/5409533/pexels-photo-5409533.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
    ],
    description: "Exquisite Kundan jewelry set featuring necklace, earrings, and maang tikka. Crafted with Kundan stones set in gold-plated base. The traditional design complements bridal and festive outfits beautifully.",
    sizes: ["One Size"],
    colors: ["Gold & White", "Gold & Green", "Gold & Red"],
    fabric: "Gold Plated Kundan",
    occasion: "Wedding, Party, Festival",
    careInstructions: "Store in box, avoid moisture",
    inStock: true,
    tags: ["bestseller", "trending"],
    reviews: [
      { name: "Jaya Mishra", rating: 5, comment: "Stunning jewelry set! Looks so real and premium.", date: "2025-12-09" },
      { name: "Shalini Verma", rating: 5, comment: "Received so many compliments at the wedding!", date: "2025-11-27" }
    ]
  }
];

export const categories = [
  { id: "sarees", name: "Sarees", description: "Timeless elegance in every drape", count: 6, image: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
  { id: "lehengas", name: "Lehengas", description: "Royal grace for your special day", count: 4, image: "https://images.pexels.com/photos/12062663/pexels-photo-12062663.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
  { id: "kurtis", name: "Kurtis", description: "Everyday ethnic charm", count: 5, image: "https://images.pexels.com/photos/28512787/pexels-photo-28512787.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
  { id: "dresses", name: "Dresses", description: "Fusion fashion redefined", count: 5, image: "https://images.pexels.com/photos/1229414/pexels-photo-1229414.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
  { id: "ethnic", name: "Ethnic Collections", description: "Complete your ethnic look", count: 4, image: "https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop" },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Akshar Collection has become my go-to brand for all ethnic occasions. The quality of their Banarasi sarees is unmatched. Every piece feels like a work of art!",
    product: "Royal Banarasi Silk Saree"
  },
  {
    id: 2,
    name: "Anita Deshmukh",
    location: "Pune, Maharashtra",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "I bought my bridal lehenga from here and it was absolutely stunning. The embroidery work is breathtaking and I received countless compliments. Highly recommended!",
    product: "Bridal Velvet Lehenga"
  },
  {
    id: 3,
    name: "Kavya Reddy",
    location: "Hyderabad, Telangana",
    avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "The Chikankari kurtis are so comfortable and elegant. Perfect for office wear. The attention to detail in every stitch shows their commitment to quality.",
    product: "Chikankari Cotton Kurti"
  },
  {
    id: 4,
    name: "Meera Krishnan",
    location: "Chennai, Tamil Nadu",
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    rating: 4,
    comment: "Outstanding collection and fast delivery. The Kanjivaram saree I ordered was even more beautiful in person. Customer service was very helpful with sizing queries.",
    product: "Kanjivaram Temple Border Saree"
  },
  {
    id: 5,
    name: "Neha Gupta",
    location: "Delhi, NCR",
    avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Love the fusion gowns! They perfectly blend Indian embroidery with Western cuts. I wore the Indo-Western gown to a reception and felt like a celebrity!",
    product: "Indo-Western Fusion Gown"
  },
  {
    id: 6,
    name: "Deepa Nair",
    location: "Kochi, Kerala",
    avatar: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "As someone who values traditional craftsmanship, I'm impressed by Akshar Collection. Their Patola dupatta is authentic and beautifully crafted. A true treasure!",
    product: "Patola Ikat Silk Dupatta"
  }
];

export default products;
