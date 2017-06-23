//graphviz菜单

var graphvizMenu = {
  direct  :{icon:"fa fa-arrows"         ,title:"方向"},
  lable   :{icon:"fa fa-text-width"     ,title:"文本"},
  font    :{icon:"fa fa-font"           ,title:"字体"},
  subgraph:{icon:"fa fa-object-group"   ,title:"子图"},
  bgcolor :{icon:"fa fa-paint-brush"    ,title:"背景"},
  shape   :{icon:"fa fa-square"         ,title:"形状"},
  style   :{icon:"fa fa-window-minimize",title:"线条"},
  arrow   :{icon:"fa fa-arrow-right"    ,title:"箭头"},
};

graphvizMenu.direct.sub = {
  left     :{icon:"fa fa-hand-o-left"  ,title:"向左",  showTitle:true},
  right    :{icon:"fa fa-hand-o-right" ,title:"向右",  showTitle:true},
  up       :{icon:"fa fa-hand-o-up"    ,title:"向上",  showTitle:true},
  down     :{icon:"fa fa-hand-o-down"  ,title:"向下",  showTitle:true},
}

graphvizMenu.font.sub = {
  song     :{icon:"fa fa-text-height"  ,title:"宋体"          ,showTitle:true},
  yahei    :{icon:"fa fa-text-height"  ,title:"微软雅黑"      ,showTitle:true},
  inco     :{icon:"fa fa-text-height"  ,title:"Inconsolata"  ,showTitle:true},
  consolas :{icon:"fa fa-text-height"  ,title:"Consolas"     ,showTitle:true},
}

graphvizMenu.bgcolor.sub = {
  red     :{icon:"fa fa-square red"      ,title:"red"          ,showTitle:true},
  black   :{icon:"fa fa-square black"    ,title:"black"        ,showTitle:true},
  yellow  :{icon:"fa fa-square yellow"   ,title:"yellow"       ,showTitle:true},
  blue    :{icon:"fa fa-square blue"     ,title:"blue"         ,showTitle:true},
}

graphvizMenu.shape.sub = {
  box       :{icon:"fa fa-square-o"             ,title:"矩形"    ,showTitle:true},
  egg       :{icon:"fa fa-square-o"             ,title:"蛋形"    ,showTitle:true},
  circle    :{icon:"fa fa-circle-o"             ,title:"圆形"    ,showTitle:true},
  triangle  :{icon:"fa fa-exclamation-triangle" ,title:"三角形"  ,showTitle:true},
  diamond   :{icon:"fa fa-diamond"              ,title:"菱形"    ,showTitle:true},
  trapezium :{icon:"fa fa-square-o"             ,title:"梯形"    ,showTitle:true}
}

graphvizMenu.style.sub = {
  solid       :{icon:"fa fa-window-minimize"  ,title:"solid"    ,showTitle:true},
  dotted      :{icon:"fa fa-ellipsis-h "      ,title:"dotted"   ,showTitle:true}
}

graphvizMenu.arrow.sub = {
  forward    :{icon:"fa fa-arrow-right"     ,title:"向前"    ,showTitle:true},
  back       :{icon:"fa fa-arrow-left"      ,title:"向后"    ,showTitle:true},
  both       :{icon:"fa fa-arrows-h"        ,title:"双向"    ,showTitle:true},
  none       :{icon:"fa fa-window-minimize" ,title:"无"      ,showTitle:true}
}


menuBar(graphvizMenu);
