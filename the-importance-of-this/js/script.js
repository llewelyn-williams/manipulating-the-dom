$("p").click(function(){
    $(this).slideToggle("slow");
});

$("button").mouseenter(function(){
    $(this).removeClass("makeRed").addClass("makeBlue");
});

$("button").mouseleave(function(){
    $(this).removeClass("makeBlue").addClass("makeRed");
});

$(document).ready(function(){
    $(".box").on("click", function() {
        /**
         * When we click on an element that has
         * a "box" class, this event willbe fired.
         */
        let classNames = $(this).attr("class").split(" ");
        let boxClass = classNames[0];
        let className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            //If this object if already red, turn it black
            $("." + className).css("background-color", "#000");
        } else {
            // Else turn all elements with a box class black
            // and then change the color of all elements
            // with the same name as clicked element
            // to red.
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    });
});