// IIFE
(function ($) {
    "use strict";
    // input to button
    $('.button').on('click', function(){
        $('.validate-form').submit();
    });
    /*==================================================================
    [ Validate ]*/
    let input = $('.validate-input .input');
    // Xử lý sự kiện submit của form
    $('.validate-form').on('submit', function (event) {
        let check = true;   
        for (let i = 0; i < input.length; i++) {
            if (validate(input[i]) === false) {
                showValidate(input[i]);
                check = false;
            }
        }
        return check;
    });
    // Xử lý khi input được focus
    $('.validate-form .input').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });
    // Check validate
    function validate (input) {
        // if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
        //     if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        //         return false;
        //     }
        // }
        if ($(input).val().trim() === '') {
            return false;
        }
       // return true;
    }
    // Show error
    function showValidate(input) {
        let thisAlert = $(input).parent();
        $(thisAlert).addClass('alert-validate');
    }
    //  Ẩn lỗi
    function hideValidate(input) {
        let thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
    }
})(jQuery);