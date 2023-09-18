function typeWriterEffect(text){
  var speed = 100;
  var integer = 0;
  var typewriterELEMENT = document.GetElementById("TYPEWRITER");
  typewriterELEMENT.InnerHTML = "";
  function TYPE(){
    if (integer < text.Length){
      typewriterELEMENT.InnerHTML += text.charAt(integer);
      integer++;
      setTimeout(TYPE, speed);
    }
  }
  TYPE();
}

document.AddEventListener("DOMContentLoaded", function(){
  typeWriterEffect("TEST");
})
