// Write your JavaScript code here.
// Remember to pay attention to page loading{!
window.addEventListener('load', function () { //loads HTML elements into window

});

const flightStatus = document.getElementById('flightStatus');//object changes to shuttle in flight when takeoff clicked
const shuttleBackground = document.getElementById('shuttleBackground');// object changes background color when takeoff clicked
const spaceShuttleHeight = document.getElementById('spaceShutteHeigtht')//objects to increase height when takeoff clicked
const takeOffButton = document.getElementById('takeoff'); // object gives takeoff button
takeOffButton.addEventListener('click', function () { // click event listening for
   let shouldTakeOff = window.confirm('confirm that the shuttle is ready for takeoff') // creates confirmation window message
 if(shouldTakeOff) { // if clicked ok all these things happen
flightStatus.innerHTML = "Shuttle in flight";// changes message if clicked
shuttleBackground.style.backgroundColor = "blue";// changes background color if clicked
spaceShuttleHeight.innerHTML += 10000; //increases by 10000 if clicked
}


});