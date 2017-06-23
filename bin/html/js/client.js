

function clientGet(uri,success,error){
  $.get(uri,function(data,status){
      if (status == "success"){
        success(data);
      }else{
        error();
      }
    });
}

function clientPut(uri,request,success,error){
  $.ajax({url:uri,type:"PUT",data:request,
    success:function(response){
       success(response);
    },
   error:function(){
     error();
  }});
}

function clientPost(uri,request,success,error){
  $.ajax({url:uri,type:"POST",data:request,
    success:function(response){
       success(response);
    },
   error:function(){
     error();
  }});
}


function clientDot(codePath,codeContent,success,error){
  clientPost("/api/graph/dot?codeFile=" + codePath,codeContent,success,error);
}

function clientGetFile(fileName,success,error){
    clientGet("/api/code?name=" + fileName,success,error);
}
