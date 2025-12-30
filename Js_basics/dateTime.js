

let timeNow = new Date();
console.log(timeNow); //2025-12-30T09:35:13.332Z 


let jan1_1970 = new Date(0);
console.log(jan1_1970); // 1970-01-01T00:00:00.000Z


let jan2_1970 = new Date(24*3600*1000); // Timestamp in milliseconds (24*3600*1000 => one day in ms)
console.log(jan2_1970) //1970-01-02T00:00:00.000Z

let dec31_1969 = new Date(-24*3600*1000); // negative time stamping
console.log(dec31_1969) //1969-12-31T00:00:00.000Z

let date = new Date("2025-12-30");
console.log(date); //2025-12-30T00:00:00.000Z

//new Date(year, month, date, hours, minutes, seconds, ms)

let newDate = new Date(2000, 7, 13);
console.log(newDate); //2000-08-12T18:30:00.000Z

let getDateTime = new Date();
console.log(getDateTime);

console.log("Year: " +getDateTime.getFullYear());
console.log("Year: " +getDateTime.getUTCFullYear());
console.log("Date: " +getDateTime.getDate());
console.log("Day: " +getDateTime.getDay());
console.log("Month: " +getDateTime.getMonth());
console.log("Hours: " +getDateTime.getHours());
console.log("Minutes: " +getDateTime.getMinutes());
/* 
2025-12-30T10:30:26.414Z  (hr calcuated by UTC - 5.30)

    Year: 2025
    Year: 2025
    Date: 30
    Day: 2 // 0-sunday,..6-staturday.
    Month: 11 // 0-Jan ...11-December.
    Hours: 15
    Minutes: 59
*/