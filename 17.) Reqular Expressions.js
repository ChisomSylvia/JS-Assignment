// A concise way to define a search pattern for strings.

//Defining a regex
// Using constructor
// const regex1 = new RegExp(/\d/);

// // Using literal notation
// const regex2 = /\w+/;


// //Testing a regex
// const text3 = "Hello 123 World";
// const regex3 = /\d/;

// console.log(regex3.test(text3));

// // .match()
// // .match() method is used on a string object to search for a match against a regular expression. It returns an array of all matches that are found in the string, or null if no match is found
// console.log(text3.match(regex3));


// // Literals: Match a specific character (e.g., "a", "x", "$").
// const regex4 = /a/; // Matches the letter "a" as far as it exists in the string
// const text4 = "apple";
// console.log(regex4.test(text4));
// console.log(text4.match(regex4));


// // Character Classes: Match any character within a set (e.g., "[abc]", "[0-9]").
// // \d: Matches any digit character (0-9).
// // \w: Matches any word character (alphanumeric, underscore).
// // \s: Matches any whitespace character (space, tab, newline).
// // \D: Matches any non-digit character(including special characters).
// // \W: Matches any non-word character(special characters).
// // \S: Matches any non-whitespace character.

// const regex5 = /[abc]/; // Matches any of the characters "a", "b", or "c" //if at least one of it is found
// const text5 = "This is text";
// console.log(regex5.test(text5));

// const regex6 = /[0-9]/; // Matches any digit character (0-9)
// const text6 = "Price: $12.99";
// console.log(regex6.test(text6));
// console.log(text6.match(regex6)); //Que 1?

// const regex7 = /\w/; // Matches any word character (alphanumeric, underscore)
// const text7 = "Hello_World"; 
// console.log(regex7.test(text7)); //Que 2?


// // Metacharacters: Have special meaning in regex.
// // ^: Matches the beginning of the string.
// const regex8 = /^Hello/; // Matches strings starting with "Hello"
// const text8 = "Hello World";
// console.log(regex8.test(text8));

// // $: Matches the end of the string.
// const regex9 = /World$/; // Matches strings ending with "World"
// const text9 = "Hello World";
// console.log(regex9.test(text9));

// // *: Matches the preceding element zero or more times.
// const regex10 = /(a)(b)*(c)/; // Matches b zero or more times 
// const text10 = "ac"; // Matches "ac", "abc", "abbc", etc.
// console.log(regex10.test(text10));

// // +: Matches the preceding element one or more times.
// const regex11 = /ab+c/; // Matches "abc", "abbc", "abbbc", etc. (at least one "b")
// const text11 = "abbc";
// console.log(regex11.test(text11));

// // ?: Matches the preceding element zero or one time.
// const regex12 = /colou?r/; // Matches "color" or "colour"
// const text1 = "This is color";
// const text2 = "This is colour";
// console.log(regex12.test(text1));
// console.log(regex12.test(text2));

// // | (or) - Matches one of the alternatives separated by "|".
// const regex13 = /red|blue/; // Matches "red" or "blue"
// const text13 = "The sky is blue";
// console.log(regex13.test(text13));


// // Grouping: Use parentheses to group sub-expressions.
// const regex14 = /(ab)+c/; // Matches "ab" repeated one or more times followed by "c"
// const text14 = "abcabcc";
// console.log(regex14.test(text14)); //Que 3?


// // Quantifiers ({m,n}): Specify the exact number of repetitions for a preceding element.
// // {n}: Matches exactly n times.
// const regex15 = /a(bb){3}c/;
// const text15 = "abbbbbbc";
// console.log(regex15.test(text15));

// // {m,n}: Matches at least m times and at most n times.
// const regex16 = /a{2,4}b/;
// const text16 = "aabcabcabc";
// console.log(regex16.test(text16));

// // {m,}: Matches at least m times.
// const regex17 = /c{4,}b/;
// const text17 = "abcccccccccccccccccbabcabc";
// console.log(regex17.test(text17));


// Flags (modifiers): Change the behavior of the regex engine (e.g., case-insensitive matching).
// i (case-insensitive): Makes the regex case-insensitive.
// const text = "Hello World";

// const regex18 = /hello/;
// console.log(regex18.test(text));

// const regex19 = /hello/i;
// console.log(regex19.test(text));

// // g (global): Matches all occurrences of the pattern in the string, not just the first one.
// const text20 = "cat, 989 cat is 765 cute, 65 another cat";

// // Match "cat" (only the first occurrence)
// const regex20 = /cat/;
// console.log(regex20.test(text20)); // Output: true

// // Match all occurrences of "cat" (global flag)
// const regex21 = /\d{3}/g;
// console.log(regex21.test(text20)); // Output: true (matches all three "cat")
// console.log(text20.match(regex21)); // Output: ["cat", "cat", "cat"] (array of all matches)


// ASSIGNMENT
// Write a program that validates a phone number
// Write a program that validates a card number entered by the user. The script should use regular expressions (regex) to match the card number against the pattern of a Mastercard, Visa card, or a verve card.



// Write a program that validates a phone number
const text30 = "+234 810 596 5272";
const text31= "08105965272";
const regex30 =/^(?:\+?234|0)?\s\d{3}\s\d{3}\s\d{4}$/
const regex31 = /^(080|070|090|081|091)\d{8}$/
console.log(regex30.test(text30));
console.log(regex31.test(text31));

function validatePhoneNumber(phoneNumber) {
    return /^(?:\+?234|0)?\s\d{3}\s\d{3}\s\d{4}$/.test(phoneNumber);
}

console.log(validatePhoneNumber("+234 810 596 5272"));

// Write a program that validates a card number entered by the user. The script should use regular expressions (regex) to match the card number against the pattern of a Mastercard, Visa card, or a verve card.
const text32 = "2345 6789 1234 3456";
const regex32 = /\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
console.log(regex32.test(text32));

function validateCardNumber(cardNumber) {
    console.log(/\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(cardNumber));
}
validateCardNumber("2345 6789 1234 3456");