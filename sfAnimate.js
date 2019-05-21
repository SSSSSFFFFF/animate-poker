 /* .project.hover .front, .project:hover .front {
    -webkit-transform: rotateY(180deg),
    -moz-transform: rotateY(180deg),
    -o-transform: rotateY(180deg),
    transform: rotateY(180deg),
}

 .project.hover .back, .project:hover .back {
    -webkit-transform: rotateY(0deg),
    -moz-transform: rotateY(0deg),
    -o-transform: rotateY(0deg),
    -ms-transform: rotateY(0deg),
    transform: rotateY(0deg),
} */
$(".project").click(function(){
    $(this).find(".front").css({
        "-webkit-transform": "rotateY(180deg)",
        "-moz-transform": "rotateY(180deg)",  
        "-o-transform": "rotateY(180deg)",
        "transform": "rotateY(180deg)",
    })
    $(this).find(".back").css({
        "-webkit-transform": "rotateY(0deg)",
        "-moz-transform": "rotateY(0deg)",  
        "-o-transform": "rotateY(0deg)",
        "transform": "rotateY(0deg)",
    })
})