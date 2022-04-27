import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Website Flaco',
    desc: 'Website voor mijn zelfstandig webdesign bedrijf.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Business application',
    desc:
      'School opdracht 2e jaar Toegepaste Informatica: bedrijfs applicatie geprogrammeerd in java.',
    img: ProjectImg,
  },
  {
    id: uuidv4(),
    name: 'Restaurant webapp',
    desc:
      'School opdracht 2e jaar Toegepaste Informatica: front-end voor een lokaal restaurant.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Restaurant API',
    desc:
      'School opdracht 2e jaar Toegepaste Informatica: back-end voor een lokaal restaurant.',
    img: CoinTrackerImg,
  },
];

export default projects;
