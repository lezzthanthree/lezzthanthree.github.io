(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear()

        console.log(today);

    // Set date
        let dayOfTermination = new Date("2023-03-31T07:00:00+00:00"),
        ddTerminate = String(dayOfTermination.getDate()).padStart(2, "0"),
        mmTerminate = String(dayOfTermination.getMonth() + 1).padStart(2, "0"),
        yyyyTerminate = dayOfTermination.getFullYear(),
        HH = String(dayOfTermination.getHours()).padStart(2, "0"),
        MM = String(dayOfTermination.getMinutes()).padStart(2, "0");
    
    today = mm + "/" + dd + "/" + yyyy;
    stringTermination = mmTerminate + "/" + ddTerminate + "/" + yyyyTerminate + " " + HH + ":" + MM;
    
    const countDown = new Date(dayOfTermination).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            document.getElementById("finalDate").innerText = stringTermination;
  
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "Terminated";
            document.getElementById("countdown").style.display = "none";
            // document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());