let img = [];
let i = 0;
let active = 1;
$(function () {
    $('#slider img').each(function () {
        img.push($(this).attr('src'));
        i++;
        if (i > 3) {
            $(this).remove()
        }
    });
    $('#nxt').click(function () {
        $('#slides').animate({left: '-200%',}, 1000, function () {
            //animation completed
            $('#slides').css('left', '-100%');
            active++
            if (active === img.length) {
                active = 0
            }
            $('#slides img:nth-child(1)').attr('src', img[active - 1])
            $('#slides img:nth-child(2)').attr('src', img[active])
            if (img[active + 1] === undefined) {
                $('#slides img:nth-child(3)').attr('src', img[0])
            }else {
                $('#slides img:nth-child(3)').attr('src', img[active + 1])
            }
        })
    });
    $('#prv').click(function () {
        $('#slides').animate({left: '0%',}, 1000, function () {
            //animation completed
            $('#slides').css('left', '-100%');
            active--
            if (active === - 1) {
                active = img.length - 1
            }
            $('#slides img:nth-child(3)').attr('src', img[active + 1])
            $('#slides img:nth-child(2)').attr('src', img[active])
            if (img[active - 1] === undefined){
                $('#slides img:nth-child(1)').attr('src', img[img.length - 1])
            }else {
                $('#slides img:nth-child(1)').attr('src', img[active - 1])
            }
        })
    });
    setInterval(function () {
        $('#nxt').click()
    },2000)
});

