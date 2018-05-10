

jQuery(function($) {

    var animateItems = $('.animate'),
        elems = $('.section'),
        deleteLog = false;
        
    $('#fullpage').fullpage({
        menu: '#menu',
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['01', '02', '03', '04', '05', '06'],
		showActiveTooltip: true,
		slidesNavigation: true,
        slidesNavPosition: 'bottom', 
        controlArrows: true,
        css3: true,
        scrollingSpeed: 500, 
        fitToSection: true,
        afterLoad: function(anchorLink, index) {  
            $('section.active').find(animateItems).addClass('animate_active');
            if ( $('.resultSteps').hasClass('active') ) {
                $('.resultSteps__steps').addClass('resultSteps__steps_showLine');
            }
            if ( $('.heartSection').hasClass('active') ) {
                setTimeout( function() {
                    $('.heartSection__heartImg').addClass('heartSection__heartImg_animated');
                    $('.heartSection__heartWrap').addClass('heartSection__heartWrap_animated');
                } , 1500);            
            }
            if ( $('.resultSteps').hasClass('active') ) {
                setTimeout( function() {
                    $('.resultSteps__consumer').addClass('resultSteps__consumer_animated');
                } , 2350);            
            }
            if ( $('.mainBlock').hasClass('active') ) {
                setTimeout( function() {
                $('.resultSteps__consumer').addClass('resultSteps__consumer_animated');
                $('.mainBlock__title').addClass('fade-left_active');
                } , 500);   
            }
        }
    });

    $('.navBlock__navArrow_up').click(function() {
        $.fn.fullpage.moveSectionUp();
    });

    $('.navBlock__navArrow_down').click(function() {
        $.fn.fullpage.moveSectionDown();
    });

    var scene = document.getElementById('scene'),
        scene3 = document.getElementById('scene3');

	var parallax = new Parallax(scene);
    var parallax = new Parallax(scene3);
    
    $('.menuBtn').click(function() {
        if ( $('.menuBtn__button').hasClass('menuBtn__button_active') ) {
            $('.formWrap').removeClass('formWrap_show');
            $('.body').removeClass('body_layout');
            $('.menuBtn__button').removeClass('menuBtn__button_active');
            $('.menuWrap').removeClass('menuWrap_show');
            $('.navigation__list').find(animateItems).removeClass('animate_active');
            $('.menuWrap__info').removeClass('animate_active');
        } else {
            $('.menuWrap').addClass('menuWrap_show');
            $('.body').addClass('body_layout');
            $('.menuBtn__button').addClass('menuBtn__button_active')
            setTimeout( function() {
                $('.navigation__list').find(animateItems).addClass('animate_active');
                $('.menuWrap__info').addClass('animate_active');
            } , 200);
        }
    });

    $('#reqrequestBtn').click(function() {
        $('.formWrap').addClass('formWrap_show');
        $('.body').addClass('body_layout body_showForm');
        $('.menuBtn__button').addClass('menuBtn__button_active')
    });

    ////////////////////////////////////language////////////////////////////

    $('.language').click(function() {
        $('.language__langList').toggleClass('language__langList_show');
        $('.language__dropDownIco').toggleClass('language__dropDownIco_active');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу 
        var div = $(".language"); // тут указываем ID элемента 
            if (!div.is(e.target) && div.has(e.target).length === 0) { // и не по его дочерним элементам 
            $(".language__langList").removeClass("language__langList_show");
            $(".language__dropDownIco").removeClass("language__dropDownIco_active");
        } 
    });

    ////////////////////////////////////validate//////////////////////////

    $('#requestForm').validate({
        rules: {
            name: {
                required: true
            },
            number: {
                required: true, 
                number: true
            },
            email: {
                email: true
            }
        },
        messages: {
            name: {
                required: "Введите ваше имя"
            },
            number: {
                required: "Введите номер вашего телефона",
                number: "Введите корректный номер телефона"
            },
            email: {
                required: "Введите ваш E-mail",
                email: "проверьте данные E-mail"
            }
        }
    });

    ///////////////////////////////////eyes/////////////////////////

    $('#leftEye').spyEye({a: 5,b: 5,x: 7,y: 6});
    $('#rightEye').spyEye({a: 5,b: 5,x: 7,y: 6});
    $('#leftEye2').spyEye({a: 3,b: 3,x: 4,y: 4});
    $('#rightEye2').spyEye({a: 3,b: 3,x: 4,y: 4});
    $(document).on('resize', function() {
        $.fn.fullpage.reBuild();
    });

    /////////////////////////////////////////form/////////////////////////

    $('.form__input').on('focus blur', function(e){
        $(this).parent()[e.type === 'focus' ? 'addClass' : 'removeClass']('form__inputWrap_active');
    });

    var textarea = document.querySelector('textarea');

    textarea.addEventListener('keydown', autosize);
                  
    function autosize(){
       var el = this;
       setTimeout(function(){
         el.style.cssText = 'height:auto; padding:0';
         el.style.cssText = 'height:' + el.scrollHeight + 'px';
       },0);
    }

    

});

//////////////////////////////////preloader////////////////////////////////

// window.addEventListener('load', function() {
    
//         var $titleOffset = $('.mainBlock__title').offset().top,
//             $line = $('.preloader__line'),
//             $firstWord  =  $('.firstWord ');

//         $line.css('marginTop', ($titleOffset + 6));

//         var offsetTop = $line.offset().top + ($firstWord.height() - 2) ,
//             offsetBottom = $(window).height() - ($line.offset().top + 2),
//             fillTop = $('.preloader__fillTop'),
//             fillBottom = $('.preloader__fillBottom');
    
//         fillTop.css('bottom', offsetBottom);
//         fillBottom.css('top', offsetTop);

//         $('.wordsWrap').find('.animate').addClass('animate_active');
//         $('.preloader__line .firstWord').addClass('firstWord_anim1');
//         setTimeout( function() {
//             $('.wordsWrap').addClass('wordsWrap_animate');
//         } , 2300);
    
//         setTimeout( function() {
//             $('.preloader').addClass('preloader_animate');
//         } , 2500);
//         setTimeout( function() {
//             $('.preloader').animate({opacity: "hide"}, 200);
//         } , 3000);
// });


 