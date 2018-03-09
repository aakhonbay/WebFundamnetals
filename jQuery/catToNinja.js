
$(document).ready(function(){

    // $('img').click(function(){
    //     $(this).fadeOut("slow");
    // })


    // $('img').click(function() {
    //     console.log('data-alt-src value is', $(this).attr('data-alt-src'));
    // })
    $('img').click(function(){
        $('.cat0').toggle("slow");
    })

    $('button').click(function(){
        $('img').show();
    })



});
