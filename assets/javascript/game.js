$(document).ready(function() {

    //  Declaring the variables globally.
    var wins = 0;
    var losses = 0;
    var computerNum;
    var score = 0;
    var img1;
    var img2;
    var img3;
    var img4;
    var bolStarted = false;


   
    img1 = Math.floor((Math.random() * 12) + 1);
    img2 = Math.floor((Math.random() * 12) + 1);
    img3 = Math.floor((Math.random() * 12) + 1);
    img4 = Math.floor((Math.random() * 12) + 1);


    // Function to initialize game
    function startGame() {
        if (bolStarted === false) {
            computerNum = Math.floor((Math.random() * 100 + 19) + 1);
            $("#compScore").html("<span>" + computerNum + "</span>");
            $("#wins").html("<span>Wins: " + wins + "</span>");
            $("#losses").html("<span>Losses: " + losses + "</span>");
            $("#score").html("<span>" + score + "</span>");
            bolStarted = true;


        }

    }


    //Add an on click listner to all crystals
    function scoreOutput() {
            
        $(".img1").on("click", function() {
            

            // check if current value is greater than computer score, then update the total score to what value was clicked
            checker();
            console.log(img1);
            score = img1 + score;

            $("#score").html(score);

        });

            
        $(".img2").on("click", function() {
            console.log(img2);
           checker();
            score = img2 + score;
            $("#score").html(score);
        });

            
        $(".img3").on("click", function() {
            console.log(img3);
            checker();
            score = img3 + score;
            $("#score").html(score);
        });

            
        $(".img4").on("click", function() {
            console.log(img4);
            checker();
            score = img4 + score;
            $("#score").html(score);
        });
            
    }


   
    function checker() {
            bolStarted = false;
        if (score === computerNum) {
            wins++;
            console.log(score);
            $("#compScore").html("<h1 'class=W'>You Won!<br> Press Enter to continue");
           reset(); 
        
        } 


        if (computerNum < score) {
            losses++;
            console.log(score); 
            $("#compScore").html("<h1 'class=L'>You Lost!<br> Press Enter to continue");    
            reset(); 
              
        }
            
    }


    function reset () {
        imgZeroed();
        img1 = 0; img2= 0; img3= 0; img4= 0; score = 0;
        $(".imgage").off("click");
    }   

    function imgZeroed () {
        var img1 = 0;
        var img2 = 0;
        var img3 = 0;
        var img4 = 0;
        
    }

    
    function imgValue () {
        img1 = Math.floor((Math.random() * 3) + 1);
        img2 = Math.floor((Math.random() * 2) + 1);
        img3 = Math.floor((Math.random() * 1) + 1);
        img4 = Math.floor((Math.random() * 4) + 1);   
    }
                    
     // call to start the game
        document.onkeyup = function(event) {
            if (event.keyCode === 13) {
                startGame();
                scoreOutput();
                imgValue();
            }
           
        }

});

