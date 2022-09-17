let activeElement = 0;

function starting() {
    const menuContainer = document.querySelector("#search-menu");
    const matches = menuContainer.querySelectorAll("li > div");
    const navButtons = document.querySelectorAll(".nav-button");

    let spanTitulo = document.getElementById("title");
    let spanIcon = document.getElementById("icon-title");
    
    const addClick = ()=> {
        matches.forEach((element, index) => {
            element.addEventListener("click", ()=>{
                activeElement = index;
                console.log(element, activeElement);
                let icono = matches[activeElement].children[0].innerHTML;
                let titulo = matches[activeElement].children[1].innerHTML;

                spanTitulo.innerHTML = titulo;
                spanIcon.innerHTML = icono;
            });
        });
        navButtons.forEach((element, index) => {
            element.addEventListener("click", ()=>{
                if (index == 0) {
                    if (activeElement == 0) {
                        activeElement = matches.length -1
                    }
                    else {
                        activeElement --
                    }
                    let icono = matches[activeElement].children[0].innerHTML;
                    let titulo = matches[activeElement].children[1].innerHTML;
                    
                    spanTitulo.innerHTML = titulo;
                    spanIcon.innerHTML = icono
                }
                else {
                    if (activeElement == (matches.length -1)) {
                        activeElement = 0
                    }
                    else {
                        activeElement ++
                    }
                    let icono = matches[activeElement].children[0].innerHTML;
                    let titulo = matches[activeElement].children[1].innerHTML;

                    spanTitulo.innerHTML = titulo;
                    spanIcon.innerHTML = icono
                }
            });
        });
    }
    
    addClick();
    typing();
}

function typing() {
    const escritura = new Typed("#message", {
        strings: [
            "🔖 Be you",
            "🔖 Hello There!",
            "🔖 Hope you're having a good day"],
        typeSpeed: 70,
        startDelay: 1000,
        backSpeed: 70,
        smartBackspace: true,
        shuffle: true,
        backDelay: 15000,
        loop: true,
        loopCount: Infinity,
        showCursor: false
    });
}

window.addEventListener('load', starting);