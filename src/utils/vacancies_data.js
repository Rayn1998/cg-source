import grumer from '../assets/images/grumer.jpg';
import sculpt from '../assets/images/sculpt.jpg';
import matchmover from '../assets/images/matchmove.jpg';
import rigger from '../assets/images/rigger.jpg';
import rotoscoper from '../assets/images/rotoscoper.jpg';
import modeler from '../assets/images/modeler.jpg';

const vacancies = [
  {
    position: 'Compositing', 
    image: `${grumer}`,
    studio: 'Kemnits',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'compositing',
    soft: ['nuke'],
  },
  {
    position: 'Rotoscoping', 
    image: `${rotoscoper}`,
    studio: 'OnlineVFX',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'rotoscoping',
    soft: ['nuke', 'mocha', 'silhouette'],
  },
  {
    position: 'Matchmove', 
    image: `${matchmover}`,
    studio: 'CGF',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'matchmove',
    soft: ['nuke', '3de', 'sintheyes'],
  },
  {
    position: 'Motion', 
    image: `${sculpt}`,
    studio: 'MRP',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'motion',
    soft: ['houdini', 'c4d', 'photoshop'],
  },
  {
    position: 'Rigging', 
    image: `${rigger}`,
    studio: 'GreenFX',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'rigging',
    soft: ['houdini', 'maya'],
  },
  {
    position: '3D Generalist', 
    image: `${sculpt}`,
    studio: 'ILM',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: '3d generalist',
    soft: ['houdini', 'maya', '3dsmax', 'c4d'],
  },
  {
    position: 'FX artist', 
    image: `${sculpt}`,
    studio: 'Framestore',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'fx',
    soft: ['houdini', '3dsmax'],
  },
  {
    position: 'Groomer', 
    image: `${grumer}`,
    studio: 'Trehmer',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'grooming',
    soft: ['houdini', 'maya'],
  },
  {
    position: 'Groomer', 
    image: `${modeler}`,
    studio: 'Sluc',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'grooming',
    soft: ['houdini', 'maya'],
  },
  {
    position: 'Groomer', 
    image: `${grumer}`,
    studio: 'Kemnits',
    rating: 5,
    tgLink: 'https://t.me/bodolanov',
    categorie: 'grooming',
    soft: ['houdini', 'maya'],
  },
];

export default vacancies;