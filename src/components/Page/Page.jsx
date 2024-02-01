import React from 'react';
import Card from './components/Card/Card';
import FilterButton from './components/FilterButton/FilterButton';

import grumer from '../../assets/images/grumer.jpg';
import sculpt from '../../assets/images/sculpt.jpg';

const Page = () => {
  return (
    <div className='page'>
      <div className='page__header' >
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
        <div className='divider' style={{backgroundColor: '#468A75', width: '0.5rem', minHeight: '100%'}}></div>
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
      <div className='page__container' >
        <Card props={{
          position: 'Groomer', 
          image: `${grumer}`,
          studio: 'Kemnits',
          rating: 5,
          tgLink: 'https://t.me/bodolanov'
          }} />
        <Card props={{
          position: 'Sculptor', 
          image: `${sculpt}`,
          studio: 'Sluc',
          rating: 5,
          tgLink: 'https://t.me/bodolanov'
          }} />
      </div>
    </div>
  );
}

export default Page;
