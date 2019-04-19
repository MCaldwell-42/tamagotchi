import eats from './eat';

const quad1 = () => {
  eats.buildEats();
  document.getElementById('healthy').addEventListener('click', eats.eatHealthy);
  document.getElementById('unhealthy').addEventListener('click', eats.eatJunk);
};


export default { quad1 };
