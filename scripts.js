// Write your JavaScript code here.
// Remember to pay attention to page loading!

function liftOffStatus (){
  let statusFlight = document.getElementById("flightStatus");
  let backgroundShuttle = document.getElementById("shuttleBackground");
  let shuttleHeight = document.getElementById("spaceShuttleHeight");
  let button = document.querySelector("button");
  let rocketImg = document.getElementById("rocket")

  takeoff.addEventListener("click", function(event) {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff");

    if (response) {
      flightStatus.innerHTML = "Shuttle in flight";
      backgroundShuttle.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = "10,000"
    } else {
      flightStatus.innerHTML = "Shuttle not ready";
      backgroundShuttle.style.backgroundColor = "red";
    }
  });

  landing.addEventListener("click", function(event) {
    let alert = window.alert("The shuttle is landing. Landing gear engaged.");

    statusFlight.innerHTML = "The shuttle has landed.";
    backgroundShuttle.style.backgroundColor = "green";
    shuttleHeight.innerHTML = "0";

  });

  button.addEventListener("click", function(event) {

    if (document.getElementsByClassName("up")) {
      rocketImg.style.up = "10px";
    } else if (button.getElementsByClassName) {
      console.log("crap");
    }
    
    // rocketImg.style.position
  })

  
}




window.onload = liftOffStatus;



