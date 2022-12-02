$("navbar #hambac").click(function (){
    $("#navbar ul").slideToggle("slow")
});

window.addEventListener("resize", resizeListner);

let windowWith = window.innerWidth;

function resizeListener(){
    windowWith = window.innerWidth
}

if(windowWith < 501){
    $("#navbar ul").click(function (){
        $("#navbar ul").hide();
    });
}
else{
    $("#nnavbar ul").show()
}