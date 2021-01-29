$(document).ready(function(){

    $('.fly-tag, .fly-tag-prices').removeClass('anim');

    $('.menu__link, .column-left__link').on('click', function(e){
        e.preventDefault();

        if ($('html').width() <= 1180) {
            $('nav').hide(300);
        }

        let href = $(this).attr('href');

        let offset = $(href).offset().top;

        $('html, body').animate({
            scrollTop: offset,
        }, 300);
    });

    $('.button-exit, .call-popup').on('click', function(e){
        if(this == e.target) {
            $('.call-popup').hide(300);
            $('body').css('overflow', 'auto');
        }
    });

    $('.call, .orange-button').on('click', function(){
        $('.call-popup, .call-popup__container').show(300).css('display', 'flex');
        $('.thanks-popup').css('display', 'none');
        $('body').css('overflow', 'hidden');
    });

    $('input[type="tel"]').mask("8(999) 999-9999");

    let flag = 0;

    $('.nav-button').on('click', function(){
        $('nav').show(300);
        flag = 1;
    });

    $('.exit-nav-button').on('click', function(){
        $('nav').hide(300);
        flag = 1;
    });

    setInterval(function(){
        if ($(window).width() > 1180 && flag === 1) {
            $('.nav').show(1);
            flag = 0;
        }
        if ($(window).width() <= 1180 && flag === 0) {
            $('.nav').hide(1);
            flag = 1;
        }
    }, 1);

    let validateForms = function(selector) {
        new window.JustValidate(selector, {
            rules: {
                name: {
                    required: true,
                    minLength: 3,
                },
                tel: {
                    required: true,
                    phone: true,
                },
                email: {
                    required: true,
                    email: true, 
                }
            },
            messages: {
                name: {
                    required: 'Поле имени должно быть заполнено',
                    minLength: 'Поле имени должно содержать минимум 3 символа',
                },
                tel: {
                    required: 'Поле телефона должно быть заполнено',
                    phone: 'Напишите полный телефонный номер',
                },
                email: {
                    required: 'Поле email должно быть заполнено',
                    email:'Пожалуйста, введите действительный адрес электронной почты',
                }
            },
            submitHandler: function(form) {
                let formData = new FormData(form);

                let xhr = new XMLHttpRequest();

                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            console.log('Отправлено');
                        }
                    }
                };

                xhr.open('POST', 'mail.php', true);
                xhr.send(formData);
                
                $('.call-popup__container').hide(300);
                $('.thanks-popup').show(300);
            },
        });    
    };

    validateForms('.form');
});
