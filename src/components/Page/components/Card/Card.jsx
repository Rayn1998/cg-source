import React from 'react';

const Card = ({props}) => {
  const { position, studio, description, image, rating, price, _id: id } = props;
	return (
		<div
			className='good-item'
			// ref={cardRef}
			// onMouseEnter={() => {
			// 	setOnMouse(true);
			// 	handleMouseOn();
			// }}
			// onMouseLeave={() => {
			// 	setOnMouse(false);
			// 	handleMouseLeave();
			// }}
			// style={{
			// 	transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
			// }}
		>
			<div
				className='good-item__back-anim'
				// style={{
				// 	visibility: onMouse ? 'visible' : 'hidden',
				// 	transition: 'visibility 0.3s ease-in-out',
				// }}
			></div>
			<div className='good-item__image-wrapper' /*onClick={handleClick}*/>
				<div className='good-item__corner'></div>
				<div
					className='image-fav'
					// onClick={handleFav}
					// style={{
					// 	backgroundImage: checkFav()
					// 		? `url(${imageFavActive})`
					// 		: `url(${imageFav})`,
					// }}
				></div>
				<div
					className='image-cart'
					// onClick={handleCartClick}
					// style={{
					// 	backgroundImage: checkInCart()
					// 		? `url(${cartIconActive})`
					// 		: `url(${cartIcon})`,
					// }}
				></div>
				<img className='good-item__image' src={image} alt='Picture' />
			</div>
			<div className='good-item__base'>
				<div className='good-item__base-text-wrapper'>
					<p className='good-item__position'>{position}</p>
					<p className='good-item__studio'>{studio}</p>
					<p className='good-item__description'>{description}</p>
				</div>
				<div className='good-item__rating'>
					<div className='stars'>{rating}*</div>
					<p>Reviews</p>
				</div>
				{/* <p className='good-item__price'>{price}$</p> */}
				<div
					className='good-item__buy-wrapper'
					// style={{
					// 	backgroundColor: (inCart && '#03b17a') || (onBuy && '#d901c366'),
					// }}
					// onMouseOver={() => {
					// 	setOnBuy(true);
					// }}
					// onMouseLeave={() => setOnBuy(false)}
					// onClick={handleCartClick}
				></div>
				<p
					className='good-item__buy-text'
					// onMouseOver={() => {
					// 	setOnBuy(true);
					// }}
					// onMouseLeave={() => setOnBuy(false)}
					// onClick={handleCartClick}
				>
					CONTACT
				</p>
			</div>
		</div>
	);
};

export default Card;
