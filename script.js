function firstWord(s) {
  // your code here
	function firstWord(str) {
  // Remove leading spaces
  str = str.trim();

  // If the string becomes empty, return empty string
  if (str === "") return "";

  // Find first space
  const spaceIndex = str.indexOf(" ");

  // If no space found, return full string
  if (spaceIndex === -1) return str;

  // Return everything before first space
  return str.slice(0, spaceIndex);
}



	

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
