document.addEventListener('DOMContentLoaded', function () {

    //Hides chair names on mouseover, reveals them on mouseout
    var chairBoxes = document.querySelectorAll('.chairs-presentation');

    function hideNameBlock(event) {
        event.target.firstElementChild.style.display = 'none';
    }

    function revealNameBlock(event) {
        event.target.firstElementChild.style.display = 'flex';
    }

    for (var chair of chairBoxes) {
        chair.addEventListener('mouseover', hideNameBlock);
        chair.addEventListener('mouseout', revealNameBlock);
    }

    //Slider implementation
    var prevButton = document.querySelector('.prev'),
        nextButton = document.querySelector('.next'),
        sliderImages = document.querySelectorAll('.slider-image'),
        sliderImageVisibilityCounter = 0;

    function nextSlide(event) {
        if (sliderImageVisibilityCounter < sliderImages.length - 1) {
            sliderImages[sliderImageVisibilityCounter].style.display = 'none';
            sliderImageVisibilityCounter += 1;
            sliderImages[sliderImageVisibilityCounter].style.display = 'block';
        } else {
            sliderImages[sliderImageVisibilityCounter].style.display = 'none';
            sliderImageVisibilityCounter = 0;
            sliderImages[sliderImageVisibilityCounter].style.display = 'block';
        }
    }

    function prevSlide(event) {
        if (sliderImageVisibilityCounter > 0) {
            sliderImages[sliderImageVisibilityCounter].style.display = 'none';
            sliderImageVisibilityCounter -= 1;
            sliderImages[sliderImageVisibilityCounter].style.display = 'block';
        } else {
            sliderImages[sliderImageVisibilityCounter].style.display = 'none';
            sliderImageVisibilityCounter = sliderImages.length -1;
            sliderImages[sliderImageVisibilityCounter].style.display = 'block';
        }
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    //Active plan picker

    var chooserButtons = document.querySelectorAll('.plans-option button'),
        plans = document.querySelectorAll('.plans-option');

    console.log(plans);
    function makeActive(event) {
        for (var plan of plans) {
            plan.classList.remove('active');
            plan.classList.add('inactive');
        }
        event.target.parentElement.classList.remove('inactive');
        event.target.parentElement.classList.add('active');
    }

    for (var chooserButton of chooserButtons) {
        chooserButton.addEventListener('click', makeActive);
    }
});

