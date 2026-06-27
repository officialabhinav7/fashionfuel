import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],

  products: Array.from({ length: 40 }, (_, i) => {
    const categories = [
      'Shirts',
      'T-Shirts',
      'Jeans',
      'Trousers',
      'Hoodies',
      'Jackets',
      'Sneakers',
      'Formal Wear',
    ];

    const category = categories[i % categories.length];

    return {
      name: `${category} Product ${i + 1}`,
      slug: `${category.toLowerCase().replace(/\s+/g, '-')}-${i + 1}`,
      category,
      image: `https://picsum.photos/500/500?random=${i + 1}`,
      price: 500 + (i + 1) * 100,
      countInStock: 10 + (i % 20),
      brand: 'FashionFuel',
      rating: 4.5,
      numReviews: 10 + i,
      description: `Premium ${category} for modern fashion.`,
    };
  }),
};

export default data;