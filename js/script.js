/*
====================================================
AUSINDIA TRADE
script.js
Version 2.0
====================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================================
    MOBILE MENU
    ==================================================*/

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", () => {

            navMenu.classList.toggle("active");
            hamburger.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("active");
                hamburger.classList.remove("active");

            });

        });

    }


    /*==================================================
    STICKY HEADER SHADOW
    ==================================================*/

    const header = document.querySelector(".header");

    function updateHeader() {

        if (!header) return;

        if (window.scrollY > 30) {

            header.style.boxShadow = "0 12px 35px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "0 1px 12px rgba(0,0,0,.05)";

        }

    }

    window.addEventListener("scroll", updateHeader);


    /*==================================================
    FAQ
    ==================================================*/

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {

        const button = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");

        if (!button || !answer) return;

        button.addEventListener("click", () => {

            faqItems.forEach(other => {

                if (other !== item) {

                    other.classList.remove("active");

                    const otherAnswer = other.querySelector(".faq-answer");

                    if (otherAnswer) {

                        otherAnswer.style.maxHeight = null;

                    }

                }

            });

            item.classList.toggle("active");

            if (item.classList.contains("active")) {

                answer.style.maxHeight = answer.scrollHeight + "px";

            } else {

                answer.style.maxHeight = null;

            }

        });

    });


    /*==================================================
    SCROLL ANIMATIONS
    ==================================================*/

    const animatedElements = document.querySelectorAll(

        ".fade-up, .fade-left, .fade-right, .zoom-in"

    );

    if (animatedElements.length) {

        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold: 0.15

        });

        animatedElements.forEach(el => observer.observe(el));

    }


    /*==================================================
    BACK TO TOP BUTTON
    ==================================================*/

    const backButton = document.createElement("button");

    backButton.className = "back-to-top";

    backButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

    document.body.appendChild(backButton);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backButton.classList.add("show");

        } else {

            backButton.classList.remove("show");

        }

    });

    backButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /*==================================================
    COUNTER ANIMATION
    ==================================================*/

    const counters = document.querySelectorAll(".stat h2");

    function animateCounter(counter) {

        const text = counter.textContent.trim();

        const value = parseInt(text.replace(/\D/g, ""));

        if (isNaN(value)) return;

        let current = 0;

        const increment = Math.max(1, Math.ceil(value / 60));

        const interval = setInterval(() => {

            current += increment;

            if (current >= value) {

                current = value;

                clearInterval(interval);

            }

            if (text.includes("+")) {

                counter.textContent = current + "+";

            } else {

                counter.textContent = current;

            }

        }, 20);

    }

    if (counters.length) {

        const counterObserver = new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    animateCounter(entry.target);

                    counterObserver.unobserve(entry.target);

                }

            });

        }, {

            threshold: 0.5

        });

        counters.forEach(counter => counterObserver.observe(counter));

    }


    /*==================================================
    ACTIVE NAVIGATION
    ==================================================*/

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage || (currentPage === "" && href === "index.html")) {

            link.classList.add("active");

        }

    });


    /*==================================================
    SMOOTH SCROLL
    ==================================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        });

    });


    /*==================================================
    PARALLAX HERO
    ==================================================*/

    const heroImage = document.querySelector(".hero-image img");

    window.addEventListener("scroll", () => {

        if (!heroImage) return;

        const offset = window.scrollY * 0.15;

        heroImage.style.transform = `translateY(${offset}px)`;

    });


    /*==================================================
    CARD HOVER EFFECT
    ==================================================*/

    const cards = document.querySelectorAll(

        ".about-card, .why-card, .service-card, .industry-card, .india-card, .testimonial-card"

    );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = ".35s";

        });

    });


    /*==================================================
    PRELOADER FADE (OPTIONAL)
    ==================================================*/

    const preloader = document.querySelector(".preloader");

    if (preloader) {

        window.addEventListener("load", () => {

            preloader.style.opacity = "0";

            setTimeout(() => {

                preloader.style.display = "none";

            }, 500);

        });

    }


    /*==================================================
    CURRENT YEAR
    ==================================================*/

    const yearElement = document.querySelector(".current-year");

    if (yearElement) {

        yearElement.textContent = new Date().getFullYear();

    }


    console.log("AusIndia Trade website loaded successfully.");

});

