let istrue = ucFirst('john') == 'John'

function ucFirst(str){
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}

console.log(istrue); //true.