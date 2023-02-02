timetable= [
    {
        "day": "monday",
        "time": [
            "9:00",
            "9:30"
        ],
        "avability": [
            true,
            false
        ]
    },
    {
        "day": "tuesday",
        "time": [
            "9:00",
            "9:30"
        ],
        "avability": [
            true,
            false
        ]
    }
]
timetable.map((val)=>{
    val.avability.map((w)=>{
        if(val.day=="monday"){
            
            console.log(w)
        }
    })
})