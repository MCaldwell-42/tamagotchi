import eats from './eat';
import fights from './fight';
import plays from './play';
import sleeps from './sleep';
import pets from './pet';


const quad1 = () => {
  eats.eatBuilder();
  fights.fightBuilder();
  plays.funBuilder();
  sleeps.energyBuilder();
  pets.petBuilder();
};


export default { quad1 };
