$(document).ready(function() {
  // event.preventDefault();
  var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
   var doubleNumber=[];
  numbers.forEach(function(number) {
     doubleNumber.push(number*5);
    alert(doubleNumber);
    //console.log(number);
  });
});
