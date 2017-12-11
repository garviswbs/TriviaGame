//Global Var
var time = 30;
var questions = {
    q1: {'1. Who holds the record for all time penalty minutes?':
            {
            'a':'Dave Hanson',
            'b': 'Tie Domi',
            'c': 'Tiger Williams', 
            'd': 'Dale Hunter', 
            }
        },
    q2: {'2. What active NHL player holds the record for most games played?':
            {
            'a': 'Jaromir Jagr',
            'b': 'Jarome Iginla' ,
            'c': 'Joe Thornton' ,
            'd': 'Gordie Howe' , 
            }
        },
    q3: {'3. Which goalie owns the record for the highest career save percentage?':
            {
            'a': 'Martin Brodeur' ,
            'b': 'Mike Richter' ,
            'c': 'Patrick Roy' ,
            'd': 'Dominik Hašek' ,
            }
        },


    

/*    q4:'4. Who has the NHL record for most fights?',
    q5:'5. What is a Gordie Howe hat-trick?',
    q6:'6. Which team was on of the original 6 NHL teams?',
    q7:'7. How many NHL teams are located in Canada?',
    q8:'8. What NHL team has won the most Sanley Cups?',
    q9:'9. What is the newest NHL Franchise?',
    q10:'10 Who is the all time winningest coach?', 
    q11:'11. What franchise drafted Wayne Gretzky?',    */
}
var correctAnswers;
var wrongAnswers
var intervalId;

//functions
function startGame() {

}

function gamePlay() 
{
    $('.startBut').on('click',function()
    {
        //removes buttons with class startButton
        $('button').remove('.startBut');
        quest1();
    });
}

/*function quest1()
{
    //creates new div in buttonContainer
    var newDiv = $('<div class=" quest q1">');
    newDiv.html(questions.q1);

    

    


}*/

/*
var one = {
    answer: 'Tiger Williams',
   // document.body.style.backgroundImage = "url('img_tree.png')",
}

var two = {
    
    answer: 'Jarome Iginla',
  //  document.body.style.backgroundImage = "url('img_tree.png')",
}

var three = {

    answer: 'Dominik Hašek' ,
    //document.body.style.backgroundImage = "url('img_tree.png')",
}

var four = {
    choice1: 'Chris Nilan' , 
    choice2: 'Jeff Hanson' , 
    choice3: 'Rob Ray' ,
    choice4: 'Tie Domi' , 
    answer: 'Tie Domi' ,
    //document.body.style.backgroundImage = "url('img_tree.png')",
}

var five = {
    choice1: 'A fight, a goal, and an assist' ,
    choice2: 'Four goals' ,
    choice3: 'Three goals and three assists' , 
    choice4: 'Three fights' ,
    answer: 'A fight, a goal, and an assist' ,
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var six = { 
    choice1: 'Buffalo Sabres' , 
    choice2: 'Chicago Black Hawks',
    choice3: 'Montreal Expos' , 
    choice4: 'New York Islanders' ,
    answer: 'Chicago Black Hawks',
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var seven = {
    choice1: '11' ,
    choice2: '6' ,
    choice3: '7' ,
    choice4: '4' ,
    answer: '7' ,
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var eight = {
    choice1: 'Boston Bruins' , 
    choice2: 'Montreal Canadiens' , 
    choice3: 'Toronto Maple Leafs' ,
    choice4: 'New York Rangers' , 
    answer: 'Montreal Canadiens' , 
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var nine = {
    choice1: 'Las Vegas Golden Nights' , 
    choice2: 'California Seals',
    choice3: 'Colorado Avalanche' ,   
    choice4: 'Brooklyn Islanders' ,
    answer: 'Las Vegas Golden Nights' , 
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var ten = {
    choice1: 'Reggie Dunlop' ,
    choice2: 'Joel Quenneville' ,
    choice3: 'Scotty Bowman',
    choice4: 'Herb Brooks' , 
    answer: 'Scotty Bowman',
    //document.body.style.backgroundImage = "url('img_tree.png')";
}

var eleven = {
    choice1: 'New York Rangers' ,
    choice2: 'Los Angeles Kings' ,
    choice3: 'Edmonton Oilers' ,
    choice4: 'Toronto Maple Leafs' ,
    answer: 'Edmonton Oilers' ,
    //document.body.style.backgroundImage = "url('img_tree.png')";
}*/