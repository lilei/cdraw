var toolTip = false;
var unBinder = [];

(function bindKey(){
    var menus = $(".tip");
    for (var i = 0; i < menus.length; i++) {
      var key = String.fromCharCode('a'.charCodeAt() + i);
      (function(k,m){
        keymage("alt-" + k,function(){
          m.click();
          hideToolTip();
          return false;
        });
      })(key,menus[i])
    }
})();

function showToolTip(){
    var menus = $(".tip");
    for (var i = 0; i < menus.length; i++) {
      var key = String.fromCharCode('a'.charCodeAt() + i);
      menus[i].setAttribute("tip",key);
      (function(k,m){
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
    toolTip = false;
}

document.onkeydown = function(event){
  if (event.keyCode == 18) {
    if (!toolTip) {
      showToolTip();
      editor.focus();
    }
    return false;
  }
}

document.onkeyup = function(event){
  if (event.keyCode == 18) {
    if (toolTip) {
      hideToolTip();
      editor.focus();
    } 
    return false;
  }
}

keymage("j",function(){
  var list = $("li.dropdown.open>ul>li>a");
  if (list.length == 0) {
   return; 
  }

  var focus = $("li.dropdown.open>ul>li>a:focus");
  var next = null;
  if (focus.length == 0) {
    next = list.eq(0); 
  }else{
    var cur = jQuery.inArray(focus[0],list.toArray());
    if (cur == list.length -1) {
      next = list.eq(0); 
    }else{
      next = list.eq(cur + 1);
    }
  }
  next.focus();
  return false;
});

keymage("k",function(){
  var list = $("li.dropdown.open>ul>li>a");
  if (list.length == 0) {
   return; 
  }

  var focus = $("li.dropdown.open>ul>li>a:focus");
  var next = null;
  if (focus.length == 0) {
    next = list.eq(-1); 
  }else{
    var cur = jQuery.inArray(focus[0],list.toArray());
    if (cur == 0) {
      next = list.eq(-1); 
    }else{
      next = list.eq(cur - 1);
    }
  }
  next.focus();
  return false;
});
