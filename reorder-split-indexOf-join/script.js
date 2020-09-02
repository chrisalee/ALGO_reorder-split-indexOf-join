// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  console.log('******************');
  if(words === ""){
    return "";
  }
  var newarray = [];
  words = words.split(" ");
// The split() method is used to split a string into 
// an array of substrings, and returns the new array.
  var j = 1;
  for(var i = 0; i<words.length; i++){
    if(words[i].indexOf(j) > -1){
// The indexOf() method returns the position of the first 
     newarray.push(words[i]);
     console.log(words[i]);
    j++;
    i=-1;
    }
  }
  console.log(newarray);
  return newarray.join(" ");
// The join() method returns the array as a string.
// The elements will be separated by a specified separator. 
// The default separator is comma (,).
}

order("is2 Thi1s T4est 3a");
order("4of Fo1r pe6ople g3ood th5e the2");
order("");

// Best Solution
// ////////////////////////////////////
// function order(words){
  
//   return words.split(' ').sort(function(a, b){
//       return a.match(/\d/) - b.match(/\d/);
//    }).join(' ');
// }   