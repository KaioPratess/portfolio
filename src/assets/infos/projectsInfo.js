import teslaMain from '../img/tesla-gallery/main.png';
import teslaMobile from '../img/tesla-gallery/mobile.png';
import teslaMenu from '../img/tesla-gallery/menu.png';
import teslaModelS from '../img/tesla-gallery/model-s.png';
import teslaSlide1 from '../img/tesla-gallery/slide1.png';
import teslaWallpaper from '../img/tesla-gallery/Model-S-Main-Hero-Desktop-LHD.jpg';

const projectsInfo = {
  'tesla-clone': {
    name: 'Tesla Clone',
    technologies: ['JavaScript', 'ReactJs', 'Vite'],
    status: 'Ongoing',
    background: teslaWallpaper,
    gallery: [teslaMain, teslaMobile, teslaMenu, teslaModelS, teslaSlide1],
    description:
      'This project is a clone of the main Tesla website. The goal is to clone all pages(except the support page) to practice both the front end and back end development.',
    category: 'Car E-commerce',
    github: 'https://github.com/KaioPratess/tesla-clone',
    demo: 'https://kaiopratess.github.io/tesla-clone/',
  },
};

export default projectsInfo;
