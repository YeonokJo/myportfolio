var $gnb = $("#gnb");
var $gnb_li = $("#gnb > li");
var $gnb_left = $("#gnb").find(".left");
var $gnb_sub = $("#gnb").find(".sub");

$gnb_li.on("mouseenter ", function () {
  $(this).find(".sub").show();
  $(this).find("a").addClass("on");
  // $(this).find(".left ul").animate({marginLeft: "260"}, 700);
});

$gnb_li.on("mouseleave ", function () {
  $(this).find(".sub").hide();
  $(this).find("a").removeClass("on");
  
  // $(this).find(".left ul").animate({marginLeft: 0}, 500);
});

$gnb_sub.on("mouseenter", function(){
  // $(this).find(".left ul").animate({marginLeft: "260"}, 800);
  $(this).find(".left-img").addClass("on");
});

$gnb_li.on("mouseleave", function(){
  // $(this).find(".left ul").animate({marginLeft: 0});
  $(this).find(".left-img").removeClass("on");
});

// $gnb_sub.on("mouseleave", function(){
//   $(this).find(".left ul").animate({marginLeft: 0}, 700);
// });


//gnb_li의 갯수만큼 반복을 돌면서 이벤트 연결
$gnb_li.each(function (index) {

  //gnb_li의 (index)번째 요소에 foucsin이벤트 연결
  $gnb_li.eq(index).find("a").first().on("focusin", function () {
    $gnb_li.eq(index).find(".sub").show();
  });

  //gnb_li의 (index)번째 요소에 focusout이벤트 연결
  $gnb_li.eq(index).find("a").last().on("focusout", function () {
    $gnb_li.eq(index).find(".sub").hide();
  });
});

const btnCall = document.querySelector('.btnCall');
const menuMo = document.querySelector('.menuMo');

// btnCall.addEventListener('click', e => {
//   menuMo.classList.toggle('on')
// })
btnCall.onclick = function () {
  // menuMo.style.position = "sticky";
  menuMo.classList.toggle("on");

}

window.onresize = function(e){ 
  let wid = window.innerWidth; 

  if(wid>=1180){ 
    menuMo.classList.remove("on"); 
  }
}

const items = document.querySelectorAll('.process li');
const aside = document.querySelector('aside');
const close = aside.querySelector('span');

for (let el of items) {
    el.addEventListener('mouseenter', e => {
        e.currentTarget.querySelector('a').style.display = "block";
      });

      el.addEventListener('mouseleave', e => {
        e.currentTarget.querySelector('a').style.display = "none";
      });

    el.addEventListener('click', e => {
      e.preventDefault();
      const tit = e.currentTarget.querySelector('h2').innerText;
      const txt = e.currentTarget.querySelector('p').innerText;
  
      aside.querySelector('h2').innerText = tit;
      aside.querySelector('p').innerText = txt;

      aside.classList.add('on');
    });
  }

close.addEventListener('click', e => {
  aside.classList.remove('on');
})  
