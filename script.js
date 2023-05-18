// choices

function select() {
    let selector = document.querySelectorAll(".js-choice")
    for (let i of selector) {
        // console.log('итерация');
        const choices = new Choices(i, {
            searchEnabled: false,
            itemSelectText: ' ',
            classNames: {
                containerOuter: 'choices header_choices',
            },
        });
    }
}
select();









//-------------------------------------------

// кнопка добавить контакт
const addContactBtn = document.querySelector('.flex__add')
// иконка карандаша
const pensil = '<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10.5002V13.0002H2.5L9.87333 5.62687L7.37333 3.12687L0 10.5002ZM11.8067 3.69354C12.0667 3.43354 12.0667 3.01354 11.8067 2.75354L10.2467 1.19354C9.98667 0.933535 9.56667 0.933535 9.30667 1.19354L8.08667 2.41354L10.5867 4.91354L11.8067 3.69354Z" fill="#9873FF" /></svg>';
// иконка с крестиком
const cross = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#F06A4D" /></svg>';


// кнопка добавить контакт
const addContactChangeBtn = document.querySelector('.add__contact-change');
const addContactNewBtn = document.querySelector('.add__contact-new');

const addContactWrapperNew = document.querySelector('.add__contact-wrapper__new');
let blockContact = '<div class="contact"><select class="js-choice" name = "contact" ><option>Телефон</option><option>Доп. телефон</option><option>Email</option><option>Vk</option><option>Facebook</option></ ><input class="contact__input" type="tel" name="" id=""><div class="contact-wrapper__btn"><button class="contact__btn" ></button><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#B0B0B0" /></svg></div></div>';


// окно изменить данные.Кнопка добавить контакт
addContactChangeBtn.addEventListener('click', function () {
    let addContactWrapperChange = document.querySelector('.add__contact-wrapper__change');
    addContactWrapperChange.insertAdjacentHTML('afterbegin', blockContact);
    let no = addContactWrapperChange.querySelectorAll('.contact')

    let selectId = 0;
    for (let i of no) {
        i.id = selectId;
        let a = i.querySelector('.contact__btn');
        a.id = selectId;
        selectId++

    }
    // создаю удаление
    let contactBtn = addContactWrapperChange.querySelectorAll('.contact__btn');
    // console.log(contactBtn);
    for (let i of contactBtn) {
        i.addEventListener('click', function (event) {
            event.preventDefault();

            let d = event.target.id;
            document.getElementById(d).remove();
            // newer.removeChild(document.getElementById(d));
            // document.getElementById(d).innerHTML = '';
            // console.log('удалил');

            // если при удалении меньше 10 то добавлю кнопку добавить контакт
            let addContactWrapperChange2 = document.querySelector('.add__contact-wrapper__change')
            let contacts = addContactWrapperChange2.querySelectorAll('.contact')
            let fhfh = addContactWrapperChange2.querySelector('.contact__wrapper')
            // console.log(contacts.length)

            if (contacts.length < 10 && !addContactWrapperChange2.classList.contains('add__contact')) {
                // console.log('ЛЁЛИК')
                fhfh.append(addContactBtn);
            }

        })
    }
    select();
    // console.log('render');

    if (no.length > 9) {

        // addContactWrapperChange.classList.remove(flexAdd);
        addContactWrapperChange.querySelector('.flex__add').remove()
    }
    // console.log(no.length);
})


//                 окно изменить данные.Кнопка удалить клиента



//                 окно изменить данные.Кнопка крестик
const cancelBtnChange = document.querySelector('.cancel__btn-change')
const wrapperModalChange = document.querySelector('.wrapperModal__change')

cancelBtnChange.addEventListener('click', function () {
    wrapperModalChange.classList.remove('visible__top0')
    let contactWrapper = document.querySelector('.contact__wrapper')
    contactWrapper.remove('contact__wrapper')
    render();
    // console.log('не получилось');
})



let addContactBtnNew = addContactWrapperNew.querySelector('.flex__add')

// добавить новый контакт
addContactNewBtn.addEventListener('click', function (event) {
    event.preventDefault();
    addContactWrapperNew.insertAdjacentHTML('afterbegin', blockContact);
    let newer = document.querySelector('.add__contact-wrapper__new');
    let no = newer.querySelectorAll('.contact')
    // console.log(newer)
    // console.log(no.length)
    // console.log(no)
    let selectId = 0;
    for (let i of no) {
        i.id = selectId;
        let a = i.querySelector('.contact__btn');
        a.id = selectId;
        selectId++

    }
    // console.log(newer);


    // кнопка добавить контакт. удалить созданный контакт
    let contactBtn = document.querySelectorAll('.contact__btn');
    // console.log(contactBtn);
    for (let i of contactBtn) {
        i.addEventListener('click', function (event) {
            event.preventDefault();

            let d = event.target.id;
            document.getElementById(d).remove();
            // newer.removeChild(document.getElementById(d));
            // document.getElementById(d).innerHTML = '';
            // console.log('удалил');

            // если при удалении меньше 10 то добавлю кнопку добавить контакт
            let addContactWrapperNew2 = document.querySelector('.add__contact-wrapper__new')
            let contacts = addContactWrapperNew2.querySelectorAll('.contact')
            // let fhfh = addContactWrapperNew2.querySelector('.add__contact-wrapper__new')
            // console.log(contacts.length)

            if (contacts.length < 10 && !addContactWrapperNew2.classList.contains('add__contact')) {
                // console.log('ЛЁЛИК')
                addContactWrapperNew2.append(addContactBtnNew);
            }

        })
    }

    select();
    // console.log('render');

    if (no.length > 9) {

        newer.querySelector('.flex__add').remove()
    }
})



