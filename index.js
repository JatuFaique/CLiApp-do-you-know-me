var readlineSync = require('readline-sync')


var username = readlineSync.question("Whats ur name? ");
console.log('Hello ' + username + ' Welcome to DO you know Faique?')
/*
highscores = [
  {
    username = '',
    score=''
  }

]
*/
var iniscore = 0;
var currentscore = -1;

while ((currentscore<6)||(currentscore<iniscore ) ){
  currentscore = -1;
  function play(question,answer) {
  
  var useranswer = readlineSync.question(question)
  //useranswer.toUpperCase()
  useranswer = useranswer.toUpperCase()
  if( useranswer == answer ){
    console.log('Yay , Correct')
    iniscore = currentscore;
    currentscore=currentscore+1;
  }
  else {
    iniscore = currentscore;
    console.log('Oops')
  }
  
}



var questions = [
  {
  question :'What do I like? \n 1)Cats\n 2)Dogs\n', answer:'CATS'
},
{
  question :'Whats my fav color? \n 1)Red\n 2)Blue\n', answer:'BLUE'
},
{
  question :'Whats my fav car brand? \n 1)Maruti\n 2)BMW\n', answer:'BMW'
},
{
  question :'What I like to watch most? \n 1)Movies\n 2)Shows\n', answer:'MOVIES'
},
{
  question :'How I spend my day? \n 1)Reading\n 2)Working\n', answer:'READING'
},
{
  question :'How many best friends do i have? \n 1)One\n 2)Two\n 3)Infinite\n', answer:'ONE'
}

]

/*
iniscore=0
currentscore=-1
while currentscore < iniscore {
  function enterquiz {
  func play{
    xx
    currentscore+1
  }
  qes1, qes2, qes3
  for loop ques{
    play(quesi)
  }
}

}


*/

for( var i=0; i<questions.length ; i++){
  play(questions[i].question, questions[i].answer)
}
console.log("---------QUIZ ENDS-------\n")


currentscore = currentscore+1

console.log(currentscore +'/', questions.length)
if(currentscore != 6){
  console.log("Lets go again")
}
else{
  console.log('Thats It!')
}

} 






