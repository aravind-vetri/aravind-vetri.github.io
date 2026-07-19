/*=========================================
PREMIUM PORTFOLIO JAVASCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=========================================
    LOADER
    =========================================*/

    window.addEventListener("load", function () {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 800);

    });

    /*=========================================
    CURSOR GLOW
    =========================================*/

    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", function (e) {

        cursor.style.left = e.clientX + "px";

        cursor.style.top = e.clientY + "px";

    });

    /*=========================================
    NAVBAR BACKGROUND
    =========================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            navbar.style.background = "rgba(5,8,22,.95)";

            navbar.style.boxShadow = "0 15px 40px rgba(0,0,0,.4)";

        } else {

            navbar.style.background = "rgba(0,0,0,.35)";

            navbar.style.boxShadow = "none";

        }

    });

    /*=========================================
    TYPING EFFECT
    =========================================*/

    const typing = document.getElementById("typing");

    if (typing) {

        const words = [

            "HR Professional",

            "HR Generalist",

            "Recruitment Specialist",

            "Payroll Executive",

            "Compliance Executive"

        ];

        let wordIndex = 0;

        let letterIndex = 0;

        let deleting = false;

        function typeEffect() {

            const current = words[wordIndex];

            if (!deleting) {

                typing.textContent = current.substring(0, letterIndex);

                letterIndex++;

                if (letterIndex > current.length) {

                    deleting = true;

                    setTimeout(typeEffect, 1200);

                    return;

                }

            } else {

                typing.textContent = current.substring(0, letterIndex);

                letterIndex--;

                if (letterIndex < 0) {

                    deleting = false;

                    wordIndex++;

                    if (wordIndex >= words.length)

                        wordIndex = 0;

                }

            }

            setTimeout(typeEffect, deleting ? 50 : 100);

        }

        typeEffect();

    }

    /*=========================================
    REVEAL ANIMATION
    =========================================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: 0.15

    });

    document.querySelectorAll("section").forEach(section => {

        section.style.opacity = "0";

        section.style.transform = "translateY(80px)";

        section.style.transition = "1s";

        observer.observe(section);

    });

});
/*=========================================
SKILL BAR ANIMATION
=========================================*/

const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target;

            bar.style.width = bar.dataset.width;

        }

    });

}, { threshold: 0.4 });

skillBars.forEach(bar => {

    skillObserver.observe(bar);

});

/*=========================================
COUNTER ANIMATION
=========================================*/

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                if (count < target) {

                    count += speed;

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            };

            update();

        }

    });

}, { threshold: 0.5 });

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

/*=========================================
SCROLL TO TOP BUTTON
=========================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*=========================================
CONTACT FORM
=========================================*/

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been submitted.");

        form.reset();

    });

}

/*=========================================
FLOATING PROFILE IMAGE
=========================================*/

const profile = document.querySelector(".profile-box");

if (profile) {

    setInterval(() => {

        profile.animate([

            { transform: "translateY(0px)" },

            { transform: "translateY(-12px)" },

            { transform: "translateY(0px)" }

        ], {

            duration: 3000,

            iterations: 1

        });

    }, 3000);

}

/*=========================================
END OF SCRIPT
=========================================*/
