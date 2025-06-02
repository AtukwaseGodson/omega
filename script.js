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
    loadComponent('footer', 'footer.html');
});

window.onscroll = function() {
    stickyNav();
};

// Get the navbar element by its ID
var navbar = document.getElementById("myTopnav");
// Get the initial offset position of the navbar (though not directly used in this specific scroll check)
var sticky = navbar.offsetTop;

// Function to handle the sticky behavior of the navigation bar
function stickyNav() {
    // Check if the vertical scroll position is greater than 0
    if (window.scrollY > 0) {
        // If scrolled down, add the 'fixed' class to make the navbar fixed
        navbar.classList.add("fixed");
    } else {
        // If at the top of the page, remove the 'fixed' class
        navbar.classList.remove("fixed");
    }
}

// Call stickyNav once on load to set the initial state if the page is loaded scrolled
stickyNav();
function toggleNav() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive"; // Add the responsive class
    } else {
        nav.className = "topnav"; // Remove the responsive class
    }
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

//tabs
function openTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Simulate a click on the tab link to open it
document.addEventListener('DOMContentLoaded', function() {
    // Check if the URL contains a hash, 
    if (window.location.hash) {
        // Get the ID from the hash, 
        const tabId = window.location.hash.substring(1);

        // Get all elements with class="tabcontent" and hide them
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        // Get the specific tab content to display
        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.style.display = "block";
        }
    }
});
