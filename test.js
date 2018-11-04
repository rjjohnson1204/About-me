var ansSix = '5';
var quesSix = prompt('What is my favoriate number between one and ten?');
if (quesSix === ansSix) {
 alert('correct');
 score++;
} else if (quesSix !== ansSix) {
 var counter = 0;
 while (counter < 3 && quesSix !== ansSix){quesSix =
   prompt('no try again');
 counter++;}
 if (quesSix === ansSix) {alert('correct');
   score++;
 }
}

var movies = ["The Matrix", "Frozen"];
console.log(movies)
typeof(typeof(movies));
console.log(movies)


