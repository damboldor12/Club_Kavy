var lastActionTime = 0; // Прописуємо початкове значення для інтервалу між анімаціями
var ActiveProjectElement = 0; // Визначаємо який елемент буде активний з самого початку
const actionInterval = 300; // час між командами в мілісекундах
var numberOfProjects;
var mainDescription;
var navLinksArray;
var NavLinks;
var contacts;
var ProjectElement;
var ProjectElementArray;

document.addEventListener('DOMContentLoaded', function () {
    NavLinks = this.getElementsByClassName("nav_link"); // Визначаємо рядки МЕНЮ
    navLinksArray = Array.from(NavLinks); // Створюємо МАСИВ рядків МЕНЮ
    mainDescription = document.getElementById('main_description'); // Визначаємо головний БЛОК ОПИСУ КОМПАНІЇ
    contacts = document.getElementById('contacts'); // Визначаємо блок з КОНТАКТАМИ
    const projectContainer = document.body; // Визначаємо куди будемо вставляти блоки з ПРОЕКТАМИ


    // МАСИВ З ІНФОРМАЦІЄЮ ПРО ПРОЕКТИ
    const projects = [{
        Name: 'Клуб Кави',
        Logo: '../img/ClubKavyFULL.svg',
        MiniLogo: '../img/ClubKavy.svg',
        TextColor: 'black',
        BackgroundColor: '#FFFFFF',
        Description: "Мережа сучасних кав'ярень з улюбленими класичними кавовими напоями",
        Instagram: 'https://www.instagram.com/clubkavy/',
        Facabook: 'https://www.facebook.com/clubkavy',
        Sitle: 'https://clubkavy.com.ua/',
        Map: 'https://www.google.com/maps/d/edit?mid=1G3xEsEPukAhgavvInvQ6XbIscnQr000&usp=sharing',
        Telegram: '',
        Email: '',
        IconColor: 'black'
    }, {
        Name: 'MYATA',
        Logo: '../img/MYATAFULL.svg',
        MiniLogo: '../img/MYATA.svg',
        TextColor: 'black',
        BackgroundColor: '#C4DDDA',
        Description: 'Атмосферне міське кафе зі смачним продуктом та приємною атмосферою.',
        Instagram: 'https://www.instagram.com/myata.espressobar/',
        Facabook: 'https://www.facebook.com/myata.espressobar/',
        Sitle: 'https://myataespressobar1.choiceqr.com/',
        Map: 'https://maps.app.goo.gl/frjhw9wgEchgbAxo7',
        Telegram: '',
        Email: '',
        IconColor: 'black'
    }, {
        Name: '4943',
        Logo: '../img/4943FULL.svg',
        MiniLogo: '../img/4943.svg',
        TextColor: 'white',
        BackgroundColor: 'black',
        Description: "Динамічна specialty кав'ярня сучасного міста. Кавовий place, місце невинних ранків, мотивуючих зустрічей та натуральних вин. Для власників бізнесу, носіїв ідей, офісних інтровертів, дипломатів та бізнес партнерів. Для людей, яких об’єднує драйв та ритм сучасного міста. У меню – класика, фільтр, кава полицях кава від топових обсмажчиків України.",
        Instagram: 'https://www.instagram.com/4943.coffeeshop/',
        Facabook: '',
        Sitle: 'https://4943.com.ua/',
        Map: 'https://goo.gl/maps/43P3XXLwxMdBW9jQ6',
        Telegram: '',
        Email: '',
        IconColor: 'white'
    },
    {
        Name: 'Simple',
        Logo: '../img/SimpleFULL.svg',
        MiniLogo: '../img/SIMPLE.svg',
        TextColor: 'white',
        BackgroundColor: '#E84133',
        Description: 'Simple — кавовий сервіс створений, щоб вирішити будь-яку проблему клієнта.',
        Instagram: 'https://www.instagram.com/im.simple.coffee/',
        Facabook: '',
        Sitle: 'https://im-simple.com.ua/',
        Map: '',
        Telegram: '',
        Email: 'https://mailto:im.simplecoffee@gmail.com',
        IconColor: 'white'
    }, {
        Name: 'ROOF',
        Logo: '../img/ROOFFULL.svg',
        MiniLogo: '../img/ROOF.svg',
        TextColor: 'black',
        BackgroundColor: '#FFCC00',
        Description: "ROOF – кавовий проект, який об’єднує людей захоплених любов'ю до кави в одне велике ком'юніті. Стартап, навколо якого об'єднується велике коло “фільтролаверів” та бариста, через спільні цінності, кавові тусовки, батли та навчання.",
        Instagram: 'https://www.instagram.com/roof.specialty.coffee/',
        Facabook: '',
        Sitle: 'https://roofcoffee.com.ua/',
        Map: '',
        Telegram: 'https://t.me/roofspecialty',
        Email: 'https://mailto:roof.specialtycoffee@gmail.com',
        IconColor: 'black'
    }
    ];
    let translateX = 0; // Визначаємо початкову змінну для зсуву ТИТУЛКИ ПРОЕКТІВ
    let currentProjectIndex = 0;
    for (const projectKey in projects) { // Проходимо по кожному масиву ПРОЕКТУ
        const project = projects[projectKey];
        currentProjectIndex++;
        const projectDiv = document.createElement('div'); // створюємо DIV для кожного проекту
        projectDiv.classList.add('ProjectElement'); // додаємо йму класс для стилів
        projectDiv.style.color = `${project.TextColor}`; // визначаємо колір тексту з змінних
        projectDiv.style.background = `${project.BackgroundColor}`;// визначаємо колір фону з змінних
        projectDiv.innerHTML = `

        <div class="Project_Title" style="transform: translate(${translateX}px, -95%); background:${project.BackgroundColor}">
        <div class="Project_Title_Logo_Box"> <img class="Project_Title_Logo" src="${project.MiniLogo}"> </div>
        ${project.Name}
        </div>

          <p class="Project_Description">${project.Description}</p>

          <div class="Project_Right_Side" id="${currentProjectIndex}">
          <img src="${project.Logo}" alt="${project.Name}" height="120px">
          <div class="Project_Contacts">

          ${project.Instagram ? `<svg width="50" height="50" onclick="window.open('${project.Instagram}', '_blank');" style="border: solid 1px ${project.IconColor};border-radius: 30px;" viewBox="0 0 52 52" fill="${project.IconColor}" xmlns="http://www.w3.org/2000/svg">
          <path d="M32.1253 41H20.8785C15.9836 41 12 37.0169 12 32.1227V20.8773C12 15.9831 15.9836 12 20.8785 12H32.1215C37.0164 12 41 15.9831 41 20.8773V32.1189C41 37.0131 37.0164 40.9962 32.1215 40.9962L32.1253 41ZM20.8785 14.1723C17.181 14.1723 14.1726 17.1803 14.1726 20.8773V32.1189C14.1726 35.8159 17.181 38.8277 20.8822 38.8277H32.1253C35.8228 38.8277 38.835 35.8197 38.835 32.1189V20.8773C38.835 17.1803 35.8265 14.1685 32.1253 14.1685H20.8785V14.1723Z" />
          <path d="M26.4998 33.8356C22.4559 33.8356 19.165 30.5452 19.165 26.5019C19.165 22.4585 22.4559 19.1681 26.4998 19.1681C30.5436 19.1681 33.8345 22.4585 33.8345 26.5019C33.8345 30.5452 30.5436 33.8356 26.4998 33.8356ZM26.4998 21.3893C23.6796 21.3893 21.3865 23.682 21.3865 26.5019C21.3865 29.3217 23.6796 31.6144 26.4998 31.6144C29.3199 31.6144 31.613 29.3217 31.613 26.5019C31.613 23.682 29.3199 21.3893 26.4998 21.3893Z" />
          <path d="M36.5455 18.3661C36.5455 19.4203 35.6908 20.2749 34.6365 20.2749C33.5823 20.2749 32.7275 19.4203 32.7275 18.3661C32.7275 17.312 33.5823 16.4574 34.6365 16.4574C35.6908 16.4574 36.5455 17.312 36.5455 18.3661Z" />
          </svg>
          ` : ''}

          ${project.Facabook ? `<svg width="50" height="50" onclick="window.open('${project.Facabook}', '_blank');" style="border: solid 1px ${project.IconColor};border-radius: 30px;" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.766 40.3056H27.7268V25.3713H31.8853L32.323 20.376H27.714V17.5308C27.714 16.3463 27.9457 15.8828 29.0915 15.8828H32.323V10.6945H28.1903C23.7487 10.6945 21.7531 12.6514 21.7531 16.3849V20.376H18.6504V25.4357H21.7531V40.3056H21.766Z" fill="${project.IconColor}"/>
          </svg>
          ` : ''}

          ${project.Telegram ? `<svg width="50" height="50" onclick="window.open('${project.Telegram}', '_blank');" style="border: solid 1px ${project.IconColor};border-radius: 30px;" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.5413 14.2128C31.7156 15.8002 15.3091 22.6035 10.7767 24.4575C7.73711 25.6448 9.5168 26.7578 9.5168 26.7578C9.5168 26.7578 12.1108 27.6502 14.3361 28.3169C16.5613 28.9862 17.7469 28.2425 17.7469 28.2425L28.1997 21.1879C31.9076 18.6646 31.0165 20.7417 30.1279 21.6341C28.1997 23.5651 25.0116 26.609 22.3434 29.058C21.1578 30.0966 21.7493 30.989 22.2691 31.4326C24.1973 33.0661 29.4621 36.4075 29.7566 36.6306C31.3238 37.741 34.4043 39.3386 34.8729 35.9613L36.7269 24.3036C37.321 20.3699 37.9125 16.731 37.9867 15.6925C38.2095 13.1666 35.5413 14.2077 35.5413 14.2077V14.2128Z" fill="${project.IconColor}"/>
          </svg>
          ` : ''}


          
          ${project.Sitle ? `<svg width="50" height="50" onclick="window.open('${project.Sitle}', '_blank');" style="border: solid 1px ${project.IconColor};border-radius: 30px;" viewBox="0 0 52 52" fill="${project.IconColor}"  xmlns="http://www.w3.org/2000/svg">
          <path  d="M32.876 34.3299C34.225 34.9154 35.4884 35.6535 36.6486 36.541C38.1759 34.9825 39.3082 33.1624 40.0002 31.1879H34.0013C33.7217 32.2565 33.3478 33.3049 32.876 34.3299Z" />
          <path  d="M26.3369 34.4205V40.1427C28.0389 38.7503 29.4753 37.066 30.5639 35.1872C29.1852 34.7493 27.7698 34.4927 26.3369 34.4205Z"/>
          <path  d="M27.8594 40.9983C30.65 40.5839 33.2589 39.4331 35.4204 37.6599C34.4069 36.9084 33.3095 36.2743 32.1405 35.771C31.0327 37.7337 29.5806 39.5052 27.8594 40.9966V40.9983Z" />
          <path  d="M31.6888 16.4338C32.7774 16.0043 33.8049 15.4658 34.7625 14.83C32.7407 13.3488 30.3677 12.3775 27.8672 12C29.363 13.2934 30.6578 14.7948 31.6888 16.4338Z" />
          <path  d="M26.3369 32.8117C28.0284 32.8889 29.6989 33.1993 31.3205 33.7361C31.7067 32.9023 32.023 32.0518 32.2711 31.1879H26.3369V32.8117Z" />
          <path  d="M30.9198 18.4115C29.417 18.8728 27.8811 19.1396 26.3398 19.2117V21.8119H32.2793C31.9473 20.6393 31.4947 19.4986 30.9216 18.4115H30.9198Z" />
          <path  d="M36.0756 15.9087C34.9694 16.6837 33.769 17.3329 32.4951 17.8496C33.1469 19.1145 33.6519 20.4448 34.0049 21.812H39.9898C39.2052 19.5943 37.8736 17.5628 36.0756 15.9087Z" />
          <path  d="M26.3369 12.8489V17.6014C27.5916 17.5377 28.8427 17.328 30.0729 16.9774C29.0611 15.4374 27.7943 14.0383 26.3369 12.8489Z" />
          <path  d="M14.3533 36.5394C15.5118 35.6536 16.7769 34.9138 18.1259 34.3283C17.6541 33.3034 17.2802 32.2532 17.0006 31.1863H11C11.692 33.1608 12.8243 34.9809 14.3533 36.5394Z" />
          <path  d="M18.5073 17.8496C17.2335 17.3329 16.0347 16.6837 14.9269 15.9087C13.1288 17.5628 11.7973 19.5926 11.0127 21.812H16.9976C17.3505 20.4448 17.8555 19.1162 18.5073 17.8496Z" />
          <path  d="M24.6647 17.6014V12.8489C23.2073 14.0383 21.9405 15.4374 20.9287 16.9774C22.1589 17.328 23.41 17.5377 24.6647 17.6014Z" />
          <path  d="M24.6653 40.1444V34.4205C23.2324 34.4927 21.817 34.7493 20.4365 35.1872C21.5269 37.0677 22.9633 38.752 24.6653 40.1444Z" />
          <path  d="M19.6791 33.7361C21.3007 33.1993 22.9712 32.8889 24.6627 32.8117V31.1879H18.7285C18.9766 32.0518 19.2929 32.9023 19.6791 33.7361Z" />
          <path  d="M18.8609 35.7727C17.6919 36.276 16.5946 36.9084 15.5811 37.6616C17.7426 39.4348 20.3515 40.5856 23.1421 41C21.4209 39.5086 19.9671 37.7371 18.8609 35.7744V35.7727Z" />
          <path  d="M24.665 19.2117C23.1221 19.1412 21.5878 18.8728 20.0833 18.4115C19.5102 19.4986 19.0558 20.6393 18.7256 21.8119H24.665V19.2117Z" />
          <path d="M23.1365 12C20.6359 12.3775 18.263 13.3488 16.2412 14.83C17.197 15.4658 18.2245 16.0043 19.3149 16.4338C20.3476 14.7931 21.6425 13.2917 23.1365 12Z" />
          <path  d="M15.1281 28.6917L13.7197 24.4677H15.247L16.3845 28.0341H15.6174L16.8249 24.4677H18.1896L19.3149 28.0341H18.5793L19.7675 24.4677H21.1759L19.7675 28.6917H18.1774L17.26 25.7711H17.6881L16.72 28.6917H15.1299H15.1281Z" />
          <path  d="M23.0246 28.6917L21.6162 24.4677H23.1434L24.281 28.0341H23.5139L24.7214 24.4677H26.0861L27.2114 28.0341H26.4758L27.664 24.4677H29.0724L27.664 28.6917H26.0739L25.1565 25.7711H25.5846L24.6165 28.6917H23.0264H23.0246Z" />
          <path d="M30.9211 28.6917L29.5127 24.4677H31.0399L32.1775 28.0341H31.4104L32.6178 24.4677H33.9826L35.1079 28.0341H34.3722L35.5605 24.4677H36.9689L35.5605 28.6917H33.9703L33.0529 25.7711H33.4811L32.513 28.6917H30.9229H30.9211Z" />
          </svg>
          ` : ''}
          ${project.Map ? `<svg width="50" height="50" onclick="window.open('${project.Map}', '_blank');" style="border: solid 1px ${project.IconColor};border-radius: 30px;" viewBox="0 0 51 51" fill="${project.IconColor}" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.9994 37.8517C31.9994 39.0382 29.3134 40 25.9997 40C22.686 40 20 39.0382 20 37.8517C20 37.0631 21.1867 36.3737 22.9557 36C23.713 36.7817 24.3833 37.3899 24.8635 37.8025C25.1808 38.0749 25.5844 38.2248 26 38.2248C26.4156 38.2248 26.8192 38.0749 27.1365 37.8025C27.617 37.3899 28.287 36.782 29.0443 36C30.8133 36.3737 32 37.0631 32 37.8517H31.9994Z"/>
          <path d="M26 11C21.0295 11 17 15.2429 17 20.4768C17 28.6344 23.1308 34.8106 25.2723 36.7192C25.6923 37.0936 26.3077 37.0936 26.7277 36.7192C28.8692 34.8106 35 28.6344 35 20.4768C35 15.2429 30.9705 11 26 11ZM25.946 26.5561C22.76 26.5561 20.1774 23.8366 20.1774 20.4818C20.1774 17.127 22.7603 14.4075 25.946 14.4075C29.1318 14.4075 31.7147 17.127 31.7147 20.4818C31.7147 23.8366 29.132 26.5561 25.946 26.5561Z" />
          </svg>
          ` : ''}

          ${project.Email ? `<svg width="50" height="50" onclick="window.open('${project.Email}', '_blank');" style="border: solid 1px ${project.IconColor};border-radius: 30px;" viewBox="0 0 51 51" fill="${project.IconColor}" xmlns="http://www.w3.org/2000/svg">
          <path d="M35.1002 16H15.8998C13.7474 16 12 17.6477 12 19.6772V32.3228C12 34.3523 13.7474 36 15.8998 36H35.1002C37.2526 36 39 34.3523 39 32.3228V19.6772C39 17.6477 37.2526 16 35.1002 16ZM35.1002 17.7549C35.2565 17.7549 35.4128 17.7749 35.562 17.8084L27.4641 26.4756C26.9669 27.0047 26.2494 27.3128 25.5036 27.3128C24.7577 27.3128 24.0403 27.0114 23.543 26.4756L15.438 17.8084C15.5872 17.7749 15.7435 17.7549 15.8998 17.7549H35.1002ZM37.1318 32.3228C37.1318 33.3811 36.2226 34.2384 35.1002 34.2384H15.8998C14.7774 34.2384 13.8682 33.3811 13.8682 32.3228V19.6772C13.8682 19.4226 13.925 19.1748 14.0174 18.9471L22.1365 27.6343C22.989 28.5452 24.2107 29.0676 25.4964 29.0676C26.7822 29.0676 28.0039 28.5452 28.8564 27.6343L36.9755 18.9471C37.075 19.1681 37.1247 19.4159 37.1247 19.6772V32.3228H37.1318Z"/>
          </svg>
          ` : ''}
          </div>
          </div>
        `;

        projectContainer.appendChild(projectDiv); // вставляємо DIV в зарання визначений блок
        translateX += 40; // робимо зсув титулки на кожному циклі
    }

    ProjectElement = document.getElementsByClassName('ProjectElement'); // Визначаємо всі створені БЛОКИ З ПРОЕКТАМИ
    ProjectElementArray = Array.from(ProjectElement); // Створюємо МАСИВ з БЛОКІВ ПРОЕКТІВ
    numberOfProjects = Object.keys(projects).length;// Рахуємо КІЛЬКІСТЬ ПРОЕКТІВ

    let touchStartY = 0;
    function handleTouchStart(event) {
        touchStartY = event.touches[0].clientY;
    }

    function handleTouchEnd(event) {
        const touchEndY = event.changedTouches[0].clientY;
        const deltaY = touchEndY - touchStartY;

        if (deltaY > 0) {
            performAction_second();
            // Користувач зробив свайп вниз
        } else if (deltaY < 0) {
            // Користувач зробив свайп вверх
            performAction();
        }
    }

    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);

    function handleWheel(event) {
        event = event || window.event; // Для кросбраузерності
        const deltaY = event.deltaY || event.detail || (-event.wheelDelta); // Для різних браузерів
        if (deltaY > 0) {
            // Користувач прокрутив вниз
            performAction();
        } else if (deltaY < 0) {
            performAction_second();
        }
    }
    if (document.addEventListener) {
        // Сучасні браузери, які підтримують addEventListener
        document.addEventListener('wheel', handleWheel);
        document.addEventListener('DOMMouseScroll', handleWheel); // Firefox
    } else if (document.attachEvent) {
        // Старі версії IE
        document.attachEvent('onmousewheel', handleWheel);
    }



});

