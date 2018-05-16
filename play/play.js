function countdown( parent, callback ){
  
  // This is the function we will call every 1000 ms using setInterval
  
  function count(){

    if( Img ){
      
      // Remove the image if there is one
      Img.remove();

    }

    if( images.length === 0 ){
      
      // If we ran out of image, use the callback to get started
      // Also, remove the interval
      // Also, return since we dont want this function to run anymore.
      clearInterval( interval );
      callback();
      return;

    }
  
    // Get the first item of the array out of the array.
    // Your array is now one item shorter.
    var image = images.shift();
  
    // Create a paragraph to add to the DOM
    // This new paragraph will trigger an animation
    Img = document.createElement("img");
    Img.className = "nums";
    Img.src = image;  
    parent.appendChild( Img );

  }
  
  // These are all the text we want to display
  var images = ['imgs/3.svg', 'imgs/2.svg', 'imgs/1.svg'];
  // This will store the paragraph we are currently displaying
  var Img = null;
  
  // Initiate an interval, but store it in a variable so we can remove it later.
  var interval = setInterval( count, 1000 );

}

// Start a countdown by passing in the parentnode you want to use.
// Also add a callback, where you start your game.
countdown(document.getElementById("readyGo"), function(){
  
  document.getElementById("readyGo").innerHTML = "";
  
});


var items = [{
               image:'imgs/straw.svg',
                type:'garbage'
                }, {
                image:'imgs/utensil.svg',
                type:'garbage'
                },{
                image:'imgs/garbagebag.svg',
                type:'garbage'
                },{
                image:'imgs/chipbag.svg',
                type:'garbage'
                },{
                image:'imgs/eggs.svg',
                type:'garbage'
                },{
                image:'imgs/glasscup.svg',
                type:'glass'
                },{
                image:'imgs/ketchupbottle.svg',
                type:'glass'
                },{
                image:'imgs/jamjar.svg',
                type:'glass'
                }, {
                image:'imgs/milkbottle.svg',
                type:'glass'
                }, {
                image:'imgs/popbottle.svg',
                type:'glass'    
                }, {
                image:'imgs/eggshell.svg',
                type:'organic',
                }, {
                image:'imgs/apple.svg',
                type:'organic',
                }, {
                image:'imgs/banana.svg',
                type:'organic',
                }, {
                image:'imgs/teabag.svg',
                type:'organic',
                }, {
                image:'imgs/leave.svg',
                type:'organic',
                }, {
                image:'imgs/jug.svg',
                type:'plastic',
                }, {
                image:'imgs/tetrapak.svg',
                type:'plastic',
                }, {
                image:'imgs/container.svg',
                type:'plastic',
                }, {
                image:'imgs/plasticbottle.svg',
                type:'plastic',
                }, {
                image:'imgs/can.svg',
                type:'plastic',
                }, {
                image:'imgs/newspaper.svg',
                type:'paper',
                }, {
                image:'imgs/cerealbox.svg',
                type:'paper',
                }, {
                image:'imgs/book.svg',
                type:'paper',
                }, {
                image:'imgs/cardboard.svg',
                type:'paper',
                }, {
                image:'imgs/bag.svg',
                type:'paper',
                }]

var hole = document.getElementById("hole");

function showItem(item) {
    
    var img = document.createElement("img");
    img.className = "randomImg";
    img.setAttribute("src",item.image);
    img.setAttribute("draggable",true);
    img.addEventListener("dragstart",function(e){
       drag(e); 
    });
    //store type as data attribute so it is accessible
    img.setAttribute("data-type",item.type);
    // remove exisiting item
    if (hole.childNodes[0]) {
        hole.removeChild(hole.childNodes[0]);
    }
    hole.appendChild(img);
}

function showRandomItem(){
    var item = items[Math.floor(Math.random()*items.length)];
    showItem(item);
}


/*function start(){
hole.addEventListener("click",function(){
   console.log("item");
   showRandomItem(); 
});
}*/

// Quiz Appear 
var quiz_one = document.getElementById("quiz_one");

setInterval(start,4000);

function start(){
    quiz_one.style.visibility = "visible";
}

// Quiz Appear
var exitBut = document.getElementById("exit");
exitBut.addEventListener("click",function(){
    quiz_one.style.display = "none";
});

//var q1 = '<h1>Which one of these items goes into landfill bin?</h1><i id="exit" class="fas fa-times-circle"></i><img src="imgs/apple.svg" id="wrong"><img src="imgs/garbagebag.svg" id="right"><img src="imgs/bag.svg" id="wrong"><img src="imgs/tetrapak.svg" id="wrong"><img src="imgs/jug.svg" id="wrong">'

//var quiz = [q1];

//var position = 0;

//$(document).ready(function(){
//   $('#quiz_one').html(quiz[position]); 
//});

var questionArray= ["which one of these items goes into landfill bin?", 
                    "Which one of these items goes into glass bin",
                   "Which one of these items goes into compost bin",
                   "Which one of these items goes into plastic bin",
                   "Which one of these items goes into paper bin"];
var answerArray = [];

var list1 = document.getElementById("list1"),
    list2 = document.getElementById("list2"),
    list3 = document.getElementById("list3"),
    list4 = document.getElementById("list4"),
    list5 = document.getElementById('list5');

list1.addEventListener("click", function() {
    answerArray.push(this.src);
    nextQ();
});

function nextQ () {
    $("#h1").text(questionArray[1]);
    list1.src = "imgs/leave.svg";
    list2.src = "imgs/tetrapak.svg";
    list3.src = "imgs/newspaper.svg";
    list4.src = "imgs/glasscup.svg";
    list5.src = "imgs/eggs.svg";
}