import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
  AiOutlineTeam,
  FaHouseUser,
  SiCodewars,
  SiJest,
  SiReact,
  SiRedux,
  SiSass,
  SiTypescript,
} from 'react-icons/all';
import React from 'react';

export const NAVBAR_ITEMS = [
  { title: 'Home', link: 'home' },
  { title: 'About', link: 'about' },
  { title: 'What I Do', link: 'whatIdo' },
  { title: 'Resume', link: 'resume' },
  { title: 'Portfolio', link: 'portfolio' },
  { title: 'Contact', link: 'contact' },
];

export const SKILLS_ITEMS = [
  {
    title: 'react',
    description: 'I create modern applications using React.',
    icon: <SiReact />,
  },
  {
    title: 'redux',
    description:
      'In my projects I use state manager redux. I have commercial experience with Redux-saga, Redux-toolkit.',
    icon: <SiRedux />,
  },
  {
    title: 'SASS',
    description: 'I write styles using modern preprocessors.',
    icon: <SiSass />,
  },
  {
    title: 'TypeScript',
    description:
      'I use TypeScript for better readability of code extensibility',
    icon: <SiTypescript />,
  },
  {
    title: 'Jest',
    description: 'I cover all my projects with tests.',
    icon: <SiJest />,
  },
  {
    title: 'team player',
    description:
      'I like teamwork, I believe that only in a team can you achieve great success.',
    icon: <AiOutlineTeam />,
  },
];

export const EDUCATION_ITEMS = [
  {
    title: 'Frontend developer',
    subtitle: 'IT-Incubator',
    description:
      'Props (attributes), functional Components, class Components, state, methods of lifecycle, create-react-app, bind, Babel, ECMAScript, presentational & containerComponents, redux-thunk, state vs Redux, HOC, React Hooks, useReducer, useMemo, useCallback, FLAX, npm/yarn.',
    years: '2020 - 2020',
  },
  {
    title: 'Automation Engineer',
    subtitle: 'Belarusian-Russian University',
    description:
      'History and current state of production automation, basic technical means of automation, principles and methods of designing automated systems, programming in high-level languages, theory of electrical circuits, development of robot control systems, organization of production activities',
    years: '2013 - 2018',
  },
];

export const WORK_ITEMS = [
  {
    title: 'Software Engineer',
    subtitle: 'iTechArt',
    description:
      'Developed multiple web applications using React,\n' +
      'Redux, and Redux Toolkit to build scalable and\n' +
      'responsive user interfaces. ' +
      'Utilized Webpack and Vite for bundling and optimization\n' +
      'of the front-end code. ' +
      'Created UI components using NextUI and optimized\n' +
      'them for different devices. ',
    years: '2022 - present',
  },
  {
    title: 'Frontend developer',
    subtitle: 'Clarity Project',
    description:
      'Worked on multiple projects using React, Redux, and\n' +
      'Redux Saga to build scalable and responsive web\n' +
      'applications. ' +
      'Collaborated with cross-functional teams to implement\n' +
      'new features and optimize existing codebase. ' +
      'Developed and maintained unit tests to ensure code\n' +
      'quality and prevent regressions. ' +
      'Utilized Git and Bitbucket for version control and Jira for\n' +
      'project management. ' +
      'Designed and implemented UI components using\n' +
      'Material UI and Figma. ' +
      'Created stories and developed components using\n' +
      'Storybook to enhance usability and collaboration.',
    years: '2020 - 2022',
  },
];

export const PROGRESS_ITEMS = [
  { title: 'React', value: 80 },
  { title: 'JavaScript', value: 80 },
  { title: 'TypesScript', value: 75 },
  { title: 'Redux', value: 90 },
  { title: 'HTML/CSS', value: 95 },
  { title: 'Jest', value: 70 },
  { title: 'Git', value: 85 },
  { title: 'Webpack', value: 50 },
  { title: 'English', value: 60 },
  { title: 'Polish', value: 80 },
];

export const PROJECTS = [
  {
    title: 'Pokedex',
    image: { backgroundImage: 'url("../../images/Pokedex.png")' },
    description:
      'react, redux-toolkit, typeScript, SASS, RestAPI, Jest, webpack',
    gitHub: 'https://github.com/Dergacz/Pokemon_react',
    demo: 'https://master--thriving-khapse-aac99a.netlify.app/',
  },
  {
    title: 'Wordpress layout',
    image: { backgroundImage: 'url("../../images/wordpress.png")' },
    description: 'HTML, CSS',
    gitHub: 'https://github.com/Dergacz/wordpress-layout',
    demo: 'https://incredible-dragon-c27084.netlify.app',
  },
  {
    title: 'Todolist',
    image: { backgroundImage: 'url("../../images/todolist.png")' },
    description: 'React, Redux, Material UI, Storybook',
    gitHub: 'https://github.com/Dergacz/todolist2.0',
    demo: 'https://dergacz.github.io/todolist2.0/',
  },
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
  { icon: <AiFillPhone />, title: '+48791112379' },
  { icon: <AiFillMail />, title: 'stanislav.dziarhach@gmail.com' },
  { icon: <FaHouseUser />, title: 'Gdansk, Poland' },
];

export const SERVICE_ID = 'service_xoiqhbi';
export const TEMPLATE_ID = 'template_ue0n2qy';
export const PUBLIC_KEY = 'ionYqzX6dV4DjfMu2';
