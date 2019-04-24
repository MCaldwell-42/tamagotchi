import util from '../helpers/util';
import '../../styles/eat.scss';

let fullness = 100;

const eatFunction = (e) => {
  e.preventDefault();
  if (e.target.id === 'healthy') {
    fullness += 10;
    if (fullness > 100) {
      fullness = 100;
    }
    document.getElementById('eatBar').value = fullness;
  } else {
    fullness -= 3;
    if (fullness < 0) {
      fullness = 0;
    }
    document.getElementById('eatBar').value = fullness;
  }
};


const eatBuilder = () => {
  let domString = '';
  domString += '<div class="quad">';
  domString += '<div class="eat">';
  domString += '<h2>Eats!<h2/>';
  domString += `<h3>Fullness:  <meter id='eatBar' value="${fullness}" min="0" max="100"></meter></h3>`;
  domString += '<button type="button" id="healthy">Give Apples!</button>';
  domString += '<button type="button" id="unhealthy">Give Funions!</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('eat', domString);
  document.getElementById('healthy').addEventListener('click', eatFunction);
  document.getElementById('unhealthy').addEventListener('click', eatFunction);
};

export default {
  eatBuilder,
};
