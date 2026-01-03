try{
    console.log("Hi, this is a try section");
    
} catch(error){
    console.log(error);
}

let json = '{bad:json}';
try {
    console.log(JSON.parse(json));
} catch(err){
    console.log("the error msg : " +err); // the error msg : SyntaxError: Expected property name or '}' in JSON at position 1 (line 1 column 2)
}