
for (var i = 99; i > 0; i--) {

  var oneDown = i - 1;
  var bottle1 = "bottles"
  var bottle2 = "bottles"

  if(i === 2){oneDown = i - 1; bottle1 = "bottles"; bottle2 = "bottle";}
  else if( i=== 1 ){ oneDown = "No"; bottle1 = "bottle"; bottle2 = "bottles";}
  console.log(i + " " + bottle1 + " of beer on the wall, " + i + " " + bottle1 + " of beer.");
  console.log("Take one down and pass it around " + oneDown + " " + bottle2 + " of beer on the wall.");

}

console.log( "No bottles of beer on the wall. No bottles of beer. \nGot to the store and get some more. 99 bottles of beer on the wall");
