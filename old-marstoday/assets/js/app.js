showLoader();
window.onload = closeLoader();

function showLoader() {
  let loader = document.querySelector('.loader_bg');
  loader.style.display = 'flex';
}

function closeLoader() {
  let loader = document.querySelector('.loader_bg');
  loader.style.display = 'none';
}



(function() {
'use strict';

let mainButton = document.querySelector('.mainButton');
let infoButton = document.querySelector('.infoButton');
let calendarBtn = document.querySelector('.calendar__btn');

mainButton.addEventListener('click', () => {
  let current = document.querySelector('[id="block2"]');
  selectContainer(current);
})

function selectContainer(current){
  let startY = current.getBoundingClientRect().top;
  scroll(current, startY);
}

function scroll(current, res) {
  scrollBy(0, res);
}
})();

const rover = 'curiosity';

(function calendar(rover){
//ПЕРЕМЕННЫЕ ДОКУМЕНТА И ПЕРЕМЕННЫЕ ТЕКУЩЕЙ ДАТЫ
  let now = new Date();
  let thisyear = now.getFullYear();
  let thismonth = now.getMonth();
  let thisday = now.getDate() -2;


  let yearContainer = document.querySelector('.calendar__year');
  const yearButtonLeft = document.querySelector('.yearButtonLeft');
  const yearButtonRight = document.querySelector('.yearButtonRight');
  let select = document.querySelector('select');
  let yearDiv = document.createElement('div');
  let table = document.querySelector('.calendar__days');
  let form = document.querySelector('.calendar__form');
  let tds = document.querySelectorAll('.calendar__days td'); //МАССИВ ЯЧЕЕК ТАБЛИЦЫ

//ПЕРЕМЕННЫЕ ГАЛЕРЕИ
let gellery = document.querySelector('.gellery');
let gellery__container = document.querySelector('.gellery__container');
let btnPlus = document.querySelector('.btnPlus');
let btnMinus = document.querySelector('.btnMinus');
let gellery__select = document.querySelector('.gellery__select');
let linkContainer = document.querySelector('.gellery__info');


//ПЕРЕМЕННЫЕ С ДАННЫМИ О ДЛИННАХ МЕСЯЦА
  let days31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
  let days30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
  let days28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
  let days29 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];

//ОБЪЕКТ С ПОЛНОЙ ИНФОРМАЦИЕЙ О ГОДАХ И МЕСЯЦАХ
const objOfYears = {
    '2021': {
      'Январь': {name: 'Январь', id: 0, weekstart: 4, daysArr: days31},
      'Февраль': {name: 'Февраль', id: 1, weekstart: 0, daysArr: days28},
      'Март': {name: 'Март', id: 2, weekstart: 0, daysArr: days31},
      'Апрель': {name: 'Апрель', id:  3, weekstart: 3, daysArr: days30},
      'Май': {name: 'Май', id: 4, weekstart: 5, daysArr: days31},
      'Июнь': {name: 'Июнь', id: 5, weekstart: 1, daysArr: days30},
      'Июль': {name: 'Июль', id: 6, weekstart: 3, daysArr: days31},
      'Август': {name: 'Август', id: 7, weekstart: 6, daysArr: days31},
      'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 2, daysArr: days30},
      'Октябрь': {name: 'Октябрь', id: 9, weekstart: 4, daysArr: days31},
      'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 0, daysArr: days30},
      'Декабрь': {name: 'Декабрь', id: 11, weekstart: 2, daysArr: days31}
    },

    '2020': {
      'Январь': {name: 'Январь', id: 0, weekstart: 2, daysArr: days31},
      'Февраль': {name: 'Февраль', id: 1, weekstart: 5, daysArr: days29},
      'Март': {name: 'Март', id: 2, weekstart: 6, daysArr: days31},
      'Апрель': {name: 'Апрель', id:  3, weekstart: 2, daysArr: days30},
      'Май': {name: 'Май', id: 4, weekstart: 4, daysArr: days31},
      'Июнь': {name: 'Июнь', id: 5, weekstart: 0, daysArr: days30},
      'Июль': {name: 'Июль', id: 6, weekstart: 2, daysArr: days31},
      'Август': {name: 'Август', id: 7, weekstart: 5, daysArr: days31},
      'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 1, daysArr: days30},
      'Октябрь': {name: 'Октябрь', id: 9, weekstart: 3, daysArr: days31},
      'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 6, daysArr: days30},
      'Декабрь': {name: 'Декабрь', id: 11, weekstart: 1, daysArr: days31}
    },
    '2019': {
      'Январь': {name: 'Январь', id: 0, weekstart: 1, daysArr: days31},
      'Февраль': {name: 'Февраль', id: 1, weekstart: 4, daysArr: days28},
      'Март': {name: 'Март', id: 2, weekstart: 4, daysArr: days31},
      'Апрель': {name: 'Апрель', id:  3, weekstart: 0, daysArr: days30},
      'Май': {name: 'Май', id: 4, weekstart: 2, daysArr: days31},
      'Июнь': {name: 'Июнь', id: 5, weekstart: 5, daysArr: days30},
      'Июль': {name: 'Июль', id: 6, weekstart: 0, daysArr: days31},
      'Август': {name: 'Август', id: 7, weekstart: 3, daysArr: days31},
      'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 6, daysArr: days30},
      'Октябрь': {name: 'Октябрь', id: 9, weekstart: 1, daysArr: days31},
      'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 4, daysArr: days30},
      'Декабрь': {name: 'Декабрь', id: 11, weekstart: 6, daysArr: days31}
    },
    '2018': {
      'Январь': {name: 'Январь', id: 0, weekstart: 0, daysArr: days31},
      'Февраль': {name: 'Февраль', id: 1, weekstart: 3, daysArr: days28},
      'Март': {name: 'Март', id: 2, weekstart: 3, daysArr: days31},
      'Апрель': {name: 'Апрель', id:  3, weekstart: 6, daysArr: days30},
      'Май': {name: 'Май', id: 4, weekstart: 1, daysArr: days31},
      'Июнь': {name: 'Июнь', id: 5, weekstart: 4, daysArr: days30},
      'Июль': {name: 'Июль', id: 6, weekstart: 6, daysArr: days31},
      'Август': {name: 'Август', id: 7, weekstart: 2, daysArr: days31},
      'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 5, daysArr: days30},
      'Октябрь': {name: 'Октябрь', id: 9, weekstart: 0, daysArr: days31},
      'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 3, daysArr: days30},
      'Декабрь': {name: 'Декабрь', id: 11, weekstart: 5, daysArr: days31}
    },
    '2017': {
      'Январь': {name: 'Январь', id: 0, weekstart: 6, daysArr: days31},
      'Февраль': {name: 'Февраль', id: 1, weekstart: 2, daysArr: days28},
      'Март': {name: 'Март', id: 2, weekstart: 2, daysArr: days31},
      'Апрель': {name: 'Апрель', id:  3, weekstart: 5, daysArr: days30},
      'Май': {name: 'Май', id: 4, weekstart: 0, daysArr: days31},
      'Июнь': {name: 'Июнь', id: 5, weekstart: 3, daysArr: days30},
      'Июль': {name: 'Июль', id: 6, weekstart: 5, daysArr: days31},
      'Август': {name: 'Август', id: 7, weekstart: 1, daysArr: days31},
      'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 4, daysArr: days30},
      'Октябрь': {name: 'Октябрь', id: 9, weekstart: 6, daysArr: days31},
      'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 2, daysArr: days30},
      'Декабрь': {name: 'Декабрь', id: 11, weekstart: 4, daysArr: days31}
    },
    '2016': {
      'Январь': {name: 'Январь', id: 0, weekstart: 4, daysArr: days31},
      'Февраль': {name: 'Февраль', id: 1, weekstart: 0, daysArr: days29},
      'Март': {name: 'Март', id: 2, weekstart: 1, daysArr: days31},
      'Апрель': {name: 'Апрель', id:  3, weekstart: 4, daysArr: days30},
      'Май': {name: 'Май', id: 4, weekstart: 6, daysArr: days31},
      'Июнь': {name: 'Июнь', id: 5, weekstart: 2, daysArr: days30},
      'Июль': {name: 'Июль', id: 6, weekstart: 4, daysArr: days31},
      'Август': {name: 'Август', id: 7, weekstart: 0, daysArr: days31},
      'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 3, daysArr: days30},
      'Октябрь': {name: 'Октябрь', id: 9, weekstart: 5, daysArr: days31},
      'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 1, daysArr: days30},
      'Декабрь': {name: 'Декабрь', id: 11, weekstart: 3, daysArr: days31}
    },
    '2015': {
        'Январь': {name: 'Январь', id: 0, weekstart: 3, daysArr: days31},
        'Февраль': {name: 'Февраль', id: 1, weekstart: 6, daysArr: days28},
        'Март': {name: 'Март', id: 2, weekstart: 6, daysArr: days31},
        'Апрель': {name: 'Апрель', id:  3, weekstart: 2, daysArr: days30},
        'Май': {name: 'Май', id: 4, weekstart: 4, daysArr: days31},
        'Июнь': {name: 'Июнь', id: 5, weekstart: 0, daysArr: days30},
        'Июль': {name: 'Июль', id: 6, weekstart: 2, daysArr: days31},
        'Август': {name: 'Август', id: 7, weekstart: 5, daysArr: days31},
        'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 1, daysArr: days30},
        'Октябрь': {name: 'Октябрь', id: 9, weekstart: 3, daysArr: days31},
        'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 6, daysArr: days30},
        'Декабрь': {name: 'Декабрь', id: 11, weekstart: 1, daysArr: days31}
    },
    '2014': {
      'Январь': {name: 'Январь', id: 0, weekstart: 2, daysArr: days31},
      'Февраль': {name: 'Февраль', id: 1, weekstart: 5, daysArr: days28},
      'Март': {name: 'Март', id: 2, weekstart: 5, daysArr: days31},
      'Апрель': {name: 'Апрель', id:  3, weekstart: 1, daysArr: days30},
      'Май': {name: 'Май', id: 4, weekstart: 3, daysArr: days31},
      'Июнь': {name: 'Июнь', id: 5, weekstart: 6, daysArr: days30},
      'Июль': {name: 'Июль', id: 6, weekstart: 1, daysArr: days31},
      'Август': {name: 'Август', id: 7, weekstart: 4, daysArr: days31},
      'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 0, daysArr: days30},
      'Октябрь': {name: 'Октябрь', id: 9, weekstart: 2, daysArr: days31},
      'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 5, daysArr: days30},
      'Декабрь': {name: 'Декабрь', id: 11, weekstart: 0, daysArr: days31}
    },
    '2013': {
      'Январь': {name: 'Январь', id: 0, weekstart: 1, daysArr: days31},
      'Февраль': {name: 'Февраль', id: 1, weekstart: 4, daysArr: days28},
      'Март': {name: 'Март', id: 2, weekstart: 4, daysArr: days31},
      'Апрель': {name: 'Апрель', id:  3, weekstart: 0, daysArr: days30},
      'Май': {name: 'Май', id: 4, weekstart: 2, daysArr: days31},
      'Июнь': {name: 'Июнь', id: 5, weekstart: 5, daysArr: days30},
      'Июль': {name: 'Июль', id: 6, weekstart: 0, daysArr: days31},
      'Август': {name: 'Август', id: 7, weekstart: 3, daysArr: days31},
      'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 6, daysArr: days30},
      'Октябрь': {name: 'Октябрь', id: 9, weekstart: 1, daysArr: days31},
      'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 4, daysArr: days30},
      'Декабрь': {name: 'Декабрь', id: 11, weekstart: 6, daysArr: days31}
    },
    '2012': {
      'Январь': {name: 'Январь', id: 0, weekstart: 6, daysArr: days31},
      'Февраль': {name: 'Февраль', id: 1, weekstart: 2, daysArr: days29},
      'Март': {name: 'Март', id: 2, weekstart: 3, daysArr: days31},
      'Апрель': {name: 'Апрель', id:  3, weekstart: 6, daysArr: days30},
      'Май': {name: 'Май', id: 4, weekstart: 1, daysArr: days31},
      'Июнь': {name: 'Июнь', id: 5, weekstart: 4, daysArr: days30},
      'Июль': {name: 'Июль', id: 6, weekstart: 6, daysArr: days31},
      'Август': {name: 'Август', id: 7, weekstart: 2, daysArr: days31},
      'Сентябрь': {name: 'Сентябрь', id: 8, weekstart: 5, daysArr: days30},
      'Октябрь': {name: 'Октябрь', id: 9, weekstart: 0, daysArr: days31},
      'Ноябрь': {name: 'Ноябрь', id: 10, weekstart: 3, daysArr: days30},
      'Декабрь': {name: 'Декабрь', id: 11, weekstart: 5, daysArr: days31}
    }
  }


//КОРРЕКТИРОВКА ДАТЫ //
if(thisday <= 0) {
  if(thismonth === 0){
  thisyear = thisyear-1;
  thismonth = 11;
  }
  else {
  thismonth = thismonth-1;

}
let coef;
thisday === 0 ? coef = 1 : coef = 2;
let daysInMonth = new Date(thisyear, thismonth+1, 0).getDate();
thisday = daysInMonth - coef;
}

//ЗАПУСК
renderCalendar(rover);

table.addEventListener('click', (e) => {
    tds.forEach((td) => {
      td.style.background = 'none';
    });

    let choosenDay = e.target;
    if(choosenDay.className === 'calendar__days') return;
    if(choosenDay.className === 'disableTd') return;
    choosenDay.style.background = '#fa601d';
})

//ФУНКЦИИ

//ФУНКЦИЯ ПРОВЕРКИ РОВЕРА
function checkRover(rover) {
    let firstyear, lastyear, firstmonth, lastmonth, firstday, lastday;
    if(rover === 'curiosity'){
      lastyear = thisyear;
      lastday = thisday;
      lastmonth =  objOfYears[lastyear][select[thismonth].value];
      firstyear = 2012;
      firstmonth = objOfYears[firstyear][select[7].value];
      firstday = 15;
    }
    return {
      firstyear,
      lastyear,
      firstmonth,
      lastmonth,
      firstday,
      lastday
    }
  }

//РЕНДЕР ГОДА И ПЕРЕДАЧА ДАННЫХ О ГОДЕ И РОВЕРЕ В ФУНКЦИЮ МЕСЯЦА
function renderCalendar(rover){
    if(!rover) {
      alert('В календарь не были переданные данные о ровере');
      return;
    }
    let year;
    let {firstyear, lastyear, firstmonth, lastmonth, firstday, lastday} = checkRover(rover);
    year = lastyear;
    yearDiv.innerHTML = year;
    yearContainer.insertBefore(yearDiv, yearButtonRight);
    renderMonth(year, rover);

    yearButtonRight.addEventListener('click', () => rightClick(year, rover));
    yearButtonLeft.addEventListener('click', () => leftClick(year, rover));

  }

//ФУНКЦИЯ МЕСЯЦА
function renderMonth(year, rover) {
  let month;
  let {firstyear, lastyear, firstmonth, lastmonth, firstday, lastday} = checkRover(rover);
    if(year === firstyear){
      month = firstmonth;
    }

    else if(year === lastyear){
      month = lastmonth;
      }

    else {
    month = objOfYears[year][select[0].value];
    }
    select[month.id].selected=true;
    chekMonth(year, rover);
    renderDays(month, year, rover);

    //событие селекта
    select.addEventListener('change', (e) => changeSelect(rover));
  }

//ФУНКЦИЯ СОБЫТИЯ СЕЛЕКТА
function changeSelect(rover) {
    let year = yearDiv.innerHTML;
    let month = objOfYears[year][select.value];
    chekMonth(year, rover);
    renderDays(month, year, rover);
  }

//ФУНКЦИЯ РЕНДЕРА КАЛЕНДАРНЫХ ДНЕЙ
function renderDays(month, year, rover) {
  tds.forEach((td) => {
    td.style.background = 'none';
    td.style.width = '200px';
  });
  let a = 1;
  tds.forEach((td, i) => {
    if(i < month.weekstart){
      td.innerHTML = '';
      return;
    }
    if(a > month.daysArr.length){
      td.innerHTML = '';
      return;
    }
    td.innerHTML = a;
    a +=1;
    });
    checkDays(month, year, rover);
  }

//ФУНКЦИЯ ПРОВЕРКИ НЕАКТИВНОГО МЕСЯЦА
function chekMonth(year, rover) {
    let {firstyear, lastyear, firstmonth, lastmonth, firstday, lastday} = checkRover(rover);

    if(Number(year) === lastyear){
      for (var i = 0; i < select.length; i++) {
        if(i > lastmonth.id){
          select[i].disabled=true;
        }
      }
    }

    else if(Number(year) === firstyear){
      for (var i = 0; i < select.length; i++) {
        if(i < firstmonth.id){
          select[i].disabled=true;
        }
      }
    }
    else {
      for (var i = 0; i < select.length; i++) {
          select[i].disabled=false;
        }
    }
  }

//ФУНКЦИЯ ПРОВЕРКИ НЕАКТИВНЫХ ДНЕЙ
function checkDays(month, year, rover) {
    year = Number(yearDiv.innerHTML);
    month = objOfYears[year][select.value];
    let {firstyear, lastyear, firstmonth, lastmonth, firstday, lastday} = checkRover(rover);
    tds.forEach((td, i) => {
      disableSomeDays(td, 'enabled');
      if(Number(td.innerHTML) > lastday && year === lastyear && month === lastmonth){
        disableSomeDays(td, 'disabled');//NENТТТ ТУТ!!!
      }
      else if(td.innerHTML === ''){
        disableSomeDays(td, 'disabled');
      }
      else if(Number(td.innerHTML) <= firstday && year === firstyear && month === firstmonth){
        disableSomeDays(td, 'disabled');
      }
    });
  }

//ФУНКЦИЯ, КОТОАРАЯ ИЗМЕНЯЕТ СВОЙСТВА (class) НЕАКТИВНЫХ ДНЕЙ
function disableSomeDays(el, arg) {
    if(!arg) alert('Что-то пошло не так при установке дизэйбэлд дней');
    //return;

    if(arg === 'enabled'){
      el.classList.remove('disableTd');
      el.classList.add('enableTd');
    };

    if (arg === 'disabled'){
      el.classList.remove('enableTd');
      el.classList.add('disableTd');
    };
  }

//ФУНКЦИИ СОБЫТИЙ КНОПОК ГОДА
function rightClick(year, rover) {
    let {firstyear, lastyear, firstmonth, lastmonth, firstday, lastday} = checkRover(rover);
    year = Number(yearDiv.innerHTML);
    if(year === lastyear) return;
    year +=1;
    yearDiv.innerHTML = year;
    renderMonth(year, rover);
  }

function leftClick(year, rover) {
    year = Number(yearDiv.innerHTML);
    let {firstyear, lastyear, firstmonth, lastmonth, firstday, lastday} = checkRover(rover);
    if(year === firstyear) return;
    year -= 1;
    yearDiv.innerHTML = year;
    renderMonth(year, rover);
  }

//ФУНКЦИЯ, КОТОРАЯ ПРИЧЕСЫВАЕТ МЕСЯЦ И ДАТУ
function makeNumbersGreatAgaine(month, day) {
    month +=1;
    if(month < 10){
      month = '0'+ String(month);
    }
    month = String(month);
    if(Number(day) < 10){
      day = '0' + String(day);
    }
    return {month, day};
  }

//ФИНАЛЬНАЯ ФУНКЦИЯ-СОБЫТИЕ САБМИТА ФОРМЫ
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let year = yearDiv.innerHTML;
    let month = objOfYears[year][select.value].id;
    let day;
    tds.forEach((td) => {
      if(td.style.background === 'none') return;
      else {
      day = td.innerHTML;
    }
    });
    if(!day) {
      alert('Пожалуйста, выберите дату')
      return;
    }
    let obj = makeNumbersGreatAgaine(month, day);
    let newMonth = obj.month;
    let newDay = obj.day;
    getMarsPhotos (rover, {
      year,
      month: newMonth,
      day: newDay
    });
      let current = document.querySelector('.gellery__container');
      selectContainer(current);
      showLoader(3000);
  });

