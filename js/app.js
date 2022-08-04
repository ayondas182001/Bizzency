$(function(){
    let searchbar = $('menu ul li input')
    let searcicon = $('menu ul li i')
    searcicon.click(function(){
        searchbar.toggleClass('activesearchbar')
    })
    $('.blogcnt').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow:'.prevArrow',
        nextArrow:'.nextArrow',
    });















})