// кнопка длбавить клиента
const btnAdd = document.querySelector('.btn__add');
const wrapperModalNewClient = document.querySelector('.wrapperModal__NewClient');

btnAdd.addEventListener('click', function () {
    wrapperModalNewClient.classList.add('visible__top0')
})

// Окно новый клиент. кнопка крестик
const cancelBtnNewClient = document.querySelector('.cancel__btn-NewClient');

cancelBtnNewClient.addEventListener('click', function () {
    wrapperModalNewClient.classList.remove('visible__top0')
})

// Окно новый клиент. кнопка отмена
const revokeBtnNewClient = document.querySelector('.revoke__btn-NewClient');

revokeBtnNewClient.addEventListener('click', function () {
    wrapperModalNewClient.classList.remove('visible__top0')
})







let svg = '';

let data = new Date().getDate() + '-' + new Date().getMonth() + 1 + '-' + new Date().getFullYear();
let dataRewers = new Date().getFullYear() + '-' + new Date().getMonth() + 1 + '-' + new Date().getDate();

let sortColumnFlsg = 'fio',
    sortDirFlag = true



//  создание элементов

// preloader

const $wrapper = document.querySelector('.wrapper');
const preloader = document.createElement('div');
const preloaderImage = '<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.00025 40.0005C4.00025 59.8825 20.1182 76.0005 40.0002 76.0005C59.8822 76.0005 76.0002 59.8825 76.0002 40.0005C76.0002 20.1185 59.8823 4.00049 40.0003 4.00049C35.3513 4.00048 30.9082 4.88148 26.8282 6.48648" stroke="#9873FF" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round"/></svg>';

preloader.classList.add('preloader')
preloader.insertAdjacentHTML('afterbegin', preloaderImage);
$wrapper.append(preloader)

// форма

const $addForm = document.querySelector('.newClient__form');
const $inputName = document.getElementById('add-form__name-inp');
const $inputSurname = document.getElementById('add-form__surname-inp');
const $inputLastname = document.getElementById('add-form__lastname-inp');
const $inputBirthday = document.getElementById('add-form__age-inp');
const $studyStart = document.getElementById('add-form__startDate-inp');
const $inputFaculty = document.getElementById('add-form__hobby-inp');
const $sortBirthdayBtn = document.getElementById('sort__age');

// таблица
const $app = document.getElementById('app');
const $table = document.createElement('div');
const $tableHead = document.createElement('div');
const $tableBody = document.createElement('div');




// фильтрация
const $filterForm = document.getElementById('filter-form');
const $fioFilterInp = document.querySelector('.search');
const $facultyFilterInp = document.getElementById('filter-form__hobby-inp');
const $startFilterInp = document.getElementById('filter-form__start-inp');
const $finishFilterInp = document.getElementById('filter-form__finish-inp');

const $tableHeadTr = document.createElement('div');
const $tableHeadThFIO = document.createElement('div');
const $tableHeadThBirthday = document.createElement('div');
const $tableHeadThBirthYear = document.createElement('div');
const $tableHeadThFaculty = document.createElement('div');
const $tableHeadThContacts = document.createElement('div');
const $tableHeadThActions = document.createElement('div');
const $arrowUp = '<svg class="rotateArrow" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.49691e-07 4L0.705 4.705L3.5 1.915L3.5 8L4.5 8L4.5 1.915L7.29 4.71L8 4L4 -3.49691e-07L3.49691e-07 4Z" fill="#9873FF" /></svg>';
// const $arrowDown = '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 4L7.295 3.295L4.5 6.085L4.5 0L3.5 0L3.5 6.085L0.71 3.29L0 4L4 8L8 4Z" fill="#9873FF"/></svg>'
const $aYa = document.createElement('span');


$table.classList.add('table', 'table-dark', 'table-hover')
$tableHeadTr.classList.add('tableHeadTr');

// кнопка ID
const $btnId = document.createElement('button');
$btnId.classList.add('btnSort')
$btnId.textContent = 'ID'
$tableHeadThFaculty.style.padding = '0px'
$tableHeadThFaculty.append($btnId)
$tableHeadThFaculty.classList.add('tableHeadThId')
$tableHeadThFaculty.insertAdjacentHTML('beforeEnd', $arrowUp);

// кнопка ФИО
const $btnFIO = document.createElement('button');
$btnFIO.classList.add('btnSort')
$btnFIO.textContent = 'Фамилия Имя Отчество'
$tableHeadThFIO.style.padding = '0px'
$tableHeadThFIO.append($btnFIO)
$tableHeadThFIO.insertAdjacentHTML('beforeEnd', $arrowUp);
$aYa.textContent = 'А-Я'
$aYa.classList.add('aYa')
$tableHeadThFIO.append($aYa)
$tableHeadThFIO.classList.add('tableHeadThFIO')

