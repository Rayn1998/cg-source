import React, { useState, useRef, useCallback } from 'react';
import CardButton from './components/CardButton/CardButton';

import { useDispatch } from 'react-redux';
import { openPopup } from '../../../../redux/slices/popupSlice';
import { setCache } from '../../../../redux/slices/vacancieCache';

const Card = ({props}) => {
	const cardRef = useRef();
	const { position, studio, image, rating, tgLink } = props;

	const [onMouse, setOnMouse] = useState(false);
	const [rotateX, setRotateX] = useState(0);
	const [rotateY, setRotateY] = useState(0);

	const dispatch = useDispatch();

	const moreAction = () => {
		dispatch(openPopup());
		dispatch(setCache(props));
	};
	
	const contactAction = () => {
		window.open(`${tgLink}`, '_blank');
	};

	const rotateCard = (e) => {
		const node = cardRef.current;
		const mult = 6;

		const halfWidth = node.offsetWidth / 2;
		const halfHeight = node.offsetHeight / 2;

		const middleX = node.offsetLeft + halfWidth;
		const middleY = node.offsetTop + halfHeight;
		const x = e.clientX - middleX;
		const y = e.clientY - middleY;

		const offsetX = (x / halfWidth) * mult;
		const offsetY = (y / halfHeight) * mult;

		setRotateY(offsetX * -1);
		setRotateX(offsetY);
	};

	const handleMouseOn = () => {
		const node = cardRef.current;
		node.addEventListener('mousemove', rotateCard);
	}

	const handleMouseLeave = useCallback(() => {
		const node = cardRef.current;
		node.removeEventListener('mousemove', rotateCard);
		const interval = setInterval(() => {
			setRotateX(rotateX => ((rotateX *= 0.9) * 1000) / 1000);
			setRotateY(rotateY => ((rotateY *= 0.9) * 1000) / 1000);
		}, 50);
		setTimeout(() => {
			window.clearInterval(interval);
		}, 2000);
	}, []);

	return (
		<div
			className='vacancie'
			ref={cardRef}
			onMouseEnter={() => {
				setOnMouse(true);
				handleMouseOn();
			}}
			onMouseLeave={() => {
				setOnMouse(false);
				handleMouseLeave();
			}}
			style={{
				transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
			}}
		>
			<div
				className='vacancie__back-anim'
				style={{
					visibility: onMouse ? 'visible' : 'hidden',
					transition: 'visibility 0.3s ease-in-out',
				}}
			></div>
			<div className='vacancie__image-wrapper' onClick={moreAction}>
				<div className='vacancie__corner'></div>
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
				<img className='vacancie__image' src={image} alt='Picture' />
				<div className='vacancie__status'></div>
			</div>
			<div className='vacancie__base'>
				<div className='vacancie__base-text-wrapper'>
					<p className='vacancie__position'>{position}</p>
					<p className='vacancie__studio'>{studio}</p>
				</div>
				<div className='vacancie__buttons-wrapper'>
					<CardButton text='MORE' action={moreAction}
						// dispatch(openPopup())
					/>
					<CardButton text='CONTACT' action={contactAction} />
				</div>
				<div className='vacancie__rating'>
					<div className='stars'>{rating}*</div>
					<p>Reviews</p>
				</div>
				{/* <p className='vacancie__price'>{price}$</p> */}
				
			</div>
		</div>
	);
};

export default Card;
