import React from 'react';
import AddToCart from './AddToCart';
import '../../styles/productcard.css';

interface Product {
  image: string;
  name: string;
  rating: number;
  price: number;
}
                
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img 
          src={product.image} 
          alt={product.name} 
          className="card-img" 
          onError={(e) => (e.target as HTMLImageElement).src = 'default.jpeg'}
        />
        <h1 className="card-title">{product.name}</h1>
        <div className="card-body">
          <div className="card-star">
            <span className="rating-value">{product.rating}</span>
            <span className="star">&#9733;</span>
          </div>
          <p className="card-price">${product.price}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Buy Now</button>
          <AddToCart />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
