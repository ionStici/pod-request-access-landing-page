"use strict";

const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const btn = document.querySelector(".form__btn");
const message = document.querySelector(".form__message");

const wrong = function () {
    message.style.opacity = "1";
};

const check = function (e) {
    e.preventDefault();
};

form.addEventListener("submit", check);
btn.addEventListener("click", check);
