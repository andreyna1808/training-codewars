// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let result = birds.filter((element) => !geese.includes(element));

  return result;
}
