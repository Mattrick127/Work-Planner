var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("currentDate").innerHTML = today;
var textArea = document.querySelector(".description1")
var buttons = document.querySelector(".saveBtn")
var setHour = today.getHours
const rows = document.getElementsByClassName(".row");

$(".saveBtn").on("click", "textarea", function() {
    console.log(rows)
    var text = $(this)
        .text()
        .trim()
    var textInput = $("<textarea>")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    localStorage.setItem("1", textInput)
});

var saveLocalStorage = function () {
    var textArea1 = textArea.value
    console.log(textArea1)
    localStorage.setItem("1", textArea1)
}

var loadLocalStorage = function () {
    var loadTextInput = localStorage.getItem("1");
    $(".description1").text(loadTextInput)
}
// $(".saveBtn").on("click", function() {
//     const list_task = $(this).prev();
//     const textAreaIndex = list_task.data('hour');
//     localStorage.setItem(textAreaIndex, list_task.val());
    //.,getItem(1)
    //compare the above with the current hour (use momentum to get the current hour)
    //if equal to current hour, apply current hour css to task
// });
buttons.addEventListener("click", saveLocalStorage)
loadLocalStorage();