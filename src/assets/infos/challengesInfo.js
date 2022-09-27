import wIW1 from '../img/where-is-waldo-gallery/1.png';
import wIW2 from '../img/where-is-waldo-gallery/2.png';
import wIW3 from '../img/where-is-waldo-gallery/wallpaper.jpg';
import todo1 from '../img/todo-gallery/kaiopratess.github.io_todo-list_ (1).png';
import todo2 from '../img/todo-gallery/kaiopratess.github.io_todo-list_.png';
import todo3 from '../img/todo-gallery/kaiopratess.github.io_todo-list_3.png';
import todo4 from '../img/todo-gallery/wallpaper.png';
import bt1 from '../img/battleship-gallery/1.png';
import bt2 from '../img/battleship-gallery/2.png';
import bt3 from '../img/battleship-gallery/3.png';
import bt4 from '../img/battleship-gallery/wallpaper.webp';
import ttt1 from '../img/tic-tac-toe-gallery/1.png';
import ttt2 from '../img/tic-tac-toe-gallery/2.png';
import ttt3 from '../img/tic-tac-toe-gallery/3.png';
import ttt4 from '../img/tic-tac-toe-gallery/4.png';
import ttt5 from '../img/tic-tac-toe-gallery/wallpaper.jpg';
import rps1 from '../img/rock-paper-scissors-gallery/1.png';
import rps2 from '../img/rock-paper-scissors-gallery/2.png';
import rps3 from '../img/rock-paper-scissors-gallery/3.png';
import rps4 from '../img/rock-paper-scissors-gallery/wallpaper.webp';
import eak1 from '../img/etch-a-sketch-gallery/1.png';
import eak2 from '../img/etch-a-sketch-gallery/wallpaper.jpg';
import snf1 from '../img/signup-form-gallery/kaiopratess.github.io_signup-form_.png';
import sc1 from '../img/shopping-cart-gallery/1.png';
import sc2 from '../img/shopping-cart-gallery/2.png';
import sc3 from '../img/shopping-cart-gallery/3.png';
import sc4 from '../img/shopping-cart-gallery/4.png';
import cc1 from '../img/calculator-gallery/1.png';
import cc2 from '../img/calculator-gallery/2.png';
import wa1 from '../img/weather-app-gallery/kaiopratess.github.io_weather-app_.png';
import qa1 from '../img/quizzical-gallery/1.png';
import qa2 from '../img/quizzical-gallery/2.png';
import qa3 from '../img/quizzical-gallery/3.png';
import mg1 from '../img/memory-game-gallery/1.png';

