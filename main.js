// Navbar toggle for mobile
document.getElementById('menu-icon').addEventListener('click', function () {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
});

// Toggle search box
document.getElementById('search-icon').addEventListener('click', function () {
  const searchBox = document.querySelector('.search-box');
  searchBox.classList.toggle('active');
});


// Function to open the Rent Modal
function openRentModal(carName) {
  const rentModal = document.getElementById('rentModal');
  const rentModalTitle = document.getElementById('rent-modal-title');
  
  rentModalTitle.innerText = `Rent ${carName}`;
  rentModal.style.display = 'flex';
}

// Function to open the Details Modal
function openModal(carName) {
  const modal = document.getElementById('carModal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');
  const modalImage = document.getElementById('modal-image');

  // Add custom content for each car
  if (carName === 'Hyundai') {
      modalTitle.innerText = 'Hyundai - Elegant Design';
      modalDescription.innerText = 'The Hyundai is a fuel-efficient sedan perfect for city drives.';
      modalImage.src = 'IMG_V/Hyundai.webp';
  } else if (carName === 'Jaguar') {
      modalTitle.innerText = 'Jaguar - Luxury and Performance';
      modalDescription.innerText = 'Experience luxury and performance with the Jaguar.';
      modalImage.src = 'IMG_V/Jaguar.webp';
  } else if (carName === 'Mustang') {
      modalTitle.innerText = 'Ford Mustang - Bold and Powerful';
      modalDescription.innerText = 'The Mustang is perfect for those who want to make a statement.';
      modalImage.src = 'IMG_V/Mustang.webp';
  }

  modal.style.display = 'flex';
}

// Function to close the Details Modal
function closeModal() {
  const modal = document.getElementById('carModal');
  modal.style.display = 'none';
}

// Function to close the Rent Modal
function closeRentModal() {
  const rentModal = document.getElementById('rentModal');
  rentModal.style.display = 'none';
}

// Ensure modal closes when clicking outside
window.addEventListener('click', function(event) {
  const carModal = document.getElementById('carModal');
  const rentModal = document.getElementById('rentModal');
  if (event.target === carModal) {
    closeModal();
  } else if (event.target === rentModal) {
    closeRentModal();
  }
});

// Close both modals on page load
document.addEventListener("DOMContentLoaded", function() {
  closeModal();
  closeRentModal();
});


// Car rental booking form submission - Redirect to WhatsApp
const rentForm = document.querySelector('#rentForm');
rentForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pickupDate = document.getElementById("pickup-date").value.trim();
    const returnDate = document.getElementById("return-date").value.trim();

    // Validate input fields
    if (!name || !email || !pickupDate || !returnDate) {
        alert('Veuillez remplir tous les champs.');
        return;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
    }

    // Construct the WhatsApp message
    const whatsappMessage = `Hello,%0A%0AFull Name: ${encodeURIComponent(name)}%0AEmail Address: ${encodeURIComponent(email)}%0APick-up Date: ${encodeURIComponent(pickupDate)}%0AReturn Date: ${encodeURIComponent(returnDate)}%0A%0ARegards,`;
    const whatsappURL = `https://wa.me/212629422435?text=${whatsappMessage}`;
    
    // Open WhatsApp link
    window.open(whatsappURL, "_blank");
});


