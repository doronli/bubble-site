'use strict';

$(document).ready(function () {
    $('li').click(function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    });

    var widthScreen = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(widthScreen < 760){
        $('.navigation').click(function(){
            $('.navigation').css('display','none');
        })
    
    }
    else if(widthScreen > 760){
        
        }
    window.onload = function () {
            // solve the problem when refresh page the active page will be always the home page 
            var url = window.location.href;
            var lastIndex = url.lastIndexOf('/');
            var pageId = url.substring(lastIndex + 1, url.length);
            $('li').removeClass('active');
            $('#' + pageId).addClass('active');
    }
   
    
    

});