import { useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { closePopup as closeVacanciePopup  } from '../../redux/slices/popupSlice';
import { closePopup as closeCreateArtistPopup, openPopup as openCreateArtistPopup} from '../../redux/slices/createArtistPopup';
import { closePopup as closeCreateVacanciePopup, openPopup  as openCreateVacanciePopup} from '../../redux/slices/createVacanciePopup';

import Main from '../Main/Main';
import Profile from '../Profile/Profile';

const App = () => {
  const popup = useSelector((state) => state.popupSlice.isOpen);
  const dispatch = useDispatch();

  const closeAll = useCallback(() => {
    dispatch(closeVacanciePopup());
    dispatch(closeCreateArtistPopup());
    dispatch(closeCreateVacanciePopup());
  }, []);

  const handleEscClose = useCallback((e) => {
    e.key === 'Escape' && closeAll();
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [popup]);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main close={closeAll} />} />
        <Route path='/profile' element={<Profile close={closeAll} />} />
      </Routes>
    </div>
  );
}

export default App;
