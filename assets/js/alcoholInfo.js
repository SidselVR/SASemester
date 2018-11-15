$(document).ready(function () {

    $(document).on('mouseenter mouseleave', 'div.alcohol', function (event) {
        var $details = $(this).find('.details');
        if (event.type == 'mouseenter') {
            $details.fadeTo('fast', 0.7);
        } else {
            $details.fadeOut('fast');
        }
    })
});
