
ace.require("ace/ext/language_tools");
var editor = ace.edit("editor");
editor.setTheme("ace/theme/github");
editor.getSession().setMode("ace/mode/dot");
editor.setShowPrintMargin(false);
document.getElementById('editor').style.fontSize='14px';
document.lock = false;

editor.setOptions({
    enableBasicAutocompletion: true,
    enableSnippets: true,
    enableLiveAutocompletion: false
});

var queryString = document.location.search;
var re = /\?codefile=(.*)/g;
var codeFile = "";
if (re.test(queryString)) {
  codeFile = queryString.replace(re,"$1");
}

/*
clientGet("/api/code?name=" + codeFile,
  function(data){
      var file = JSON.parse(data)
      editor.setValue(file.Content);
  },
  function(){
      alert("error");
  }
);
*/

clientGet("/api/dirtree",
  function(data){
      var dirTree = JSON.parse(data)
      var slider = document.getElementById("slider");
      slider.appendChild(tree(dirTree));
  },
  function(){
      alert("error");
  }
);

var render = document.getElementById("render");
//render.innerHTML = marked(editor.getValue());
editor.session.on('change', function(e) {
  //防止加载一半的情况
  if(document.lock == true){
      return;
  }else{
    drawDot();
  }
});
