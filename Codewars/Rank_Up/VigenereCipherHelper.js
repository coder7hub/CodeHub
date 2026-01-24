/**
 * 4 kyu
Vigenère Cipher Helper
In this kata, you will implement cipher functions using utf-8 strings.

The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key). The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" ("the unbreakable cipher")

The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.

In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.

Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- this is not the case here.

The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

Visual representation:

"my secret code i want to secure"  // message
"passwordpasswordpasswordpasswor"  // key
Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

Examples
alphabet = "abcdefghijklmnopqrstuvwxyz"
key      = "password"

"codewars" --> encode -->  "rovwsoiv"
"laxxhsj"  --> decode -->  "waffles"
Note: any character not in the alphabet must be left alone. For example in the above case:

"CODEWARS"  --> encode -->  "CODEWARS"
AlgorithmsCiphersSecurityObject-oriented ProgrammingStrings
 */



let alphabet = "abcdefghijklmnopqrstuvwxyz"
let key = 'password'
let inp = 'howareyoudoing'

// ==================== ENCODE ====================
function encode(alphabet, key, inp) {
    let result = ''

    
    if (key.length < inp.length) {
        while (key.length < inp.length) {
            key = key + key
        }
        key = key.slice(0, inp.length)
    } else if (key.length > inp.length) {
        key = key.slice(0, inp.length)
    }

    
    for (let i = 0; i < inp.length; i++) {
        if (alphabet.includes(inp[i])) {
            let positionOfInp = alphabet.indexOf(inp[i])
            let positionOfKey = alphabet.indexOf(key[i])

            let newIndex = (positionOfInp + positionOfKey) % alphabet.length
            result += alphabet[newIndex]
        } else {
            result += inp[i] 
        }
    }

    return result
}

// ==================== DECODE ====================
function decode(alphabet, key, inp) {
    let result = ''

   
    if (key.length < inp.length) {
        while (key.length < inp.length) {
            key = key + key
        }
        key = key.slice(0, inp.length)
    } else if (key.length > inp.length) {
        key = key.slice(0, inp.length)
    }

   
    for (let i = 0; i < inp.length; i++) {
        if (alphabet.includes(inp[i])) {
            let positionOfInp = alphabet.indexOf(inp[i])
            let positionOfKey = alphabet.indexOf(key[i])

            let newIndex = (positionOfInp - positionOfKey + alphabet.length) % alphabet.length
            result += alphabet[newIndex]
        } else {
            result += inp[i]
        }
    }

    return result
}

// ==================== TEST ====================
let encrypted = encode(alphabet, key, inp)
console.log("Encrypted:", encrypted)

let decrypted = decode(alphabet, key, encrypted)
console.log("Decrypted:", decrypted)
