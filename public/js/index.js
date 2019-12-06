$( document ).ready(function() {
    $("#loose").hide();
    $("#win").hide();

    var words= ['adulte','bosser','buzzer','cadeau','mordre','nommer','octets'];
    var entier = entierAleatoire(0, 6);
    var heart=4;

    var word=words[entier];
    var response = shuffle(word);

    for (var j = 0; j < response.length; j++) {
        $("#response"+j).val(response.charAt(j));
    }
    console.log(word);

    $("form").submit(function( event ) {
        event.preventDefault();
        var Letter1 = $("#number0").val();
        var Letter2 = $("#number1").val();
        var Letter3 = $("#number2").val();
        var Letter4 = $("#number3").val();
        var Letter5 = $("#number4").val();
        var Letter6 = $("#number5").val();
        var letters = [Letter1,Letter2,Letter3,Letter4,Letter5,Letter6];
        var countLetters =0;

        for (var i = 0; i < 6; i++) {
            var checkLetter=false;
            console.log('letters[i] '+letters[i] );
            console.log('word.charAt(i) '+ word.charAt(i));
            if(letters[i]  === word.charAt(i)){
                $("#number"+i).val(letters[i]);
                $("#number"+i).css("background-color", "#d4edda");
                $("#number"+i).prop("readonly", true);
                console.log("#number"+i);
                checkLetter=true;
                countLetters++;
            }else{
                $("#number"+i).val('');
            }
        }

        if(checkLetter===false){
            $("#heart"+heart).hide();
            heart--;
        }

        if(heart===0){
            $("#play").hide();
            $("#loose").show();
            var video = $("#loosevideo")[0]; // id or class of your <video> tag
            video.play();
        }

        if(countLetters===6){
            console.log('win');
            $("#play").hide();
            $("#loose").hide();
            $("#win").show();
            var video = $("#winvideo")[0]; // id or class of your <video> tag
            video.play();
        }

        console.log(heart);
    });

    $(".replay").click(function (){
        window.location.replace('/');
    });
});

function entierAleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function shuffle (word){
    var shuffledWord = '';
    word = word.split('');
    while (word.length > 0) {
        shuffledWord +=  word.splice(word.length * Math.random() << 0, 1);
    }
    return shuffledWord;
}
