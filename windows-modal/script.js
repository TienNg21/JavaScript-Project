'use strict';

const show_modals = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const close_modal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const open = function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const close = function() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

show_modals[0].addEventListener('click', open);
show_modals[1].addEventListener('click', open);
show_modals[2].addEventListener('click', open);

document.addEventListener('keydown', function(event) {
    if(!close_modal.classList.contains('hidden')) {
        if(event.key === "Escape") {
            close();
        }
    }
});

close_modal.addEventListener('click', close);
