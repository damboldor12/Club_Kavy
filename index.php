<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="style.css">
    <script src="/script.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Club Kavy</title>
</head>

<body>
    <p id="main_description" class="main_description">Клуб Кави - це компанія з більш, як десятирічним досвідом в кавовій сфері України. <br> Ми створюємо унікальні проекти, що ефективно працюють у різних напрямках: <br><br>
        · Кав'ярні, які впізнають та люблять<br>
        · Кава власного обсмаження<br>
        · Послуги b2b для кавового бізнесу<br>
        · Курси та навчання бариста<br>
        · Різноманітні івенти та розважальні заходи <br>
    </p>


    <nav class="main_nav">
        <div href="" onclick="GoToSTART()"id="nav_link_about" class="nav_link nav_link_active">Про нас</div>
        <div href="" onclick="GoToProject(0)" id="nav_link_projects" class="nav_link">Проєкти</div>
        <div href="" onclick="GoToContacts()" id="nav_link_contacts" class="nav_link">Контакти</div>
    </nav>

    <div id="contacts" class="contacts">
        <p  style="font-size:24px">Контакти для співпраці</p> <br> <br>
        <p onclick="window.open('mailto:office@clubkavy.com', '_blank');" style="font-size: 14px">E-mail:<br> office@clubkavy.com</p><br>
        <p onclick="window.open('https://maps.app.goo.gl/EC4mpPEEyzGnrr1E8', '_blank');" style="font-size:14px">Адреса:<br> 29000, м.Хмельницький, вул. Франка 28</p><br>
        <p onclick="window.open('tel:+380680688468', '_blank');" style="font-size: 14px">Телефон:<br> +380 68 068 84 68</p>
    </div>

</body>

</html>