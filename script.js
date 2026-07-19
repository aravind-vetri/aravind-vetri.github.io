// Smooth fade-in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, .item").forEach((el) => {
    observer.observe(el);
});

// Scroll to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#0a3d62";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Dark Mode Button
const darkBtn = document.createElement("button");
darkBtn.innerHTML = "🌙";
darkBtn.id = "darkMode";
document.body.appendChild(darkBtn);

darkBtn.style.position = "fixed";
darkBtn.style.bottom = "80px";
darkBtn.style.right = "20px";
darkBtn.style.width = "50px";
darkBtn.style.height = "50px";
darkBtn.style.border = "none";
darkBtn.style.borderRadius = "50%";
darkBtn.style.background = "#ffd43b";
darkBtn.style.cursor = "pointer";
darkBtn.style.fontSize = "20px";
darkBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";

darkBtn.onclick = function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        document.body.style.background = "#121212";
        document.body.style.color = "#ffffff";

        document.querySelectorAll(".card,.item,#contact").forEach((e) => {
            e.style.background = "#1e1e1e";
            e.style.color = "#ffffff";
        });

    } else {

        location.reload();

    }

};
