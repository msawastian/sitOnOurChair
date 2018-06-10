document.addEventListener('DOMContentLoaded', function () {

    //Hides chair names on mouseover, reveals them on mouseout
    var chairBoxes = document.querySelectorAll('.chairs-presentation');

    function hideNameBlock(event) {
        event.currentTarget.firstElementChild.classList.add('hidden');
    }

    function revealNameBlock(event) {
        event.currentTarget.firstElementChild.classList.remove('hidden');
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

    function nextSlide() {
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

    function prevSlide() {
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

    //Chair calculator app
    var listPanelElements = document.querySelectorAll('.list_panel li'),
        chairTypes = document.querySelectorAll('.drop_down_list:first-child .list_panel li'),
        listArrows = document.querySelectorAll('.list_arrow'),
        checkbox = document.querySelector('#transport');

    function showDropDownListPanel(event) {
        event.target.nextElementSibling.classList.toggle('visible');
    }

    function changeListLabel(event) {
        event.target.parentElement.previousElementSibling.previousElementSibling.innerText = event.target.innerText;
        event.target.parentElement.classList.toggle('visible');
    }

    function enterPrices(event) {
        var option = event.target.innerText;

        switch(option) {
            case 'Czerwony':
                document.querySelector('.color').innerText = option;
                document.querySelector('.color_value').innerText = 15;
                countFinalPrice();
                break;
            case 'Czarny':
                document.querySelector('.color').innerText = option;
                document.querySelector('.color_value').innerText = 20;
                countFinalPrice();
                break;
            case 'Pomarańczowy':
                document.querySelector('.color').innerText = option;
                document.querySelector('.color_value').innerText = 25;
                countFinalPrice();
                break;
            case 'Tkanina':
                document.querySelector('.pattern').innerText = option;
                document.querySelector('.pattern_value').innerText = 100;
                countFinalPrice();
                break;
            case 'Skóra':
                document.querySelector('.pattern').innerText = option;
                document.querySelector('.pattern_value').innerText = 300;
                countFinalPrice();
        }
    }

    function countFinalPrice() {
        var sum = document.querySelector('.sum'),
            colorPrice = Number(document.querySelector('.color_value').innerText),
            patternPrice = Number(document.querySelector('.pattern_value').innerText),
            transportPrice = Number(document.querySelector('.transport_value').innerText);

        sum.innerHTML = (colorPrice + patternPrice + transportPrice).toString();
    }

    for (var listArrow of listArrows) {
        listArrow.addEventListener('click', showDropDownListPanel)
    }

    for (var listPanelElement of listPanelElements) {
        listPanelElement.addEventListener('click', changeListLabel);
        listPanelElement.addEventListener('click', enterPrices);
    }

    checkbox.addEventListener('click', function () {
        if (checkbox.checked) {
            document.querySelector('.transport').innerText = 'Transport';
            document.querySelector('.transport_value').innerText = '80';
        } else if (!checkbox.checked) {
            document.querySelector('.transport').innerText = '';
            document.querySelector('.transport_value').innerText = '';
        }
        countFinalPrice();
    });


    for (var chairType of chairTypes) {
        chairType.addEventListener('click', function (event) {
            var listElementText = event.target.innerText;
            document.querySelector('.panel_left h4').innerText = 'Chair ' + listElementText;
        } )
    }

});



