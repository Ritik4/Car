let myImg=document.querySelector('img');
myImg.onclick = function(){
let mySrc = myImg.getAttribute('src');
if(mySrc === 'images/carlogo.jpg')
{
myImg.setAttribute('src','images/carlogo2.jpg');
}
else
{
myImg.setAttribute('src','images/carlogo.jpg');
}
}

let myHeading= document.querySelector('h1');
let myButton= document.querySelector('button');

myButton.onclick=function setUserName(){
let myName=prompt('ENTER YOUR NAME');
localStorage.setItem('name',myName);
myHeading.textContent='Carbecho  ' + myName;
}