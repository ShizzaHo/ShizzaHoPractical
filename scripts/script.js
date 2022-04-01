let titlePage;
let menuPage;
let projectsPage;

function hideAll() {
    titlePage.style.display = "none";
    menuPage.style.display = "none";
    projectsPage.style.display = "none";
}

window.onload = () => {
    titlePage = document.getElementsByClassName("page__title")[0];
    menuPage = document.getElementsByClassName("page__menu")[0];
    projectsPage = document.getElementsByClassName("page__projects")[0];

    hideAll();
    showTitle();
}

function showTitle() {
    titlePage.style.display = "flex";
    titlePage.classList.add("slide-in-top");
    setTimeout(()=>{
        titlePage.classList.remove("slide-in-top");
        titlePage.classList.add("slide-out-bottom");
        setTimeout(()=>{
            showMenu();
        },1000);
    },2000);
}

function showMenu(){
    titlePage.style.display = "none";
    menuPage.style.display = "flex";
}

function showLandings() {
    let title = document.getElementById("name_PP");
    let projects = document.getElementById("projects");

    title.innerText = "Верстка"; 

    projectsPage.style.display = "block";
    projectsPage.classList.add("slide-in-top");

    projects.innerHTML = "";

    for(let i = 0; i < landings.length; i++){
        projects.innerHTML += `
        
        <div class="project">
                <div class="bg__img" style="background: url(`+landings[i].imageUrl+`) no-repeat center center;"></div>
                <div class="project__info">
                    <h1>`+landings[i].name+`</h1>
                    <p>`+landings[i].desc+`</p>
                    <span>Дата реализации: `+landings[i].date+`</span>

                    <div class="panel">
                        <div class="info">
                            Используемые технологии: `+landings[i].technologies+`
                        </div>
                        <div class="buttonView" onClick="`+landings[i].onClick+`()">
                            `+landings[i].buttonText+`
                        </div>
                    </div>
                </div>
        </div>

        `;
    }
}

function showScripts() {
    let title = document.getElementById("name_PP");
    let projects = document.getElementById("projects");

    title.innerText = "Скрипты"; 

    projectsPage.style.display = "block";
    projectsPage.classList.add("slide-in-top");

    projects.innerHTML = "";

    for(let i = 0; i < scripts.length; i++){
        projects.innerHTML += `
        
        <div class="project">
                <div class="bg__img" style="background: url(`+scripts[i].imageUrl+`) no-repeat center center;"></div>
                <div class="project__info">
                    <h1>`+scripts[i].name+`</h1>
                    <p>`+scripts[i].desc+`</p>
                    <span>Дата реализации: `+scripts[i].date+`</span>

                    <div class="panel">
                        <div class="info">
                            Используемые технологии: `+scripts[i].technologies+`
                        </div>
                        <div class="buttonView" onClick="`+scripts[i].onClick+`()">
                            `+scripts[i].buttonText+`
                        </div>
                    </div>
                </div>
        </div>

        `;
    }
}

function showTools() {
    let title = document.getElementById("name_PP");
    let projects = document.getElementById("projects");

    title.innerText = "Инструменты"; 

    projectsPage.style.display = "block";
    projectsPage.classList.add("slide-in-top");

    projects.innerHTML = "";

    for(let i = 0; i < tools.length; i++){
        projects.innerHTML += `
        
        <div class="project">
                <div class="bg__img" style="background: url(`+tools[i].imageUrl+`) no-repeat center center;"></div>
                <div class="project__info">
                    <h1>`+tools[i].name+`</h1>
                    <p>`+tools[i].desc+`</p>
                    <span>Дата реализации: `+tools[i].date+`</span>

                    <div class="panel">
                        <div class="info">
                            Используемые технологии: `+tools[i].technologies+`
                        </div>
                        <div class="buttonView" onClick="`+tools[i].onClick+`()">
                            `+tools[i].buttonText+`
                        </div>
                    </div>
                </div>
        </div>

        `;
    }
}

function openPortfolio() {
    window.open("https://shizzaho.github.io");
}

function back() {
    projectsPage.classList.remove("slide-in-top");
    projectsPage.classList.add("slide-out-top");
    setTimeout(()=>{
    projectsPage.style.display = "none";
    projectsPage.classList.remove("slide-out-top");
    },500);
}