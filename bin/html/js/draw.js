

function loadCode(filePath/*,success*/){
  clientGetFile(filePath,
      function(data){
        if(!data){
          return;
        }
        try {
          var file = JSON.parse(data);
        } catch (e) {
          alert("parse json error");
        }
        document.codeFile = filePath;
        document.lock = true;
        editor.session.setValue(file.Content);
        document.lock = false;
        drawDot();
          /*
          if(success){
            success();
          }
          */
      },
      function(){
          alert("error");
      }
    )
}

function drawDot(){
  if(!document.codeFile){
    alert("no current code file!");
    return;
  }
  clientDot(document.codeFile,editor.getValue(),
  function(data){
    render.innerHTML = data;
  },
  function(){
    alert("dot error");
  });
}
