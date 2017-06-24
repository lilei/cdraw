
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

editor.newFile = function(fileType){
  if (fileType == "graphviz") {
    document.codeFile = "untitled";
    editor.session.setValue(graphviz.new());
  }
}
