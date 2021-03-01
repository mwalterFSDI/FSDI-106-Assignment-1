function saveToDo(){
     let text = $("#txtToDo").val(); //get the text of the input

    //validations  
    if(text.length<1){
        alert("ToDo text cannot be empty");
        return; //get out of the function 
    }


    $("#txtToDo").val("");

    //create a todo
    var syntax ="<div class='ToDo-item'>" + text + "</div>";

    $(".todo-list").append(syntax);
}

//default, the way of doing things 
function init(){
    console.log("ToDo app");
    //get some initial data

    //hook events

    //enter is keycode 13.
    $("#btnSave").click(saveToDo);
    $("#txtToDo").keypress(function(e){
        console.log("Key Pressed", e);
        if(e.keyCode === 13) {
            saveToDo();
        }
    });
}

window.onload = init;