sh=document.querySelector("#sec"),
mh=document.querySelector("#min"),
hh=document.querySelector("#hr");
const update=()=>{
    let date=new Date(),
    stod=(date.getSeconds()/60)*360,
    mtod=(date.getMinutes()/60)*360,
    htod=(date.getHours()/12)*360;
    sh.style.transform=`rotate(${stod}deg)`;
    mh.style.transform=`rotate(${mtod}deg)`;
    hh.style.transform=`rotate(${htod}deg)`;
};
setInterval(update,1000);
update();
