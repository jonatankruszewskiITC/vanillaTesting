"use strict";

(() => {
    const button = document.getElementById('inputButton');
    const counterDisplay = document.getElementById('counterDisplay');
    let counter = 0;
    (() => {
        button.addEventListener('click', () => {
            counter++;
            updateCounter(counterDisplay, counter);
        })
        updateCounter(counterDisplay, counter);
    })()
})()