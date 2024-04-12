# Infinity-Image-Slider </br></hr>
Here is  CDN file for Infinte Image Slider.
```
<script src="https://cdn.jsdelivr.net/gh/DJ-InfinityCoder/Infinity-Image-Slider/InfiniteSlider.js"></script>
```
## You have to Add this in your head Tag </br>
Now You have to take script tag in you body tag with some custom div class AS GIVEN BELOW
```
<script>
        let containerClass = '.curousel-container';
        let imageArray = ['curousel1.png', 'curousel2.png', 'curousel3.png', 'curousel4.png', 'curousel5.png', 'curousel6.png'];
        let transitionTime = 1500;  // Transition time in milliseconds
        let SlideTime = 3000;  // Slide time in milliseconds
        let trackerSize = 5; // Dot size in pixels
        createImageSlider(containerClass, imageArray, transitionTime, SlideTime, trackerSize);
</script>
```
You can add more images, customize the tranitionTime, slideTime, trackerSize
## Here is the Complete HTML file of image slider
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slider Example</title>
    <script src="https://cdn.jsdelivr.net/gh/DJ-InfinityCoder/Infinity-Image-Slider/InfiniteSlider.js"></script>
</head>

<body>
    <div class="curousel-container"></div>
    <script>
        let containerClass = '.curousel-container';
        let imageArray = ['curousel1.png', 'curousel2.png', 'curousel3.png', 'curousel4.png', 'curousel5.png', 'curousel6.png'];
        let transitionTime = 1500;  // Transition time in milliseconds
        let SlideTime = 3000;  // Slide time in milliseconds
        let trackerSize = 5; // Dot size in pixels
        createImageSlider(containerClass, imageArray, transitionTime, SlideTime, trackerSize);
    </script>
</body>
</html>
```
