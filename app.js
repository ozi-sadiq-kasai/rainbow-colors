const button =  document.querySelector('button');
const card = document.querySelector('#wrapper')
let count = 0;
button.addEventListener('click', colorChange)

function colorChange(){
  let colors =['red','orange','yellow','green','blue','indigo','violet'];
  card.style.background = colors[count++];
  if(count > colors.length -1){
    count = 0;
  }
}