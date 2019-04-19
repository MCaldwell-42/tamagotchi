import util from '../helpers/util';

let fullness = 100;

const eatStats = {
  divId: 'eat',
  name: 'Eat',
  meter: 'fullness:',
  score: fullness,
  button1: '<button type="button" id="healthy">Give Apples!</button>',
  button2: '<button type="button" id="unhealthy">Give Funions!</button>',
};

const getEats = () => eatStats;

const buildEats = () => {
  util.domStringBuilder(eatStats);
};

const eatHealthy = () => {
  if (fullness < 100) {
    fullness += 10;
  } else if (fullness >= 100) {
    fullness += 0;
  }
  buildEats();
};

const eatJunk = () => {
  if (fullness > 0) {
    fullness -= 50;
  } else if (fullness <= 0) {
    fullness += 0;
  }
  buildEats();
  console.error(fullness);
};


export default {
  buildEats, eatJunk, eatHealthy, getEats,
};
