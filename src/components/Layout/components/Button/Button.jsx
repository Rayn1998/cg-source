import React from 'react';

const Button = ({text, color}) => {
  return (
    <div className='button' style={{backgroundColor: `${color}`}} >
      <p className='button__text'>{text}</p>
    </div>
  );
}

export default Button;
