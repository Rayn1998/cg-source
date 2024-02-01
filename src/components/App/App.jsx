import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closePopup } from '../../redux/slices/popupSlice';

import './App.scss';
import Main from '../Main/Main';

const App = () => {
  const popup = useSelector((state) => state.popupSlice.isOpen);
  const dispatch = useDispatch();

  const closeCloseClick = useCallback(() => {
    dispatch(closePopup());
  }, []);

  const handleEscClose = useCallback((e) => {
    e.key === 'Escape' && closeCloseClick();
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [popup]);
  return (
    <div className="App">
      <Main/>
    </div>
  );
}

export default App;
