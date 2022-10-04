/**
 * demo.js
 * https://www.instagram.com/croco.code/
 * https://www.tiktok.com/@croco.code 
 * https://github.com/crococode-io 
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2022, CROCO.CODE
 * https://www.instagram.com/croco.code/
 * https://www.tiktok.com/@croco.code 
 * https://github.com/crococode-io 
 */

// init variables
  const modal = document.querySelector('.modal');
    loader = document.querySelector('.loader'),
    parent = document.querySelector(".modal"),
    child = document.querySelector(".modal-inner"),
    monsterOpenClose = document.querySelector(".monster-open-close"),
    monsterClose = document.querySelector(".monster-close"),
    monsterSignup = document.querySelector(".monster-signup"),
    monsterSignupSecond = document.querySelector(".monster-signup-2"),
    cross = document.querySelector(".close"),
    button = document.querySelector("#button"),
    formHolder = document.querySelector('.form'),
    form = document.querySelector('form'),
    email = document.querySelector("#email"),
    submitBtn = document.querySelector(".submit-btn"),
    thankYou = document.querySelector('.thank-you-holder'),
    emailHasValue = false,
    invisible = function() { parent.classList.add('invisible'), modalTimeline.reverse() },
    modalTimeline = new TimelineMax({ paused: true, onReverseComplete: invisible }),
    closeTimeline = new TimelineMax({ paused: true }),
    signupTimelineFirst = new TimelineMax({ paused: true }),
    signupTimelineSecond = new TimelineMax({ paused: true }),
    signupTimelineFinal = new TimelineMax({ paused: true });

  // images loaded
  imagesLoaded(modal, { background: true }, function() {

    // hide loader
    loader.classList.add('is-loaded');
    // demo
    CSSPlugin.defaultForce3D = false

    // populate timeline - close (monster)
    closeTimeline
      .to(monsterClose, 0.35, { rotation: -60, xPercent: -60, ease: Expo.easeOut })
      .to(monsterClose.querySelector('span'), 0.175, { autoAlpha: 1, x: -20, ease: Expo.easeOut }, '-=0.175')

    // populate timeline - modal
    modalTimeline
      .to(child, 0.4, { css: {top: "50%"}, ease: Expo.easeOut })
      .to(monsterOpenClose, 0.4, { css: {top: "7%"}, ease: Expo.easeInOut }, '-=0.42')
      .to(monsterOpenClose, 0.8, { css: {top: "-50%"}, ease: Expo.easeInOut }, '+=0.2')

    // populate timeline - sign up first step
    signupTimelineFirst
      .to(monsterSignup.querySelector('span'), 0.4, { yPercent: -45, ease: Back.easeOut.config(1) })

    // populate timeline - sign up first step
    signupTimelineSecond
      .to(monsterSignup.querySelector('span'), 0.4, { yPercent: -65, ease: Back.easeOut.config(1) })

    // populate timeline - sign up final
    signupTimelineFinal
      .to(form, 0.4, { autoAlpha: 0, y: -10, ease: Expo.easeOut })
      .to(thankYou, 0.4, { autoAlpha: 1, y: -10, ease: Expo.easeOut }, '-=0.4')
      .to(monsterSignup.querySelector('span'), 0.4, { yPercent: 0, ease: Back.easeOut.config(1.7) }, '-=0.4')
      .to(monsterSignup.querySelector('span'), 0.4, { autoAlpha: 0, ease: Expo.easeOut }, '-=0.4')
      .set(monsterSignup, { className: '+=submitted' })
      .set(monsterClose, { className: '+=submitted' })

    // click: reverse timeline - modal
    cross.addEventListener('click', function () {
      modalTimeline.reverse()
      closeTimeline.reverse()
    })

    // click: play timeline - modal
    button.addEventListener('click', function () {
      parent.classList.remove('invisible')
      modalTimeline.play()
    })

    // hover: play/reverse timeline - close (monster)
    cross.addEventListener('mouseover', function () {
      closeTimeline.play()
    });
    // hover: play/reverse timeline - close (monster)
    cross.addEventListener('mouseleave', function () {
      closeTimeline.reverse()
    });

    // hover: play/reverse timeline - signup first step (monster)
    formHolder.addEventListener('mouseover', function () {
      signupTimelineFirst.play()
    });
    // hover: play/reverse timeline - close (monster)
    formHolder.addEventListener('mouseleave', function () {
      signupTimelineFirst.reverse()
    });

    // change, keyup, paste click: play/reverse timeline - signup (monster)
    email.addEventListener('change keyup paste click', function () {
      if( email.value ) {
        signupTimelineSecond.play();
        emailHasValue = true;
      } else {
        signupTimelineSecond.reverse();
        emailHasValue = false;
      }
    });

    // click: play timeline - signup (monster) final
    submitBtn.addEventListener('click', function () {
      e.preventDefault();
      signupTimelineFinal.play();
      modalTimeline.reverse().delay(1) 
    })
  });