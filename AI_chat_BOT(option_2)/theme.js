document.addEventListener("DOMContentLoaded", function () {
    const themeCards = document.querySelectorAll(".themeCard");
    const root = document.documentElement;



    const themes = {
        "Royal-Velvet": {
            "primary-color": "#331832",
            "secondary-color": "#ac6fc5",
            "tertiary-color": "#7e319f",
            "background-color": "#f5eef8",
            "user-gradient": "linear-gradient(to left, #af7ac5, #d7bde2, #d7bde2)",
            "assistant-gradient": "linear-gradient(to left, #af7ac5, #d7bde2, #d7bde2)"
        },
        "Amethyst-Twilight": {
            "primary-color": "#f5f5f5",
            "secondary-color": "#5a4b5c",
            "tertiary-color": "#3d314a",
            "background-color": "#211f30",
            "user-gradient": "linear-gradient(to left, #7d669e, #5a4b5c, #5a4b5c)",
            "assistant-gradient": "linear-gradient(to left, #7d669e, #5a4b5c, #5a4b5c)"
        },
        "Deep-Space": {
            "primary-color": "#f7f7f7",
            "secondary-color": "#25283d",
            "tertiary-color": "#161625",
            "background-color": "#0c0e16",
            "user-gradient": "linear-gradient(to left, #536976, #292e49, #292e49)",
            "assistant-gradient": "linear-gradient(to left, #536976, #292e49, #292e49)"
        },
        "Shadowed-Forest": {
            "primary-color": "#f5f5f5",
            "secondary-color": "#2c3e50",
            "tertiary-color": "#1f2d3d",
            "background-color": "#17202a",
            "user-gradient": "linear-gradient(to left, #34495e, #2c3e50, #2c3e50)",
            "assistant-gradient": "linear-gradient(to left, #34495e, #2c3e50, #2c3e50)"
        },
        "Ocean-Breeze": {
            "primary-color": "#114e60",
            "secondary-color": "#76c7c0",
            "tertiary-color": "#33a1ad",
            "background-color": "#f0f9f8",
            "user-gradient": "linear-gradient(to left, #8dd6cb, #a4f0e6, #a4f0e6)",
            "assistant-gradient": "linear-gradient(to left, #8dd6cb, #a4f0e6, #a4f0e6)"
        },
        "Sunset-Glow": {
            "primary-color": "#6c2c17",
            "secondary-color": "#f4a261",
            "tertiary-color": "#f76d4d",
            "background-color": "#fdf0e9",
            "user-gradient": "linear-gradient(to left, #f9b6a9, #fedcc1, #fedcc1)",
            "assistant-gradient": "linear-gradient(to left, #f9b6a9, #fedcc1, #fedcc1)"
        },
        "Forest-Serenity": {
            "primary-color": "#1f3c34",
            "secondary-color": "#8db596",
            "tertiary-color": "#4a7c66",
            "background-color": "#e6f2eb",
            "user-gradient": "linear-gradient(to left, #8db596, #bde7c6, #bde7c6)",
            "assistant-gradient": "linear-gradient(to left, #8db596, #bde7c6, #bde7c6)"
        },
        "Crimson-Night": {
            "primary-color": "#4a2f36",
            "secondary-color": "#d18d9b",
            "tertiary-color": "#8E4A5E",
            "background-color": "#FFE6E8",
            "user-gradient": "linear-gradient(to left, #D88E98, #FFC7CE, #f5c0c4)",
            "assistant-gradient": "linear-gradient(to left, #D88E98, #FFC7CE, #f5cace)"
        },
        "Golden-Dusk": {
            "primary-color": "#38322d",
            "secondary-color": "#e7cc8d",
            "tertiary-color": "#B0825A",
            "background-color": "#FFE6C0",
            "user-gradient": "linear-gradient(to right, #F7D2A9, #FFD4A8, #e7c28a)",
            "assistant-gradient": "linear-gradient(to right, #F7D2A9, #FFD4A8, #e7c28a)"
        },
        "Slate-Storm": {
            "primary-color": "#27292c",
            "secondary-color": "#8693AB",
            "tertiary-color": "#596e8e",
            "background-color": "#E0E6F0",
            "user-gradient": "linear-gradient(to right, #8693AB, #A2B1C8, #C5D2E9)",
            "assistant-gradient": "linear-gradient(to right, #8693AB, #A2B1C8, #C5D2E9)"
        }

    };
    let selectedTheme = localStorage.getItem("selectedTheme") || "Default";
    themeCards.forEach(card => {
        const themeName = card.getAttribute("data-theme");
        if (themeName === selectedTheme) {
            applyTheme(themeName);
            card.classList.add("selected");
        }
        card.querySelector(".applyBtn").addEventListener("click", function () {
            applyTheme(themeName);
            selectedTheme = themeName;
            localStorage.setItem("selectedTheme", selectedTheme);
        });
        console.log(card.childNodes);
        card.childNodes[3].style.color = themes[themeName]["primary-color"];
        card.childNodes[3].style.background = themes[themeName]["tertiary-color"]
        card.style.background = themes[themeName]["assistant-gradient"];
        card.style.color = themes[themeName]["primary-color"];
    });

    function applyTheme(themeName) {
        const theme = themes[themeName];
        Object.keys(theme).forEach(property => {
            root.style.setProperty(`--${property}`, theme[property]);
        });
    }
});

function closeThemeDiv() {
    document.getElementById("themeContainer").style.display = "none";
}
function toggleThemeDiv() {
    if (document.getElementById("themeContainer").style.display == "flex") {
        document.getElementById("themeContainer").style.display = "none";
    }
    else {
        document.getElementById("themeContainer").style.display = "flex";
    }

}
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener('click', toggleThemeDiv);