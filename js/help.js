var $frame = $('.right');
var $btns = $frame.find('dt');
var $boxs = $frame.find('dd');
var speed = 500;
var enableClick = true; 

$btns.on('click', function(e){
  e.preventDefault(); 

  if(enableClick) {
    activation(this);
    enableClick = false;
  }
});

function activation(btn){
  var isOn = $(btn).hasClass('on');

  if(isOn) { 
    $(btn).removeClass('on'); 
    $(btn).next('dd').slideUp(speed, function(){
      enableClick = true;
    }); 
  } else { 
    $btns.removeClass('on'); 
    $boxs.slideUp(speed); 
    $(btn).addClass('on'); 
    $(btn).next('dd').slideDown(speed, function(){
      enableClick = true;
    }); 
  }
}