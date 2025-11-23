function firstWord(s) {
  // your code here
	function firstWord(str) {
  // Trim leading spaces
  str = str.trim();

  // If the string is empty after trimming, return empty string
  if (str === "") return "";

  // Find the first space
  const spaceIndex = str.indexOf(" ");

  // If no space found, return entire string
  if (spaceIndex === -1) return str;

  // Return everything before the first space
  return str.slice(0, spaceIndex);
}


	

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
console.log(firstWord('see and stop'));      // 'see'
console.log(firstWord(' Hello World!'));     // 'Hello'
console.log(firstWord('12345'));             // '12345'
console.log(firstWord(''));                  // ''
console.log(firstWord('   leading space'));  // 'leading'
console.log(firstWord('word'));              // 'word'
