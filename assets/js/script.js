var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours
document.getElementById("currentDate").innerHTML = today;

$("#saveButton").on("click", function() {
    const list_task = $(this).prev();
    console.log(list_task.find("textarea").val());
    localStorage.setItem("sixAM", list_task);
});



$(".list-group").on("click", "p", function() {
    console.log("<p> was clicked");
    var text = $(this)
        .text()
        .trim()
    var textInput = $("<textarea>")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// if (list_task === time) {
//     $(this).addClass("present");


// }
