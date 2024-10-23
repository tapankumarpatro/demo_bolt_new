import React from 'react';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic Indian Thali",
    description: "A complete meal with rice, dal, vegetables, roti, and dessert",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&q=80",
    category: "Main Course"
  },
  {
    id: 2,
    name: "Vegetable Biryani",
    description: "Fragrant rice cooked with mixed vegetables and aromatic spices",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80",
    category: "Rice Specialties"
  },
  {
    id: 3,
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in rich tomato gravy",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80",
    category: "Main Course"
  }
];

const Menu = () => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <p className="text-xl text-gray-600">
            Discover our selection of delicious, homemade meals prepared fresh daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-orange-500 font-semibold">{item.category}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">{item.name}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;