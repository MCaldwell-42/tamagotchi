import util from '../helpers/util';
import pet from '../../../pet/dino.gif';

import '../../styles/pet.scss';

const petBuilder = () => {
  let domString = '';
  domString += '<div class="pet">';
  domString += `<img src=${pet}></img>`;
  domString += '</div>';
  util.printToDom('pet', domString);
};

export default { petBuilder };
