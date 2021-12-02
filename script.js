// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');


window.addEventListener('scroll', function(){
const scrollTop = window.pageTOffset || this.document.documentElement.scrollTop;

if (scrollTop > lastScrollTop) {
    navbar.style.top="-50px";
} else {
    navbar.style.top="0";
}
lastScrollTop = scrollTop;

});

//TYPED
var typed = new Typed('.typed', {
    strings: ["bonjour a tous je suis david developpeur front-end",
    'Étudiant en troisième année de licence en Génie Logiciel avec une première expérience dans le domaine de l’administration, rigoureux et ayant l’esprit d’équipe. Je souhaite perfectionner les compétences acquises lors de mon stage précédent et en acquérir de nouvelles en assurant un impeccable traitement des tache que vous vous aurez a me confier.'],
    typeSpeed: 20,
    
});
// compteur live
let compteur = 0;

$(window).scroll(function() {

    const top = $('.counter').offset().top - window.innerHeight;

    if (compteur == 0 && $(window).scrollTop() > top) {
        $('.counter-value').each(function() {
            let $this = $(this),
            countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 6000,
                easing: 'swing',
                step: function() {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
})
// AOS
AOS.init();
