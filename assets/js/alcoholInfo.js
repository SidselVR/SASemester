$(document).ready(function () {

    $(".carousel-control-next").click(function () {
        if ($(".carousel-inner div:nth-child(3)").hasClass('active')) {
            if ($('.jumbotron div:first-child').hasClass('hideLead')) {
                $('.jumbotron div.lead').removeClass('lead').addClass('hideLead');
                $('.jumbotron div:first-child').removeClass('hideLead').addClass('lead');
            }
        } else if ($(".carousel-inner div:nth-child(2)").hasClass('active')) {
            if ($('.jumbotron div:nth-child(3)').hasClass('hideLead')) {
                $('.jumbotron div.lead').removeClass('lead').addClass('hideLead');
                $('.jumbotron div:nth-child(3)').removeClass('hideLead').addClass('lead');
            }
        } else if ($(".carousel-inner div:first-child").hasClass('active')) {
            if ($('.jumbotron div:nth-child(2)').hasClass('hideLead')) {
                $('.jumbotron div.lead').removeClass('lead').addClass('hideLead');
                $('.jumbotron div:nth-child(2)').removeClass('hideLead').addClass('lead');
            }
        }
    });

    $(".carousel-control-prev").click(function () {
        if ($(".carousel-inner div:nth-child(2)").hasClass('active')) {
            if ($('.jumbotron div:first-child').hasClass('hideLead')) {
                $('.jumbotron div.lead').removeClass('lead').addClass('hideLead');
                $('.jumbotron div:first-child').removeClass('hideLead').addClass('lead');
            }
        } else if ($(".carousel-inner div:nth-child(3)").hasClass('active')) {
            if ($('.jumbotron div:nth-child(2)').hasClass('hideLead')) {
                $('.jumbotron div.lead').removeClass('lead').addClass('hideLead');
                $('.jumbotron div:nth-child(2)').removeClass('hideLead').addClass('lead');
            }
        } else if ($(".carousel-inner div:first-child").hasClass('active')) {
            if ($('.jumbotron div:nth-child(3)').hasClass('hideLead')) {
                $('.jumbotron div.lead').removeClass('lead').addClass('hideLead');
                $('.jumbotron div:nth-child(3)').removeClass('hideLead').addClass('lead');
            }
        }
    });
});
