const $imgs = document.querySelectorAll(".div-tree span");

for (const img of $imgs) {
  let txt = img.textContent; 
  img.addEventListener('mouseover', function(){
    img.classList.add('on');
    this.style.color = 'transparent';
  }, 1000)
  
  img.addEventListener('mouseout', function(){
    img.classList.remove('on');
    this.style.color = '#000';
  }, 1000)
}