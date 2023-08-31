window.addEventListener('DOMContentLoaded', function() {
  const swiperHero = new Swiper('.swiper-container-hero', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    scrollbar: {
      hide: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      speed: 5,
    },
    play: {
      active: true,
      auto: true,
      interval: 1,
      swap: true,
      PauseOnHover: true,
      restartDelay: 2500
    },
    allowTouchMove: false,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  })
})
window.addEventListener('DOMContentLoaded', function() {
  const swiperGalleryDouble = new Swiper('.swiper-container-gallery-double', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next-gallery',
      prevEl: '.swiper-button-prev-gallery',
    },
    scrollbar: {
      hide: true,
    },
    play: {
      active: true,
      auto: true,
      interval: 1,
      swap: true,
      PauseOnHover: true,
      restartDelay: 2500
    },
    breakpoints: {
      1125: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
      },
      401: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
      },
    },
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  })
  const swiperGallery = new Swiper('.swiper-container-gallery', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next-gallery',
      prevEl: '.swiper-button-prev-gallery',
    },
    scrollbar: {
      hide: true,
    },
    play: {
      active: true,
      auto: true,
      interval: 1,
      swap: true,
      PauseOnHover: true,
      restartDelay: 2500
    },
    breakpoints: {
      1125: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        slidesPerColumn: 2,
        spaceBetween: 50,
      },
      401: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        slidesPerColumn: 2,
        spaceBetween: 34,
      },
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerColumn: 1,
      },
    },
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
  })
  $( "#accordion" ).accordion({
    collapsible: true,
    heightStyle: 'content',
    autoHeight: false,
  })
  $( "#accordion2" ).accordion({
    collapsible: true,
    heightStyle: 'content',
    autoHeight: false,
  })
  $( "#accordion3" ).accordion({
    collapsible: true,
    heightStyle: 'content',
    autoHeight: false,
  })
  $( "#accordion4" ).accordion({
    collapsible: true,
    heightStyle: 'content',
    autoHeight: false,
  })
  $( "#accordion5" ).accordion({
    collapsible: true,
    heightStyle: 'content',
    autoHeight: false,
  })
  const swiperEditions = new Swiper('.swiper-container-editions', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next-editions',
      prevEl: '.swiper-button-prev-editions',
    },
    scrollbar: {
      hide: true,
    },
    play: {
      active: true,
      auto: true,
      interval: 1,
      swap: true,
      PauseOnHover: true,
      restartDelay: 2500
    },
    breakpoints: {
      1125: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      800: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      401: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      320: {
        slidesPerView: 11,
        slidesPerGroup: 2,
        slidesPerColumn: 4,
        spaceBetween: 30,
      },
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    allowTouchMove: true,
  })
  //
  $(document).ready(function() {
    onload = function() {
      toggleClass();
    }
    window.onresize = function() {
      toggleClass();
    }
    function toggleClass() {
      var width = window.innerWidth;
      console.log(width);
      if(width < 401 ) {
        swiperEditions.destroy();
      }
      else {
      }
    }
  });
  //
  const swiperProjects = new Swiper('.swiper-container-projects', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next-projects',
      prevEl: '.swiper-button-prev-projects',
    },
    scrollbar: {
      hide: true,
    },
    play: {
      active: true,
      auto: true,
      interval: 1,
      swap: true,
      PauseOnHover: true,
      restartDelay: 2500
    },
    breakpoints: {
      1631: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    allowTouchMove: true,
  })
  document.querySelector('#header-top__btn-src').addEventListener('click', function() {
    document.querySelector('#header-top__form-search').classList.toggle('active-form')
  })
  document.querySelector('#header-top__btn-src-reset').addEventListener('click', function() {
    document.querySelector('#header-top__form-search').classList.toggle('active-form')
  })
  document.querySelector('#header__burger-btn').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  document.querySelector('#header__burger-btn-reset').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active')
  })
  // const swiperE = new Swiper('.swiper-container-event', {
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //   },
  //   scrollbar: {
  //     hide: true,
  //   },
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       spaceBetween: 100,
  //     },
  //   },
  //   observer: true,
  //   observeParents: true,
  //   observeSlideChildren: true,
  //   allowTouchMove: true,
  // })
  const slider = document.querySelector('.section-event__container');
  let mySwiper;
  function mobileSlider() {
    if (window.innerWidth <= 767) {
      mySwiper = new Swiper('.swiper-container-event', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        scrollbar: {
          hide: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 100,
          },
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        allowTouchMove: true,
      });
      slider.dataset.mobile = 'true';
    }
    if (window.innerWidth > 767) {
        slider.dataset.mobile = 'false';
        if (slider.classList.contains('swiper-container-initialized')) {
            mySwiper.destroy();
        }
    }
  }
  mobileSlider()
  window.addEventListener('resize', () => {
    mobileSlider();
  });
  tippy('#tooltip1', {
    content: 'Пример современных тенденций - современная методология разработки ',
    arrow: true,
    theme: "purple",
  });
  tippy('#tooltip2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
    arrow: true,
    theme: "purple",
  });
  tippy('#tooltip3', {
    content: 'В стремлении повысить качество ',
    arrow: true,
    theme: "purple",
  });
})
// const sliderDuo = document.querySelector('.section-editions__container');
//   let mySwiperDuo;
//   function mobileSliderDuo() {
//     if (window.innerWidth >= 401) {
//       mySwiperDuo = new Swiper('.swiper-container-editions', {
//         pagination: {
//           el: '.swiper-pagination',
//           clickable: true,
//           type: 'fraction',
//         },
//         navigation: {
//           nextEl: '.swiper-button-next-editions',
//           prevEl: '.swiper-button-prev-editions',
//         },
//         scrollbar: {
//           hide: true,
//         },
//         play: {
//           active: true,
//           auto: true,
//           interval: 1,
//           swap: true,
//           PauseOnHover: true,
//           restartDelay: 2500
//         },
//         breakpoints: {
//           1125: {
//             slidesPerView: 3,
//             slidesPerGroup: 3,
//             spaceBetween: 50,
//           },
//           1024: {
//             slidesPerView: 2,
//             slidesPerGroup: 2,
//             spaceBetween: 50,
//           },
//           800: {
//             slidesPerView: 3,
//             slidesPerGroup: 3,
//             spaceBetween: 50,
//           },
//           401: {
//             slidesPerView: 2,
//             slidesPerGroup: 2,
//             spaceBetween: 34,
//           },
//           320: {
//             slidesPerView: 11,
//             slidesPerGroup: 2,
//             slidesPerColumn: 4,
//             spaceBetween: 30,
//           },
//         },
//         observer: true,
//         observeParents: true,
//         observeSlideChildren: true,
//         allowTouchMove: true,
//       })
//       slider.dataset.mobile = 'true';
//     }
//     if (window.innerWidth < 400) {
//         slider.dataset.mobile = 'false';
//         if (slider.classList.contains('swiper-container-initialized')) {
//             mySwiperDuo.destroy();
//         }
//     }
//   }
//   mobileSliderDuo()
//   window.addEventListener('resize', () => {
//     mobileSliderDuo();
//   });
