import util from '../helpers/util';
import '../../styles/fight.scss';

let strength = 100;

const fightFunction = (e) => {
  e.preventDefault();
  if (e.target.id === 'runAway') {
    strength += 1;
    if (strength > 100) {
      strength = 100;
    }
    document.getElementById('fightBar').value = strength;
  } else {
    strength -= 10;
    if (strength < 0) {
      strength = 0;
    }
    document.getElementById('fightBar').value = strength;
  }
};


const fightBuilder = () => {
  let domString = '';
  domString += '<div class="quad">';
  domString += '<div class="fight">';
  domString += '<h2>Fight!<h2/>';
  domString += `<h3>strength:  <meter id='fightBar' value="${strength}" min="0" max="100"></meter></h3>`;
  domString += '<button type="button" id="runAway">Run Away!</button>';
  domString += '<button type="button" id="violence">Commit Violence!</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('fight', domString);
  document.getElementById('runAway').addEventListener('click', fightFunction);
  document.getElementById('violence').addEventListener('click', fightFunction);
};

export default { fightBuilder };
