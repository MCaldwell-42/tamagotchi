import util from '../helpers/util';
import '../../styles/sleep.scss';

let energy = 50;

const energyFunction = (e) => {
  e.preventDefault();
  if (e.target.id === 'nap') {
    energy += 50;
    if (energy > 100) {
      energy = 100;
    }
    document.getElementById('energyBar').value = energy;
  } else {
    energy += 60;
    if (energy < 0) {
      energy += 60;
    }
    document.getElementById('energyBar').value = energy;
  }
};


const energyBuilder = () => {
  let domString = '';
  domString += '<div class="quad">';
  domString += '<div class="sleep">';
  domString += '<h2>Sleep!<h2/>';
  domString += `<h3>Energy:  <meter id='energyBar' value="${energy}" min="0" max="100"></meter></h3>`;
  domString += '<button type="button" id="nap">Nap!</button>';
  domString += '<button type="button" id="slumber">Deep Slumber!</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  document.getElementById('nap').addEventListener('click', energyFunction);
  document.getElementById('slumber').addEventListener('click', energyFunction);
};

export default {
  energyBuilder,
};
