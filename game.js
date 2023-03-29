// alert('Hello World');
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];




function nextSequence() {
    var randNumber = Math.floor(Math.random() * buttonColours.length);
    var randChosenColour = buttonColours[randNumber];
    gamePattern.push(randChosenColour);
    console.log(gamePattern);
    console.log(randChosenColour);
    $('#' + randChosenColour).on("click", function(){
        $("." + randChosenColour).fadeOut(100).fadeIn(100);

        playSound(randChosenColour);
        animatePress(randChosenColour);
    });

    

    $('.btn').on('click', function(){
        var userChosenColor = this.id;
        userClickedPattern.push(userChosenColor);

        playSound(userChosenColor);
        animatePress(userChosenColor);
    });

    return randNumber;
}


console.log(nextSequence());

function playSound(name){
    var audio = new Audio('sounds/' + name + '.mp3');
    return audio.play();
}

function animatePress(currentColour){
    $('#' + currentColour).addClass('pressed');
    setTimeout(function(){
        $('#' + currentColour).removeClass('pressed')
    },100)
};