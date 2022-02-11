$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
            loop:false
        }
    }
})

function exibirIframe()
{
    document.getElementById("iframe").style.display = "block";
}
function fecharIframe(){
    document.getElementById("iframe").style.display = "none";
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
})