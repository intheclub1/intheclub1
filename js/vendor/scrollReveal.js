//scroll reveal

if (document.documentElement.clientWidth > 768) {
    var controller = new ScrollMagic.Controller();


    //header section
    new ScrollMagic.Scene({
        triggerElement: ".trigger-header",
        triggerHook: "onEnter",
    }).setPin(".trigger-header").addTo(controller);

    var fromLeftTimeline = new TimelineMax();
    var fromLeftFrom = TweenMax.from(".shape-header", 1, {
        x: 500
    });
    var fromLeftTo = TweenMax.to(".shape-header", 1, {
        x: 0
    });

    fromLeftTimeline.add(fromLeftFrom).add(fromLeftTo);

    new ScrollMagic.Scene({
        triggerElement: ".trigger-header",
        offset: 50,
    }).setTween(fromLeftTimeline).duration(2000).addTo(controller);


    //about section
    new ScrollMagic.Scene({
        triggerElement: ".trigger-about",
        triggerHook: "onEnter",
    }).setPin(".trigger-about").addTo(controller);


    var fromRightTimeline = new TimelineMax();
    var fromRightFrom = TweenMax.from(".shape-about", 2, {
        x: 500
    });
    var fromRightTo = TweenMax.to(".shape-about", 2, {
        x: 0
    });

    fromRightTimeline.add(fromRightFrom).add(fromRightTo);

    new ScrollMagic.Scene({
        triggerElement: ".shape-about",
        offset: 50,
    }).setTween(fromRightTimeline).duration(2000).addTo(controller);

    //projects section
    new ScrollMagic.Scene({
        triggerElement: ".trigger-project",
        triggerHook: "onEnter",
    }).setPin(".trigger-project").addTo(controller);


    var projectShape = new TimelineMax();
    var projectShapeFrom = TweenMax.from(".shape-project", 2, {
        x: -500
    });
    var projectShapeTo = TweenMax.to(".shape-project", 2, {
        x: 0
    });

    projectShape.add(projectShapeFrom).add(projectShapeTo);

    new ScrollMagic.Scene({
        triggerElement: ".shape-project",
        offset: 50,
    }).setTween(projectShape).duration(2000).addTo(controller);

    //case studies section
    new ScrollMagic.Scene({
        triggerElement: ".trigger-case",
        triggerHook: "onEnter",
    }).setPin(".trigger-case").addTo(controller);


    var caseShape = new TimelineMax();
    var caseShapeFrom = TweenMax.from(".shape-case", 2, {
        x: 500
    });
    var caseShapeTo = TweenMax.to(".shape-case", 2, {
        x: 0
    });

    caseShape.add(caseShapeFrom).add(caseShapeTo);

    new ScrollMagic.Scene({
        triggerElement: ".shape-case",
        offset: 50,
    }).setTween(caseShape).duration(2000).addTo(controller);


    //team section
    new ScrollMagic.Scene({
        triggerElement: ".trigger-team",
        triggerHook: "onEnter",
    }).setPin(".trigger-team").addTo(controller);


    var teamShape = new TimelineMax();
    var teamShapeFrom = TweenMax.from(".shape-team", 2, {
        x: -500
    });
    var teamShapeTo = TweenMax.to(".shape-team", 2, {
        x: 0
    });

    teamShape.add(teamShapeFrom).add(teamShapeTo);

    new ScrollMagic.Scene({
        triggerElement: ".shape-team",
        offset: 50,
    }).setTween(teamShape).duration(2000).addTo(controller);


    var teamTwoShape = new TimelineMax();
    var teamTwoShapeFrom = TweenMax.from(".shape-team-2", 2, {
        y: 300
    });
    var teamTwoShapeTo = TweenMax.to(".shape-team-2", 2, {
        y: 0
    });

    teamTwoShape.add(teamTwoShapeFrom).add(teamTwoShapeTo);

    new ScrollMagic.Scene({
        triggerElement: ".shape-team-2",
        offset: 50,
    }).setTween(teamTwoShape).duration(2000).addTo(controller);

    //contact section
    new ScrollMagic.Scene({
        triggerElement: ".trigger-contact",
        triggerHook: "onEnter",
    }).setPin(".trigger-contact").addTo(controller);


    var contactShape = new TimelineMax();
    var contactShapeFrom = TweenMax.from(".shape-contact", 2, {
        x: -500
    });
    var contactShapeTo = TweenMax.to(".shape-contact", 2, {
        x: 0
    });

    contactShape.add(contactShapeFrom).add(contactShapeTo);

    new ScrollMagic.Scene({
        triggerElement: ".shape-contact",
        offset: 50,
    }).setTween(contactShape).duration(2000).addTo(controller);


    var contactTwoShape = new TimelineMax();
    var contactTwoShapeFrom = TweenMax.from(".shape-contact-2", 2, {
        x: 500
    });
    var contactTwoShapeTo = TweenMax.to(".shape-contact-2", 2, {
        x: 0
    });

    contactTwoShape.add(contactTwoShapeFrom).add(contactTwoShapeTo);

    new ScrollMagic.Scene({
        triggerElement: ".shape-contact-2",
        offset: 50,
    }).setTween(contactTwoShape).duration(2000).addTo(controller);

}