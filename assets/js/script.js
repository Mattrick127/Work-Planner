var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("currentDate").innerHTML = today;

// var tasks = {};
// var createTask = function(taskText, taskDate, taskList) {

//     // Create elements that make a task.
//     var taskLi = $("<li>").addClass("list-group-item");
//     var taskSpan = $("<span>")
//         .text(taskDate);
//     var taskP = $("<p>")
//         .text(taskText);
//     // Append span and p element to parent li
//     taskLi.append(taskSpan, taskP);

//     // Append to UL list on the page.
//     $("#list-" + taskList).append(taskLi);
// };

// var loadTasks = function() {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     //If there is nothing to find, create a new object
//     if (!tasks) {
//         tasks = {
            
//         }
//     }
// };

var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};


//Load tasks for next time
loadTasks();