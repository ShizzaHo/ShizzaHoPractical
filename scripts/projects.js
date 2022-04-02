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

/* */

/* */
tools.push(new Project("TelegramWeb ChatMoveToLeft","Расширение для chromium браузеров которое переместит ваш чат TelegramWeb влево","07.02.2022","Extensions, JS, HTML, CSS","Открыть репозиторий в GitHub","ChatMoveToRight","https://sun9-87.userapi.com/c637725/v637725736/1c77b/Tp0EeYMJwiU.jpg"));
tools.push(new Project("SZH Remote (Проект заморожен)","Приложение для удаленного управления Windows, управление работает на любом устройстве на котором есть веб-браузер","15.02.2022","JS, HTML, CSS, NodeJS, ElectronJS, ExpressJS","Открыть репозиторий в GitHub","SZHRemote","https://i.ibb.co/y0P7R0V/image.png"));
/* */

/* */
function ChatMoveToRight(){
    window.open("https://github.com/ShizzaHo/TelegramWeb-ChatMoveToLeft");
}

function SZHRemote(){
    window.open("https://github.com/ShizzaHo/SZH-Remote");
}
/* */


