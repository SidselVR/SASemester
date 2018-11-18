$(document).ready(function () {

    $(".carousel-inner div:first-child").click(function () {

        if ($('.jumbotron p:first-child').hasClass('hideLead')) {
            $('.jumbotron p.lead').removeClass('lead').addClass('hideLead');
            $('.jumbotron p:first-child').removeClass('hideLead');
            $('.jumbotron p:first-child').addClass('lead');
        } 
        else if ($('.jumbotron p:first-child').hasClass('lead')) {
            $('.jumbotron p:first-child').removeClass('lead');
            $('.jumbotron p:first-child').addClass('hideLead');
            $('.jumbotron p:last-child').removeClass('hideLead').addClass('lead');
        }
    });

    $(".carousel-inner div:nth-child(2)").click(function () {

        if ($('.jumbotron p:nth-child(2)').hasClass('hideLead')) {
            $('.jumbotron p.lead').removeClass('lead').addClass('hideLead');
            $('.jumbotron p:nth-child(2)').removeClass('hideLead');
            $('.jumbotron p:nth-child(2)').addClass('lead');
        } 
        else if ($('.jumbotron p:nth-child(2)').hasClass('lead')) {
            $('.jumbotron p:nth-child(2)').removeClass('lead');
            $('.jumbotron p:nth-child(2)').addClass('hideLead');
            $('.jumbotron p:last-child').removeClass('hideLead').addClass('lead');
        }
    });
    
    $(".carousel-inner div:nth-child(3)").click(function () {

        if ($('.jumbotron p:nth-child(3)').hasClass('hideLead')) {
            $('.jumbotron p.lead').removeClass('lead').addClass('hideLead');
            $('.jumbotron p:nth-child(3)').removeClass('hideLead');
            $('.jumbotron p:nth-child(3)').addClass('lead');
        } 
        else if ($('.jumbotron p:nth-child(3)').hasClass('lead')) {
            $('.jumbotron p:nth-child(3)').removeClass('lead');
            $('.jumbotron p:nth-child(3)').addClass('hideLead');
            $('.jumbotron p:last-child').removeClass('hideLead').addClass('lead');
        }
    });


    /*$(".carousel-inner div:nth-child(2)").click(function() {
        
        if ($('p.lead').css('display') == 'none'){
            $(".lead").css("display", "block");
        }
        else if ($('p.lead').css('display') == 'block'){
            $(".lead").css("display", "none");
        }
    });
    
    $(".carousel-inner div:nth-child(3)").click(function() {
        
        if ($('p.lead').css('display') == 'none'){
            $(".lead").css("display", "block");
        }
        else if ($('p.lead').css('display') == 'block'){
            $(".lead").css("display", "none");
        }
    });*/
});
