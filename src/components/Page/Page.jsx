import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Card from './components/Card/Card';
import FilterButton from './components/FilterButton/FilterButton';

import vacancies from '../../utils/vacancies_data';
import artists from '../../utils/artists';

const Page = () => {
	const pageType = useSelector((state) => state.pageType.type);

	const [currentItems, setCurrentItems] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [goodsPerPage, setGoodsPerPage] = useState(6);

	const lastIndex = currentPage * goodsPerPage;
	const firstIndex = lastIndex - goodsPerPage;

	// SEARCH
	useEffect(() => {
    pageType === 'jobs' 
      ? setCurrentItems(vacancies.slice(firstIndex, lastIndex))
      : setCurrentItems(artists.slice(firstIndex, lastIndex))
	}, [pageType, firstIndex, lastIndex]);

	// PAGINATION LOGIC
	const handleNext = () => {
		currentPage < Math.ceil(vacancies.length / goodsPerPage) &&
			setCurrentPage((currentPage) => currentPage + 1);
	};

	const handlePrev = () => {
		currentPage > 1 && setCurrentPage((currentPage) => currentPage - 1);
	};

	const handleLastPage = () => {
		setCurrentPage(Math.ceil(vacancies.length / goodsPerPage));
	};

	const handleFirstPage = () => {
		setCurrentPage(1);
	};
	return (
		<div className='page'>
			<div className='page__header'>
				<div className='page__specialties'>
					<FilterButton text='Compositing' />
					<FilterButton text='Rotoscoping' />
					<FilterButton text='3D Generalist' />
					<FilterButton text='Matchmove' />
					<FilterButton text='Motion' />
					<FilterButton text='Rigging' />
					<FilterButton text='FX' />
					<FilterButton text='Groomer' />
				</div>
				<div
					className='divider'
					style={{
						backgroundColor: '#468A75',
						width: '0.5rem',
						minHeight: '100%',
					}}
				></div>
				<div className='page__specialties'>
					<FilterButton text='Nuke' />
					<FilterButton text='Houdini' />
					<FilterButton text='Mocha' />
					<FilterButton text='3DE' />
					<FilterButton text='Maya' />
					<FilterButton text='3DSMax' />
					<FilterButton text='Silhouette' />
					<FilterButton text='Sintheyes' />
					<FilterButton text='AE' />
					<FilterButton text='Photoshop' />
				</div>
			</div>
			<div className='page__container'>
				{currentItems?.map((card, i) => {
            return <Card props={card} key={i} />;
        })}
			</div>
			<ul className='pagination'>
				<li className='pagination-item' onClick={handleFirstPage}>
					First
				</li>
				<li className='pagination-item' onClick={handlePrev}>
					{'<'}
				</li>
				<li className='pagination-item'>{currentPage}</li>
				<li className='pagination-item' onClick={handleNext}>
					{'>'}
				</li>
				<li className='pagination-item' onClick={handleLastPage}>
					Last
				</li>
			</ul>
		</div>
	);
};

export default Page;