// кнопка Последние изменения
const $btnStudyStart = document.createElement('button');
$btnStudyStart.classList.add('btnSort')
$btnStudyStart.textContent = 'Последние изменения'
$tableHeadThBirthYear.style.padding = '0px'
$tableHeadThBirthYear.append($btnStudyStart)
$tableHeadThBirthYear.classList.add('tableHeadThLastChanges')
$tableHeadThBirthYear.insertAdjacentHTML('beforeEnd', $arrowUp);

// кнопка Дата и время создания
const $btnBirthday = document.createElement('button');
$btnBirthday.classList.add('btnSort')
$btnBirthday.textContent = 'Дата и время создания'
$tableHeadThBirthday.style.padding = '0px'
$tableHeadThBirthday.append($btnBirthday)
$tableHeadThBirthday.classList.add('tableHeadThCrieteDate')
$tableHeadThBirthday.insertAdjacentHTML('beforeEnd', $arrowUp);

// контакты
$tableHeadThContacts.textContent = 'Контакты'
$tableHeadThContacts.classList.add('btnSort', 'tableHeadThContacts')

// действия
$tableHeadThActions.textContent = 'Действия'
$tableHeadThActions.classList.add('btnSort')

$tableHeadTr.append($tableHeadThFaculty)
$tableHeadTr.append($tableHeadThFIO)
$tableHeadTr.append($tableHeadThBirthday)
$tableHeadTr.append($tableHeadThBirthYear)
$tableHeadTr.append($tableHeadThContacts)
$tableHeadTr.append($tableHeadThActions)


$tableHead.append($tableHeadTr)
$table.append($tableHead)
$table.append($tableBody)
$app.append($table)

// окно удалить клиента
const cancelBtnClient = document.querySelector('.cancel__btn-client')
const delet__btn = document.querySelector('.delet__btn')
const revoke__btn = document.querySelectorAll('.revoke__btn')
const deletClient = document.querySelector('.delet__client')
const revokebtnclient = document.querySelector('.revoke__btn-client')

// кнопкка отмены
for (let i of revoke__btn) {
    i.addEventListener('click', function () {
        deletClient.classList.remove('visible__top0')
    })
}



