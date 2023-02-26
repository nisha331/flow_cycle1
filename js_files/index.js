//ENTER key
document.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    Calculator();
  }
});

let butt=document.getElementById("log-dates-btn")

function toggle(ele) {
  var cont = document.getElementById("cont");

  cont.style.display = cont.style.display == "none" ? "block" : "none";
}

const calender=document.getElementById("cont");
let calender1=window.getComputedStyle(calender).getPropertyValue("display");
const log=document.getElementById("btn1");

log.addEventListener("click",(e)=>{
  if(calender1!=="none"){
    calender.style.display="none";
    calender1="none"
  }
  else{
    calender.style.display="block";
    calender1="block";
  }
});
function Calculator() {
  console.log("In");
  let userinput = document.getElementById("Day").value;
  let y1 = parseInt(userinput.slice(0, 4));
  let m1 = parseInt(userinput.slice(5, 7));
  let d1 = parseInt(userinput.slice(8, 10));
  let y2 = "";
  let m2 = "";
  let d2 = "";
  let sum = d1 + 28;
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  //wrong DATE
  if (userinput == null || userinput == "") {
    document.getElementById("result").innerHTML = "**Choose a date please!";
    return false;
  } else if ((y1 % 4 == 0 && y1 % 100 == 0 && y1 % 400 != 0) || y1 % 4 != 0) {
    // console.log("non leap");
    if (m1 == 02) {
      //FEB
      m2 = m1 + 1;
      d2 = d1;
      y2 = y1;
    } else if (m1 == 04 || m1 == 06 || m1 == 09 || m1 == 11) {
      //30days
      m2 = m1 + 1;
      y2 = y1;
      if (sum > 30) {
        d2 = sum - 30;
      } else {
        d2 = sum;
      }
    } else if (m1 == 12) {
      //DEC
      m2 = 01;
      y2 = y1 + 1;
      if (sum > 31) {
        d2 = sum - 31;
      } else {
        d2 = sum;
      }
    } else {
      //31days
      m2 = m1 + 1;
      y2 = y1;
      if (sum > 31) {
        d2 = sum - 31;
      } else {
        d2 = sum;
      }
    }

    let diff=getDaysSinceDate(d2,m2,y2)
    let message
    if(diff<0){
      message="Period in "+parseInt((-1)*diff+1)+" days"
    }
    else{
      message="your period should have been " + parseInt(diff-1) +" days ago"
    }
    document.getElementById("infobox").innerHTML=""
    document.getElementById("result").innerHTML =
    `${message}
    <button id="edit-btn" onlclick="load()">Edit Period Dates</button>
  `  
  document.getElementById("edit-btn").addEventListener("click",load)

  } else {
    // console.log("leap");
    if (m1 == 02) {
      //FEB
      m2 = m1 + 1;
      y2 = y1;
      if (sum > 29) {
        d2 = sum - 29;
      } else {
        d2 = sum;
      }
    } else if (m1 == 04 || m1 == 06 || m1 == 09 || m1 == 11) {
      //30days
      m2 = m1 + 1;
      y2 = y1;
      if (sum > 30) {
        d2 = sum - 30;
      } else {
        d2 = sum;
      }
    } else if (m1 == 12) {
      //DEC
      m2 = 01;
      y2 = y1 + 1;
      if (sum > 31) {
        d2 = sum - 31;
      } else {
        d2 = sum;
      }
    } else {
      //31days
      m2 = m1 + 1;
      y2 = y1;
      if (sum > 31) {
        d2 = sum - 31;
      } else {
        d2 = sum;
      }
    }
    let diff=getDaysSinceDate(d2,m2,y2)
    let message
    if(diff<0){
      message="Period in "+parseInt((-1)*diff+1)+" days"
    }
    else{
      message="your period should have been " + parseInt(diff-1)+" days ago"
    }
    document.getElementById("result").innerHTML =
      message
  }
}


function getDaysSinceDate(d2, m2, y2) {
  const currentDate = new Date();
  const date2 = new Date(`${m2}/${d2}/${y2}`);
  const diffTime = (currentDate - date2);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return diffDays;
}


function load(){
  window.location.href="index.html"
  
}