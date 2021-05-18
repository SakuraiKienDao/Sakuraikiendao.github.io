$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});


// show on scroll

window.addEventListener("scroll", function() {showFunction1(); showFunction2(); showFunction3();});

function showFunction1() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.querySelector(".conten1").style.display = "block";
    } else {
        document.querySelector(".conten1").style.display = "none";
    }
}
function showFunction2() {
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
        document.querySelector(".conten2").style.display = "block";
    } else {
        document.querySelector(".conten2").style.display = "none";
    }
}
function showFunction3() {
    if (document.body.scrollTop > 2300 || document.documentElement.scrollTop > 2300) {
        document.querySelector(".conten3").style.display = "block";
    } else {
        document.querySelector(".conten3").style.display = "none";
    }
}

console.log(document.documentElement)
