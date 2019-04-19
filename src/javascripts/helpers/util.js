
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (quadrant) => {
  let domString = '';
  domString += '<div class="quad">';
  domString += '<div class="title">';
  domString += `<h2>${quadrant.name}<h2/>`;
  domString += '</div>';
  domString += `<h3>${quadrant.meter}</h3>`;
  domString += `<meter value="${quadrant.score}" min="0" max="100"></meter>`;
  domString += '</div class=buttons>';
  domString += `${quadrant.button1}`;
  domString += `${quadrant.button2}`;
  domString += '</div>';
  domString += '</div>';
  printToDom(quadrant.divId, domString);
};

export default { printToDom, domStringBuilder };