function createUserTr(oneUser) {
    const $deletbtn = document.createElement('button');      // кнопка удалить
    const $createbtn = document.createElement('button');     // кнопка изменить
    const $userTr = document.createElement('div');
    const $userFIO = document.createElement('div');
    const $userBirthYear = document.createElement('div');
    const $userFaculty = document.createElement('div');
    const $userID = document.createElement('div');           // ID
    const $userCreatDate = document.createElement('div');
    const $userCreatTime = document.createElement('span');    // time
    const $userLastChanges = document.createElement('div');
    const $userLastChangesTime = document.createElement('span');
    const $userContacts = document.createElement('div');


    $createbtn.textContent = 'Изменить';
    $createbtn.insertAdjacentHTML('afterbegin', pensil);
    $userLastChanges.textContent = oneUser.updatedAt.substr(0, 10).split('-').join('.');
    $userLastChangesTime.textContent = oneUser.updatedAt.substr(11, 5);
    $userID.textContent = oneUser.id.substr(7);
    $userCreatTime.textContent = oneUser.createdAt.substr(11, 5);
    $userCreatDate.textContent = oneUser.createdAt.substr(0, 10).split('-').join('.');
    $deletbtn.textContent = 'Удалить';
    $deletbtn.classList = 'delet';
    $deletbtn.id = oneUser.id;
    $deletbtn.insertAdjacentHTML('afterbegin', cross);
    $userFIO.textContent = oneUser.fio;
    // $userBirthday.textContent = `${oneUser.birthday} (${data.substr(6, 4) - oneUser.birthday.substr(0, 4)} лет)`
    $userBirthYear.textContent = oneUser.BirthYear;
    $userFaculty.textContent = oneUser.faculty;


    // tultips
    let tultips = (icon, text) => {
        const tultipWrapper = document.createElement('div');
        tultipWrapper.classList.add('tultipWrapper')

        const iconSpan = document.createElement('span');
        iconSpan.classList.add('iconSpan')
        iconSpan.textContent = text;

        const iconTringl = document.createElement('span');
        iconTringl.classList.add('iconTringl')

        iconSpan.append(iconTringl)
        tultipWrapper.append(iconSpan)
        icon.append(tultipWrapper)
    }


    // console.log(oneUser.contacts)
    // добавляю иконки если они есть в массиве сервера
    for (let i of oneUser.contacts) {
        if (i.type == "Vk") {
            // console.log(oneUser.contacts.indexOf(i))
            // console.log(oneUser.contacts[oneUser.contacts.indexOf(i)].value)
            const $iconVK = document.createElement('a');
            $iconVK.href = i.value;
            $iconVK.classList.add('iconVK', 'icon__hover');
            $iconVK.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#B89EFF"/></svg>';
            $userContacts.append($iconVK)
            tultips($iconVK, oneUser.contacts[oneUser.contacts.indexOf(i)].value)

        }
        if (i.type == "Телефон") {
            // console.log(oneUser.contacts.indexOf(i))
            let $iconTel = document.createElement('a');
            $iconTel.href = i.value;
            $iconTel.classList.add('iconTel');
            $iconTel.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g><circle cx="8" cy="8" r="8" fill="#B89EFF"/><path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/></g></svg>';
            $userContacts.append($iconTel)
            tultips($iconTel, oneUser.contacts[oneUser.contacts.indexOf(i)].value)
            // console.log(i.type)
        }
        if (i.type == "Facebook") {
            // console.log(oneUser.contacts.indexOf(i))
            const $iconFacebook = document.createElement('a');
            $iconFacebook.href = i.value;
            $iconFacebook.classList.add('iconFacebook', 'icon__hover');
            $iconFacebook.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#B89EFF"/></svg>';
            $userContacts.append($iconFacebook)
            tultips($iconFacebook, oneUser.contacts[oneUser.contacts.indexOf(i)].value)
        }
        if (i.type == "Email") {
            // console.log(oneUser.contacts.indexOf(i))
            const $iconEmail = document.createElement('a');
            $iconEmail.href = i.value;
            $iconEmail.classList.add('iconEmail', 'icon__hover');
            $iconEmail.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#B89EFF"/></svg>';
            $userContacts.append($iconEmail)
            tultips($iconEmail, oneUser.contacts[oneUser.contacts.indexOf(i)].value)
        }
        if (i.type == "Доп. телефон") {
            // console.log(oneUser.contacts.indexOf(i))
            const $iconDopTel = document.createElement('a');
            $iconDopTel.href = i.value;
            $iconDopTel.classList.add('iconDopTel', 'icon__hover');
            $iconDopTel.innerHTML = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#B89EFF"/></svg>';
            $userContacts.append($iconDopTel)
            tultips($iconDopTel, oneUser.contacts[oneUser.contacts.indexOf(i)].value)
        }
    }
    $userContacts;
    // console.log(oneUser.contacts[2].type)

    $userTr.append($userID)
    $userTr.append($userFIO)
    $userTr.append($userCreatDate)
    $userTr.append($userLastChanges)
    $userTr.append($userContacts)
    $userTr.append($userFaculty)
    $userFaculty.append($createbtn)
    $userFaculty.append($deletbtn)
    $userCreatDate.append($userCreatTime);
    $userLastChanges.append($userLastChangesTime)

    $userTr.classList.add('userTr')
    $userContacts.classList.add('userContacts')
    $userID.classList.add('userID')
    $userFIO.classList.add('userFIO')
    $userFaculty.classList.add('userFaculty')
    $createbtn.classList.add('createbtn')
    $userCreatTime.classList.add('userCreatTime')
    $userLastChanges.classList.add('userLastChanges')
    $userLastChangesTime.classList.add('userCreatTime')
    $userCreatDate.classList.add('userCreatDate')

    //  удаление клиента
    $deletbtn.addEventListener('click', function () {

        deletClient.classList.add('visible__top0')

        cancelBtnClient.addEventListener('click', function () {
            deletClient.classList.remove('visible__top0')
        })


        let idStudent = '';
        function showId(event) {
            idStudent = event.target.id;
            // console.log(idStudent)
        };
        showId(event);

        delet__btn.addEventListener('click', function () {
            // async function deleteTodoItem() {
            //     const response = await fetch(`http://###/api/clients/${idStudent}`, {
            //         method: 'DELETE',
            //     });
            //     // можно проверить response
            //     if (response.status == 404)
            //         alert('не удалось удалить дело, так как его не существует');
            //     const data = await response.json();
            //     console.log(data);
            // }
            // deleteTodoItem();

            // console.log('жесть')
            let userArr15 = JSON.parse(localStorage.getItem('localArr'));
            let delet15 = userArr15.find(item => item.id == idStudent)
            // console.log(delet15)
            // console.log(userArr15.indexOf(delet15))
            userArr15.splice(userArr15.indexOf(delet15), 1);
            // console.log(userArr15)

            localStorage.setItem('localArr', JSON.stringify(userArr15));

            // перезагружу страницу
            window.location.reload();
        });
        render();
        // console.log('прошло')
    })



    // изменение данных клиента на сервере
    $createbtn.addEventListener('click', function () {

        // удаляю лишние инпуты ели они есть 
        let selectChange = document.querySelector('.add__contact-wrapper__change')
        let deletAllContacts = selectChange.querySelectorAll('.contact')

        for (let i of deletAllContacts) {
            i.remove();
        }



        const wrapperModalChange = document.querySelector('.wrapperModal__change')
        wrapperModalChange.classList.add('visible__top0')
        let saveBtnChange = document.querySelector('.save__btn-change')

        // записал данные с сервера которые можно изменить
        let changeInput1 = document.querySelector('.changeInput1')
        let changeInput2 = document.querySelector('.changeInput2')
        let changeInput3 = document.querySelector('.changeInput3')
        let spanId = document.querySelector('.span__id')

        changeInput1.value = oneUser.surname;
        changeInput2.value = oneUser.name;
        changeInput3.value = oneUser.lastName;
        spanId.textContent = `ID: ${oneUser.id}`;

        // добавлю селекторы в окно изменить данные
        // let selectChange = document.querySelector('.add__contact-wrapper__change')
        let contactWrapper = document.createElement('div')
        contactWrapper.classList.add('contact__wrapper')
        selectChange.prepend(contactWrapper)

        for (let i of oneUser.contacts) {
            // console.log(i.type);
            let option1 = '';
            let option2 = '';
            let option3 = '';
            let option4 = '';
            let option5 = '';

            if (i.type == 'Телефон') {
                option1 = 'Телефон';
                option2 = 'Доп. телефон';
                option3 = 'Email';
                option4 = 'Vk';
                option5 = 'Facebook';
            } else if (i.type == 'Доп. телефон') {
                option1 = 'Доп. телефон';
                option2 = 'Телефон';
                option3 = 'Email';
                option4 = 'Vk';
                option5 = 'Facebook';
            } else if (i.type == 'Email') {
                option1 = 'Email';
                option2 = 'Доп. телефон';
                option3 = 'Телефон';
                option4 = 'Vk';
                option5 = 'Facebook';
            } else if (i.type == 'Vk') {
                option1 = 'Vk';
                option2 = 'Доп. телефон';
                option3 = 'Email';
                option4 = 'Телефон';
                option5 = 'Facebook';
            } else if (i.type == 'Facebook') {
                option1 = 'Facebook';
                option2 = 'Доп. телефон';
                option3 = 'Email';
                option4 = 'Vk';
                option5 = 'Телефон';
            } else { console.log('ошибка в коде'); }


            let blockContact = `<div class="contact"><select class="js-choice" name = "contact" ><option>${option1}</option><option>${option2}</option><option>${option3}</option><option>${option4}</option><option>${option5}</option></ ><input class="contact__input" type="" value="${i.value}" name="" id=""><div class="contact-wrapper__btn"><button class="contact__btn" ></button><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C2.682 0 0 2.682 0 6C0 9.318 2.682 12 6 12C9.318 12 12 9.318 12 6C12 2.682 9.318 0 6 0ZM6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM8.154 3L6 5.154L3.846 3L3 3.846L5.154 6L3 8.154L3.846 9L6 6.846L8.154 9L9 8.154L6.846 6L9 3.846L8.154 3Z" fill="#B0B0B0" /></svg></div></div>`;
            contactWrapper.insertAdjacentHTML('afterbegin', blockContact);
            // let a = blockContact.querySelector('.contact__input')
            // a.value = i.value;
        }

        // -------------
        let addContactWrapperChange2 = document.querySelector('.add__contact-wrapper__change')
        let noContact = addContactWrapperChange2.querySelectorAll('.contact')

        let selectId = 0;
        for (let i of noContact) {
            i.id = selectId;
            // i.style.zIndex = selectId + 2;
            let a = i.querySelector('.contact__btn');
            a.id = selectId;
            selectId++;


        }
        // создаю удаление
        let contactBtn2 = addContactWrapperChange2.querySelectorAll('.contact__btn');
        // console.log(contactBtn2);
        for (let i of contactBtn2) {
            i.addEventListener('click', function (event) {
                event.preventDefault();

                let d = event.target.id;
                document.getElementById(d).remove();

                // если при удалении меньше 10 то добавлю кнопку добавить контакт
                let addContactWrapperChange2 = document.querySelector('.add__contact-wrapper__change')
                let contacts = addContactWrapperChange2.querySelectorAll('.contact')
                let fhfh = addContactWrapperChange2.querySelector('.contact__wrapper')
                // console.log(contacts.length)

                if (contacts.length < 10 && !addContactWrapperChange2.classList.contains('add__contact')) {
                    // console.log('ЛЁЛИК')
                    fhfh.append(addContactBtn);
                }

            })
        }
        // -----------

        // до что-то
        let contactWrapper2 = document.querySelector('.contact__wrapper')
        let choicesItem = contactWrapper2.querySelectorAll('.choices__item')
        let choicesItem2 = contactWrapper2.querySelector('.choices__item')

        for (let i of choicesItem) {
            // console.log(i);

        }

        // console.log(choicesItem2);

        select();

        // ф. котораюя будет изменять клиента
        saveBtnChange.addEventListener('click', function () {

            let changeClientArr = [];

            let contactsServer = document.querySelector('.add__contact-wrapper__change');
            let gh = contactsServer.querySelectorAll('.contact');
            // console.log(gh.length);
            for (let i of gh) {
                let s = i.querySelector('.choices__item');
                let m = i.querySelector('.contact__input');
                // console.log(s);
                let r = {
                    type: s.textContent,
                    value: m.value,
                }
                changeClientArr.push(r);
            }
            // console.log(changeClientArr);

            let changeInput1 = document.querySelector('.changeInput1')
            let changeInput2 = document.querySelector('.changeInput2')
            let changeInput3 = document.querySelector('.changeInput3')

            // console.log(changeInput1.value.trim());
            // console.log(changeInput2.value.trim());
            // console.log(changeInput3.value.trim());

            // async function changeClient() {
            //     const response = await fetch(`http://###/api/clients/${oneUser.id}`, {
            //         method: 'PATCH',
            //         body: JSON.stringify({
            //             name: changeInput2.value.trim(),
            //             surname: changeInput1.value.trim(),
            //             lastName: changeInput3.value.trim(),
            //             contacts: changeClientArr,
            //         })
            //     });
            // }
            // changeClient();

            // удаляю сначала того клиента которого хочу изменить
            let localChangeClientArr = JSON.parse(localStorage.getItem('localArr'));
            let deletLocalChange = localChangeClientArr.find(item => item.id == oneUser.id);
            localChangeClientArr.splice(localChangeClientArr.indexOf(deletLocalChange), 1);


            // добавляю изменённого клиента
            let g = {
                name: changeInput2.value.trim(),
                surname: changeInput1.value.trim(),
                lastName: changeInput3.value.trim(),
                contacts: changeClientArr,
                "id": oneUser.id,
                "updatedAt": "2023-03-23T17:59:29.792Z",
                "createdAt": "2023-03-08T19:13:46.055Z"
            }

            localChangeClientArr.push(g);

            localStorage.setItem('localArr', JSON.stringify(localChangeClientArr));
            window.location.reload();


            // console.log(`id${oneUser.id}`);
        })

        // удалить клиента если менять не захотели
        const revokeBtnDelet = document.querySelector('.revoke__btn-delet')
        revokeBtnDelet.addEventListener('click', function () {
            // async function deleteItem() {
            //     const response = await fetch(`http://###/api/clients/${oneUser.id}`, {
            //         method: 'DELETE',
            //     });
            //     // можно проверить response
            //     if (response.status === 404)
            //         console.log('не удалось удалить, так как его не существует 404');
            //     const data = await response.json();
            //     console.log(data);
            // }
            // deleteItem();

            let localDeletClientArr = JSON.parse(localStorage.getItem('localArr'));
            let deletLocalChange = localDeletClientArr.find(item => item.id == oneUser.id);
            localDeletClientArr.splice(localDeletClientArr.indexOf(deletLocalChange), 1);
            localStorage.setItem('localArr', JSON.stringify(localDeletClientArr));
            window.location.reload();
            render();
        })

    })











    // возвращаем созданый $userTr
    return $userTr
}

