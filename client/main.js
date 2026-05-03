document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.querySelector(".lang-btn");
    const shareBtn = document.querySelector(".share-btn");
    const actionButtons = document.querySelectorAll(".lang-btn, .share-btn, .donate-btn");

    const sliders = {
        nature: [
            "images/nature1.jpg",
            "images/nature2.jpg",
            "images/nature3.jpg"
        ],

        warming: [
            "images/warming-1.jpg",
            "images/warming-2.jpg",
            "images/warming-3.jpg"
        ],
    };

    document.querySelectorAll(".image-slider").forEach((slider) => {
        const sliderName = slider.dataset.slider;
        const img = slider.querySelector("img");

        let currentIndex = 0;
        const sliderImages = sliders[sliderName];

        if (!sliderImages) {
            console.error(`No image list found for slider: ${sliderName}`);
            return;
        }

        function changeImage() {
            currentIndex++;

            if (currentIndex >= sliderImages.length) {
                currentIndex = 0;
            }

            img.style.animation = "none";

            setTimeout(() => {
                img.src = sliderImages[currentIndex];
                img.style.animation = "imageFade 1s ease-in-out";
            }, 100);
        }

        setInterval(changeImage, 4000);
    });

    if (shareBtn) {
        shareBtn.addEventListener("click", function () {
            if (navigator.share) {
                navigator.share({
                    title: "Project Green World",
                    text: "Learn about global warming causes, effects, solutions, and climate action.",
                    url: window.location.href
                });
            } else {
                navigator.clipboard.writeText(window.location.href);
                alert("Page link copied to clipboard!");
            }
        });
    }

    if (langBtn) {
        let currentLanguage = localStorage.getItem("language") || "en";

        function applyLanguage(language) {
            document.documentElement.lang = language;

            const translatableElements = document.querySelectorAll("[data-en][data-ta]");

            translatableElements.forEach(function (element) {
                element.textContent = element.dataset[language];
            });

            if (language === "ta") {
                langBtn.textContent = "English";
            } else {
                langBtn.textContent = "தமிழ்";
            }
        }

        applyLanguage(currentLanguage);

        langBtn.addEventListener("click", function () {
            if (currentLanguage === "en") {
                currentLanguage = "ta";
            } else {
                currentLanguage = "en";
            }

            localStorage.setItem("language", currentLanguage);
            applyLanguage(currentLanguage);
        });
    }

    actionButtons.forEach(function (button) {
        button.addEventListener("click", function (event) {
            const leaf = document.createElement("span");

            leaf.className = "leaf-pop";
            leaf.textContent = "🌿";

            leaf.style.left = event.clientX + "px";
            leaf.style.top = event.clientY + "px";

            document.body.appendChild(leaf);

            setTimeout(function () {
                leaf.remove();
            }, 700);
        });
    });
});