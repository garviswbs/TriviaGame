// Run on page load
/*window.onload = function() {
    //click events
    $('#lap').click(stopwatch.recordLap);
    $('#stop').click(stopwatch.stop);
    $('#reset').click(stopwatch.reset);
    $('#start').click(stopwatch.start);
};

//Stopwatch Object
var stopwatch = {
    time:0,
    lap:1,
    reset: function () {
        stopwatch.time = 0;
        stopwatch.lap = 1;
        $('#display').html('00:00');
        $('#laps').html('');
        clearInterval(counter);
        
       

    },

    start: function () {
        counter = setInterval(stopwatch.count, 1000);

    },

    stop: function () {
        
        clearInterval(counter);
        
        

    },

    recordLap: function () {

        
        var converted = stopwatch.timeConverter(stopwatch.time);
        $('#laps').append('<p>Question ' + stopwatch.lap + ': ' + converted + '</p>');
        stopwatch.lap++;
        
    },

    count: function () {
        stopwatch.time++;

        var converted = stopwatch.timeConverter(stopwatch.time);

        $('#display').html(converted);

    },

    timeConverter: function (t) {
        var minutes = Math.floor(t/60);
        var seconds = t-(minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            mintues = "00";
        } else if (minutes < 10){
            mintues = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }

};
*/
var one = {
    quest: '1. Who holds the record for all time penalty minutes?',
    choice1: 'Dave Hanson',
    choice2: 'Tie Domi',
    choice3: 'Tiger Williams' , 
    choice4: 'Dale Hunter', 
    answer: 'Tiger Williams',
   // document.body.style.backgroundImage = "url('img_tree.png')",
}

var two = {
    quest: '2. What active NHL player holds the record for most games played?' , 
    choice1: 'Jaromir Jagr',
    choice2: 'Jarome Iginla' ,
    choice3: 'Joe Thornton' ,
    choice4: 'Gordie Howe' ,
    answer: 'Jarome Iginla',
  //  document.body.style.backgroundImage = "url('img_tree.png')",
}

var three = {
    quest: '3. Which goalie owns the record for the highest career save percentage?' ,
    choice1: 'Martin Brodeur' ,
    choice2: 'Mike Richter' ,
    choice3: 'Patrick Roy' ,
    choice4: 'Dominik Hašek' ,
    answer: 'Dominik Hašek' ,
    //document.body.style.backgroundImage = "url('img_tree.png')",
}

var four = {
    quest: '4. Who has the NHL record for most fights?' ,
    choice1: 'Chris Nilan' , 
    choice2: 'Jeff Hanson' , 
    choice3: 'Rob Ray' ,
    choice4: 'Tie Domi' , 
    answer: 'Tie Domi' ,
    //document.body.style.backgroundImage = "url('img_tree.png')",
}

var five = {
    quest: '5. What is a Gordie Howe hat-trick?' , 
    choice1: 'A fight, a goal, and an assist' ,
    choice2: 'Four goals' ,
    choice3: 'Three goals and three assists' , 
    choice4: 'Three fights' ,
    answer: 'A fight, a goal, and an assist' ,
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var six = { 
    quest: '6. Which team was on of the original 6 NHL teams?' ,
    choice1: 'Buffalo Sabres' , 
    choice2: 'Chicago Black Hawks',
    choice3: 'Montreal Expos' , 
    choice4: 'New York Islanders' ,
    answer: 'Chicago Black Hawks',
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var seven = {
    quest: '7. How many NHL teams are located in Canada?',
    choice1: '11' ,
    choice2: '6' ,
    choice3: '7' ,
    choice4: '4' ,
    answer: '7' ,
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var eight = {
    quest: '8. What NHL team has won the most Sanley Cups?' ,
    choice1: 'Boston Bruins' , 
    choice2: 'Montreal Canadiens' , 
    choice3: 'Toronto Maple Leafs' ,
    choice4: 'New York Rangers' , 
    answer: 'Montreal Canadiens' , 
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var nine = {
    quest: '9. What is the newest NHL Franchise?',
    choice1: 'Las Vegas Golden Nights' , 
    choice2: 'California Seals',
    choice3: 'Colorado Avalanche' ,   
    choice4: 'Brooklyn Islanders' ,
    answer: 'Las Vegas Golden Nights' , 
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var ten = {
    quest: '10 Who is the all time winningest coach?', 
    choice1: 'Reggie Dunlop' ,
    choice2: 'Joel Quenneville' ,
    choice3: 'Scotty Bowman',
    choice4: 'Herb Brooks' , 
    answer: 'Scotty Bowman',
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var eleven = {
    quest: '11. What franchise drafted Wayne Gretzky?' ,
    choice1: 'New York Rangers' ,
    choice2: 'Los Angeles Kings' ,
    choice3: 'Edmonton Oilers' ,
    choice4: 'Toronto Maple Leafs' ,
    answer: 'Edmonton Oilers' ,
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var questArray = [one, two, three, four, five, six, seven, eight, nine, ten, eleven];


var questDiv = $('#quest');
var choiceOneDiv = $('#choiceOne');
var choiceTwoDiv = $('#choiceTwo');
var choiceThreeDiv = $('#choiceThree');
var choiceFourDiv = $('#choiceFour');


for(i = 0; i < questArray.length; i++){ 
 
 
    var newQuestDiv = $('<div>' + questArray[i].quest + '</div>');

    questDiv.append(newQuestDiv);

    var newChoiceOneDiv = $('<div>' + questArray[i].choice1 + '</div>');
    
    choiceOneDiv.append(newChoiceOneDiv);

 //runQuest(i);
//}
  //  var runQuest = function() {
   // document.getElementById("quest").innerHTML = "<p>(questArray[i]//.choice1)<p>";
 //   }
 
     
    
   // console.log(questArray[i].choice1);
    //console.log((questArray[i]).choice2);
  
    
    
    
    //$(".blog-post:eq(" + i  + ")").append("<p>Here's a note</p>");
        
  };

$(document).ready(function(){
var topTitle = $("<h1 class='introTitle'>the Office Trivia Game</h1>");
$("#firstRow").prepend(topTitle);
//This will control autoplay of Theme once you get to site.
someSounds.startUp.play();
$("#questionRow").append("<p>Press the start game button to begin.  Trivia questions will be displayed.  Click the answer you believe to be correct.  You will be alerted if your answer was correct or incorrect and then the game will move you on to the next question. At the end the game will let you know how many questions you got right and wrong and how much time you spent overall answering questions on the quiz.  Based on a combination of accuracy and time you will be awarded an Office Trivia Skill Level.  Enjoy!</p>");
var starterButton = $("#firstRow").append("<div class='button'><button class='btn-warning btn-lg'>START GAME</button></div>");
$("#firstRow").append("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
$(starterButton).one("click", function () {
    someSounds.startUp.pause();
    $("button").remove();
    $(".introTitle").empty();
    showQuestion(listOfQuestions[currentQuestionIndex]);
});
});



