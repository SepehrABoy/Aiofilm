var Bell = document.getElementsByClassName('Bell')[0];

Bell.addEventListener('click', function (event) {
    Bell.style.background='rgb(255, 255, 50)'
});


var Bookmark = document.getElementsByClassName('Bookmark')[0];

Bookmark.addEventListener('click', function (event) {
    Bookmark.style.background='rgb(50, 50, 255)'
});


var heart = document.getElementsByClassName('Heart')[0];

heart.addEventListener('click', function (event) {
    heart.style.background='rgb(255, 50, 50)'
});

var search_small_icon = document.getElementsByClassName('search_small_icon')[0];

search_small_icon.addEventListener('click', function (event) {
    document.getElementById('search_small_show').style.transform='translateY(440px)'
});

var cross = document.getElementsByClassName('cross')[0];

cross.addEventListener('click', function (event) {
    document.getElementById('search_small_show').style.transform='translateY(-550px)'
});


function Menu() {
    document.getElementById('menu_icon1').style.transform='translateY(13px) rotate(45deg)'
    document.getElementById('menu_icon2').style.width='3px'
    document.getElementById('menu_icon2').style.transform='translateX(-18px)'
    document.getElementById('menu_icon3').style.transform='translateY(-13px) rotate(-45deg)'
}
