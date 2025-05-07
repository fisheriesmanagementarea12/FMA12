function updateTime() {
    const now = new Date();
    const options = { 
        weekday: "long", 
        year: "numeric", 
        month: "long", 
        day: "numeric", 
        hour: "2-digit", 
        minute: "2-digit", 
        second: "2-digit",
        timeZone: "Asia/Manila"
    };
    document.getElementById("current-time").innerText = now.toLocaleString("en-US", options);

}

setInterval(updateTime, 1000);
updateTime();

document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(e) {
        if (window.innerWidth > 992 || !this.classList.contains('show')) {
            window.location.href = this.href;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded");

    // Enable Bootstrap Carousel Auto Slide
    var myCarousel = document.querySelector("#heroCarousel");
    if (myCarousel) {
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 3000, // Change slide every 3 seconds
            ride: "carousel"
        });
    }
    
    let timeout;
    let openDropdown = null; // Track the currently open dropdown
    let openSubmenu = null; // Track the currently open submenu

    // Handle main dropdown hover delay
    document.querySelectorAll(".dropdown").forEach((dropdown) => {
        let menu = dropdown.querySelector(".dropdown-menu");

        dropdown.addEventListener("mouseenter", function () {
            clearTimeout(timeout);

            // Close any previously open dropdown before opening a new one
            if (openDropdown && openDropdown !== menu) {
                openDropdown.classList.remove("show");
                openDropdown.style.opacity = "0";
                openDropdown.style.visibility = "hidden";
            }

            timeout = setTimeout(() => {
                menu.classList.add("show");
                menu.style.opacity = "1";
                menu.style.visibility = "visible";
                openDropdown = menu; // Update tracker
            }, 300); // Delay before showing dropdown
        });

        dropdown.addEventListener("mouseleave", function () {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                menu.classList.remove("show");
                menu.style.opacity = "0";
                menu.style.visibility = "hidden";
                openDropdown = null; // Reset tracker
            }, 1000); // Delay before hiding dropdown
        });
    });

    // Handle submenu hover delay
    document.querySelectorAll(".dropdown-submenu").forEach((submenu) => {
        let submenuMenu = submenu.querySelector(".dropdown-menu");

        submenu.addEventListener("mouseenter", function () {
            clearTimeout(timeout);

            // Close previously open submenu before opening a new one
            if (openSubmenu && openSubmenu !== submenuMenu) {
                openSubmenu.classList.remove("show");
                openSubmenu.style.opacity = "0";
                openSubmenu.style.visibility = "hidden";
            }

            timeout = setTimeout(() => {
                submenuMenu.classList.add("show");
                submenuMenu.style.opacity = "1";
                submenuMenu.style.visibility = "visible";
                openSubmenu = submenuMenu; // Update tracker
            }, 1000); // Delay before showing submenu
        });

        submenu.addEventListener("mouseleave", function () {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                submenuMenu.classList.remove("show");
                submenuMenu.style.opacity = "0";
                submenuMenu.style.visibility = "hidden";
                openSubmenu = null; // Reset tracker
            }, 1000); // Delay before hiding submenu
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCollapse = document.querySelector(".navbar-collapse");
  
    // Close navbar when clicking outside
    document.addEventListener("click", function (event) {
      var isClickInsideNav = navbarCollapse.contains(event.target);
      var isClickOnToggler = navbarToggler.contains(event.target);
  
      if (!isClickInsideNav && !isClickOnToggler) {
        var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false
        });
        bsCollapse.hide();
      }
    });
  
    // Close navbar when clicking a direct link (excluding dropdowns)
    var navLinks = document.querySelectorAll(".nav-item a:not(.dropdown-toggle)");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 992) {
          var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });
  });
  
  
/* Charts.js */

document.addEventListener("DOMContentLoaded", function () {
    // Check if Chart.js is loaded
    if (typeof Chart === 'undefined') {
        console.error("Chart.js is not loaded. Make sure you have included the Chart.js CDN.");
        return;
    }

    // Boat Registration Chart
    const boatChartCanvas = document.getElementById('boatRegistrationChart');
    if (boatChartCanvas) {
        const boatCtx = boatChartCanvas.getContext('2d');
        new Chart(boatCtx, {
            type: 'bar',
            data: {
                labels: ['Aklan', 'Antique', 'Batangas', 'Capiz', 'Marinduque', 'Masbate', 'Occidental Mindoro', 'Oriental Mindoro', 'Quezon', 'Romblon'],
                datasets: [{
                    label: 'Number of Boats',
                    data: [2500, 1800, 2700, 1200, 3200, 4100, 1900, 3800, 3400, 7200],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    barThickness: 25
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1000,
                        },
                        grid: {
                            display: true
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                return ` ${context.raw} boats`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Commercial Fishing Chart
    const commercialChartCanvas = document.getElementById('commercialFishingChart2');
    if (commercialChartCanvas) {
        const commercialCtx = commercialChartCanvas.getContext('2d');
        new Chart(commercialCtx, {
            type: "bar",
            data: {
                labels: ["Batangas", "Quezon", "Marinduque", "Occidental Mindoro", "Oriental Mindoro", "Romblon", "Masbate", "Aklan", "Antique", "Capiz"],
                datasets: [{
                    label: "New Registered Commercial Fishing Vessels",
                    data: [40, 210, 0, 0, 120, 20, 0, 40, 0, 0],
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Fishing Gear Chart
    const gearChartCanvas = document.getElementById('fishingGearChart');
    if (gearChartCanvas) {
        const gearCtx = gearChartCanvas.getContext('2d');
        new Chart(gearCtx, {
            type: 'bar',
            data: {
                labels: ["Ring Net", "Bag Net", "Drift Gillnet", "Hook and Line", "Purse Seine", "Tuna Handline", "Modified Circle Gillnet"],
                datasets: [{
                    label: "Number of Registered Gears",
                    data: [420, 100, 75, 50, 10, 1, 1],
                    backgroundColor: "rgba(0, 123, 255, 0.7)"
                }]
            },
            options: {
                responsive: true,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});