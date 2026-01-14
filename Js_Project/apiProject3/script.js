const url = 'https://microsoftedge.github.io/Demos/json-dummy-data/128KB.json';


async function manipulateData(){
try{
    const respone = await fetch(url);
    if(!respone.ok){
        throw new Error("Data Fetching Error :", respone.status);
    }

    const data = await respone.json();
    console.log(data.length); 786
    // console.log(data);

    console.log(typeof data); //object
    let setItem = new Set();
    data.forEach(item =>setItem.add(item.language));
    console.log(setItem);
    console.log(setItem.size);
    let lanArr = [];
    data.forEach(item => lanArr.push(item.language));
    // console.log(lanArr);
    console.log(lanArr.length);
 
    //count the language occurance by reduce funtion
    const lanOccuranceMap = data.reduce((acc, item) => {
        const lang = item.language;
        acc[lang] = (acc[lang] || 0) + 1;
        return acc;
    },{});
    console.log(lanOccuranceMap);

    //count the language occurance by forEach
    const counts = {};
    setItem.forEach(lang => {
        counts[lang] = 0;
    });
    console.log(counts); // count initialized for each language.

    data.forEach(item => {
        if(setItem.has(item.language)){
            counts[item.language]++;
        }
    })

    console.log(counts); // full count
    console.log(typeof counts); //object
}catch {

}
}

manipulateData();