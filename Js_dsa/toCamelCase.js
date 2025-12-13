let string = "i got intern at geEksforgeeks";
// let string = "guru";

function splitSentence(s){
    let stringArr = s.toLowerCase().split(' ');                
    return stringArr;
}

function toCamaleCase(string){
    let stringArr = splitSentence(string);
    let camelCaseWords =[];
    for(let word of stringArr){
        capitalWord = word[0].toUpperCase() + word.slice(1) ;
        camelCaseWords.push(capitalWord);
        
    }
    return joinWords(camelCaseWords);
}

function joinWords(strArr){
    return strArr.join(' ');
    
}
console.log(toCamaleCase(string))