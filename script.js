const htmlBox = document.getElementById("html");
const cssBox = document.getElementById("css");
const jsBox = document.getElementById("js");

let isHtmlBoxExpanded = false;
let isCssBoxExpanded = false;
let isJsBoxExpanded = false;

document.getElementById("html-expand-btn").addEventListener("click", () => {
    console.log(htmlBox.classList[1]);

    if (cssBox.classList[1] === "animate-code-box") {
        cssBox.classList.remove("animate-code-box");
        isCssBoxExpanded = false;
    }

    if (jsBox.classList[1] === "animate-code-box") {
        jsBox.classList.remove("animate-code-box");
        isJsBoxExpanded = false;
    }

    if (!isHtmlBoxExpanded) {
        htmlBox.classList.add("animate-code-box");
    } else {
        htmlBox.classList.remove("animate-code-box");
    }

    isHtmlBoxExpanded = !isHtmlBoxExpanded;
});

document.getElementById("css-expand-btn").addEventListener("click", () => {
    if (htmlBox.classList[1] === "animate-code-box") {
        htmlBox.classList.remove("animate-code-box");
        isHtmlBoxExpanded = false;
    }

    if (jsBox.classList[1] === "animate-code-box") {
        jsBox.classList.remove("animate-code-box");
        isJsBoxExpanded = false;
    }

    if (!isCssBoxExpanded) {
        cssBox.classList.add("animate-code-box");
    } else {
        cssBox.classList.remove("animate-code-box");
    }
    isCssBoxExpanded = !isCssBoxExpanded;
});

document.getElementById("js-expand-btn").addEventListener("click", () => {
    if (htmlBox.classList[1] === "animate-code-box") {
        htmlBox.classList.remove("animate-code-box");
        isHtmlBoxExpanded = false;
    }

    if (cssBox.classList[1] === "animate-code-box") {
        cssBox.classList.remove("animate-code-box");
        isCssBoxExpanded = false;
    }

    if (!isJsBoxExpanded) {
        jsBox.classList.add("animate-code-box");
    } else {
        jsBox.classList.remove("animate-code-box");
    }
    isJsBoxExpanded = !isJsBoxExpanded;
});
