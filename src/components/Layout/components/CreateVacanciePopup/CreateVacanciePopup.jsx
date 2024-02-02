import React from 'react';
import { useSelector } from 'react-redux';

const CreateVacanciePopup = ({ close }) => {
  const popup = useSelector((state) => state.createVacanciePopup.isOpen);
	return (
		<div
			className='popup'
			style={{
				visibility: popup ? 'visible' : 'hidden',
				opacity: popup ? '1' : '0',
			}}
		>
			<div
				className='popup__close'
				style={{
					transform: popup ? 'translateX(0)' : 'translateX(300px)',
				}}
				onClick={close}
			></div>
			<div
				className='popup__content'
				style={{
					transform: popup
						? 'translateY(0) scale(1)'
						: 'translateY(500px) scale(0.1)',
				}}
			>
        CreationVacancie
      </div>
		</div>
	);
};

export default CreateVacanciePopup;
