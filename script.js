function firstWord(s) {
  // your code here
	function firstWord(str) {
  // Trim leading/trailing spaces first
  str = str.trim();

  // Find the index of the first space
  const spaceIndex = str.indexOf(' ');

  // If no space is found, return the whole string
  if (spaceIndex === -1) {
    return str;
  }

  // Otherwise return everything before the first space
  return str.substring(0, spaceIndex);

	
}
	firstWord('see and stop');    // 'see'
firstWord(' Hello World!');   // 'Hello'
firstWord('12345');           // '12345'
firstWord('');                // ''


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
