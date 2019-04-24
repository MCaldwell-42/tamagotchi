import util from '../helpers/util';
import '../../styles/play.scss';

let fun = 50;

const funFunction = (e) => {
  e.preventDefault();
  if (e.target.id === 'super') {
    fun += 50;
    if (fun > 100) {
      fun = 100;
    }
    document.getElementById('funBar').value = fun;
  } else {
    fun += 2;
    if (fun < 0) {
      fun = 0;
    }
    document.getElementById('funBar').value = fun;
  }
};


const funBuilder = () => {
  let domString = '';
  domString += '<div class="quad">';
  domString += '<div class="play">';
  domString += '<h2>Have Fun!<h2/>';
  domString += `<h3>Fun:  <meter id='funBar' value="${fun}" min="0" max="100"></meter></h3>`;
  domString += '<button type="button" id="super">Super Fun!</button>';
  domString += '<button type="button" id="unsuper">Slightly Fun!</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('play', domString);
  document.getElementById('super').addEventListener('click', funFunction);
  document.getElementById('unsuper').addEventListener('click', funFunction);
};

export default {
  funBuilder,
};