// Фильтрация
// arr массив который фильтруем, prop свойство по которому фильтрую(мой массив), value значение(которое ввели в инпут)
// вызываю ф с аргументами. Возвращаю массив отфильтрованый ф.filter. в oneUser на каждой итеррации
// подставляется элемент массива. если искомом свойстве(prop) есть значение value то возвращаем
// true и ф. записывает объект в массив и выводит на экран
function filter(arr, prop, value) {
    return arr.filter(function (oneUser) {
        if (oneUser[prop].includes(value.trim())) return true
    });
}





function render() {
    // рендер
    $tableBody.innerHTML = '';
    // подготовка
    // console.log(JSON.parse(localStorage.localArr))


    // console.log(localStorage.getItem('localArr'))

    let serwerArr;
    if (localStorage.getItem('localArr') == null) {
        serwerArr = [];
        let a = {
            name: "Иван",
            surname: "Иванович",
            lastName: "Иванов",
            contacts: [
                {
                    "type": "Vk",
                    "value": "242424"
                },
                {
                    "type": "Facebook",
                    "value": "324"
                },
                {
                    "type": "Телефон",
                    "value": "2234"
                }
            ],
            "id": "1678302826055",
            "updatedAt": "2023-03-23T17:59:29.792Z",
            "createdAt": "2023-03-08T19:13:46.055Z"
        };
        serwerArr.push(a);
        localStorage.setItem('localArr', JSON.stringify(serwerArr));
    }


    //  здесь у меня массив с сервера. Он может меняться при вызове loadItems()
    serwerArr = JSON.parse(localStorage.localArr);


    // делаю копию массива
    let copyListData = serwerArr;
    for (const oneUser of copyListData) {
        // создаю новый элемент fio в каждом элементе нового массива
        oneUser.fio = oneUser.name + ' ' + oneUser.surname + ' ' + oneUser.lastName;

    }




    // console.log(copyListData);

    // сортировка
    copyListData = copyListData.sort(function (a, b) {
        // обращаюсь к элементу массива по значению в переменной которое установил при клике на кнопки
        let sort = a[sortColumnFlsg] < b[sortColumnFlsg]
        // меняю условие при другом булевом значении переменной
        if (sortDirFlag == false) sort = a[sortColumnFlsg] > b[sortColumnFlsg]
        if (sort) return -1
    })

    // фильтрация

    if ($fioFilterInp.value.trim() !== "") {
        copyListData = filter(copyListData, 'fio', $fioFilterInp.value)
    }


    // отрисовка
    for (const oneUser of copyListData) {
        // при каждом повторении цикла пользователь(oneUser) передаётся в эту функцию. Функция создаёт $userTr, возвращает его
        // и помещает в константу newTr
        const $newTr = createUserTr(oneUser)
        // добавляем созданый элемент в tableBody
        $tableBody.append($newTr)
    }

    // добавляю id кнопкам
    // for()



};

