window.onload = function() {
    
}

// Expand button
const expand = document.querySelector(".expand");
const expand_img = document.querySelector(".expand-img");
const menu = document.querySelector(".menu");

expand.onclick = function() {
    if (menu.style.display == "none" || menu.style.display == "") {
        // Expand
        expand_img.src = "assets/expand_less.svg";
        menu.style.display = "block";
    } else {
        // Collapse
        expand_img.src = "assets/expand_more.svg";
        menu.style.display = "none";
    }
}

// Left and right buttons in slider
const btn_left = document.querySelector(".btn-left");
const btn_right = document.querySelector(".btn-right");
const img = document.querySelector(".image");
const gallery_imgs = document.getElementsByClassName("gallery-img");

const imgs = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg", "assets/img4.jpg", "assets/img5.jpg",
              "assets/img6.jpg", "assets/img7.jpg", "assets/img8.jpg", "assets/img9.jpg", "assets/img10.jpeg"];
var i = 0;
btn_right.onclick = function() {
    gallery_imgs[i].style.opacity = "0.6";
    if (i === imgs.length - 1) {
        img.src = imgs[0];
        i = 0;
    } else {
        img.src = imgs[++i];
    }
    gallery_imgs[i].style.opacity = "1";
}
btn_left.onclick = function() {
    gallery_imgs[i].style.opacity = "0.6";
    if (i === 0) {
        img.src = imgs[imgs.length - 1];
        i = imgs.length - 1;
    } else {
        img.src = imgs[--i];
    }
    gallery_imgs[i].style.opacity = "1";
}

function setImg(gallery_img) {
    gallery_imgs[i].style.opacity = "0.6";
    var x = imgs.indexOf(gallery_img.getAttribute("src"));
    img.src = imgs[x];
    i = x;
    gallery_imgs[i].style.opacity = "1";
}

const email = document.getElementById("email");
const name = document.getElementById("name");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const submited = document.getElementById("submited");

submit.onclick = function() {
    if (email.value.replace(/\s/g, "X") === "" || message.value.replace(/\s/g, "X") === "") {
        submited.innerHTML = "Not enough information.";
    } else {
        submited.innerHTML = "Thank you, " + (name.value.replace(/\s/g, "X") === "" ? "user" : name.value) + ". Your message has been sent.";
    }
}
