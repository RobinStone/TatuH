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











