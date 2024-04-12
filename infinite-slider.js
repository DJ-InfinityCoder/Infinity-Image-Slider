function createImageSlider(containerIdOrClass, imagesUrls, transitionTime, slideTime, dotSize) {
    const container = document.querySelector(containerIdOrClass);
    if (!container) {
      console.error('Container element not found.');
      return;
    }
  
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('slider-container');
  
    const slider = document.createElement('div');
    slider.classList.add('slider');
  
    const sliderTracker = document.createElement('div');
    sliderTracker.classList.add('slider-tracker');
  
    // Add images to slider
    imagesUrls.forEach(imageUrl => {
      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = 'Image';
      img.style.width = '100%'; // Ensure images fill the container
      img.style.objectFit = 'cover'; // Cover the container without distorting aspect ratio
      slider.appendChild(img);
    });
  
    // Add slider tracker dots
    imagesUrls.slice(0, -1).forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('dot');
      dot.style.width = dotSize + 'px';
      dot.style.height = dotSize + 'px';
      sliderTracker.appendChild(dot);
    });
  
    sliderContainer.appendChild(slider);
    sliderContainer.appendChild(sliderTracker);
    container.appendChild(sliderContainer);
  
    const slides = slider.querySelectorAll('img');
    const slideCount = slides.length;
    const containerWidth = container.clientWidth;
    let currentIndex = 0;
    const dots = sliderTracker.querySelectorAll('.dot');
  
    function updateTracker(index) {
      dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index || (index === slideCount - 1 && i === 0)) {
          dot.classList.add('active');
        }
      });
    }
  
    function goToSlide(index) {
      currentIndex = index;
      slider.style.transition = `transform ${transitionTime / 1000}s ease`;
      slider.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
      updateTracker(currentIndex);
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToSlide(index);
      });
    });
  
    function nextSlide() {
      currentIndex++;
      if (currentIndex >= slideCount) {
        currentIndex = 0;
        slider.style.transition = 'none';
        slider.style.transform = `translateX(0)`;
        updateTracker(currentIndex);
      } else {
        slider.style.transition = `transform ${transitionTime / 1000}s ease`;
        slider.style.transform = `translateX(-${currentIndex * containerWidth}px)`;
        updateTracker(currentIndex);
      }
    }
  
    setInterval(nextSlide, slideTime);
  }
  
  // CSS
  const styles = `
    .slider-container {
      width: 100%;
      overflow: hidden;
      position: relative;
    }
  
    .slider {
      display: flex;
    }
  
    /* Remove styles from images */
    .slider img {
      margin: 0; /* Remove any default margin */
      object-fit: cover; /* Ensure images cover the container without distortion */
      flex: 0 0 auto; /* Prevent images from growing or shrinking */
    }
  
    /* Add CSS for slider tracker */
    .slider-tracker {
      position: absolute;
      bottom: 10px;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
    }
  
    .slider-tracker div {
      background-color: #ccc;
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
    }
  
    .slider-tracker div.active {
      background-color: #333;
    }
  `;
  
  // Append styles to head
  const styleTag = document.createElement('style');
  styleTag.textContent = styles;
  document.head.appendChild(styleTag);
  
