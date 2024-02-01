import React from 'react';
import Card from './components/Card/Card';
import FilterButton from './components/FilterButton/FilterButton';

import grumer from '../../assets/images/grumer.jpg';

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
          position: 'Grumer', 
          image: `${grumer}`,
          studio: 'Kemnits',
          rating: 5,
          description: `🔥В команду KEMNITS STUDIO (http://kemnits.ru/) ищем GROOMING ARTIST’a  (уровень Senior)

          Задача:
          🔹Настройка сетапа перьев попугая, с отработкой в движении. 
          Требуемый софт: Maya-Houdini
          
          ❗️Опыт работы с перьями обязателен
          
          От вас:
          ☑️ Наличие опыта в кино и сериалах 
          ☑️ Готовность начать работу в ближайшие дни
          
          От нас:
          ✅ Адекватные комментарии
          ✅ Достойная и своевременная оплата
          ✅ Четкий пайплайн работы
          ✅ В случае успешной совместной работы — постоянный поток заказов
          
          Работа удаленная. Условия обсуждаются в индивидуальном порядке.
          
          💬 Для обратной связи заполняйте форму: https://docs.google.com/forms/d/e/1FAIpQLSdKBYer9rUyFIdUkeEF8pdgls6ZR1eZOl65Ho_6rNRqCxxPWg/viewform?usp=sf_link
          `
          }} />
      </div>
    </div>
  );
}

export default Page;
