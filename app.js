const typing_header = document.querySelector(".hero-text h1");
const just_text = typing_header.textContent;
let index = 0;
let removing = false;

setInterval(() => {
  if (removing) {
    index--;
  } else {
    index++;
  }

  if (index === just_text.length) removing = true;
  if (index === 0) removing = false;
  typing_header.textContent = just_text.slice(0, index);
}, 70);

function setint(a,b){
  return a+b
}

console.log(setint);