render();





// окно изменить данные 













// окно новый клиент элементы
const newClientInput1 = document.querySelector('.newClient__input-1');
const newClientInput2 = document.querySelector('.newClient__input-2');
const newClientInput3 = document.querySelector('.newClient__input-3');
const saveBtn = document.querySelector('.save__btn-newClient');
const newClientForm = document.querySelector('.newClient__form');

// console.log(newClientForm);

// добавление клиента
// добавляю действие при событии submit (click)
newClientForm.addEventListener('submit', function (event) {
    // отменяю стандартное действие формы, перезагрузку при отправке
    event.preventDefault();

    // console.log('hi');

    // валидация
    if (newClientInput1.value.trim() == '') {

        let err = document.querySelector('.add__contact-wrapper__new');
        err.style = 'margin: 0 -30px 0px;'
        err.insertAdjacentHTML('afterEnd', '<span class="error">фамилия не введена</span>');

        // alert('фамилия не введена')
        return
    }

    if (newClientInput2.value.trim() == '') {
        let err = document.querySelector('.add__contact-wrapper__new');
        err.style = 'margin: 0 -30px 0px;'
        err.insertAdjacentHTML('afterEnd', '<span class="error">имя не введено</span>');
        return
    }

    let arr = [];

    let contactsServer = document.querySelector('.add__contact-wrapper__new');
    let gh = contactsServer.querySelectorAll('.contact');
    // console.log(gh.length);
    for (let i of gh) {
        let s = i.querySelector('.choices__item');
        let m = i.querySelector('.contact__input');
        // console.log(s);
        let r = {
            type: s.textContent,
            value: m.value,
        }
        arr.push(r);
    }
    // console.log(arr);

    // return

    // ф. котораюя будет создавать нового клиента
    // async function createStudent() {
    //     // выполняю post запрос по адресу http://###/api/clients
    //     const response = await fetch('http://###/api/clients', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             name: newClientInput2.value.trim(),
    //             surname: newClientInput1.value.trim(),
    //             lastName: newClientInput3.value.trim(),
    //             contacts: arr,
    //         })
    //     });
    //     // name: $inputName.value.trim(),
    //     // const data = await response.json();
    //     // console.log(data);
    // }
    // createStudent();

    let localArr = JSON.parse(localStorage.localArr);
    let lengthId = localArr.length;
    let appendArr = {
        name: newClientInput2.value.trim(),
        surname: newClientInput1.value.trim(),
        lastName: newClientInput3.value.trim(),
        contacts: arr,
        "id": `0000000${String(Math.round(Math.random() * 100000))}${String(lengthId)}`,
        "updatedAt": "2023-03-23T17:59:29.792Z",
        "createdAt": "2023-03-08T19:13:46.055Z"
    };

    localArr.push(appendArr);



    // console.log(localArr);
    // localStorage.setItem(localArr);
    localStorage.setItem('localArr', JSON.stringify(localArr));

    // получил строку
    let localData = localStorage.getItem('localArr');
    // console.log(localData);
    // получил объект
    let user = JSON.parse(localStorage.localArr);
    // console.log(user);
    // console.log(user.length);


    render();
    newClientInput1.value = '';
    newClientInput2.value = '';
    newClientInput3.value = '';
    wrapperModalNewClient.classList.remove('visible__top0')
    // console.log('сохранено');
});



