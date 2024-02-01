import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { closePopup } from '../../../../redux/slices/popupSlice';
import CardButton from '../../../Page/components/Card/components/CardButton/CardButton';

const VacanciePopup = () => {
	const dispatch = useDispatch();
	const popup = useSelector((state) => state.popupSlice.isOpen);
	const cache = useSelector((state) => state.cachedSliceData.data);

  const contactAction = () => {
		window.open(`${cache.tgLink}`, '_blank');
	};
	return (
		<div
			className='vacancie-popup'
			style={{
				visibility: popup ? 'visible' : 'hidden',
				opacity: popup ? '1' : '0',
			}}
		>
			<div
				className='vacancie-popup__close'
				style={{
					transform: popup ? 'translateX(0)' : 'translateX(300px)',
				}}
				onClick={() => dispatch(closePopup())}
			></div>
			<div
				className='vacancie-popup__content'
				style={{
					transform: popup
						? 'translateY(0) scale(1)'
						: 'translateY(500px) scale(0.1)',
				}}
			>
				<div className='vacancie-popup__content-left'>
          <div className='vacancie-popup__image-wrapper'>
            <img
              className='vacancie-popup__image'
              src={cache.image}
              alt='vacancie-image'
            />
          </div>
          <div className='vacancie-popup__text-data'>
            <p className='vacancie-popup__name'>{cache.position}</p>
            <p className='vacancie-popup__studio'>{cache.studio}</p>
          </div>
				</div>
				<div className='vacancie-popup__content-right'>
					<p className='vacancie-popup__description'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt,
						aliquam ipsa. Molestias nisi voluptatum atque voluptatibus, laborum
						illo nam doloremque odit? Asperiores est, sint pariatur voluptas
						architecto et veritatis at!
					</p>
          <div 
            className='vacancie-popup__contact'
            onClick={contactAction}
          >CONTACT</div>
				</div>
			</div>
		</div>
	);
};

export default VacanciePopup;
