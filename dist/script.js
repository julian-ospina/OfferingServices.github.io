const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');

        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        
       

     
        const slides = document.querySelectorAll('.carousel-slide');
        let currentSlide = 0;
      
        function showSlide(index) {
          slides.forEach((slide, i) => {
            if (i === index) {
              slide.classList.add('active');
            } else {
              slide.classList.remove('active');
            }
          });
        }
      
        function nextSlide() {
          currentSlide++;
          if (currentSlide >= slides.length) {
            currentSlide = 0;
          }
          showSlide(currentSlide);
        }
      
        function startCarousel() {
          showSlide(currentSlide);
          setInterval(() => {
            nextSlide();
          }, 5000); // Change slide every 5 seconds
        }
      
        startCarousel(); // Start the carousel
   
      