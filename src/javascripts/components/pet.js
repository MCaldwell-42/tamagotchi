import util from '../helpers/util';
import '../../styles/pet.scss';

const petBuilder = () => {
  let domString = '';
  domString += '<div class="pet">';
  domString += '<img src= "../../../pet/dino.gif"></img>';
  domString += '</div>';
  util.printToDom('pet', domString);
};

export default { petBuilder };
