$('.switch-btn').on('click', function() {
    $('.slider-item').addClass('hidden');
    var scan_id = this.id;
    $('.' + scan_id).removeClass('hidden');
    $('.switch-btn').removeClass('active');
    $(this).addClass('active');
});