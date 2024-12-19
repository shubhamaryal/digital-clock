function updateTime(){
    const time = new Date();
    const hour = time.getHours().toString().padStart(2,0);
    const min = time.getMinutes().toString().padStart(2,0);
    const sec = time.getSeconds().toString().padStart(2,0);
    const completeTime= `${hour}:${min}:${sec}`;

    document.getElementById("clock").textContent = completeTime;
}

updateTime();
setInterval(updateTime,1000);

// 

function updateTime1(){
    const time1 = new Date();
    let hour1 = time1.getHours();
    const text=hour1>=12? "PM":"AM";
    hour1 = hour1%12 || 12;
    hour1=hour1.toString().padStart(2,0);
    const min1 = time1.getMinutes().toString().padStart(2,0);
    const sec1 = time1.getSeconds().toString().padStart(2,0);
    const completeTime1= `${hour1}:${min1}:${sec1} ${text}`;

    document.getElementById("clock1").textContent = completeTime1;
}

updateTime1();
setInterval(updateTime1,1000);