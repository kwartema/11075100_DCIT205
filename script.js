document.addEventListener('DOMContentLoaded', function() {
const greeting = document.getElementById('greeting');
if (greeting) {
const currentTime = new Date().getHours();
const greetingMessage = currentTime < 12 ? 'Good morning': 'Good afternoon';

greeting.textContent = `${greetingMessage}, welcome to UG Computer Science Department!`;
}
});
