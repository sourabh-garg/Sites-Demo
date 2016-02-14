
var main= function(){

   
var baloon = $('.box1');
   function runIt() {
       baloon.animate({top:'+=10'}, 800);
       baloon.animate({top:'-=10'}, 800, runIt);
   }

   runIt();


   var bingo= $('.box2');
   function run() {
       bingo.animate({top:'+=10'}, 800);
       bingo.animate({top:'-=10'}, 800, run);
   }

   run();

};

$(document).ready(main);
