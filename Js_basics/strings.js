
// text is stored as string, no data type for single character

let str = "String-text"  //for single line text  we can use "" or ''
let str1 = 'String-text' //for single line text  we can use "" or ''

// For multiple lines we using `` (Template literals).
let str3 = `New text have multiple lines as, 
            1. Name,
            2. Age,
            3. Location`

console.log(str); // String-text
console.log(str1); // String-text
console.log(str3); /*
                    New text have multiple lines as,
                        1. Name,
                        2. Age,
                        3. Location
                  */

console.log(str.length); //11 characters includind spaces.
console.log(str[3]); //i -- accessing the character by its index.
console.log(str[str.length - 1]); //t -- accessing the last character of the string.
//or
console.log(str.at(3)); //i  -- .at(pos)
console.log(str.at(-1)); //t  -- .at(pos)

// iterate over a string to access the characters(for..of)

for(let char of "Gurusamy"){
    console.log(char);
}


console.log('guru'.toUpperCase()); // GURU
console.log('guru'[0].toUpperCase()); // G
console.log('SAMY'.toLowerCase()); // samy