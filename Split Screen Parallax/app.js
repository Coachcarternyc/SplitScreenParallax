function splitScroll() {
    const controller = new ScrollMagic.controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title',
        triggerHook: 0
    })

    .setPin('.about-title')
    .addIndicator()
    .addTo(controller);
}


splitScroll();