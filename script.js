  let currentSlide = 0;
        const carousel = document.getElementById('carousel');
        const indicators = document.querySelectorAll('.indicator');
        const totalSlides = 3;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
            
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentSlide);
            });
        }

        function moveCarousel(direction) {
            currentSlide += direction;
            
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
            
            updateCarousel();
        }

        function goToSlide(index) {
            currentSlide = index;
            updateCarousel();
        }

        // Auto-play (opcional)
        setInterval(() => {
            moveCarousel(1);
        }, 4000); // Muda a cada 4 segundos