let treasureX = Math.floor(Math.random() * 400 + 50);
let treasureY = Math.floor(Math.random() * 400 + 50);
let hints = document.getElementsByTagName("h2")[0];
let mapImg = document.getElementsByClassName("map")[0];
let treasureImg = document.getElementsByClassName("treasure")[0];
let counter = 0;
function map(event) {
  let pirateX = event.offsetX - 20;
  let pirateY = event.offsetY - 40;
  let dist = Math.sqrt(Math.pow(pirateX - treasureX, 2) + Math.pow(pirateY - treasureY, 2))
  document.getElementsByClassName("pirate")[0].style.top = pirateY + "px"
  document.getElementsByClassName("pirate")[0].style.left = pirateX + "px"
  counter++;

  if (dist < 20) {
    hints.innerHTML = "you found the treasure"
    mapImg.style.pointerEvents = "none"
    mapImg.style.offsetX = 0
    mapImg.style.offsetY = 0
    treasureImg.style.transform = "translate(-50%, -50%) scale(1) rotate(1080deg)"
    treasureImg.style.opacity = 1
    setTimeout(() => {
      hints.innerHTML = `moves needed: ${counter}`
    }, 2000);
  }
    else if (dist < 35) hints.innerHTML = "boiling lava"
    else if (dist < 60) hints.innerHTML = "hot"
    else if (dist < 100) hints.innerHTML = "warm"
    else if (dist < 150) hints.innerHTML = "windy"
    else if (dist < 200) hints.innerHTML = "cold"
    else if (dist < 250) hints.innerHTML = "freezing" 
    else if (dist < 350) hints.innerHTML = "north pole"
    else hints.innerHTML = "ice age"
  
}

function startNewGame() {
  treasureX = Math.floor(Math.random() * 400 + 50);
  treasureY = Math.floor(Math.random() * 400 + 50);
  dist = Math.sqrt(Math.pow(treasureX, 2) + Math.pow(treasureY, 2))
  console.log(dist)
  hints.innerHTML = "GOOD LUCK"
  document.getElementsByClassName("pirate")[0].style.left = 45 + "px"
  document.getElementsByClassName("pirate")[0].style.top = 45 + "px"
  document.querySelector("map")
  treasureImg.style.opacity = 0
  mapImg.style.pointerEvents = "auto";
  counter = 0;
}