//SELECT CONTAINER & SCROLL
function selectContainer(current){
  let startY = current.getBoundingClientRect().top-50;
  scroll(current, startY);
}

function scroll(current, res) {
  scrollBy(0, res);
}

//ФЕТЧ-ЗАПРОС К НАСА ПО ДАТЕ

function getMarsPhotos(rover, {year, month, day}) {
  const key = 'G2vwbkZWbORG0ETRclTeEBFh4GWpJxOgNirxyVF9';
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${year}-${month}-${day}&api_key=${key}`)
    .then(answer => answer.json())
      .then(array => sortRoverPhotos(array))
        .then(obj => {
          initDefaultGellery(obj);
          return obj})
          .then(obj => {
            let camera = 'FHAZ';
            initPhotos(obj, camera);
          })
  }

//ФУНКЦИЯ ПРОВЕРКИ И СОРТИРОВКИ МАССИВА ФОТОГРАФИЙ
function sortRoverPhotos(array){
  let fhaz = [];
  let navcam = [];
  let rhaz = [];
  let mast = [];
  let mahli = [];

  if(array.photos.length === 0) {
    return {
      'FHAZ': fhaz,
      'NAVCAM': navcam,
      'RHAZ' : rhaz,
      'MAST' : mast,
      'MAHLI': mahli
    }
  };

  array.photos.forEach((img) => {
    if(img.camera.name === 'FHAZ'){
      fhaz.push(img.img_src);
    }
    if(img.camera.name === 'NAVCAM'){
      navcam.push(img.img_src);
    }
    if(img.camera.name === 'RHAZ'){
      rhaz.push(img.img_src);
    }
    if(img.camera.name === 'MAST'){
      mast.push(img.img_src);
    }
    if(img.camera.name === 'MAHLI'){
      mahli.push(img.img_src);
    }
  });

  return {
    'FHAZ': fhaz,
    'NAVCAM': navcam,
    'RHAZ' : rhaz,
    'MAST' : mast,
    'MAHLI': mahli
  }
}

//ФУНКЦИЯ ЗАГРУЗКИ ГАЛЕРЕИ ПО УМОЛЧАНИЮ
function initDefaultGellery(obj) {
  let cameras = document.querySelectorAll('.camera');
  cameras.forEach((cam) => {
    cam.style.background = 'rgba(0, 255, 127, 0.3)';
  });
  cameras[0].style.background = 'rgba(0, 255, 127, 0.6)';

  cameras.forEach((cam, i) => {
      cam.addEventListener('click', (e) => {
      cameras.forEach((cam) => {
        cam.style.background = 'rgba(0, 255, 127, 0.3)';
        });
      e.target.style.background = 'rgba(0, 255, 127, 0.6)';
      let camera = e.target.id;
      initPhotos(obj, camera);
    })
  });
}

//ФЦНКЦИЯ ВСТАВКИ ФОТОГРАФИЙ

function initPhotos(obj, camera){
  showLoader(3000); //прелоадер
  while (gellery__container.firstChild) {
    gellery__container.removeChild(gellery__container.firstChild);
  }

  let arrOfphotos = obj[camera];

  if(arrOfphotos.length === 0) { // проверяет длинну массива и вставляет фон с надписью
    gellery__container.style.backgroundImage = 'url(assets/img/invalidcamera.png)';
    gellery__container.style.backgroundSize = 'cover';
    gellery__container.style.backgroundPosition = 'center';
  } else {
//если в массиве что-то есть, добавляет фрагмент с фотографиями на фоне
  gellery__container.style.background = 'none';
  let fragment = document.createDocumentFragment();
  arrOfphotos.forEach((photo) => {
    let slide = document.createElement('div');
    slide.classList.add('slide');
    slide.style.background = `url(${photo})`; // устанавливаем картинку как фон
    slide.style.backgroundRepeat = 'no-repeat';
    slide.style.backgroundPosition = 'center';
    slide.style.backgroundSize = 'contain';
    fragment.appendChild(slide);
    });
    gellery__container.appendChild(fragment);
    enableGellery(obj);
  }
}

//ФУНКЦИЯ ПРЕЛОАДЕРА

function showLoader(sec) {
  let loader = document.querySelector('.loader_bg');
  loader.style.display = 'flex';
  setTimeout(closeLoader, sec);

  function closeLoader() {
    loader.style.display = 'none';
  }

}

//ФУНКЦИЯ ВКЛЮЧЕНИЯ НАВИГАЦИИ ГАЛЕРЕИ

function enableGellery(obj) {
  let gelleryItemsArr = document.querySelectorAll('.slide');
  if(gelleryItemsArr.length === 0) {
    return;
  }
  let link = document.createElement('div');
  let imageUrl = gelleryItemsArr[0].style.backgroundImage.split('"')[1];
  //делает часть слайдов невидимыми
  gelleryItemsArr.forEach((slide) => {
      slide.style.display = 'none';
    });

  gelleryItemsArr[0].style.display = 'block';

  //вставляет первую ссылку
  addPhotoLink(imageUrl, link);
    let a = 0;

  //события кнопок
  btnPlus.addEventListener('click', () => {
    if(a === gelleryItemsArr.length-1){
      imageUrl = gelleryItemsArr[a].style.backgroundImage.split('"')[1];
      addPhotoLink(imageUrl, link);
      return;
    }
    gelleryItemsArr[a].style.animation = 'removeSlide 1s';
    gelleryItemsArr[a].style.animationFillMode = 'forwards';
    gelleryItemsArr[a+1].style.display = 'block';
    gelleryItemsArr[a+1].style.animation = 'renderSlide 1s';
    gelleryItemsArr[a+1].style.animationFillMode = 'forwards';
    imageUrl = gelleryItemsArr[a+1].style.backgroundImage.split('"')[1]; //получает и вставляет юрл в ссылки при кликах
    addPhotoLink(imageUrl, link);
    a = a+1;
  });

  btnMinus.addEventListener('click', () => {
    if(a === 0) {
      imageUrl = gelleryItemsArr[a].style.backgroundImage.split('"')[1];
      addPhotoLink(imageUrl, link)
      return;
    }
    gelleryItemsArr[a].style.animation = 'removeSlideReverse 1s';
    gelleryItemsArr[a].style.animationFillMode = 'forwards';
    gelleryItemsArr[a-1].style.display = 'block';
    gelleryItemsArr[a-1].style.animation = 'renderSlideReverse 1s'
    gelleryItemsArr[a-1].style.animationFillMode = 'forwards';
    imageUrl = gelleryItemsArr[a-1].style.backgroundImage.split('"')[1];
    addPhotoLink(imageUrl, link);
    a = a-1;
  });
}

//ФУНКЦИЯ ВСТАВКИ ССЫЛКИ
function addPhotoLink (imageUrl, link) {
  linkContainer.removeChild(linkContainer.firstChild);
  link.innerHTML = `<a href="${imageUrl}" target="_blank"><button type="button" name="button"></button></a>`;
  linkContainer.appendChild(link);

}

//КОНЕЦ
})(rover);
