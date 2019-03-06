var work; 
var rest;

function inputWorkRest(){
  work=document.getElementById("work").value*60;
  rest=document.getElementById("rest").value*60;
}

function secToMs(d) {
    d = Number(d);
    var m = Math.floor(d % 3600 / 60).toString();
    if(m < 10){
      m="0"+m;
    }
    var s = Math.floor(d % 3600 % 60).toString();
    if (s < 10){
      s="0"+s;
    }
    return m+":"+s
}

function timer(){
  if(document.getElementById("work").value==0 || document.getElementById("rest").value==0){
    return;
  }
  id=setInterval(function(){
    while(work>-1){
      document.getElementById("timer").innerHTML=secToMs(work)+" of <strong>work</strong> left...";
      work--;
      return;
  };
    while(rest>-1){
      document.getElementById("timer").innerHTML=secToMs(rest)+" of <strong>rest</strong> left...";
      rest--;
      return;
  };
    inputWorkRest();
  },1000)
};
function resetter(){
  document.getElementById("work").value="";
  document.getElementById("rest").value="";
  work=document.getElementById("work").value="";
  rest=document.getElementById("rest").value="";
  document.getElementById("timer").innerHTML="this is a <strong>pomodoro clock</strong>..."
  stopper();
};

function stopper(){
  clearInterval(id);
  return;
};

