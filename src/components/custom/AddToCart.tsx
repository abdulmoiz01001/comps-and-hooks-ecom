import React, { useRef, useEffect } from 'react';
import '../../styles/addtocart.css';

const AddToCart = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;

    if (btn) {
      btn.addEventListener('click', () => {
        btn.classList.add('active');
      });
    }

  
    return () => {
      if (btn) {
        btn.removeEventListener('click', () => {
          btn.classList.add('active');
        });
      }



    };
  }, []);

  return (
    <button ref={btnRef} className="btn">
      <i className="btn__icon btn__icon--cart fa-solid fa-cart-shopping"></i>
      <i className="btn__icon btn__icon--box fa-solid fa-parachute-box mr-4"></i>
      <span className="btn__text btn__text--first ">Add to cart</span>
      <span className="btn__text btn__text--second">Added</span>
    </button>
  );
};

export default AddToCart;