function GoToProjects() {
    ActiveProjectElement = 0;
    for (let i = 0; i < ProjectElementArray.length; i++) {
        if (i !== ActiveProjectElement) {
            ProjectElementArray[i].style.transform = 'translate(0, 90%)';
        }
    }
    performAction();
    contacts.style.transform = 'translate(0, 100%)';
}
function GoToContacts() {
    ActiveProjectElement = numberOfProjects;
    performAction();
}


function performAction() { // Функція, коли хочемо йти ВНИЗ по сайту
    const currentTime = Date.now(); // записали поточний час


    if (currentTime - lastActionTime >= actionInterval) { // перевіряємо чи пройшло достатньо часу
        lastActionTime = currentTime; // записуємо коли спрацювала функція

        if (ActiveProjectElement == numberOfProjects) { // Дивимось чи вже розгонтуто ОСТАНІЙ ЕЛЕМЕНТ з проектів
            // якщо так - то хочваємо все і йдемо до блоку з КОНТАКТАМИ

            // ХОВАЄМО ОПИС КОМПАНІЇ (за верхню частину сайту)
            mainDescription.classList.add('mainDescription_when_HIDEN');
            mainDescription.classList.remove('mainDescription_when_PROJECTS');
            //Беремо ВСІ ПРОЕКТИ І ховаємо в верх
            ProjectElementArray.forEach(element => { element.style.transform = 'translate(0, -100vh)' });

            //Виводимо блок контактів на пів екрану в верх
            contacts.style.transform = 'translate(0, -50vh)';

            navLinksArray.forEach(link => { // ЗНІМАЄМО клас АКТИВНОГО РЯДКА МЕНЮ з всіх рядків
                link.classList.remove('nav_link_active');
            });

            navLinksArray[2].classList.add('nav_link_active'); // Визначаємо ТРЕТІЙ ПУНКТ МЕНЮ АКТИВНИМ

            ActiveProjectElement += 1; // Кажемо, що номер активного елементу БІЛЬШЕ, НІЖ ПРОЕКТІВ 
            return "contacts"
        }

        if (ActiveProjectElement == numberOfProjects + 1) { // Якщо ВЖЕ зайшли на ОДИН КРОК за ПРОЕКТИ
            GoToSTART(); // повертаємо на головний екран все
            return "start";
        }

        if (ActiveProjectElement < numberOfProjects) {// Якщо ще залишились НЕ РОЗГОРНУТІ ПРОЕКТИ
            mainDescription.classList.add('mainDescription_when_PROJECTS');
            mainDescription.classList.remove('mainDescription_when_HIDEN');
            navLinksArray.forEach(link => {
                link.classList.remove('nav_link_active');
            });
            navLinksArray[1].classList.add('nav_link_active');

            ProjectElement[ActiveProjectElement].style.transform = 'translate(0, 0)';
            ActiveProjectElement += 1;
            return "next";
        }


    }
}

