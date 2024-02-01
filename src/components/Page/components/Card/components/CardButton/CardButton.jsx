import React, { useState } from 'react';

const CardButton = ({ text, action }) => {
	const [onButton, setOnButton] = useState(false);
	return (
		<div 
			onClick={action}
			className='card-button'
			onMouseOver={() => {
				setOnButton(true);
			}}
			onMouseLeave={() => setOnButton(false)}
		>
			<div
			className='card-button__shape'
			style={{
				backgroundColor: (onButton && '#03b17a') || (onButton && '#d901c366'),
			}}
		></div>
		<p
				className='good-item__buy-text'
			>
				{text}
			</p>
		</div>
	);
};

export default CardButton;
