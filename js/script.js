window.onload = startTime();

function startTime () {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    var t = setTimeout(startTime, 500);
  
    var list = document.getElementsByTagName("h1")[0];

    try{
        list.innerHTML= (h + ":" + m + ":" + s);
    }
    catch(error)
    {
        console.log("Loading time");
    }

   
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}