function addItemToList()
{
    var text = document.getElementById("addText").value;
    if(text != "")
    {
        document.getElementById("items").innerHTML += "<div class='toDoListItem'>" + text + "</div>";
        document.getElementById("addText").value = "";
    }
    else
    {
        alert("Input can't be empty.");
    }
}