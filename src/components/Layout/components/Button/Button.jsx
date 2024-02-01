import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setArtists, setJobs } from '../../../../redux/slices/pageType';

const Button = ({text, color}) => {
  const dispatch = useDispatch();
  const pageType = useSelector((state) => state.pageType.type);
  const typeCheck = text.toLowerCase() === pageType;

  const handleClick = useCallback(() => {
    if (!typeCheck) {
      pageType === 'jobs' 
        ? dispatch(setArtists())
        : dispatch(setJobs())
    }
  }, [pageType]);

  return (
    <div 
      className='button' 
      style={{
        backgroundColor: typeCheck && '#0075FF',
        outline: typeCheck && '0.5rem solid #00bcd4',
      }}
      onClick={() => handleClick()}
    >
      <p className='button__text'>{text}</p>
    </div>
  );
}

export default Button;
