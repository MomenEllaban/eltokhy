// animate smooth scroll





// $('#view_work').click(function(){
//     const images = $("#images").position().top;
//     $("html, body").animate({ scrollTop: images }, 900);
//     return false;
// });




$(document).ready(function () {

    $('.fa-hamburger').click(function () {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $('nav ul li a').click(function () {
        $('.fa-hamburger').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

    $('.dot1').click(function () {
        $('.vid1').css('display', 'block');
        $('.vid2').css('display', 'none');
        $('.vid3').css('display', 'none');
    });

    $('.dot2').click(function () {
        $('.vid2').css('display', 'block');
        $('.vid1').css('display', 'none');
        $('.vid3').css('display', 'none');
    });

    $('.dot3').click(function () {
        $('.vid3').css('display', 'block');
        $('.vid1').css('display', 'none');
        $('.vid2').css('display', 'none');
    });

    $(window).on('scroll load', function () {
        if ($(window).scrollTop() > 10) {
            $('#header').addClass('header-active');
        } else {
            $('#header').removeClass('header-active');
        }
    });

});




/ start audio icon/

let audioDiv = document.getElementById("audioDiv");
let audio = document.getElementById("audio");
let music = document.createElement("img");
music.src =
    "https://res.cloudinary.com/duyyuvedc/image/upload/v1593962739/music-2_ns0hrv.png";
music.style.width = "30px";
music.style.height = "30px";
music.style.marginTop = "1%";
// music.style.marginLeft = "89%";
audioDiv.appendChild(music);

music.onclick = function () {
    if (
        music.src ==
        "https://res.cloudinary.com/duyyuvedc/image/upload/v1593962739/music-2_ns0hrv.png"
    ) {
        music.src =
            "https://res.cloudinary.com/duyyuvedc/image/upload/v1593947261/music_mwl33l.png";
        audio.play();
        audio.volume = 0.05;
    } else {
        music.src =
            "https://res.cloudinary.com/duyyuvedc/image/upload/v1593962739/music-2_ns0hrv.png";
        audio.pause();
    }
};


/ end audio icon/


// start Video /


var vid = document.getElementById("myVideo");

function playVid() {


    audioDiv.style.display = "block";

    music.src =
        "https://res.cloudinary.com/duyyuvedc/image/upload/v1593947261/music_mwl33l.png";
    audio.play();
    audio.volume = 0.05;

    vid.play();
}

function pauseVid() {
    vid.pause();
}


// end Video /