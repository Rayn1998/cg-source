import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from './components/Button/Button';
import VacanciePopup from './components/VacanciePopup/VacanciePopup';
import CreateVacanciePopup from './components/CreateVacanciePopup/CreateVacanciePopup';
import CreateArtistPopup from './components/CreateArtistPopup/CreateArtistPopup';

import {openPopup as openCreateArtistPopup} from '../../redux/slices/createArtistPopup';
import {  openPopup  as openCreateVacanciePopup} from '../../redux/slices/createVacanciePopup';

import logo from '../../assets/images/logo.png';

const Layout = ({close, children}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCreateVacancie = useCallback(() => {
    dispatch(openCreateVacanciePopup());
  }, []);

  const handleCreateArtist = useCallback(() => {
    dispatch(openCreateArtistPopup());
  }, []);

  const handleProfile = useCallback(() => {
    navigate('/profile');
  }, []);

  const handleHome = useCallback(() => {
    navigate('/')
  }, []);

  return (
    <div className='layout'>
      <VacanciePopup close={close} />
      <CreateVacanciePopup close={close} />
      <CreateArtistPopup close={close} />
      <div className='layout__header' >
        <img 
          src={logo} 
          className='layout-logo' 
          alt='logo' 
          onClick={handleHome}
        />
        <div className='layout__center'>
          <Button text='JOBS' color='#0075FF' />
          <div className='layout-divide'></div>
          <Button text='ARTISTS' color='#DB00FF' />
        </div>
        <div className='layout__crate-buttons'>
          <button 
            className='layoute__create-vacancie-button'
            onClick={handleCreateVacancie}
          >Create Vacancie</button>
          <button 
            className='layoute__create-artist-button'
            onClick={handleCreateArtist}
          >Create Artist Card</button>
        </div>
        <div 
          className='layout__profile' 
          onClick={handleProfile}
        ></div>
      </div>
      {children}
      <footer className='footer'>CG-SOURCE</footer>
    </div>
  );
}

export default Layout;
