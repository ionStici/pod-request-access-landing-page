"use strict";

const form = document.querySelector(".form");
const input = document.querySelector(".form__input");
const btn = document.querySelector(".form__btn");
const message = document.querySelector(".form__message");

const wrong = function (show) {
    if (!show) message.style.opacity = "1";
    if (show) message.style.opacity = "0";
};

const checkEmail = function (email) {
    if (email) wrong(true);
    if (!email) wrong(false);
};

const check = function (e) {
    e.preventDefault();
    const email = input.value;
    checkEmail(email);
};

form.addEventListener("submit", check);
btn.addEventListener("click", check);
