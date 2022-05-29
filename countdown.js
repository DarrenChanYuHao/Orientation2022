const orientation_date='08 Sept 2022 00:00:00';

const countdown= setInterval(function(){
    const newdate=new Date(orientation_date).getTime()
    const currentdate=new Date().getTime()
    const datediff= (newdate-currentdate)/1000 //difference between the orientation start date and current time in milliseconds
   
    //get value for individual variable
    const days=Math.trunc(datediff/(60*60*24))
    const hours=Math.trunc((datediff/(60*60)%24))
    const minutes=Math.trunc((datediff/60)%60)
    const seconds=Math.trunc(datediff % 60)
    console.log(days)
    if (seconds < 0) {
        clearInterval(countdown);
        return;
      }
    document.querySelector('.days').innerHTML= days
    document.querySelector('.hours').innerHTML= hours
    document.querySelector('.minutes').innerHTML= minutes
    document.querySelector('.seconds').innerHTML= seconds
},1000) //run for every second (1000 millisecond)

//scroll-up function
var scrolltop = document.querySelector(".scrollup");

function gototop() {
    if (window.pageYOffset > 100 ) {
        scrolltop.classList.add("displaybtn");
    }
    else{
        scrolltop.classList.remove("displaybtn")
    }
};
document.addEventListener("scroll", gototop);

scrolltop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    });
});

