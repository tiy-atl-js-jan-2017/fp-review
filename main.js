function sum (x, y) {
  return x + y;
}

function average (x, y, z) {
  return (x + y + z) / 3;
}

function greaterThan (x, y) {
  return y > x;
}

function maxOfThree (x, y, z) {
  if (x >= y && x >= z) {
    return x;
  } else if (y >= x && y >= z) {
    return y;
  } else {
    return z;
  }
}

function isVowelPointless (char) {
  var lowerChar = char.toLowerCase();
  if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
    return true;
  } else {
    return false;
  }
}

function isVowel (char) {
  var letter = char.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  return vowels.includes(letter);
}

// Inside Rovarspraket ...
// if (isVowel(letter) || letter === " ")

function rovarspraket (phrase) {
  var result = "";
  for (var i = 0; i < phrase.length; i++) {
    var letter = phrase[i];
    if (isVowel(letter) || letter === " ") {
      result += letter;
    } else {
      result += letter + "o" + letter;
    }
  }
  return result;
}


/// HARD MODE ///

var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
  { firstname : 'JD', teaches : 'JavaScript'},
  { firstname : 'Tim', teaches : 'JavaScript'},
  { firstname : 'Brit', teaches : 'Ruby'},
  { firstname : 'Joe', teaches : 'iOS'},
  { firstname : 'Jake', teaches : 'JavaScript'},
  { firstname : 'Will', teaches : 'JavaScript'},
  { firstname : 'Calvin', teaches : 'JavaScript'},
  { firstname : 'James', teaches : 'Ruby'}
];


// ---------------------------
// 1. Find largest number
// ---------------------------

function largest (nums) {
  var largest = nums[0];
  nums.forEach(function (x) { if (x > largest) { largest = x; } });
  return largest;
}

// My asserts / my tests
console.assert(largest([-1]) === -1, "If there's only one item, it is the largest");
console.assert(largest([2, 4]) === 4, "It should recognize the larger of two nums");

// ---------------------------
// 2. Find longest string
// ---------------------------

function longest (strings) {
  var highestLength = strings[0].length;
  var longest = strings[0];
  for (var i = 1; i < strings.length; i++) {
    if (highestLength < strings[i].length) {
      highestLength = strings[i].length;
      longest = [ strings[i] ];
    } else if (highestLength === strings[i].length) {
      longest.push(strings[i]);
    }
  }

  return longest;
}

// my tests
console.assert(longest(["foo"]) === "foo", "If there's only one string, it's the longest");
// console.assert(longest(['foo', 'code']) === ['code'], "It can find the longest string");
// console.assert(longest(['foo', 'code', 'long']) === ['code', 'long'], "It can find all the longest strings");


// ---------------------------
// 3. Find even numbers
// ---------------------------

function findEvens (nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }
  return result;
}

function findOdds (nums) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      result.push(nums[i]);
    }
  }
  return result;
}

function myFilter (array, test) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var currentItem = array[i];
    if (test(currentItem)) {
      result.push(currentItem);
    }
  }
  return result;
}

function filterEvens (nums) {
  return nums.filter(function (x) { return x % 2 === 0; });
}

function isEven (number) {
  return num % 2 === 0;
}

function filterEvens2 (nums) {
  return nums.filter(isEven);
}
