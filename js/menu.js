const toggleTag = document.querySelector("a.toggle-nav");
const mainTag = document.querySelector("main");
const navTag = document.querySelector("nav");

// when I click the toggle-tag, toggle a class of open on the mainTag 
// and if it‘s open, make the toggle tag say closed 
// and if not, make the toggle tag say open
toggleTag.addEventListener("click", function() {
  mainTag.classList.toggle("open");
  navTag.classList.toggle("open");
  
  if( mainTag.classList.contains("open") ) {
     toggleTag.innerHTML = `<img src="img/close.svg"> Close`;
     } else {
       toggleTag.innerHTML = `<img src="img/menu.svg"> Menu`;
     }
})