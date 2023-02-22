//ENTER key
document.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    Calculator();
  }
});
const calender=document.getElementById("cont");
var calender1=window.getComputedStyle(calender).getPropertyValue("display");
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
  var userinput = document.getElementById("Day").value;
  var y1 = parseInt(userinput.slice(0, 4));
  var m1 = parseInt(userinput.slice(5, 7));
  var d1 = parseInt(userinput.slice(8, 10));
  var y2 = "";
  var m2 = "";
  var d2 = "";
  var sum = d1 + 28;
  var monthNames = [
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
    document.getElementById("result").innerHTML =
      d2 + " " + monthNames[m2 - 1] + " " + y2;
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
    document.getElementById("result").innerHTML =
      d2 + " " + monthNames[m2 - 1] + " " + y2;
  }
}
