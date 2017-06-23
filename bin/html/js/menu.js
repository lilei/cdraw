
function menuBar(menuList){
  for (var btn in menuList) {
    if (menuList.hasOwnProperty(btn)) {
      appendMenu(menuList[btn]);
    }
  }
}


function createMenu(menuInfo){
    var li = document.createElement("li");
    var a = document.createElement("a");
    var i = document.createElement("i");
    li.appendChild(a);
    a.appendChild(i);

    i.className = menuInfo.icon;

    if (menuInfo.showTitle) {
      var span = document.createElement("span");
      span.innerText = menuInfo.title;
      a.appendChild(span);
    }else{
      a.classList.add("tip");
      a.title = menuInfo.title;
    }

    a.href = "#";
    li.title = menuInfo.title;

    li.onclick = menuInfo.func;

    if (menuInfo.sub) {
      dropDownMenu(li);

      for (var btn in menuInfo.sub) {
        if (menuInfo.sub.hasOwnProperty(btn)){
          li.appendMenu(menuInfo.sub[btn]);
          }
        }
      }
    return li;
}

function dropDownMenu(li){
  var a = li.getElementsByTagName("a")[0];
  var i = li.getElementsByTagName("i")[0];
  var span = document.createElement("span");
  var ul = document.createElement("ul");
  a.appendChild(span);
  li.appendChild(ul);

  li.className = "dropdown";

  a.classList.add("dropdown-toggle");
  //a.className = "dropdown-toggle";
  a.setAttribute("data-toggle","dropdown");
  a.setAttribute("role","button");
  a.setAttribute("aria-expanded","false");

  span.className = "caret";

  ul.className = "dropdown-menu";
  ul.setAttribute("role","menu");

  li.appendMenu = function(menuInfo){
    ul.appendChild(createMenu(menuInfo));
  }
}

function appendMenu(menuInfo){
  var menu = createMenu(menuInfo);
  var menuBar = document.getElementById("menu-bar");
  menuBar.appendChild(menu);
}

/*

//粗体
addCommand("#btn-bold",
        "Ctrl-B",
        "粗体",
        function(){
            var range = editor.getSelectionRange();
            var text = editor.session.getTextRange(range);
            editor.session.insert(range.end,"**");
            editor.session.insert(range.start,"**");
        }
);

//斜体
addCommand("#btn-em",
        "Ctrl-E",
        "斜体",
        function(){
            var range = editor.getSelectionRange();
            var text = editor.session.getTextRange(range);
            editor.session.insert(range.end,"*");
            editor.session.insert(range.start,"*");
        }
);

//插入链接
addCommand("#btn-link",
        "Ctrl-L",
        "插入链接",
        function(){
            $('#link-modal').modal({
              keyboard: true
            });
        }
);

$('#link-modal').on('shown.bs.modal', function (e) {
    $('#link-input').focus();
})

$('#link-modal').on('hidden.bs.modal', function (e) {
    editor.focus();
})

//插入链接
addCommand("#btn-code",
        "Ctrl-K",
        "代码样例",
        function(){
            var range = editor.getSelectionRange();
            var text = editor.session.getTextRange(range);
            editor.session.insert(range.end,"`");
            editor.session.insert(range.start,"`");
        }
);

//VIM模式
addCommand("#btn-vim-mod",
        "Esc",
        "VIM模式",
        function(){
            editor.setKeyboardHandler("ace/keyboard/vim");
            editor.focus();
        }
);

//普通模式
addCommand("#btn-normal-mod",
        "Ctrl-N",
        "普通模式",
        function(){
            editor.setKeyboardHandler("");
            editor.focus();
        }
);

//新建文档
addCommand("#btn-open",
        "Ctrl-O",
        "打开",
        function(){
g          //$("#files").click();
          openFile();
        }
);
*/


//同步滚动
editor.getSession().on("changeScrollTop", function(num){
    var left = $(".ace_scrollbar-v").get(0);
    var right = $("#render").get(0);
    percentage = num / (left.scrollHeight - left.offsetHeight);
    right.scrollTop = Math.round(percentage * (right.scrollHeight - right.offsetHeight));
    //$("#render").scrollTop(top);
});

editor.getSession().setUseWrapMode(true);

var dragging = false;
var iX, iY;
$("#mahua-spliter").mousedown(function(e) {
    dragging = true;
    iX = e.clientX - this.offsetLeft;
    this.setCapture && this.setCapture();
    return false;
});
document.onmousemove = function(e) {
    if (dragging) {
        var e = e || window.event;
        var a = $("#mahua-spliter").css("left");
        $("#editor").css("width", a);
        $("#render").css("width", $(window).innerWidth() - parseInt(a));
        $("#render").css("marginLeft", a);
        var oX = e.clientX - iX;
        $("#mahua-spliter").css({"left":oX + "px"});
        return false;
    }
};
$(document).mouseup(function(e) {
    if(dragging){
        dragging = false;
        editor.resize();
        $("#mahua-spliter")[0].releaseCapture();
        e.cancelBubble = true;
    }
})
