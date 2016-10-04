
export const isNumberEven = (i) => {
  // i will be an integer.
  // Return true if it's even, and false if it isn't.
  return i%2 == 0;
};

export const getFileExtension = (str) => {
  // str will be a string, but it may not have a file extension.
  // Return the file extension (with no period) if it has one, otherwise false
  if(str.split('.').length<=1)
    return false;
  else
    return str.substr(str.lastIndexOf('.')+1);
};

export const longestString = (arr) => {
  // arr will be an array.
  // Return the longest string in the array
  let taille=0;
  let longest ="";
  for(let i=0; i < arr.length; i++){
    if (typeof arr[i] === 'string' || arr[i] instanceof String)
      if(arr[i].length > taille){
        taille = arr[i].length;
        longest = arr[i];
      }    
      
  } 
  return longest;
};

export const reverseString = (str) => {
  // str will be an string
  // Return a new string who's characters are in the opposite order to str's.
  return str.split("").reverse().join("");
};

export const isPalindrome = (str) => {
  // str will be an string
  // Return true if it is a palindrome and false otherwise.
  // It should be case insensitive and not consider space or punctuation.
  let strUpperCase = str.toUpperCase();

  if(reverseString(strUpperCase)==strUpperCase)
    return true;
  else 
    return false;
};

export const nestedSum = (arr) => {
  // arr will be an array, containing integers, strings and/or arrays like itself
  // Return the sum all the numbers you find, anywhere in the nest of arrays.
  let sum=0;
  for(let i=0;i<arr.length;i++){
    if (typeof arr[i] === 'number')
      sum+=arr[i];
    else if(arr[i] instanceof Array)
      sum+=nestedSum(arr[i]);
  }
  return sum;
};
