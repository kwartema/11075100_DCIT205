document.addEventListener('DOMContentLoaded', function() {



var greetingElement = document.getElementById('greeting');
var currentTime = new Date().getHours();

var greeting;
if (currentTime >= 5 && currentTime <12){
  greeting = 'Good morning';
} else if (currentTime >= 12 && currentTime < 18){
  greeting = 'Good afternoon';
} else{
  greeting = 'Good evening';
}
var additionalText = ' Welcome to UG Computer Science Department!';
var fullGreeting = greeting + ',' + additionalText;
greetingElement.textContent = fullGreeting;
});
