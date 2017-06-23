//new-file dialog
function showNewFileDialog(func){
  $('#new-file').modal({
    keyboard: true,
    backdrop: "static"
  });

  $("#btn-create-file").click ( function(){
    hideNewFileDialog();
    func($("input:radio[name='file-type']:checked").val());
    //alert($("input:radio[name='file-type']:checked").val());
  })
}

function hideNewFileDialog(){
  $('#new-file').modal("hide");
}
