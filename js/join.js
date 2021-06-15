
$("input[type=submit]").on("click", function(e){    
  if( !isTxt("userid", 5) ) e.preventDefault();
  if( !isPwd("pwd1", "pwd2", 5) ) e.preventDefault();    
  if( !isTxt("email1") ) e.preventDefault();
  if( !isSelect("email2") ) e.preventDefault();
});

//텍스트 인증 함수 정의
function isTxt(name, len){
  if(len==undefined) len=5;
  var txt = $("[name="+name+"]").val();
  var msg = $("[name="+name+"]").attr("placeholder");

  if(txt==""){
      alert(msg);
      $("[name="+name+"]").addClass("error");
      return false;
  }else{
      if(txt.length < len){
          alert("최소 "+len+"글자 이상 입력하세요!");
          $("[name="+name+"]").addClass("error");
          return false;
      }else {
          $("[name="+name+"]").removeClass("error");
          return true;
      }
  }
}

//비밀번호 인증 함수 정의
function isPwd(name1, name2, len){
  var $pwd1 = $("input[name="+name1+"]");
  var $pwd2 = $("input[name="+name2+"]");
  var pwd1 = $pwd1.val();
  var pwd2 = $pwd2.val();  
  var isConfirm = false;
  var i=0;

  var num = /[0-9]/;
  var eng = /[a-zA-Z]/;
  var spc = /[~!@#$%^&*()_+\]\[-]/;

  if(pwd1 === pwd2){

      //비번이 len의 갯수보다 큰지 확인
      if(pwd1.length >= len){
          i++;
      }else{
          alert("비밀번호는 5자리 이상 입력하세요.");
      }

      //비번에 숫자가 포함되어 있는지 확인
      if( num.test(pwd1) ){
          i++;
      }else {
          alert("비밀번호에 숫자를 포함하세요.");
      }

      //문자가 포함되어 있는지 확인
      if( eng.test(pwd1) ){
          i++;
      }else{
          alert("비밀번호에 문자를 포함하세요.");
      }

      //특수문자가 포함되어 있는지 확인
      if( spc.test(pwd1) ){
          i++;
      }else{
          alert("비밀번호에 특수문자를 포함하세요.");
      }

      if(i===4){
          $pwd1.removeClass("error");
          $pwd2.removeClass("error");
          isConfirm = true;
          return isConfirm;
      }else{
          $pwd1.addClass("error");
          $pwd2.addClass("error");
          return isConfirm;
      }

      
  }else{
      alert("두 개의 비밀번호를 동일하게 입력하세요.")
      $pwd1.addClass("error");
      $pwd2.addClass("error");
      return isConfirm;
  }

  
}

//check 인증 함수 정의
function isCheck(name){
  var isCheck = $("input[name="+name+"]").is(':checked');   

  if(isCheck){
      $("input[name="+name+"]").parent().find("p").hide();
      return true;
  }else{
      $("input[name="+name+"]").parent().find("p").show();
      return false;
  }
}

//select 인증 함수 정의
function isSelect(name){
  var sel = $("select[name="+name+"]").children("option:selected").val();
  var msg = $("select[name="+name+"]").children("option").eq(0).text();

  if(sel == ""){
      alert(msg);
      $("select[name="+name+"]").addClass("error");
      return false;
  }else{
      $("select[name="+name+"]").removeClass("error");
      return true;
  }
}
