const boardElement = document.getElementById("gameboard");
const boardCards = []; //array to hold the 16 card objects
const numberOfCards = 16;
boardElement.innerHTML = "";
for (let i = 0; i < 16; i++) {
  boardElement.innerHTML += `<div class="col-3 board-card flipped">
  <div class="face-container">
    <div class="facedown"></div>
    <div class="faceup"></div>
  </div>
</div>`;
}
function Card(element, color) {
  this.element = element;
  this.color = color;
  this.isFaceup = false;
  this.isMatched = false;
  this.setColor = function(color) {
    //get the faceup div of this card
    if (this.element === undefined) {
    window.alert("undefined card!");
    return;
    };
    const faceUpElement = this.element.getElementsByClassName('faceup')[0];
    //add the new color calss to the list of classes of the faceup div
    faceUpElement.classList.add(color);
  }
}
this.flip = function() {
  this.isFaceup = !this.isFaceup;
  if (this.isFaceup) {
  this.element.classList.add("flipped");
  }
}
function assignColorCard(num) { //for testing only
  //select the first card
  const cardElements = document.getElementById('gameboard').children;
  let theCard = cardElements[num];
  // get a random color 
  let colorIndex = Math.floor(Math.random() * 8 + 1); //generate a random index
  let colorClassName = "color-" + colorIndex; //make the color class name 
  let cardObject = new Card(theCard, colorClassName); //create a Card object 
  cardObject.setColor(colorClassName); //set the color
  cardObject.flip();//flip the card
}
assignColorCard(1); //call the function
