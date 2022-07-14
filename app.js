var circle = document.getElementById('circle');
var upBtn = document.getElementById('upBtn');

var rotateValue = circle.style.transform;
var rotateSum;
upBtn.onclick = ()=>{
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
}