function performAction_second() {
    const currentTime = Date.now();

    if (currentTime - lastActionTime >= actionInterval) {
        lastActionTime = currentTime;



        if (ActiveProjectElement > 0 && ActiveProjectElement <= numberOfProjects) {
            ActiveProjectElement -= 1;
            if (ActiveProjectElement == 0 || ActiveProjectElement == numberOfProjects + 1) {
                mainDescription.classList.remove('mainDescription_when_PROJECTS');
                mainDescription.classList.remove('mainDescription_when_HIDEN');
                navLinksArray.forEach(link => {
                    link.classList.remove('nav_link_active');
                });
                navLinksArray[0].classList.add('nav_link_active');
            }
            ProjectElement[ActiveProjectElement].style.transform = 'translate(0, 100%)';
        }

        if (ActiveProjectElement > numberOfProjects) {
            mainDescription.classList.add('mainDescription_when_PROJECTS');
            mainDescription.classList.remove('mainDescription_when_HIDEN');
            ProjectElementArray.forEach(element => { element.style.transform = 'translate(0, 0)' });
            contacts.style.transform = 'translate(0, 100%)';
            navLinksArray.forEach(link => {
                link.classList.remove('nav_link_active');
            });
            navLinksArray[1].classList.add('nav_link_active');
            ActiveProjectElement -= 1;
        }
    }
}
function GoToSTART() {
    mainDescription.classList.remove('mainDescription_when_PROJECTS');
    mainDescription.classList.remove('mainDescription_when_HIDEN');

    navLinksArray.forEach(link => {
        link.classList.remove('nav_link_active');
    });
    navLinksArray[0].classList.add('nav_link_active');

    contacts.style.transform = 'translate(0, 100%)';

    ProjectElementArray.forEach(element => { element.style.transform = 'translate(0, 100%)' });
    ActiveProjectElement = 0;

}
function handleScreenWidthChange() {


    if (window.innerWidth < 780 && AdaptedFor != 'phone') {

        // Ваш код, який виконується, коли ширина екрану менше 780 пікселів
        console.log('Ширина екрану менше 780 пікселів');
        AdaptedFor = 'phone';
    }
    else if (window.innerWidth > 780 && AdaptedFor != 'pc') {
        // Ваш код, який виконується, коли ширина екрану більше 780 пікселів
        console.log('Ширина екрану більше 780 пікселів');
        AdaptedFor = 'pc';
    }
}

// Додайте обробник події для відслідковування зміни ширини екрану
window.addEventListener('resize', handleScreenWidthChange);
var AdaptedFor = '';
handleScreenWidthChange();