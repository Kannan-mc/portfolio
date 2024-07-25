// ==================== toggle icon navbar ====================

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// ==================Scroll section active links===============

var excludedPages = [
    '/mariner',
    '/service-engineer',
    '/commissioning-engineer',
    '/certifications',
    '/other-cert',
    '/aboutme',
    '/cat-certifications'
];

// Check if the current page should be excluded
var currentPage = window.location.pathname;
var excludeCurrentPage = excludedPages.includes(currentPage);

// If the current page is not excluded, run the script
if (!excludeCurrentPage) {
    // Your common script code goes here
    let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach (sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
             navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
        };
     });
}



//   THIS IS ORGINAL CODE ABOVE CODE MODIFIED TO PREVENT SCROLL REVEAL FOR EACH PATH (PAGE)
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach (sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height){
//              navLinks.forEach(links=> {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//              });
//         };
//      });
    //    =====================Sticky navbar====================================
        let header =  document.querySelector('header')    
        header.classList.toggle('sticky', window.scrollY > 100);

        // ======= remove toggle icon and navbar when click navbar link(scroll)=======

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
};

// ============scroll reveal=====
ScrollReveal({
    // reset:true,
    distance: '90px',
    duration: 3500,
    delay:4
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.about-content h3', {origin: 'bottom'}); 
ScrollReveal().reveal('.home-content p, .about-content,.vessel-text', {origin: 'right'});

// =======typed js======
const typed= new Typed('.multiple-text', {
    strings:['Mariner', 'Marine Engineer','Mechanical Engineer','Commissioning Engineer'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true
});
// ======== prevent right click on image=====
document.addEventListener('contextmenu', function (e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault(); // Prevent default right-click behavior
    }
}, false);

// const typed1= new Typed('.logo', {
//     strings:['Portfolio', 'Resume'],
//     typeSpeed: 150,
//     backSpeed: 200,
//     backDelay: 1000,
//     loop: true
// });

// ***********************************************************************************************

// pop up button for cv

document.getElementById("cvbutton").addEventListener("click", (event) => {
    event.preventDefault(); 
    document.getElementById("popupBox").classList.add("active");
  });
  
  const closePopup = () => {
    document.getElementById("popupBox").classList.remove("active");
};

// pop up for COntact form

const resetform = (event) => {
    // event.preventDefault()
    
    // Perform form submission logic (e.g., AJAX request)
    // For demonstration purposes, we'll simulate a delay using setTimeout
    setTimeout(() => {
      // Reset the form after successful submission
      document.getElementById("contactform").reset();
      
      // Show success message in a popup window
      
    }, 1000); // Simulated delay of 1 second (adjust as needed)
    
    return false; // Prevent the form from submitting to the action URL
  };

  document.getElementById("contactform").addEventListener("submit", resetform);


