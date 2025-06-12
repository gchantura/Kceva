// Product data store for affiliate eCommerce site
export const categories = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest tech gadgets and electronics',
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=800&q=80',
    slug: 'electronics'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description: 'Trendy clothing and accessories',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
    slug: 'fashion'
  },
  {
    id: 'home',
    name: 'Home & Garden',
    description: 'Home decor and organization',
    image: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=800&q=80',
    slug: 'home-garden'
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description: 'Sports equipment and outdoor gear',
    image: 'https://images.unsplash.com/photo-1673305414273-307a1fe7e959?auto=format&fit=crop&w=800&q=80',
    slug: 'sports-outdoors'
  }
];

export const featuredProducts = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    description: 'High-quality audio with noise cancellation. Perfect for music lovers and professionals.',
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    rating: 4.8,
    reviewCount: 1256,
    image: 'https://images.unsplash.com/photo-1641961924002-913bd679ee1e?auto=format&fit=crop&w=800&q=80',
    affiliateUrl: 'https://amazon.com/affiliate-link-1',
    category: 'electronics',
    features: ['Active Noise Cancellation', '30-hour Battery', 'Wireless', 'Quick Charge'],
    brand: 'TechBrand',
    inStock: true
  },
  {
    id: 2,
    name: 'Smart Fitness Watch',
    description: 'Track your health and fitness goals with this advanced smartwatch featuring heart rate monitoring.',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.6,
    reviewCount: 892,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    affiliateUrl: 'https://amazon.com/affiliate-link-2',
    category: 'electronics',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery'],
    brand: 'FitTech',
    inStock: true
  },
  {
    id: 3,
    name: 'Stylish Running Shoes',
    description: 'Comfortable and durable running shoes perfect for daily workouts and casual wear.',
    price: 89.99,
    originalPrice: 120.00,
    discount: 25,
    rating: 4.7,
    reviewCount: 2143,
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80',
    affiliateUrl: 'https://amazon.com/affiliate-link-3',
    category: 'fashion',
    features: ['Breathable Mesh', 'Cushioned Sole', 'Lightweight', 'Durable'],
    brand: 'SportStyle',
    inStock: true
  },
  {
    id: 4,
    name: 'Home Organization Set',
    description: 'Complete organization solution for your home. Includes storage bins, labels, and dividers.',
    price: 49.99,
    originalPrice: 79.99,
    discount: 38,
    rating: 4.5,
    reviewCount: 567,
    image: 'https://images.pexels.com/photos/10557498/pexels-photo-10557498.jpeg?auto=compress&cs=tinysrgb&w=800',
    affiliateUrl: 'https://amazon.com/affiliate-link-4',
    category: 'home',
    features: ['Stackable Design', 'Clear Labels', 'Durable Plastic', 'Multiple Sizes'],
    brand: 'HomeOrganize',
    inStock: true
  },
  {
    id: 5,
    name: 'Professional Golf Club Set',
    description: 'Complete golf club set for beginners and intermediate players. Includes driver, irons, and putter.',
    price: 349.99,
    originalPrice: 449.99,
    discount: 22,
    rating: 4.4,
    reviewCount: 324,
    image: 'https://images.unsplash.com/photo-1697448524500-717d056bc8ad?auto=format&fit=crop&w=800&q=80',
    affiliateUrl: 'https://amazon.com/affiliate-link-5',
    category: 'sports',
    features: ['Complete Set', 'Graphite Shafts', 'Lightweight Bag', 'Professional Grade'],
    brand: 'ProGolf',
    inStock: true
  },
  {
    id: 6,
    name: 'Luxury Leather Handbag',
    description: 'Elegant leather handbag perfect for professional and casual occasions. Genuine leather construction.',
    price: 129.99,
    originalPrice: 199.99,
    discount: 35,
    rating: 4.9,
    reviewCount: 456,
    image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=800&q=80',
    affiliateUrl: 'https://amazon.com/affiliate-link-6',
    category: 'fashion',
    features: ['Genuine Leather', 'Multiple Compartments', 'Adjustable Strap', 'Elegant Design'],
    brand: 'LuxeBags',
    inStock: true
  }
];

export const allProducts = [
  ...featuredProducts,
  // Electronics
  {
    id: 7,
    name: 'Wireless Charging Station',
    description: 'Fast wireless charging for multiple devices simultaneously.',
    price: 59.99,
    originalPrice: 79.99,
    discount: 25,
    rating: 4.3,
    reviewCount: 234,
    image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=800&q=80',
    affiliateUrl: 'https://amazon.com/affiliate-link-7',
    category: 'electronics',
    features: ['Fast Charging', 'Multi-Device', 'LED Indicators', 'Compact Design'],
    brand: 'ChargeTech',
    inStock: true
  },
  // Fashion
  {
    id: 8,
    name: 'Designer Sunglasses',
    description: 'UV protection with style. Perfect for any outdoor activity.',
    price: 79.99,
    originalPrice: 129.99,
    discount: 38,
    rating: 4.6,
    reviewCount: 189,
    image: 'https://images.unsplash.com/photo-1511556820780-d912e42b4980?auto=format&fit=crop&w=800&q=80',
    affiliateUrl: 'https://amazon.com/affiliate-link-8',
    category: 'fashion',
    features: ['UV Protection', 'Polarized Lenses', 'Lightweight Frame', 'Designer Style'],
    brand: 'StyleVision',
    inStock: true
  },
  // Home
  {
    id: 9,
    name: 'Modern Desk Organizer',
    description: 'Keep your workspace tidy with this stylish desk organizer.',
    price: 34.99,
    originalPrice: 49.99,
    discount: 30,
    rating: 4.4,
    reviewCount: 378,
    image: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=800&q=80',
    affiliateUrl: 'https://amazon.com/affiliate-link-9',
    category: 'home',
    features: ['Bamboo Material', 'Multiple Compartments', 'Cable Management', 'Eco-Friendly'],
    brand: 'DeskPro',
    inStock: true
  },
  // Sports
  {
    id: 10,
    name: 'Yoga Mat with Alignment Lines',
    description: 'Premium yoga mat with alignment guides for perfect poses.',
    price: 39.99,
    originalPrice: 59.99,
    discount: 33,
    rating: 4.7,
    reviewCount: 892,
    image: 'https://images.unsplash.com/photo-1673305414273-307a1fe7e959?auto=format&fit=crop&w=800&q=80',
    affiliateUrl: 'https://amazon.com/affiliate-link-10',
    category: 'sports',
    features: ['Non-Slip Surface', 'Alignment Lines', 'Eco-Friendly', 'Extra Thick'],
    brand: 'YogaPro',
    inStock: true
  }
];

// Utility functions
export function getProductsByCategory(categoryId) {
  return allProducts.filter(product => product.category === categoryId);
}

export function getFeaturedProducts(limit = 6) {
  return featuredProducts.slice(0, limit);
}

export function getProductById(id) {
  return allProducts.find(product => product.id === parseInt(id));
}

export function searchProducts(query) {
  const lowercaseQuery = query.toLowerCase();
  return allProducts.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
  );
}

// Enhanced SEO Schema generation
export function generateProductSchema(product) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: [product.image],
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    offers: {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'USD',
      availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: product.affiliateUrl,
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating.toString(),
      reviewCount: product.reviewCount.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    sku: `KCEVA-${product.id}`,
    mpn: `${product.brand}-${product.id}`,
    category: product.category
  };
}