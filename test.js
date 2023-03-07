// timetable= [
//     {
//         "day": "monday",
//         "time": [
//             "9:00",
//             "9:30"
//         ],
//         "avability": [
//             true,
//             false
//         ]
//     },
//     {
//         "day": "tuesday",
//         "time": [
//             "9:00",
//             "9:30"
//         ],
//         "avability": [
//             true,
//             false
//         ]
//     }
// ]
// timetable.map((val)=>{
//     val.avability.map((w)=>{
//         if(val.day=="monday"){
            
//             console.log(w)
//         }
//     })
// })

let a=[4,5,4,3,5,2]
// a.filter((num,i,ar)=>{ar.indexOf(num)==i});
// console.log(a);

var new1 = Array.from(new Set(a));
console.log(new1);