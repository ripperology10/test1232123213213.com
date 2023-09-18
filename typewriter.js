function typeWriterEffect(text){
  var speed = 100;
  var integer = 0;
  var typewriterELEMENT = document.getElementById("TYPEWRITER");
  typewriterELEMENT.innerHTML = "";
  function TYPE(){
    if (integer < text.length){
      typewriterELEMENT.innerHTML += text.charAt(integer);
      integer++;
      setTimeout(TYPE, speed);
    }
  }
  TYPE();
}

document.addEventListener("DOMContentLoaded", function(){
  typeWriterEffect("TEST");
})
