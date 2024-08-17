let popup = document.getElementById("popup");
let popupShown = localStorage.getItem("popupShown");

function closePopup() {
    localStorage.setItem("popupShown", "false");
    popup.style.display = "none";
    setTimeout(() => {
        popup.style.display = "block";
        localStorage.setItem("popupShown", "true");
    }, 5000);
}


  window.onload = function(){
    if(localStorage.getItem("popupShown") == undefined){
        localStorage.setItem("popupShown", "true")
    }
    if(localStorage.getItem("popupShown") == "true"){
        popup.style.display = "block";
    }
    else if(localStorage.getItem("popupShown") == "false"){
        popup.style.display = "none";
    }
  }

  