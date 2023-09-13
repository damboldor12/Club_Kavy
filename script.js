document.addEventListener('DOMContentLoaded', function () {
    const NavLinks = this.getElementsByClassName("nav_link"); // Визначаємо рядки МЕНЮ
    const navLinksArray = Array.from(NavLinks); // Створюємо МАСИВ рядків МЕНЮ


    const mainDescription = document.getElementById('main_description'); // Визначаємо головний БЛОК ОПИСУ КОМПАНІЇ

    const contacts = document.getElementById('contacts'); // Визначаємо блок з КОНТАКТАМИ
    const projectContainer = document.body; // Визначаємо куди будемо вставляти блоки з ПРОЕКТАМИ


    //ІНТЕРВАЛИ МІЖ АНІМАЦІЯМИ
    let lastActionTime = 0; // Прописуємо початкове значення для інтервалу між анімаціями
    const actionInterval = 300; // час між командами в мілісекундах

    // МАСИВ З ІНФОРМАЦІЄЮ ПРО ПРОЕКТИ
    const projects = [{
        Name: 'Клуб Кави',
        Logo: 'logo.png',
        MiniLogo: '../img/ClubKavy.svg',
        TextColor: 'black',
        BackgroundColor: '#FFFFFF'
    }, {
        Name: 'MYATA',
        Logo: 'logo.png',
        MiniLogo: '../img/MYATA.svg',
        TextColor: 'black',
        BackgroundColor: '#C4DDDA'
    }, {
        Name: '4943',
        Logo: 'logo.png',
        MiniLogo: '../img/4943.svg',
        TextColor: 'white',
        BackgroundColor: 'black'
    }, {
        Name: 'Simple',
        Logo: 'logo.png',
        MiniLogo: '../img/SIMPLE.svg',
        TextColor: 'white',
        BackgroundColor: '#E84133'
    }, {
        Name: 'ROOF',
        Logo: 'logo.png',
        MiniLogo: '../img/ROOF.svg',
        TextColor: 'black',
        BackgroundColor: '#FFCC00'
    }
    ];
    let translateX = 0; // Визначаємо початкову змінну для зсуву ТИТУЛКИ ПРОЕКТІВ
    for (const projectKey in projects) { // Проходимо по кожному масиву ПРОЕКТУ
        const project = projects[projectKey];

        const projectDiv = document.createElement('div'); // створюємо DIV для кожного проекту
        projectDiv.classList.add('ProjectElement'); // додаємо йму класс для стилів
        projectDiv.style.color = `${project.TextColor}`; // визначаємо колір тексту з змінних
        projectDiv.style.background = `${project.BackgroundColor}`;// визначаємо колір фону з змінних
        projectDiv.innerHTML = `

        <div class="Project_Title" style="transform: translate(${translateX}px, -95%); background:${project.BackgroundColor}">
        <div class="Project_Title_Logo_Box"> <img class="Project_Title_Logo" src="${project.MiniLogo}"> </div>
        ${project.Name}
        </div>

          <h2>${project.Name}</h2>
        `;

        projectContainer.appendChild(projectDiv); // вставляємо DIV в зарання визначений блок
        translateX += 40; // робимо зсув титулки на кожному циклі
    }

    const ProjectElement = document.getElementsByClassName('ProjectElement'); // Визначаємо всі створені БЛОКИ З ПРОЕКТАМИ
    const ProjectElementArray = Array.from(ProjectElement); // Створюємо МАСИВ з БЛОКІВ ПРОЕКТІВ
    const numberOfProjects = Object.keys(projects).length;// Рахуємо КІЛЬКІСТЬ ПРОЕКТІВ


    let ActiveProjectElement = 0; // Визначаємо який елемент буде активний з самого початку





    function performAction() { // Функція, коли хочемо йти ВНИЗ по сайту
        const currentTime = Date.now(); // записали поточний час


        if (currentTime - lastActionTime >= actionInterval) { // перевіряємо чи пройшло достатньо часу
            lastActionTime = currentTime; // записуємо коли спрацювала функція

            if (ActiveProjectElement == numberOfProjects) { // Дивимось чи вже розгонтуто ОСТАНІЙ ЕЛЕМЕНТ з проектів
                // якщо так - то хочваємо все і йдемо до блоку з КОНТАКТАМИ

                // ХОВАЄМО ОПИС КОМПАНІЇ (за верхню частину сайту)
                mainDescription.style.top = '-50% ';

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
                // Ваш код для виконання дії при свайпі вгору або вниз
                if (ActiveProjectElement == 0 || ActiveProjectElement == numberOfProjects + 1) {
                    mainDescription.style.top = '45%';
                    navLinksArray.forEach(link => {
                        link.classList.remove('nav_link_active');
                    });
                    navLinksArray[0].classList.add('nav_link_active');
                }
                ProjectElement[ActiveProjectElement].style.transform = 'translate(0, 100%)';
            }

            if (ActiveProjectElement > numberOfProjects) {
                mainDescription.style.top = '10% ';
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

    function GoToSTART() {
        mainDescription.style.top = '45%';
    
        navLinksArray.forEach(link => {
            link.classList.remove('nav_link_active');
        });
        navLinksArray[0].classList.add('nav_link_active');
    
        contacts.style.transform = 'translate(0, 100%)';
    
        ProjectElementArray.forEach(element => { element.style.transform = 'translate(0, 100%)' });
        ActiveProjectElement = 0;

    }

});


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