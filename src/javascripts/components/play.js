import util from '../helpers/util';


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
  domString += '<div class="title">';
  domString += '<h2>Have Fun!<h2/>';
  domString += '</div>';
  domString += '<h3>fun:</h3>';
  domString += `<meter id='funBar' value="${fun}" min="0" max="100"></meter>`;
  domString += '</div class=buttons>';
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
