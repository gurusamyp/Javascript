// In other words, value?.prop:

// works as value.prop, if value exists,
// otherwise (when value is undefined/null) it returns undefined.let user = {}; // user has no address
/* let user = {}; // user has no address
   alert( user?.address?.street ); // undefined (no error)*/

   let user ={ 
       name:"guru",
        sum : function(a,b){
           return a+b;
       }
    } ;
        
   let x = 0;
   let result = user?.sum(x,5);
   console.log(result);