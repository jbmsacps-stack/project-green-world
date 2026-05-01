document.addEventListener("DOMContentLoaded", function () {
    const langBtn = document.querySelector(".lang-btn");
    const shareBtn = document.querySelector(".share-btn");
    const actionButtons = document.querySelectorAll(".lang-btn, .share-btn, .donate-btn");

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