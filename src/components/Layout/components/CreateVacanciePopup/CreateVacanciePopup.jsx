import React from 'react';
import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';

const CreateVacanciePopup = ({ close }) => {
  const popup = useSelector((state) => state.createVacanciePopup.isOpen);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => console.log(data);

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
				className='popup__content-create'
				style={{
					transform: popup
					? 'translateY(0) scale(1)'
					: 'translateY(500px) scale(0.1)',
				}}
			>
				<p className='popup__content-create-form'>CREATE VACANCIE</p>
				<form className='popup__content-create-form' onSubmit={handleSubmit(onSubmit)}>
					<input {...register('position', { required: true, })} placeholder='Position' />
					<input {...register('image', { required: true, })} placeholder='Link to image' />
					<input {...register('studio', { required: true, })} placeholder='Name of studio' />
					<input {...register('tgLink', { required: true, })} placeholder='Telegram link' />
					<input {...register('categorie', { required: true, })} placeholder='Categorie' />
					<input {...register('soft', { required: true, })} placeholder='Soft' />
					<textarea className='popup__content-create-form-description' {...register('desctiption', { required: true, })} placeholder='Description' type='text' />
					<button className='popup__content-create-form-submit' type='submit' >CREATE</button>
				</form>
      </div>
		</div>
	);
};

export default CreateVacanciePopup;
