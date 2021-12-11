var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.getElementById("currentDate").innerHTML = today;

var setHour = today.getHours
var textArea = document.querySelector(".description1")
var buttons = document.querySelector(".saveBtn")
const rows = document.getElementsByClassName(".row");

$(".saveBtn").on("click", "textarea", function() {
    var text = $(this)
        .text()
        .trim()
    var textInput = $("<textarea>")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
    localStorage.setItem("1:00", textInput)
});

var saveLocalStorage = function () {
    var textArea1 = textArea.value
    console.log(textArea1)
    localStorage.setItem("1:00", textArea1)
    
}

var loadLocalStorage = function () {
    var loadTextInput1 = localStorage.getItem("1:00");
        $(".description1").text(loadTextInput1)
    // var loadTextInput2 = localStorage.getItem("2");
    //     $(".description2").text(loadTextInput2)
        // var loadTextInput3 = localStorage.getItem("3");
        // $(".description3").text(loadTextInput3)
        // var loadTextInput4 = localStorage.getItem("4");
        // $(".description4").text(loadTextInput4)
        // var loadTextInput5 = localStorage.getItem("5");
        // $(".description5").text(loadTextInput5)
        // var loadTextInput6 = localStorage.getItem("6");
        // $(".description6").text(loadTextInput6)
        // var loadTextInput7 = localStorage.getItem("7");
        // $(".description7").text(loadTextInput7)
        // var loadTextInput8 = localStorage.getItem("8");
        // $(".description8").text(loadTextInput8)
        // var loadTextInput9 = localStorage.getItem("9");
        // $(".description9").text(loadTextInput9)
        // var loadTextInput10 = localStorage.getItem("10");
        // $(".description10").text(loadTextInput10)
        // var loadTextInput11 = localStorage.getItem("11");
        // $(".description11").text(loadTextInput11)
        // var loadTextInput12 = localStorage.getItem("12");
        // $(".description12").text(loadTextInput12)
        // var loadTextInput13 = localStorage.getItem("13");
        // $(".description13").text(loadTextInput13)
        // var loadTextInput14 = localStorage.getItem("14");
        // $(".description14").text(loadTextInput14)
        // var loadTextInput15 = localStorage.getItem("15");
        // $(".description15").text(loadTextInput15)
        // var loadTextInput16 = localStorage.getItem("16");
        // $(".description16").text(loadTextInput16)
        // var loadTextInput17 = localStorage.getItem("17");
        // $(".description17").text(loadTextInput17)
        // var loadTextInput18 = localStorage.getItem("18");
        // $(".description18").text(loadTextInput18)
        // var loadTextInput19 = localStorage.getItem("19");
        // $(".description19").text(loadTextInput19)
        // var loadTextInput20 = localStorage.getItem("20");
        // $(".description20").text(loadTextInput20)
        // var loadTextInput21 = localStorage.getItem("21");
        // $(".description21").text(loadTextInput21)
        // var loadTextInput22 = localStorage.getItem("22");
        // $(".description22").text(loadTextInput22)
        // var loadTextInput23 = localStorage.getItem("23");
        // $(".description23").text(loadTextInput23)
        // var loadTextInput24 = localStorage.getItem("24");
        // $(".description24").text(loadTextInput24)
}

buttons.addEventListener("click", saveLocalStorage)
loadLocalStorage();