$(document).ready(function () {
  if ($('.car-list').hasClass('slick-initialized') === false) {
    $('.car-list').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  }
});


  
  // Handle active class on navbar items
  function handleNavbarActiveClass() {
    const navbarItems = document.querySelectorAll('.navbar a');
  
    navbarItems.forEach(item => {
      item.addEventListener('click', function () {
        // Remove active class from all items
        navbarItems.forEach(link => link.classList.remove('active'));
        // Add active class to the clicked item
        this.classList.add('active');
      });
    });
  }
  
  handleNavbarActiveClass();
  
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Construire le message pour WhatsApp
    const whatsappMessage = `Hello,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}%0A%0ARegards,`;
    
    // Lien WhatsApp avec le numéro de téléphone et le message
    const whatsappURL = `https://wa.me/212629422435?text=${whatsappMessage}`;

    // Ouvrir le lien WhatsApp dans une nouvelle fenêtre
    window.location.href = whatsappURL;
    
    // Afficher un message de confirmation (optionnel)
    const formMessage = document.getElementById('form-message');
    formMessage.textContent = "Your message has been sent via WhatsApp!";
    formMessage.style.color = "green";
});

  
  // Progress Bar
  function updateProgressBar() {
    const scrollPos = document.documentElement.scrollTop;
    const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollPos / winHeight) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";    
  }
  
  window.addEventListener('scroll', updateProgressBar);
  
  // Fonction pour mettre à jour la classe active en fonction de la position de défilement
  function updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
  
    let currentSection = '';
  
    // Obtenez la position de la fenêtre par rapport aux sections
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 80; // Ajustement pour la barre de navigation
      const sectionHeight = section.clientHeight;
  
      // Dernière section (Contact Us)
      if (index === sections.length - 1) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          currentSection = section.getAttribute('id');
        }
      } else {
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      }
    });
  
    // Ajouter ou retirer la classe 'active' selon la section en cours
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateActiveNavOnScroll);
  
  // Filter cars based on category
  function filterCars() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const carItems = document.querySelectorAll('.car-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
  
        const filterValue = this.getAttribute('data-filter');
  
        carItems.forEach(car => {
          // Vérifie la catégorie ou affiche toutes les voitures
          if (filterValue === 'all' || car.getAttribute('data-category') === filterValue) {
            car.style.display = 'block';
          } else {
            car.style.display = 'none';
          }
        });
      });
    });
  }
  
  filterCars();
  

  function toggleTestimonialBox() {
    const testimonialBox = document.getElementById('testimonialBox');
    
    // Check if testimonialBox exists before accessing classList
    if (testimonialBox) {
      testimonialBox.classList.toggle('active');
    } else {
      console.warn("Element 'testimonialBox' not found.");
    }
  }
  
  document.getElementById('openFormBtn').addEventListener('click', function () {
    const testimonialForm = document.getElementById('testimonialForm');
    
    // Toggle the display property between 'block' and 'none'
    if (testimonialForm.style.display === 'none' || testimonialForm.style.display === '') {
      testimonialForm.style.display = 'block';
    } else {
      testimonialForm.style.display = 'none';
    }
  });
  
  // Optional: Prevent form submission and simulate a submission message
// Event listener for form submission
document.getElementById('testimonialSubmitForm').addEventListener('submit', function(event) {
  event.preventDefault();

      // Récupérer les valeurs du formulaire
      const nam = document.getElementById('nam').value.trim();
      const testimonialText = document.getElementById('testimonial').value.trim();
      const rating = document.getElementById('rating').value;
      

      
  // Create a new testimonial element
  const testimonialItem = document.createElement('div');
  testimonialItem.classList.add('testimonial-item');

  // Add the quote icon
  const quoteIcon = document.createElement('i');
  quoteIcon.classList.add('bx', 'bxs-quote-alt-left', 'quote-icon');
  quoteIcon.setAttribute('aria-hidden', 'true');
  testimonialItem.appendChild(quoteIcon);

  // Add the testimonial text
  const testimonialTextElem = document.createElement('p');
  testimonialTextElem.classList.add('testimonial-text');
  testimonialTextElem.textContent = `"${testimonialText}"`;
  testimonialItem.appendChild(testimonialTextElem);

  // Add the rating as stars
  const ratingElem = document.createElement('div');
  ratingElem.classList.add('rating');
  for (let i = 1; i <= 5; i++) {
      const starIcon = document.createElement('i');
      starIcon.classList.add('bx', i <= rating ? 'bxs-star' : 'bx-star'); // filled star if within rating, outline otherwise
      starIcon.setAttribute('aria-hidden', 'true');
      ratingElem.appendChild(starIcon);
  }
  testimonialItem.appendChild(ratingElem);

  // Add the client name
  const clientNameElem = document.createElement('h4');
  clientNameElem.classList.add('client-name');
  clientNameElem.textContent = nam;
  testimonialItem.appendChild(clientNameElem);

  // Add the new testimonial to the testimonial list
  document.querySelector('.testimonial-list').appendChild(testimonialItem);

  // Clear the form
  this.reset();
  
  // Hide the testimonial form after submission
  document.getElementById('testimonialForm').style.display = 'none';

  alert('Thank you for your feedback!');
});


  

  