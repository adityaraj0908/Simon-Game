var gamePattern =[];
var buttonColors = ["red", "blue", "green", "yellow"]
var userClickedPattern = [];

$(".btn").click(function()
{
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence()
{
    var randomNumber = 4*(Math.random());
    var randomNumber = Math.floor(randomNumber);

    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    // var audio = new Audio("sounds/"+randomChosenColour+".mp3");
    // audio.play();

}
// nextSequence();

function playSound(name)
{
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function()
    {
        $("#"+currentColour).removeClass("pressed");
    }, 100);
}