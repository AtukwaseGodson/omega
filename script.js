
// Function to load and insert HTML content
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        console.error('Error loading component:', error);
    }
}

// Load header and footer
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header', 'header.html');
    loadComponent('footer', 'footer.html');
});

//sticky nav
window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop; // Get the offset position of the navbar

function stickyNav() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("fixed"); // Add the fixed class when you reach its scroll position
    } else {
        navbar.classList.remove("fixed"); // Remove the fixed class when you leave the scroll position
    }
}

function toggleNav() {
    var nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive"); // Toggle the responsive class
}

// Hide the navigation when a link is clicked
var navLinks = document.querySelectorAll('.topnav a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        var nav = document.getElementById("myTopnav");
        nav.classList.remove("responsive"); // Hide the nav
    });
});

// Add event listener to the toggle button
var toggleButton = document.querySelector('.topnav .icon');
if (toggleButton) {
    toggleButton.addEventListener('click', toggleNav); // Ensure the toggle function is called
}

document.getElementById("showMoreBtn").addEventListener("click", function() {
    var hiddenProjects = document.querySelectorAll("#projectGrid .card[style='display: none;']");
    for (var i = 0; i < hiddenProjects.length; i++) {
        hiddenProjects[i].style.display = "block"; // Show hidden projects
    }
    if (hiddenProjects.length === 0) {
        this.style.display = "none"; // Hide the button if no more projects are hidden
    }
});
