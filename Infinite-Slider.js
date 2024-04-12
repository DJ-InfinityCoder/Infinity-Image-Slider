function createImageSlider(containerSelector, imageUrls, transitionTime, slideTime) {
    const container = document.querySelector(containerSelector);
    container.innerHTML = `
        <div class="slider-container">
            <div class="slider"></div>
            <div class="slider-tracker"></div>
        </div>
    `;
    const sliderContainer = container.querySelector('.slider-container');
    const slider = sliderContainer.querySelector('.slider');
    const tracker = sliderContainer.querySelector('.slider-tracker');

    // Create image elements
    imageUrls.forEach((url, index) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = `Image ${index + 1}`;
        slider.appendChild(img);

        // Create dot for tracker
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-index', index);
        tracker.appendChild(dot);
    });

    const slides = slider.querySelectorAll('img');
    const slideCount = slides.length;
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    // Function to update active dot
    function updateTracker(index) {
        const dots = tracker.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('active');
            if (i === index) {
                dot.classList.add('active');
            }
        });
    }

    // Function to navigate to slide on dot click
    function goToSlide(index) {
        currentIndex = index;
        slider.style.transition = `transform ${transitionTime / 1000}s ease`;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateTracker(currentIndex);
    }

    // Add click event listeners to dots
    tracker.addEventListener('click', (event) => {
        if (event.target.classList.contains('dot')) {
            const index = parseInt(event.target.getAttribute('data-index'));
            goToSlide(index);
        }
    });

    function nextSlide() {
        currentIndex++;
        slider.style.transition = `transform ${transitionTime / 1000}s ease`;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateTracker(currentIndex);

        if (currentIndex >= slideCount - 1) {
            setTimeout(() => {
                slider.style.transition = 'none';
                currentIndex = 0;
                slider.style.transform = `translateX(0)`;
                updateTracker(currentIndex);
            }, transitionTime); // Ensure smooth transition before resetting
        }
    }

    setInterval(nextSlide, slideTime); // Change slide every specified time
}
