let mode = localStorage.getItem("mode");
let body = document.body;
let title = document.querySelector('.title');
let btLD = document.querySelector('#bt-ld');
let img1 = document.querySelector('#light-dark');
let message = document.querySelector('.message');

checkImg();
check();

btLD.addEventListener("click", function (){
  if (mode === 1) {
    mode = 0;
    localStorage.setItem("mode", 0)
  } else{
    mode = 1;
    localStorage.setItem("mode", 1)
  }
  checkImg();
  check();
})

function checkImg() {
  console.log(mode);
  if(mode === 1) img1.src = "dark.png";
  else img1.src = "light.png";
}
function check() {
  if(mode === 1){
    body.style.backgroundColor = "rgb(220, 245, 255)";

    title.style.color = "black";
    message.style.color = 'black';
    img1.style.width = '30px';
  }else{
    body.style.backgroundColor = "#202124";

    title.style.color = "white";
    message.style.color = 'white';
    img1.style.width = '35px';
  }
}