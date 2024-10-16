// Example: toggle a mobile menu
const nav = document.querySelector('nav ul'); // Select the <ul> inside <nav>
const toggleButton = document.querySelector('.toggle-menu'); // Select the mobile menu button

// Add event listener to toggle menu
toggleButton.addEventListener('click', () => {
    nav.classList.toggle('open'); // Toggle the "open" class on the <ul> element
});
