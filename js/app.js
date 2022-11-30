const menuBtn = document.querySelector('.header-nav__btn');
const menu = document.querySelector('.header-nav__nav');
menuBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  menuBtn.classList.toggle('header-nav__btn__active');
  menu.classList.toggle('header-nav__nav--active');
})


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [43.589815,39.742384],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/map.png',
            // Размеры метки.
            iconImageSize: [87, 87],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark);
});






	