// проверка инпутов окна "новый клиент" на наличие недопустимых символов

newClientInput1.addEventListener('input', function () {

    // нахожу и удаляю спаны которые появляются при невведённом имени или фамилии
    let deletError = document.querySelectorAll('.error');
    for (let i of deletError) {
        let err = document.querySelector('.add__contact-wrapper__new');
        err.style = 'margin: 0 -30px 25px;'
        i.remove()
    }

    let label = document.querySelector('.newClient__label-surname')

    if (newClientInput1.value.trim().match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i)) {      // i Флаг позволяет нам выполнять поиск без учета регистра и заменяет диапазон верхнего регистра A-Z
        console.log('только буквы')
        label.classList.remove('redLine')
    } else if (!label.classList.contains('redLine')) {
        console.log('недопустимые символы')
        label.classList.add('redLine')
    }
})

newClientInput2.addEventListener('input', function () {

    // нахожу и удаляю спаны которые появляются при невведённом имени или фамилии
    let deletError = document.querySelectorAll('.error');
    for (let i of deletError) {
        let err = document.querySelector('.add__contact-wrapper__new');
        err.style = 'margin: 0 -30px 25px;'
        i.remove()
    }

    let label = document.querySelector('.newClient__label-name')

    if (newClientInput2.value.trim().match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i)) {
        label.classList.remove('redLine')
    } else if (!label.classList.contains('redLine')) {
        label.classList.add('redLine')
    }
})

