import React from 'react';
import {
  SiCodewars,
  SiJest,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
} from 'react-icons/si';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiOutlineTeam,
} from 'react-icons/ai';
import { FaHouseUser } from 'react-icons/fa';

export const LANGUAGES = ['en', 'pl'];
export const EN_LANGUAGE = 'en';
export const PL_LANGUAGE = 'pl';
export const NAVBAR_ITEMS = [
  { title: 'home', link: 'home' },
  { title: 'about', link: 'about' },
  { title: 'whatIdo', link: 'whatIdo' },
  { title: 'resume', link: 'resume' },
  // { title: 'portfolio', link: 'portfolio' },
  { title: 'contact', link: 'contact' },
];

export const SKILLS_ITEMS = [
  {
    title: 'react',
    icon: <SiReact />,
  },
  {
    title: 'redux',
    icon: <SiRedux />,
  },
  {
    title: 'sass',
    icon: <SiSass />,
  },
  {
    title: 'type_script',
    icon: <SiTypescript />,
  },
  {
    title: 'jest',
    icon: <SiJest />,
  },
  {
    title: 'node_js',
    icon: <SiNodedotjs />,
  },
  {
    title: 'express',
    icon: <SiExpress />,
  },
  {
    title: 'team_player',
    icon: <AiOutlineTeam />,
  },
];

export const CERTIFICATES_ITEMS = [
  {
    key: 'udemy_copilot',
    years: '2025',
    link: 'https://www.udemy.com/certificate/UC-48001f0c-34fa-42ae-ac4b-4f61909ca3ce/',
  },
  {
    key: 'udemy_algo',
    years: '2025',
    link: 'https://www.udemy.com/certificate/UC-a81d14f6-010f-4d23-8f88-ac22aac6c07e/',
  },
  {
    key: 'udemy_java_basic',
    years: '2024',
    link: 'https://www.udemy.com/certificate/UC-93de246b-999f-467c-a518-481517e3846c/',
  },
];

export const EDUCATION_ITEMS = [
  {
    key: 'bru',
    years: '2013 - 2018',
  },
];

export const WORK_ITEMS = [
  {
    key: 'LSEG',
    years: '2023 - present',
  },
  {
    key: 'itechart',
    years: '2022 - 2023',
  },
  {
    key: 'clarity_project',
    years: '2020 - 2022',
  },
];

export const ADDITIONAL_ACTIVITIES_ITEMS = [
  {
    key: 'rsschool',
    years: '2025 - present',
  },
];

export const PROGRESS_ITEMS = [
  { title: 'react', value: 80 },
  { title: 'java_script', value: 80 },
  { title: 'types_script', value: 75 },
  { title: 'redux', value: 90 },
  { title: 'html_css', value: 95 },
  { title: 'jest', value: 80 },
  { title: 'node_js', value: 85 },
  { title: 'webpack', value: 70 },
  { title: 'english', value: 80 },
  { title: 'polish', value: 80 },
];

export const PROJECTS = [
  {
    title: 'Pokedex',
    image: { backgroundImage: 'url("../../images/Pokedex.png")' },
    description: 'react, redux-toolkit, typeScript, SASS, RestAPI, Jest, webpack',
    gitHub: 'https://github.com/Dergacz/Pokemon_react',
    demo: 'https://master--thriving-khapse-aac99a.netlify.app/',
  },
  {
    title: 'Calendar',
    image: { backgroundImage: 'url("../../images/calendar.png")' },
    description: 'react, redux-toolkit, typeScript, ant design',
    gitHub: 'https://github.com/Dergacz/Calendar',
    demo: 'https://dergacz.github.io/Calendar/',
  },
  // {
  //   title: 'TailwindCSS course',
  //   image: { backgroundImage: 'url("../../images/tailwind_course.png")' },
  //   description:
  //     'HTML, CSS, TailwindCSS',
  //   gitHub: 'https://github.com/Dergacz/tailwindcss-course',
  //   demo: 'https://dergacz.github.io/tailwindcss-course/',
  // },
  // {
  //   title: 'Windows_shop',
  //   image: { backgroundImage: 'url("../../images/Windows_shop.png")' },
  //   description:
  //     'JavaScript, HTML, CSS, jQuery',
  //   gitHub: 'https://github.com/Dergacz/js_window',
  //   demo: 'https://master--chic-narwhal-1ca9e4.netlify.app/',
  // },
  // {
  //   title: 'Wordpress',
  //   image: { backgroundImage: 'url("../../images/wordpress.png")' },
  //   description:
  //     'HTML, CSS',
  //   gitHub: 'https://github.com/Dergacz/wordpress-layout',
  //   demo: 'https://incredible-dragon-c27084.netlify.app',
  // },
];

export const SOCIAL_MEDIA = [
  {
    icon: <AiFillLinkedin />,
    link: 'https://www.linkedin.com/in/stanislau-dziarhach-6460aa20b/',
  },
  { icon: <AiFillGithub />, link: 'https://github.com/Dergacz' },
  { icon: <SiCodewars />, link: 'https://www.codewars.com/users/Dergacz' },
];

export const CONTACT_INFO_ITEMS = [
  { icon: <AiFillPhone />, title: 'number' },
  { icon: <AiFillMail />, title: 'email' },
  { icon: <FaHouseUser />, title: 'city' },
];

export const SERVICE_ID = 'service_0v507xg';
export const TEMPLATE_ID = 'template_ue0n2qy';
export const PUBLIC_KEY = 'ionYqzX6dV4DjfMu2';
