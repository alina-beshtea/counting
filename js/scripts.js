$(document).ready(function() {
  $("form#survey").submit(function() {
  event.preventDefault();
  // var numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  //  var doubleNumber=[];
  // numbers.forEach(function(number) {
  //    doubleNumber.push(number*5);
  //    if(numbers >= 20);
  //    return NaN;
  //   alert(doubleNumber);
  //   //console.log(number);

  var countTo = parseInt($("#limit").val());
  var countBy = parseInt($("#multiple").val());
  var numbers = [];

  console.log(countTo);
  console.log(countBy);

  if ((countTo)<=0 || (countBy)<=0) {
    alert("Please enter a whole number greater than zero");
  }

  else if (isNaN(countTo) || isNaN(countBy)) {
    alert("Please enter a number");
  }

  else if ((countBy)>(countTo)) {
    alert("Number to count by must be equal to or less than the nmber to count to!");
  }

  else {
    for (var index = countBy; index <= countTo; index += countBy) {
        numbers.push(" " + index);
    }
  };

  console.log(numbers);

  $("#result").text(numbers);



  });
});