const challengesInfo = {
  'where-is-waldo': {
    name: 'Where is Waldo?',
    technologies: ['JavaScript', 'ReactJs', 'Vite', 'Firebase'],
    status: 'Done',
    background: wIW3,
    gallery: [wIW1, wIW2],
    description:
      "This is a web game based on the british series of children's puzzle books created by English illustrator Martin Handford. The goal of the game is to try to find all the characters as fast as possible.",
    category: 'Game',
    github: 'https://github.com/KaioPratess/where-is-waldo-game',
    demo: 'https://kaiopratess.github.io/where-is-waldo-game/',
  },
  'to-do-app': {
    name: 'To Do App',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    status: 'Done',
    background: todo4,
    gallery: [todo1, todo2, todo3],
    description:
      'This project is a todo app, you can use it to organize your tasks by project and by date. Never forget anything!',
    category: 'Productivity',
    demo: 'https://kaiopratess.github.io/todo-list/',
    github: 'https://github.com/KaioPratess/todo-list',
  },
  battleship: {
    name: 'Battleship',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Babel', 'Jest'],
    status: 'Done',
    background: bt4,
    gallery: [bt1, bt3, bt2],
    description:
      'This project is a warship game. Strategically place your ships and prepare for battle. Try to sink all enemy ships before he defeats you!',
    category: 'Game',
    demo: 'https://kaiopratess.github.io/battleship-game/',
    github: 'https://github.com/KaioPratess/battleship-game',
  },
  'tic-tac-toe': {
    name: 'Tic Tac Toe',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Done',
    background: ttt5,
    gallery: [ttt1, ttt2, ttt3, ttt4],
    description:
      "This is a game that can be played with friends or against the machine. The goal is to form a pattern of three 'x' or 'o' in any direction.",
    category: 'Game',
    demo: 'https://kaiopratess.github.io/tic-tac-toe/',
    github: 'https://github.com/KaioPratess/tic-tac-toe',
  },
  'rock-paper-scissors': {
    name: 'Rock Paper Scissors',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Done',
    background: rps4,
    gallery: [rps1, rps2, rps3],
    description:
      'This is the classic Rock Paper Scissors game. You will be playing against the machine. There are 5 rounds and at the final the results are displayed for you.',
    category: 'Game',
    demo: 'https://kaiopratess.github.io/rock-papers-scissors-project/',
    github: 'https://github.com/KaioPratess/rock-papers-scissors-project',
  },
  'etch-a-sketch': {
    name: 'Etch A Sketch',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Done',
    background: eak2,
    gallery: [eak1],
    description: 'This is a web version of a magic canvas to draw.',
    category: 'Draw App',
    demo: 'https://kaiopratess.github.io/ETCH-A-SKETCH/',
    github: 'https://github.com/KaioPratess/ETCH-A-SKETCH',
  },
  'sign-up-form': {
    name: 'Sign Up Form',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Done',
    background: snf1,
    gallery: [snf1],
    description: 'This is a form to be submitted, with FrontEnd validation.',
    category: 'Form',
    demo: 'https://kaiopratess.github.io/signup-form/',
    github: 'https://github.com/KaioPratess/signup-form',
  },
  'shopping-cart': {
    name: 'Shopping Cart',
    technologies: ['CSS3', 'ReactJs', 'Vite'],
    status: 'Done',
    background: sc1,
    gallery: [sc1, sc2, sc3, sc4],
    description:
      'This project is a small clothing shop. The goal was to use React Router to change between pages and implement a shopping cart.',
    category: 'Cloth E-commerce',
    demo: 'https://kaiopratess.github.io/shopping-cart/',
    github: 'https://github.com/KaioPratess/shopping-cart',
  },
  calculator: {
    name: 'Calculator',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    status: 'Done',
    background: cc1,
    gallery: [cc1, cc2],
    description: 'This is a basic calculator with dark and light color mode',
    category: 'Financial',
    demo: 'https://kaiopratess.github.io/calculator/',
    github: 'https://github.com/KaioPratess/calculator',
  },
  'weather-app': {
    name: 'Weather App',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Webpack'],
    status: 'Done',
    background: wa1,
    gallery: [wa1],
    description:
      'This is a weather forecast project. Search for your location and see the forecast for the whole week.',
    category: 'Forecast',
    demo: 'https://kaiopratess.github.io/weather-app/',
    github: 'https://github.com/KaioPratess/weather-app',
  },
  'quizzical-app': {
    name: 'Quizzical App',
    technologies: ['CSS3', 'ReactJs', 'Vite'],
    status: 'Done',
    background: qa1,
    gallery: [qa1, qa2, qa3],
    description:
      'This project is a simple React quiz game. Select the desired category and difficulty and start playing.',
    category: 'Trivia',
    demo: 'https://kaiopratess.github.io/quizzical-app/',
    github: 'https://github.com/KaioPratess/quizzical-app',
  },
  'memory-game': {
    name: 'Memory Game',
    technologies: ['CSS3', 'ReactJs', 'Vite'],
    status: 'Done',
    background: mg1,
    gallery: [mg1],
    description:
      "This project is a simple memory game created using the Marvel API. Don't click at the same character twice!",
    category: 'Game',
    demo: 'https://kaiopratess.github.io/memory-game/',
    github: 'https://github.com/KaioPratess/memory-game',
  },
};

export default challengesInfo;
