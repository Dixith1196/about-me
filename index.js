function temperatureConverter() {
    valNum = document.getElementById("tempInput").value
    console.log(parseInt(valNum),"valueeeee")
    document.getElementById("outputCelsius").innerHTML =  (valNum-32) / 1.8;
    event.preventDefault()
  }


function storeContact(){
  var email = document.getElementById("emailInput").value;
  var subject = document.getElementById("subjectInput").value;
  var desc = document.getElementById("descInput").value;
  if(email || subject || desc != ""){
      localStorage.setItem("email", email);
      localStorage.setItem("subject", subject);
      localStorage.setItem("desc", desc);
  }
}