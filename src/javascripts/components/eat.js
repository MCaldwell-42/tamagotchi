import util from '../helpers/util';


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
  domString += '<div class="title">';
  domString += '<h2>Eats<h2/>';
  domString += '</div>';
  domString += '<h3>Fullness:</h3>';
  domString += `<meter id='eatBar' value="${fullness}" min="0" max="100"></meter>`;
  domString += '</div class=buttons>';
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
