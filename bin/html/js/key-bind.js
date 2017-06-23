var toolTip = false;
var unBinder = [];
function unBind(){
  for (var i = 0; i < unBinder.length; i++) {
    unBinder[i]();
  };
}

function showToolTip(){
    var menus = $(".tip");
    for (var i = 0; i < menus.length; i++) {
      var key = String.fromCharCode('a'.charCodeAt() + i);
      menus[i].setAttribute("tip",key);
      (function(k,m){
        unBinder.push(keymage(k,function(){
          hideToolTip();
          m.click();
          return false;
        }));
        m.display = m.title;
        m.setAttribute("display",m.title);
      })(key,menus[i])
  }

    toolTip = true;
}

function hideToolTip(){
    var menus = $(".tip");
    for (var i = 0; i < menus.length; i++) {
      menus[i].setAttribute("tip","");
      menus[i].setAttribute("display","");
    }
    unBind();
    toolTip = false;
}

document.onkeydown = function(event){
  if (event.keyCode == 18) {
    if (toolTip) {
      hideToolTip();
    }else{
      showToolTip();
    }
    return false;
  }
}

function test() {
     var pAry = document.getElementsByTagName("p");
     for( var i=0; i< pAry.length; i++ ) {
      (
      function(arg){
       pAry[i].onclick = function() {
          alert(arg);
       };
      }
    )(i);//调用时参数
    }
 }
