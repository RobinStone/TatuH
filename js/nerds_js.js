var numb = 1;

$('.switch-btn').on('click', function() {
    $('.slider-item').addClass('hidden');
    var scan_id = this.id;
    $('.' + scan_id).removeClass('hidden');
    $('.switch-btn').removeClass('active');
    $(this).addClass('active');
});

function checker(){
    numb++;
    if (numb > 3){numb = 1;}
$('#slide-'+numb).click();
}

setInterval(checker, 8000);

$('.template-item').on('focus', function(){
    $(this).find('div').addClass('visuality');
});

$('.template-item').on('blur', function(){
    $(this).find('div').removeClass('visuality');
});

$('#closeModal').on('click', function(){
    $('.popap').css('display', 'none');
    $('.overlay').css('display', 'none');
});

$('#submitButton').on('click', function(e){
    e.preventDefault();
    
});

$('#popapVisually').on('click', function(e){
    e.preventDefault();
    $('.popap').css('display', 'flex');
    $('.overlay').css('display', 'block');
});


















