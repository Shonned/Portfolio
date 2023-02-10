$("#lHome").on("click", function() {
    $("#lHome").toggleClass("active");
    $("#lBio").removeClass("active");
    $("#lProjects").removeClass("active");
});

$("#lBio").on("click", function() {
    $("#lBio").toggleClass("active");
    $("#lHome").removeClass("active");
    $("#lProjects").removeClass("active");
});

$("#lProjects").on("click", function() {
    $("#lProjects").toggleClass("active");
    $("#lHome").removeClass("active");
    $("#lBio").removeClass("active");
});