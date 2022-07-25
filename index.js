function calculate(){
  var height=(document.getElementById("height").value)/100;
  var weight=document.getElementById("weight").value;

  var imc = weight / height ** 2;
  var text = "text"
  if(imc<18.5){
    text="Você está a baixo do peso !"
  } else if(imc<24.9) {
    text="Você está com o peso ideal!"
  } else if(imc<59.9) {
    text="Você está a cima do peso !"
  } else if(imc<39.9) {
    text="Você está com obesidade!"
  } else if(imc>39.9) {
    text="Você está com obesidade mórbida!"
  }
  document.getElementById("text_area").innerText=text
}