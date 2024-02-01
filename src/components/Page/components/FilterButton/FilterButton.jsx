import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addFilter, removeFilter } from '../../../../redux/slices/positionFilter';

const FilterButton = ({text}) => {
  const dispatch = useDispatch();
  const positionFilter = useSelector((state) => state.positionFilter.filter);

  const [value, setValue] = useState('');

  const handleClick = (e) => {
    const lowVal = e.target.value.toLowerCase();
    e.target.checked 
      ? dispatch(addFilter(lowVal))
      : dispatch(removeFilter(lowVal));
  }
  
  // useEffect(() => {
  //   console.log(positionFilter);
  // }, [positionFilter]);
  return (
    <div className='filter-button'>
      <input 
        type='checkbox' 
        value={`${text}`} 
        onClick={handleClick}
      />
      {text}
    </div>
  );
}

export default FilterButton;
