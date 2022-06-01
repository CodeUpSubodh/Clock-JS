const secondHand=document.querySelector('.second-hand');
const minuteHand=document.querySelector('.minute-hand');
const hourHand=document.querySelector('.hour-hand');


function setTime(){
    const date=new Date();

    const seconds=date.getSeconds();
    const secDeg=seconds*6+90;
    if(secDeg==90){
        secondHand.style.transition='none';
    }
    secondHand.style.transform=`rotate(${secDeg}deg)`;

    const minutes=date.getMinutes();
    const minDeg=minutes*6+90;
    minuteHand.style.transform=`rotate(${minDeg}deg)`;

    const hours=date.getHours();
    const hourDeg=hours*30+90;
    hourHand.style.transform=`rotate(${hourDeg}deg)`;

}

setInterval(setTime,1000);
