$(document).ready(function() {
    
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
    
  //jQuery is required to run this code
var element = document.getElementById('osm-map');




// Create Leaflet map on map element.
var map = L.map(element);

// Add OSM tile leayer to the Leaflet map.
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Target's GPS coordinates.
var target = L.latLng('44.78417669', '20.46282202');

// Set map's center to target with zoom 14.
map.setView(target, 18);

// Place a marker on the same location.
 var marker = L.marker(target).addTo(map);
marker.bindPopup("<b>Rusko srpski prevodilac</b><br>Kraljice Natalije 52").openPopup();
    
});





/******Dual Languae Website */
 const elements = {
    menu1:document.getElementById('nav-1'),
    menu2:document.getElementById('nav-2'),
    menu3:document.getElementById('nav-3'),
    menu4:document.getElementById('nav-4'),
    srpski: document.querySelector('.srpski'),
    Jezici:document.querySelector('.hero-text-box'),
    longCopy:document.querySelector('.long-copy'),
    naslov:document.querySelector('.naslov-1'),
    naslovRuski:document.querySelector('.naslov-1-ruski')
};

elements.Jezici.addEventListener('click', e=>{
    
const btn1 = e.target.closest('.srpski')
const btn2 = e.target.closest('.ruski')
if(btn1){
elements.menu1.innerHTML = 'How Does It work ';   
elements.menu2.innerHTML = 'Keyless Techology ';    
elements.menu3.innerHTML = 'Why Keyless ';
elements.menu4.innerHTML = 'Sign up ';
elements.longCopy.innerHTML = 'Automatic Lock up ' 
elements.naslov.innerHTML="Kako radi ?" 
elements.naslovRuski.innerHTML="Treba <br> vam Prevodilac?"    
    
}
else if (btn2){
elements.menu1.innerHTML = 'Как это работает ';   
elements.menu2.innerHTML = 'ехнология  ';    
elements.menu3.innerHTML = 'Почему без ключа ';
elements.menu4.innerHTML = 'Зарегистрироваться ';        
elements.longCopy.innerHTML='Automatkso zakljuvanje.'    
elements.naslov.innerHTML= 'Kak Rabotaet?';    
elements.naslovRuski.innerHTML="Тебе это нужно <br> Переводчик?"  ;   
    
}    
    
    
    
    
    
})


