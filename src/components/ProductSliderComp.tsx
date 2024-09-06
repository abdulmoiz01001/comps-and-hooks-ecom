import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './custom/ProductCard';

const ProductSliderComp = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          centerMode: true,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]
  };

  const products = [
    { id: 1, name: 'HP Spectre x360 15', image: './Apple-iPhone-12-Pro.png', rating: 4.5, price: 650.99 },
    { id: 2, name: 'Dell XPS 13', image: './macbook.jpeg', rating: 4.7, price: 799.99 },
    { id: 3, name: 'MacBook Air', image: './MacBook-Air.png', rating: 4.8, price: 999.99 },
    // Add more products as needed
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <Slider {...settings} className="product-carousel-slider">
        {products.map((product) => (
          <div className="px-2 mb-7" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSliderComp;
