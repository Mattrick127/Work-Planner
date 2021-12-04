var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("currentDate").innerHTML = today;
var time = today.getHours

$("#saveButton").on("click", function() {
    const list_task = $(this).prev();
    console.log(list_task.find("textarea"));
    console.log()
})


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};
