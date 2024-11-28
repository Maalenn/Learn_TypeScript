import { JSDOM } from "jsdom";
const dom = new JSDOM(`<!DOCTYPE html><html><body><ul></ul></body></html>`);
const document = dom.window.document;
const form = document.querySelector("form");
const userName = document.querySelector(".name");
const userEmail = document.querySelector(".email");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(userName.value);
    console.log(userEmail.value);
});
