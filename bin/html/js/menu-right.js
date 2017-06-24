//右部菜单
var rightMenu = {
  config  :{icon:"fa fa-gear"        ,title:"设置"},
};


rightMenu.config.sub = {
  common     :{icon:"fa fa-pencil"        ,title:"普通模式",  showTitle:true},
  vim        :{icon:"fa fa-pencil-square" ,title:"vim模式",  showTitle:true},
  issue      :{icon:"fa fa-github"        ,title:"报告缺陷",  showTitle:true},
}

rightMenu.config.sub.common.func = function(){
  editor.setKeyboardHandler("");
  editor.focus();
}

rightMenu.config.sub.vim.func = function(){
  editor.setKeyboardHandler("ace/keyboard/vim");
  editor.focus();
}

rightMenu.config.sub.issue.func = function(){
  window.open("https://github.com/lilei/cdraw/issues","_blank")
}

rightMenuBar(rightMenu);