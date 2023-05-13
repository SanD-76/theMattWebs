const web = setTimeout(myWeb, 3000);
  function myWeb() {
  document.getElementById("web").innerHTML = "Websites";
  }
 
const log = setTimeout(myLog, 4000);
 function myLog() {
  document.getElementById("log").innerHTML = "Logos";
  }

const app = setTimeout(myApp, 5000);
 function myApp() {
 document.getElementById("app").innerHTML = "Apps";
 }
 
const and = setTimeout(myAnd, 6000);
 function myAnd() {
  document.getElementById("and").innerHTML = "and more...";
  }
  
function myFoot() {
 document.getElementById("foot").style.visibility = "visible";
}  
