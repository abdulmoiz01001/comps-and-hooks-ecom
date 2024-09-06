import React, { useRef, MouseEvent } from 'react';
import '../styles/custombutton.css';

interface CustomButtonProps {
  name: string;
}

function CustomButton({ name }: CustomButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLSpanElement>(null);

  function handleClick(event: MouseEvent<HTMLDivElement>) {
    const button = buttonRef.current;
    const ripple = rippleRef.current;

    if (button && ripple) {
      const buttonRect = button.getBoundingClientRect();
      const { left, top } = buttonRect;
      const leftPosition = event.clientX - left;
      const topPosition = event.clientY - top;

      ripple.style.left = leftPosition + 'px';
      ripple.style.top = topPosition + 'px';

      ripple.classList.add('active');

      setTimeout(() => {
        ripple.classList.remove('active');
      }, 600);
    }
  }

  return (
    <div ref={buttonRef} onClick={handleClick} className="myButton">
      {name}
      <span ref={rippleRef} className="rippleEffect"></span>
    </div>
  );
}

export default CustomButton;
