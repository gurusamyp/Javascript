// RECURSION....... programming pattern - when a function calls itself.

// eg: Pow(2,4) = 16

// iterative method.

function powIterative(x,n ) {
    let result = 1;

    for(let i = 0;i < n; i++){
        result *= x; //x*x*x*x
    }
    return result;
}

console.log(powIterative(2, 4)) // 16

// recursive method
function powRecursive(x,n){
    return x*powRecursive(x, n-1)
}

console.log(powIterative(2, 5)) // 32
console.log(powIterative(2, 1)) // 2



let company = {
    sales: [{name: "John", salary: 4000},
            {name: "Alice", salary: 3000},
           ],
    development : {
        sites: [{name: "Ram", salary: 5000},
                {name: "Mohan", salary: 7000}
               ],
        internals: [{name: 'Jack', salary: 2500}]
    }
};

console.log(company);
// {
//   sales: [ { name: 'John', salary: 4000 }, { name: 'Alice', salary: 3000 } ],
//   development: { sites: [ [Object], [Object] ], internals: [ [Object] ] }
// }

function totalSalary(department){
    if(Array.isArray(department)){
        return department.reduce((prev, current) => prev + current.salary,0)
    } else {
        let sum = 0;
        for(let subDep of Object.values(department)){
            sum += totalSalary(subDep);
        }
        return sum;
    }
}

let sumSalary = totalSalary(company);
console.log(sumSalary);