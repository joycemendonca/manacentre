function onHeaderLoaded() {
    $('.subscribe-button, .subscribe-button-footer').on('click', function(){
        $('.pop-up-subscribe').css('display','flex')
    })

    $('.close-button').on('click', function(){
        $('.pop-up-subscribe').css('display', 'none')
    })

    $('.pop-up-subscribe').on('click', function(event){
        if ($(event.target).hasClass('pop-up-subscribe')) {
            $('.pop-up-subscribe').css('display', 'none')
        }
    })
}
