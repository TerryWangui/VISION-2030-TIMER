// grabbing all the countdown timers
const countItems=document.querySelectorAll(".timer span");

// variables to store the future date
var year=2030;
var month=0;
var day=1;
var hours=12;
var minutes=0;
var seconds=0;
const futureDate= new Date(year,month,day,hours,minutes,seconds);
var endTime=futureDate.getTime();

// function to calculate the remaining time in milliseconds
function getremainingTime(){
    var currentTime=new Date().getTime();
    var remainingTime=endTime-currentTime; 
    /*
    1 sec=1000ms
    1 min=60000ms-60*1000
    1 hr=3600000ms-60*60*1000
    1 day=86400000ms-24*60*60*1000
    1 month=30*24*60*60*1000
    1 year=12*30*24*60*60*1000
    */
   const oneYear=12*30*24*60*60*1000;
   const oneMonth=30*24*60*60*1000;
   const oneDay=24*60*60*1000;
   const oneHour=60*60*1000;
   const oneMinute=60*1000;
   const oneSecond=1000;

//    dividing the remaining milliseconds into years,monts,days,hours,minutes,seconds
   var rYears=Math.floor(remainingTime/oneYear);
   var rMonths=Math.floor((remainingTime%oneYear)/oneMonth);
   var rDays=Math.floor((remainingTime%oneMonth)/oneDay);
   var rHours=Math.floor((remainingTime%oneDay)/oneHour);
   var rMinutes=Math.floor((remainingTime%oneHour)/oneMinute);
   var rSeconds=Math.floor((remainingTime%oneMinute)/oneSecond);

   const rValues=[rYears,rMonths,rDays,rHours,rMinutes,rSeconds];

//    function to format the dates into double digits
   function formatDigits(item){
    if(item<10){
        return`0${item}`;
        
    }
    return item;
   }

//    updating the remaining time in the countdown timers
   countItems.forEach((item,index)=>{
    item.innerHTML= formatDigits(rValues[index]);
   });

   if(remainingTime<0){
    clearInterval(countDown);
   }

}

// setting intervals to update countdown timers every one second
let countDown=setInterval(getremainingTime,1000);
getremainingTime();
