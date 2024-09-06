import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface CartItem extends Product {
  quantity: number;
}

const productsData: Product[] = [
  { id: 1, name: 'Product 1', price: 50, imageUrl: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 30, imageUrl: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 20, imageUrl: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 40, imageUrl: 'https://via.placeholder.com/150' },
];

const AddToCartComp: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Add product to cart
  const addToCart = (product: Product) => {
    const updatedCart = [...cart];
    const productInCart = updatedCart.find((item) => item.id === product.id);

    if (productInCart) {
      productInCart.quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    calculateTotal(updatedCart);
  };

  // Calculate total price
  const calculateTotal = (cart: CartItem[]) => {
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    setTotal(totalAmount);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">${product.price}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Cart Summary</h2>
        <div className="border-t mt-4 pt-4">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-700">Quantity: {item.quantity}</p>
                </div>
                <p className="text-gray-700">${item.price * item.quantity}</p>
              </div>
            ))
          )}
        </div>

        <div className="border-t mt-4 pt-4 flex justify-between items-center">
          <h3 className="text-xl font-bold">Total</h3>
          <p className="text-xl font-semibold">${total}</p>
        </div>
      </div>
    </div>
  );
};

export default AddToCartComp;
