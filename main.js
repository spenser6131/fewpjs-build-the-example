const modal = document.getElementById("modal")
const modalMessage = document.getElementById("modal-message")
const hearts = document.getElementsByClassName("like-glyph")

let heartStates = {
  '♡': '♥',
  '♥': '♡'
};

let colorStates = {
  "": "red",
  "red" : ""
};


for(const heart of hearts) {
  heart.addEventListener("click", likeFx)
}

function likeFx(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
    .then(function(){
       heart.innerText = heartStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      modalMessage.innerText = error;
      modal.className = "";
      setTimeout(function(){
        modal.className = "hidden"
      }, 5000)
    });
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
