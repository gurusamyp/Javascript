
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


// count the given word
let text = 'As sly as a fox, as strong as an ox';
// let text = '';
let target ='as'
let pos = 0;

while(true){
    let foundPos = text.indexOf(target,pos) //starting from the given position pos
    if(foundPos == -1){
        console.log('not found');
        break;
    } 
    console.log(`Found at posision ${foundPos}`);
    pos = foundPos + 1;
}


// ===================================================================


console.log(text.includes('fox')) //true
console.log(text.includes('fox',20)) //false - it is starting from 20th position

console.log(text.startsWith('As')) //true --- is 'as' it would be false.
console.log(text.endsWith('ox')) //true


let word = 'stringify';
console.log(word.slice(1,3)); //tr  -- 1,2. not 3.
console.log(word.slice(3)); //ingify  -- from 3 it will be sliced.
console.log(word.slice(-5,-1)); //ngif  -- from last position.

 console.log(word.substring(2,6)); //ring 
 console.log(word.substring(6,2)); //ring

 console.log('Guru'.codePointAt(0)); //71 -- G position in UTF-16
 console.log('guru'.codePointAt(0)); //103 -- g position in UTF-16

 console.log(String.fromCodePoint(71)); //G
 console.log(String.fromCodePoint(103)); //g


 //code points and its characters.

 let st = '';                   
 for(let i=65; i<220;i++){
    console.log(String.fromCodePoint(i));
            } /* Output:
                 ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
                 ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ 
             */