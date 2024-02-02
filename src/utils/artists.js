import artist_1 from '../assets/images/artist_1.jpg';
import artist_2 from '../assets/images/artist_2.jpg';
import artist_3 from '../assets/images/artist_3.jpg';
import artist_4 from '../assets/images/artist_4.jpg';
import artist_5 from '../assets/images/artist_5.jpg';
import artist_6 from '../assets/images/artist_6.jpg';
import artist_7 from '../assets/images/artist_7.jpg';
import artist_8 from '../assets/images/artist_8.jpg';

const artists = [
  {
    position: 'Composer', 
    image: `${artist_1}`,
    studio: 'CGF',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'compositing',
    soft: ['nuke'],
  },
  {
    position: 'Matchmove', 
    image: `${artist_2}`,
    studio: 'MRP',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'rotoscoping',
    soft: ['nuke', '3de', 'sintheyes'],
  },
  {
    position: 'Motion', 
    image: `${artist_3}`,
    studio: 'CGF',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'matchmove',
    soft: ['houdini', 'c4d', 'photoshop'],
  },
  {
    position: 'Rotoscoping', 
    image: `${artist_4}`,
    studio: 'MRP',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'motion',
    soft: ['nuke', 'mocha', 'silhouette'],
  },
  {
    position: 'Composer', 
    image: `${artist_5}`,
    studio: 'CGF',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'rigging',
    soft: ['nuke'],
  },
  {
    position: 'Rigging', 
    image: `${artist_6}`,
    studio: 'MRP',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: '3d generalist',
    soft: ['houdini', 'maya'],
  },
  {
    position: '3D Generalist', 
    image: `${artist_7}`,
    studio: 'CGF',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'fx',
    soft: ['houdini', 'maya', '3dsmax', 'c4d'],
  },
  {
    position: 'FX artist', 
    image: `${artist_8}`,
    studio: 'MRP',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'grooming',
    soft: ['houdini', '3dsmax'],
  },
]

export default artists;