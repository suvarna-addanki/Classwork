// function findShort(s){
//     var sSplit = s.split(' ');
//     var shortestWord = 0;
//     for(var i = 0; i > sSplit.length; i++){
//       if(sSplit.length < shortestWord){
//       shortestWord = sSplit[i].length;
//        }
//     }
//     return shortestWord;
//   }
//   console.log(findShort("Excited for next week!"))
  
 
 /* function findLengthOfLongestWord(str){
  var strSplit = str.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
    longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
console.log(findLengthOfLongestWord("Excited for next week!"))
*/

function findShort(s){
    var sSplit = s.split(' ');
    var shortestWord = 0;
    for(var i = sSplit[i].length; i > 0; i--){
      if(sSplit[i].length < shortestWord){
      shortestWord = sSplit[i].length;
       }
    }
    return shortestWord;
  }
  console.log(findShort("Excited for next week!"))


    