//通用菜单
var commonMenu = {
  slider  :{icon:"fa fa-sliders"        ,title:"目录"},
  open    :{icon:"fa fa-folder-open-o"  ,title:"打开"},
  new     :{icon:"fa fa-file-o"         ,title:"新建"},
  save    :{icon:"fa fa-save"           ,title:"保存"},
  undo    :{icon:"fa fa-undo"           ,title:"撤销"},
  redo    :{icon:"fa fa-repeat"         ,title:"重做"},
};


commonMenu.slider.func = function(){
  if ($("#slider").get(0).style.display == "none") {
      $("#slider").show();
      $("#left").css("paddingLeft",250);
      $("#editor").css("width",$("#editor").get(0).offsetWidth - 250);
  }else{
      $("#slider").css("display","none");
      $("#left").css("paddingLeft",0);
      $("#editor").css("width",$("#editor").get(0).offsetWidth + 250);
  }
}

commonMenu.open.func = function(){
  cef.openFile();
}

commonMenu.new.func = function(){
  showNewFileDialog(function(fileType){
    document.codeFile = "untitled";
    editor.newFile(fileType);
  });
}

commonMenu.save.func = function(){
  if (document.codeFile != "untitled") {
    return;
  }
  cef.saveAs();
}

commonMenu.undo.func = function(){
  editor.undo();
}

commonMenu.redo.func = function(){
  editor.redo();
}

menuBar(commonMenu);
