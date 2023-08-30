document.addEventListener('DOMContentLoaded', function() {
  const greetButton = document.getElementById('greetButton');
  
  greetButton.addEventListener('click', function() {
    const name = prompt('Enter your name:');
    if (name) {
      const greeting = `Привет! Bonjour! Hello! ${name}!`;
      alert(greeting);
    }
  });
});
