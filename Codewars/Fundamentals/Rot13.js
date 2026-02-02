/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

CiphersFundamentals
 */
let input ="Hello this is the input";
const alphabets = {
  a: "n", b: "o", c: "p", d: "q", e: "r", f: "s",
  g: "t", h: "u", i: "v", j: "w", k: "x", l: "y",
  m: "z",
  n: "a", o: "b", p: "c", q: "d", r: "e", s: "f",
  t: "g", u: "h", v: "i", w: "j", x: "k", y: "l",
  z: "m"
};

function crypto (input){
    let answer=''
  for (let i = 0; i < input.length; i++){
    let char =input[i]
    let lowerChar = char.toLowerCase()
    // we will check does it include the alpabet if not return it 
    if (lowerChar in alphabets){
        let mappedChar =alphabets[lowerChar]
        if (char === char.toUpperCase()) {
           mappedChar = mappedChar.toUpperCase();
        }
      answer+=mappedChar
    }else{
        answer += char;
    }
  }
  return answer
}
 console.log(crypto (input))
