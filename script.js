document.addEventListener("DOMContentLoaded", function() {

    if(typeof gsap !== 'undefined') {

        //Initial entrance animation - elemen float randommly
        gsap.from(".scattered-element", {
            opacity: 0,
            scale: 0.9,

        });
});