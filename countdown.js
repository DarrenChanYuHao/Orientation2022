const orientation_date='08 Sept 2022 00:00:00';

function countdown(){
    const newdate=new Date(orientation_date).getTime()
    const currentdate=new Date().getTime()
    const datediff= (newdate-currentdate)/1000 //difference between the orientation start date and current time in milliseconds
   
    //get value for individual variable
    const days=Math.trunc(datediff/(60*60*24))
    const hours=Math.trunc((datediff/(60*60)%24))
    const minutes=Math.trunc((datediff/60)%60)
    const seconds=Math.trunc(datediff % 60)
    console.log(days)

    document.querySelector('.days').innerHTML= days
    document.querySelector('.hours').innerHTML= hours
    document.querySelector('.minutes').innerHTML= minutes
    document.querySelector('.seconds').innerHTML= seconds
}

setInterval(countdown,1000) //run for every second (1000 millisecond)

//scroll-up function

// document.querySelector(".scroll-up") == scroll
// window.onscroll = function(){
//     if (this.scrollY >= 100){
//         scroll.classList.add("show");
//     }
//     else{
//         scroll.classList.remove("show");
//     }
// };