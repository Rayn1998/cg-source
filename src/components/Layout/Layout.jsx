import React from 'react';


import Button from './components/Button/Button';
import VacanciePopup from './components/VacanciePopup/VacanciePopup';

import logo from '../../assets/images/logo.png';

const Layout = ({children}) => {
 
  return (
    <div className='layout'>
      <VacanciePopup />
      <div className='layout__header' >
        <img src={logo} className='layout-logo' alt='logo' />
        <div className='layout__center'>
          <Button text='JOBS' color='#0075FF' />
          <div className='layout-divide'></div>
          <Button text='ARTISTS' color='#DB00FF' />
        </div>
        <div className='layout__profile'></div>
      </div>
      {children}
      <footer className='footer'>MEGAFOOTER</footer>
    </div>
  );
}

export default Layout;
