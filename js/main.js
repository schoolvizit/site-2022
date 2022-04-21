// слайдеры

const swiperVignet = document.querySelector('.vignet__slider');
if (swiperVignet) {
  const swiperVignetProj = new Swiper(swiperVignet, {
    slidesPerView: 1,
    spaceBetween:0,
   observer: true,
    loop: true,
    keyboard: {
      enabled: true
    },
    centeredSlides: true,
    // Стартовый слайд
    initialSlide: 0,
    //   effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: 20,
    //   // stretch: 50,
    //   slideShadows: false
    // },
    navigation: {
      nextEl: '.vignet__next',
      prevEl: '.vignet__prev',
    },

    breakpoints: {
      

      576: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween:20,
      },

      1024: {
        slidesPerView: 3,
        
      }
    }
  })

};

const swiperPortret = document.querySelector('.portret__slider');
if (swiperPortret) {
  const swiperPortretProj = new Swiper(swiperPortret, {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    keyboard: {
      enabled: true
    },
    centeredSlides: true,
    // Стартовый слайд
    initialSlide: 0,
    //   effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: 20,
    //   // stretch: 50,
    //   slideShadows: false
    // },
    navigation: {
      nextEl: '.portret__next',
      prevEl: '.portret__prev',
    },
  })
};

// select

document.querySelectorAll('.select__dropdown').forEach(function (dropDownWrapper) {

  const selectBtn = dropDownWrapper.querySelector('.select__btn'),
    selectList = dropDownWrapper.querySelector('.select__list'),
    selectListItem = selectList.querySelectorAll('.select__list-item'),
    selectPriceOne = document.querySelector('.price-one'),
    selectPriceTwo = document.querySelector('.price-two');

  //  Клик по кнопке. Открыть/Закрыть select
  selectBtn.addEventListener('click', () => {
    selectList.classList.toggle('select__list--visible');
    selectBtn.classList.toggle('active');

  });

  //  Выбор элемента списка. Заполнить выбранное значение. Закрыть select
  selectListItem.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      selectBtn.innerText = this.innerText;
      selectBtn.focus();
      selectPriceOne.innerText = this.dataset.value;
      selectPriceTwo.innerText = (+selectPriceOne.innerText + 7);
      selectBtn.classList.remove('active');
      selectList.classList.remove('select__list--visible');
    })
  })

  //  Клик снаружи селекта. Закрыть select
  document.addEventListener('click', (e) => {
    if (e.target !== selectBtn) {
      selectBtn.classList.remove('active');
      selectList.classList.remove('select__list--visible');
    }
  })

  //  Нажатие на Tab или Escape. Закрыть select
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      selectBtn.classList.remove('active');
      selectList.classList.remove('select__list--visible');
    }
  })

});


// бургер

const burger = document.querySelector('.burger'),
  buttonClose = document.querySelector('.burger span'),
  menu = document.querySelector('.header__menu'),
  links = document.querySelectorAll('.header__link'),

  // блок перекрывающий контент body
  overlay = document.querySelector('.burger__overlay');



burger.addEventListener('click', () => {
  buttonClose.classList.toggle('active');
  menu.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('lock');
});



overlay.addEventListener('click', () => {
  buttonClose.classList.remove('active');
  menu.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('lock');
});


links.forEach(function (item) {
  item.addEventListener('click', () => {
    buttonClose.classList.remove('active');
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('lock');
  });
});


// active class of menu items onscroll


window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;


  if (window.innerWidth > 768) {
    document.querySelectorAll('.fullscreen').forEach((el, i) => {
      if (el.offsetTop - document.querySelector('.header__menu').clientHeight <= scrollDistance) {
        document.querySelectorAll('.header__menu a').forEach((el) => {
          if (el.classList.contains('active')) {
            el.classList.remove('active');
          }
        });

        document.querySelectorAll('.header__menu li')[i].querySelector('a').classList.add('active');
      }
    });
  }
});

// Плавный скролл
// // Найти все ссылки начинающиеся на #
// const anchors = document.querySelectorAll('header a[href*="#"]')

// // Цикл по всем ссылкам
// for(let anchor of anchors) {
//   anchor.addEventListener("click", function(e) {
//     e.preventDefault() // Предотвратить стандартное поведение ссылок
//     // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
//     const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
//     // Плавная прокрутка до элемента с id = href у ссылки
//     document.querySelector(goto).scrollIntoView({
//       behavior: "smooth",
//       block: "start"
//     })
//   })
// }

let anchors = document.querySelectorAll('header a[href*="#"]');

for (let anchor of anchors) {
  if (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
}

// smooth-scroll

// const scroll = new SmoothScroll('.to-top');
const toTop = document.querySelector('.to-top');
const fullscreenHeight = document.querySelector('.fullscreen').offsetHeight;

const isVisibleToTop = (y = 0) => {
  if (y >= fullscreenHeight) {
    toTop.classList.add('to-top--active');
  } else {
    toTop.classList.remove('to-top--active');
  }
}

window.addEventListener('scroll', () => {
  let y = window.scrollY;
  isVisibleToTop(y);
});

// header

// (function () {
//   const header = document.querySelector('.header');
//   window.onscroll = () => {
//     if (window.pageYOffset > 50) {
//       header.classList.add('header--active');
//     }
//     else {
//       header.classList.remove('header--active');
//     }
//   };
// }());


// var scrolled;
// var timer;

// document.getElementById('to-top').onclick = function () {
//   scrolled = window.pageYOffset;
//   scrollToTop();
// }

// function scrollToTop () {
//   if (scrolled > 0) {
//     window.scrollTo(0, scrolled);
//     scrolled = scrolled - 100;
//     timer = setTimeout(scrollToTop, 1);
//   }
//   else {
//     clearTimeout(timer);
//     window.scrollTo(0,0);
//   }
// }


