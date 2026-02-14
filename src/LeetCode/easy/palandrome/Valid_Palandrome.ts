/*
**. Given a string, determine if it a palindrome, considering only alphanumeric character and ignoring cases.
   Example:
   Input: s = "A man, a plan, a canal: Panama"
   Output: true
   Explanation: "amanaplanacanalpanama" is a palindrome.

   Input: s = "race a car"
**  Output: false
**
*/

function isPanalindrome(s: string): boolean {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    while (!isAlphaNumberic(s[left]!)) {
      // skip non-alphanumeric characters
      left++;
    }
    while (!isAlphaNumberic(s[right]!)) {
      // skip non-alphanumeric characters
      right--;
    }
    if (s[left]!.toLowerCase() !== s[right]!.toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

function isAlphaNumberic(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // 0-9
    (code >= 65 && code <= 90) || // A-Z
    (code >= 97 && code <= 122)
  ); // a-z
}

const well_known_input1 = "A man, a plan, a canal: Panama";
const well_known_input2 = "race a car";

console.log(
  `input: ${well_known_input1} is panalindrome: ${isPanalindrome(well_known_input1)}`,
);
console.log(
  `input: ${well_known_input2} is panalindrome: ${isPanalindrome(well_known_input2)}`,
);

const input3 = "0P";
