function tree(data){
  var ul = document.createElement("ul");
  ul.classList.add("tree");

  var root = dirNode(data.name);
  root.classList.add("tree-node-has-children");
  root.classList.add("tree-node-expand");
  appendLi(ul,root);

  var sub = subTree(data);
  sub.style.display = "inline-block";
  ul.appendChild(sub);
  return ul;
}

function subTree(data){
  var ul = document.createElement("ul");
  ul.classList.add("tree");

  if (data.subDir) {
    for (var i = 0; i < data.subDir.length; i++) {
      var node = dirNode(data.subDir[i].name);
      appendLi(ul,node);

      if (data.subDir[i].fileList || data.subDir[i].subDir) {
        node.classList.add("tree-node-has-children");
        ul.appendChild(subTree(data.subDir[i]));
      }
    }
  }

  if(data.fileList){
    for (var i = 0; i < data.fileList.length; i++) {
      var node = fileNode(data.fileList[i]);
      node.path = data.path + "\\" + data.fileList[i];
      appendLi(ul,node);
    }
  }
  ul.style.display = "none";
  return ul;
}



function appendLi(ul,spanNode){
  var li = document.createElement("li");
  li.appendChild(spanNode);
  ul.appendChild(li);
}


function fileNode(name){
  var node = treeNode(name);
  node.classList.add("tree-node-file");
  //node.addEventListener("onclick", function(){
  node.onclick = function(){
    //this.classList.add("tree-node-active");
    loadCode(node.path);
    //alert(node.path);
  //},false);
}
  return node;
}

function dirNode(name){
  var node = treeNode(name)
  node.classList.add("tree-node-dir");
  //node.addEventListener("onclick", function(){
  node.onclick = function(){
      //this.classList.add("tree-node-active");
      if(!this.classList.contains("tree-node-has-children")){
        return;
      }
      if (this.classList.contains("tree-node-expand")) {
        this.classList.remove("tree-node-expand");
        this.parentElement.nextElementSibling.style.display = "none";
      }else{
        this.classList.add("tree-node-expand");
        this.parentElement.nextElementSibling.style.display = "inline-block";
      }
    }
  //},false)

  return node;
}

function treeNode(name){
  var spanNode = document.createElement("span")
  spanNode.classList.add("tree-node")

  var spanExpander = document.createElement("span");
  spanExpander.classList.add("tree-expander");

  var spanIcon = document.createElement("span");
  spanIcon.classList.add("tree-icon");

  var spanTitle = document.createElement("span");
  spanTitle.classList.add("tree-title");
  spanTitle.innerText = name;

  spanNode.appendChild(spanExpander);
  spanNode.appendChild(spanIcon);
  spanNode.appendChild(spanTitle);

/*
  spanNode.onclick = function(){
    this.classList.add("tree-node-active");
  }
  */
  return spanNode;
}
