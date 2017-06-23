var cef = {};

cef.openFile = function(){
  window.browseFolder();
  window.setMessageCallback("browseFolder", function(name, codeFile){
    loadCode(codeFile);
  });
}

cef.saveAs = function(){
  window.saveAs();
  window.setMessageCallback("saveAs", function(name, codeFile){
    if (codeFile != "") {
      document.codeFile = codeFile;
      drawDot();
    }
    //alert(codeFile);
    //loadCode(codeFile);
  });
}

cef.title = function(fileName){
  document.title = "codeDraw " + fileName;
}
