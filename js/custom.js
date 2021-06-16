var $gnb_li = $("#gnb > li");
var $gnb_left = $("#gnb").find(".left");
var $gnb_sub = $("#gnb").find(".sub");

$gnb_li.on("mouseenter ", function () {
  $(this).find(".sub").show();
  $(this).find("a").addClass("on");
});

$gnb_li.on("mouseleave ", function () {
  $(this).find(".sub").hide();
  $(this).find("a").removeClass("on");
  $(this).find(".left ul").animate({marginLeft: 0}, 500);
});

$gnb_sub.on("mouseenter", function(){
  $(this).find(".left ul").animate({marginLeft: "260"}, 700);
});


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
