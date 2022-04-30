let landings = [];
let tools = [];
let scripts = [];

class Project {
    name;
    desc;
    date;
    technologies;
    buttonText;
    onClick;
    imageUrl;

    constructor(name, desc, date, technologies, buttonText, onClick, imageUrl){
        this.name = name;
        this.desc = desc;
        this.date = date;
        this.technologies = technologies;
        this.buttonText = buttonText;
        this.onClick = onClick;
        this.imageUrl = imageUrl;
    }
}

/* */
landings.push(new Project("Мой путь обучения React | Первый раз","Пока что вообще неясны перспективы данного фреймворка, однако тот факт что можно вставить js код прямо в разметку очень даже удобный, JSX не удобный, но думаю есть способ писать разметку в отдельном файле, иначе все выглядит очень плачевно...(    Результат урока можно глянуть тут: https://shizzaho.github.io/ShizzaHoPractical/practical_landings/react_FirstTime/","03.04.2022","React","Открыть репозиторий в GitHub","openReactFT","https://i.pinimg.com/originals/12/7b/47/127b470a1814ca2ae06d9f40df34f190.png"));
/* */

/* */
tools.push(new Project("Telegram Web Enhancer","Расширение для chromium браузеров которое добавит несколько функций в Telegram Web","07.02.2022","Extensions, JS, HTML, CSS","Открыть репозиторий в GitHub","ChatMoveToRight","https://sun9-87.userapi.com/c637725/v637725736/1c77b/Tp0EeYMJwiU.jpg"));
tools.push(new Project("SZH Remote (Проект заморожен)","Приложение для удаленного управления Windows, управление работает на любом устройстве на котором есть веб-браузер","15.02.2022","JS, HTML, CSS, NodeJS, ElectronJS, ExpressJS","Открыть репозиторий в GitHub","SZHRemote","https://i.ibb.co/y0P7R0V/image.png"));
/* */

/* */
function ChatMoveToRight(){
    window.open("https://github.com/ShizzaHo/Telegram-Web-Enhancer");
}

function SZHRemote(){
    window.open("https://github.com/ShizzaHo/SZH-Remote");
}

function openReactFT(){
    window.open("https://github.com/ShizzaHo/SZH-Remote");
}
/* */


