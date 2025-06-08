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
    
    // Initialize navbar and sticky nav functionality
    const navbar = document.getElementById("myTopnav");
    if (navbar) {
        const sticky = navbar.offsetTop;
        
        // Function to handle the sticky behavior of the navigation bar
        function stickyNav() {
            if (window.scrollY > 0) {
                navbar.classList.add("fixed");
            } else {
                navbar.classList.remove("fixed");
            }
        }
        
        // Add scroll event listener
        window.addEventListener('scroll', stickyNav);
        
        // Call stickyNav once on load to set the initial state
        stickyNav();
    }
});

function toggleNav() {
    var nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
        // Scroll to top when opening the menu
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        nav.className = "topnav";
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
