import util from '../helpers/util';

const fullness = 100;

const eatStats = {
  divId: 'eat',
  name: 'Eat',
  meter: 'fullness:',
  score: fullness,
  button1: '<button type="button">Give Apples!</button>',
  button2: '<button type="button">Give Funions!</button>',
};

const buildEats = () => {
  util.domStringBuilder(eatStats);
};

export default { buildEats };
