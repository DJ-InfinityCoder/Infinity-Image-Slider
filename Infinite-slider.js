function createImageSlider(containerSelector, images, transitionSpeed) {
  const container = document.querySelector(containerSelector);
  const slider = document.createElement('div');
  const sliderDots = document.createElement('div');
  const slideCount = images.length;
  let currentIndex = 0;
  let intervalId;

  slider.classList.add('slider');
  slider.style.display = 'flex';

  const dotStyles = `
      .slider-dots {
          display: flex;
          justify-content: center;
      }

      .dot {
          width: 10px;
          height: 10px;
          background-color: #bbb;
          border-radius: 50%;
          margin: 0 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
      }

      .dot.active {
          background-color: #555;
      }

      .dot.active {
          animation: pulse 0.5s ease infinite alternate;
      }

      @keyframes pulse {
          0% {
              transform: scale(1);
          }
          100% {
              transform: scale(1.2);
          }
      }
  `;

  // Apply styles to the document
  const styleTag = document.createElement('style');
  styleTag.innerHTML = dotStyles;
  document.head.appendChild(styleTag);

  images.forEach((imageSrc, index) => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = 'Slide';
      img.style.width = '100%';
      img.style.height = 'auto';
      slider.appendChild(img);

      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.dataset.index = index;
      dot.addEventListener('click', () => {
          currentIndex = index;
          updateSlider();
      });
      sliderDots.appendChild(dot);
  });

  container.appendChild(slider);
  container.appendChild(sliderDots);

  function nextSlide() {
      currentIndex++;
      updateSlider();
  }

  function updateSlider() {
      slider.style.transition = `transform ${transitionSpeed}s ease`;
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;

      const dots = container.querySelectorAll('.dot');
      dots.forEach((dot, index) => {
          if (index === currentIndex % slideCount) {
              dot.classList.add('active');
          } else {
              dot.classList.remove('active');
          }
      });

      if (currentIndex >= slideCount) {
          setTimeout(() => {
              slider.style.transition = 'none';
              currentIndex = 0;
              slider.style.transform = 'translateX(0)';
          }, transitionSpeed * 1000);
      }
  }

  intervalId = setInterval(nextSlide, transitionSpeed * 1000);
}

// Usage example:
// createImageSlider('.slider-container', ['image1.jpg', 'image2.jpg', 'image3.jpg'], 3(seconds));
