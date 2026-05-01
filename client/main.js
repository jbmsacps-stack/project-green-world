document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.querySelector(".lang-btn");
    const shareBtn = document.querySelector(".share-btn");

    console.log("JavaScript connected");
    console.log(langBtn);
    console.log(shareBtn);

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

    let currentLanguage = localStorage.getItem("language") || "en";

    function applyLanguage(language) {
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
});