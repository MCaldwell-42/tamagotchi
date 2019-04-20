import util from '../helpers/util';

let full = 100;

const eatStats = {
  divId: 'eat',
  name: 'Eat',
  meter: 'full:',
  button1: '<button type="button" id="healthy">Give Apples!</button>',
  button2: '<button type="button" id="unhealthy">Give Funions!</button>',
};

const getEats = () => eatStats;

const buildEats = () => {
  util.domStringBuilder(eatStats, full);
};

const eatHealthy = () => {
  if (full < 100) {
    full += 10;
  } else if (full >= 100) {
    full += 0;
  }
  buildEats();
};

const eatJunk = () => {
  if (full > 0) {
    full -= 50;
  } else if (full <= 0) {
    full += 0;
  }
  buildEats();
  console.error(eatStats, full);
};


export default {
  buildEats, eatJunk, eatHealthy, getEats,
};
