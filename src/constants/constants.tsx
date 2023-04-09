import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  DiReact,
  FaHouseUser,
  SiCodewars
} from 'react-icons/all';
import React from 'react';

export const NAVBAR_ITEMS = [
  { title: 'Home', link: '/home' },
  { title: 'About', link: '/about' },
  { title: 'What I Do', link: '/whatIdo' },
  { title: 'Resume', link: '/resume' },
  { title: 'Portfolio', link: '/portfolio' },
  { title: 'Contact', link: '/contact' }
];

export const SKILLS_ITEMS = [
  { title: 'graphic design', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.', icon: <DiReact /> },
  { title: 'graphic design', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.', icon: <DiReact /> },
  { title: 'graphic design', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.', icon: <DiReact /> },
  { title: 'graphic design', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.', icon: <DiReact /> },
  { title: 'graphic design', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.', icon: <DiReact /> },
  { title: 'graphic design', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.', icon: <DiReact /> },
];

export const RESUME_ITEMS = [
  { title: 'Computer Science', subtitle: 'International University', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.', years: '2000 - 2004' },
  { title: 'Computer Science', subtitle: 'International University', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.', years: '2000 - 2004' },
  { title: 'Computer Science', subtitle: 'International University', description: 'Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.', years: '2000 - 2004' },
];

export const PROGRESS_ITEMS = [
  { title: 'React', value: 80 },
  { title: 'React', value: 80 },
  { title: 'React', value: 80 },
  { title: 'React', value: 80 },
  { title: 'React', value: 80 },
  { title: 'React', value: 80 },
];

export const PROJECTS = [
  { title: 'Pokedex', image: {backgroundImage: 'url("../../images/Pokedex.png")'}, description: 'react, redux-toolkit, typeScript, SASS, RestAPI, webpack', gitHub: 'https://github.com/Dergacz/Pokemon_react', demo: 'https://master--thriving-khapse-aac99a.netlify.app/'},
];

export const SOCIAL_MEDIA = [
  { icon: <AiFillLinkedin />, link: 'https://www.linkedin.com/in/stanislau-dziarhach-6460aa20b/'},
  { icon: <AiFillGithub />, link: 'https://github.com/Dergacz'},
  { icon: <SiCodewars />, link: 'https://www.codewars.com/users/rsschool_87b244e540d672af'},
];

export const CONTACT_INFO_ITEMS = [
  { icon: <AiFillPhone />, title: '+48791112379' },
  { icon: <AiFillMail />, title: 'sats96dergach@gmail.com' },
  { icon: <FaHouseUser />, title: 'Gdansk, Poland' },
];