// проверка инпутов окна "Изменить данные" на наличие недопустимых символов
let changeInput1 = document.querySelector('.changeInput1')

changeInput1.addEventListener('input', function () {

    let label = document.querySelector('.change__label-surname')

    if (changeInput1.value.trim().match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i)) {
        label.classList.remove('redLine')
    } else if (!label.classList.contains('redLine')) {
        label.classList.add('redLine')
    }
})

let changeInput2 = document.querySelector('.changeInput2')

changeInput2.addEventListener('input', function () {

    let label = document.querySelector('.change__label-name')

    if (changeInput2.value.trim().match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i)) {
        label.classList.remove('redLine')
    } else if (!label.classList.contains('redLine')) {
        label.classList.add('redLine')
    }
})





function arrowClean() {
    // очистил всё от нижних стрелок
    let b = document.querySelector('.tableHeadTr');
    let c = b.querySelectorAll('.rotateArrow');

    for (let i of c) {
        if (i.classList.contains('arrowDown')) {
            i.classList.remove('arrowDown')
        }
    }
}




// сортировка события кнопок

// FIO
$btnFIO.addEventListener('click', function () {

    arrowClean()

    let a = document.querySelector('.tableHeadThFIO');

    // меняю значение в переменной и запускаю функцию с новыми значениями
    sortColumnFlsg = 'fio';
    // меняю значение на противоположное
    sortDirFlag = !sortDirFlag;

    if (sortDirFlag) {
        a.querySelector('.rotateArrow').classList.remove('arrowDown');
    } else {
        a.querySelector('.rotateArrow').classList.add('arrowDown');
    }

    render();
})

// ID
$btnId.addEventListener('click', function () {

    arrowClean()

    let a = document.querySelector('.tableHeadThId');

    sortColumnFlsg = 'id'
    sortDirFlag = !sortDirFlag

    if (sortDirFlag) {
        a.querySelector('.rotateArrow').classList.remove('arrowDown');
    } else {
        a.querySelector('.rotateArrow').classList.add('arrowDown');
    }

    render();
})

// последние изменения
$btnStudyStart.addEventListener('click', function () {

    arrowClean()

    let a = document.querySelector('.tableHeadThLastChanges');

    if (sortDirFlag) {
        a.querySelector('.rotateArrow').classList.remove('arrowDown');
    } else {
        a.querySelector('.rotateArrow').classList.add('arrowDown');
    }

    sortColumnFlsg = 'updatedAt'
    sortDirFlag = !sortDirFlag
    render();
})

// дата и время создания
$btnBirthday.addEventListener('click', function () {

    arrowClean()

    let a = document.querySelector('.tableHeadThCrieteDate');

    if (sortDirFlag) {
        a.querySelector('.rotateArrow').classList.remove('arrowDown');
    } else {
        a.querySelector('.rotateArrow').classList.add('arrowDown');
    }

    sortColumnFlsg = 'createdAt'
    sortDirFlag = !sortDirFlag
    render();
})

window.onload = () => {
    const preloader = document.querySelector('.preloader');
    preloader.remove();
}





// поиск клиентов

const inputSearch = document.querySelector('.search')
let timer;

inputSearch.addEventListener('input', function () {

    clearInterval(timer);

    function timeOut() {

        let input = document.querySelector('.search');
        let inputProp = input.value.trim();
        let serwerArr = [];

        // async function loadItems() {
        //     const response = await fetch(`http://###/api/clients?search=${inputProp}`);
        //     const data = await response.json();
        //     serwerArr = data;
        //     console.log(serwerArr);
        // }
        // await loadItems();

        serwerArr = JSON.parse(localStorage.getItem('localArr'));


        // затёр предидущий рендер
        $tableBody.innerHTML = '';
        // подготовка

        // console.log(serwerArr);
        // делаю копию массива на всякий случай
        let copyListData = [...serwerArr];
        for (const oneUser of copyListData) {
            oneUser.fio = oneUser.name + ' ' + oneUser.surname + ' ' + oneUser.lastName;
        }
        // сортировка
        copyListData = copyListData.sort(function (a, b) {
            let sort = a[sortColumnFlsg] < b[sortColumnFlsg]
            if (sortDirFlag == false) sort = a[sortColumnFlsg] > b[sortColumnFlsg]
            if (sort) return -1
        })

        // фильтрация
        if ($fioFilterInp.value.trim() !== "") {
            copyListData = filter(copyListData, 'fio', $fioFilterInp.value)
        }

        // отрисовка
        for (const oneUser of copyListData) {
            const $newTr = createUserTr(oneUser)
            $tableBody.append($newTr)
        }

        // нашёл и подсветил все совпадения сервера и инпута
        let coincidence = document.querySelectorAll('.userFIO')

        for (let i of coincidence) {

            let sbor;

            function kll() {
                sbor = i.textContent.slice(0, i.textContent.search(inputProp)) + '<span class="marker">' + inputProp + '</span>' + i.textContent.slice(i.textContent.search(inputProp) + inputProp.length);
            }
            kll();

            i.innerHTML = sbor;
        }


    }

    timer = setTimeout(timeOut, 300);




})



//   console.log(конец);







// 