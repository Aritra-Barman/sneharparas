$(document).ready(function() {
    $('.js--header-end').waypoint(function(direction) {
        if(direction == "down") {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    }, {
        offset: '-60px;'
    });

    /*
    if($('header').hasClass('white-back')) {
                $('header').removeClass('white-back');
            }
            */

    $('.view-gallery').magnificPopup({
        type:'image',
        gallery:{
            enabled: true
        },
        image: {
            cursor: null,
            verticalFit: true
        }, 
        zoom: {
            enabled: true
        }
    });

    $('.view-site-plan').magnificPopup({
        type:'image',
        image: {
            cursor: null,
            verticalFit: true
        }
    });
});