var toggleMin = $('.toggle-min');
var toggleMax = $('.toggle-max');
var xBegin=0, xEnd=0, x=0, buff=0;
var pressedMin = false, pressedMax = false;

$('#popapVisually').on('click', function(e){
    e.preventDefault();
    $('.overlay').css('display', 'block');
    $('.popap').css('display', 'block');
    $('input[type="text"]').focus();
});

$('#closeModal').on('click', hidePopap);
$('.overlay').on('click', hidePopap);

function hidePopap(){
    $('.overlay').css('display', 'none');
    $('.popap').css('display', 'none');
}

$(document).keydown(function (e) {
    if (e.keyCode === 27) {
        if ($('.overlay').css('display')=='block'){
            hidePopap();
        }
    }
});

$('.switch-btn').on('click', function(){
    $('.slider-item').removeClass('active');
    $('.'+this.id).addClass('active');
});

$('.sorted-item').on('click', function(){
    $('.sorted-item').removeClass('enabled');
    $(this).addClass('enabled');
});

$('.arrow-item').on('click', function(){
    $('.arrow-item').removeClass('enabled');
    $(this).addClass('enabled');
});

// --------------- progress BAR --------------------

$(toggleMin).on('mousedown', function(e){
    if (!pressedMin) {
        xBegin = e.pageX;
        buff = parseInt($('.toggle-min').css('left'));
    }
    pressedMin = true;
});

$(toggleMin).on('mouseup', function(e){
    pressedMin = false;
});

$(toggleMin).on('mouseout', function(e){
    pressedMin = false;
});

$(toggleMin).on('mousemove', function(e){
    if (pressedMin) {
        x = e.pageX - xBegin;
        $(toggleMin).css('left', buff + x +'px');
    } 
});







