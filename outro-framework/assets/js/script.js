// ==============================
// ELEMENTOS
// ==============================

var root = document.documentElement;

var themeButton = document.getElementById("themeToggle");

var navbarBurger = document.getElementById("navbarBurger");

var navbarMenu = document.getElementById("navbarMenu");


// ==============================
// TEMA
// ==============================

function applyTheme(theme) {

    // Define tema
    root.setAttribute("data-theme", theme);


    // Salva preferência
    localStorage.setItem("theme", theme);


    // Troca ícone
    if (themeButton) {

        if (theme === "dark") {

            themeButton.innerHTML =
                '<span class="icon"><i class="fa-solid fa-sun"></i></span>';

        } else {

            themeButton.innerHTML =
                '<span class="icon"><i class="fa-solid fa-moon"></i></span>';

        }

    }

}


// ==============================
// CARREGAR TEMA SALVO
// ==============================

var savedTheme = localStorage.getItem("theme");


if (savedTheme) {

    applyTheme(savedTheme);

} else {

    applyTheme("light");

}


// ==============================
// ALTERAR TEMA
// ==============================

if (themeButton) {

    themeButton.addEventListener("click", function () {

        var currentTheme =
            root.getAttribute("data-theme");


        if (currentTheme === "light") {

            applyTheme("dark");

        } else {

            applyTheme("light");

        }

    });

}


// ==============================
// MENU MOBILE BULMA
// ==============================

if (navbarBurger && navbarMenu) {

    navbarBurger.addEventListener("click", function () {

        navbarBurger.classList.toggle("is-active");

        navbarMenu.classList.toggle("is-active");

    });

}


// ==============================
// FECHAR MENU AO CLICAR EM LINK
// ==============================

var navbarLinks =
    document.querySelectorAll(".navbar-menu .navbar-item[href^='#']");


navbarLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarBurger && navbarMenu) {

            navbarBurger.classList.remove("is-active");

            navbarMenu.classList.remove("is-active");

        }

    });

});


// ==============================
// ANO AUTOMÁTICO
// ==============================

var year = document.getElementById("year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}