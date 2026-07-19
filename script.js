// Initialize AOS Animation
AOS.init({
    duration: 1000,
    once: true
});

// Typing Effect
const text = "HR Professional | HR Generalist | Compliance | Recruitment";
let i = 0;

function typingEffect() {
    const heroTitle = document.querySelector(".hero h3");
    if (!heroTitle) return;

    heroTitle.innerHTML = "";

    function type() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 60);
        }
    }

    type();
}

window.onload = typingEffect;

// Navbar Background Change
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#0a3d62";
    } else {
        navbar.style.background = "rgba(10,61,98,.95)";
    }
});

// Scroll to Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "none";
topBtn.style.background = "#ffc107";
topBtn.style.color = "#000";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// Dark Mode Button

const darkBtn = document.createElement("button");

darkBtn.innerHTML = "🌙";

document.body.appendChild(darkBtn);

darkBtn.style.position = "fixed";
darkBtn.style.bottom = "80px";
darkBtn.style.right = "20px";
darkBtn.style.width = "50px";
darkBtn.style.height = "50px";
darkBtn.style.borderRadius = "50%";
darkBtn.style.border = "none";
darkBtn.style.cursor = "pointer";
darkBtn.style.background = "#0a3d62";
darkBtn.style.color = "#fff";
darkBtn.style.fontSize = "20px";
darkBtn.style.boxShadow = "0 10px 25px rgba(0,0,0,.25)";
darkBtn.style.zIndex = "999";

darkBtn.onclick = function(){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

document.body.style.background="#111";
document.body.style.color="#fff";

document.querySelectorAll(".card").forEach(card=>{

card.style.background="#1c1c1c";
card.style.color="#fff";

});

document.querySelector("footer").style.background="#000";

}else{

location.reload();

}

};
