const UL_ACTIVE = 'ul-active';
const SVG_ROTATE_ACTIVE = 'svg-rotate-active';

const marketFiltersStatus = document.querySelector('#market_filters-status');
const statusLi = document.querySelectorAll('#market_filters-status-li');
const statusUl = document.querySelector('#market_filters-status-ul');
const svgRotateStatus = document.querySelector('#market_filters-status-arrow');

 
// Відкриває і закриває список по кліку 
marketFiltersStatus.addEventListener('click', () =>  {
    statusUl.classList.toggle(UL_ACTIVE);
    svgRotateStatus.classList.toggle(SVG_ROTATE_ACTIVE);
})

// Закриває список для вибору по кліку на однин із варіантів
statusLi.forEach(btn => {
    btn.addEventListener('click', () => {
        statusUl.classList.remove(UL_ACTIVE);
        svgRotateStatus.classList.remove(SVG_ROTATE_ACTIVE);
    })
})

// Закриває список по кліку не на блок #market_filters-status
addEventListener('click', (e) => {
    if (!e.target.closest('#market_filters-status')) {
        statusUl.classList.remove(UL_ACTIVE);
        svgRotateStatus.classList.remove(SVG_ROTATE_ACTIVE);
   }
})


const marketFiltersType = document.querySelector('#market_filters-type');
const typeLi = document.querySelectorAll('#market_filters-type-li');
const typeUl = document.querySelector('#market_filters-type-ul');
const svgRotateType = document.querySelector('#market_filters-type-arrow');

 
// Відкриває і закриває список по кліку 
marketFiltersType.addEventListener('click', () =>  {
    typeUl.classList.toggle(UL_ACTIVE);
    svgRotateType.classList.toggle(SVG_ROTATE_ACTIVE);
})

// Закриває список для вибору по кліку на однин із варіантів
typeLi.forEach(btn => {
    btn.addEventListener('click', () => {
        typeUl.classList.remove(UL_ACTIVE);
        svgRotateType.classList.remove(SVG_ROTATE_ACTIVE);
    })
})

// Закриває список по кліку не на блок #market_filters-status
addEventListener('click', (e) => {
    if (!e.target.closest('#market_filters-type')) {
        typeUl.classList.remove(UL_ACTIVE);
        svgRotateType.classList.remove(SVG_ROTATE_ACTIVE);
   }
})


const marketFiltersSort = document.querySelector('#market_filters-sort');
const sortLi = document.querySelectorAll('#market_filters-sort-li');
const sortUl = document.querySelector('#market_filters-sort-ul');
const svgRotateSort = document.querySelector('#market_filters-sort-arrow');

 
// Відкриває і закриває список по кліку 
marketFiltersSort.addEventListener('click', () =>  {
    sortUl.classList.toggle(UL_ACTIVE);
    svgRotateSort.classList.toggle(SVG_ROTATE_ACTIVE);
})

// Закриває список для вибору по кліку на однин із варіантів
sortLi.forEach(btn => {
    btn.addEventListener('click', () => {
        sortUl.classList.remove(UL_ACTIVE);
        svgRotateSort.classList.remove(SVG_ROTATE_ACTIVE);
    })
})

// Закриває список по кліку не на блок #market_filters-status
addEventListener('click', (e) => {
    if (!e.target.closest('#market_filters-sort')) {
        sortUl.classList.remove(UL_ACTIVE);
        svgRotateSort.classList.remove(SVG_ROTATE_ACTIVE);
   }
})


// При кліку на один елемент із списку текст появляється в головному вікні
document.addEventListener('DOMContentLoaded', function() {
    var statusLiElements = document.querySelectorAll('#market_filters-status-li');
    statusLiElements.forEach(function(li) {
      li.addEventListener('click', function() {
        var newText = this.textContent;
        var textElement = document.querySelector('#market_filters-status-text');
        textElement.textContent = newText;
      });
    });
    
    // Кнопка CLEAR повертає початкове значення до вибору із списку
    var clearFilter = document.getElementById('clear-filter');
    clearFilter.addEventListener('click', function() {
      var defaultText = 'Status'; // Початковий текст
      var textElement = document.querySelector('#market_filters-status-text');
      textElement.textContent = defaultText;
    });
  });

// При кліку на один елемент із списку текст появляється в головному вікні
document.addEventListener('DOMContentLoaded', function() {
    var typeLiElements = document.querySelectorAll('#market_filters-type-li');
    typeLiElements.forEach(function(li) {
      li.addEventListener('click', function() {
        var newText = this.textContent;
        var textElement = document.querySelector('#market_filters-type-text');
        textElement.textContent = newText;
      });
    });
    
    // Кнопка CLEAR повертає початкове значення до вибору із списку
    var clearFilter = document.getElementById('clear-filter');
    clearFilter.addEventListener('click', function() {
      var defaultText = 'CategoryType'; // Початковий текст
      var textElement = document.querySelector('#market_filters-type-text');
      textElement.textContent = defaultText;
    });
  });

// При кліку на один елемент із списку текст появляється в головному вікні
document.addEventListener('DOMContentLoaded', function() {
    var sortLiElements = document.querySelectorAll('#market_filters-sort-li');
    sortLiElements.forEach(function(li) {
      li.addEventListener('click', function() {
        var newText = this.textContent;
        var textElement = document.querySelector('#market_filters-sort-text');
        textElement.textContent = newText;
      });
    });
    
    // Кнопка CLEAR повертає початкове значення до вибору із списку
    var clearFilter = document.getElementById('clear-filter');
    clearFilter.addEventListener('click', function() {
      var defaultText = 'Sort by'; // Початковий текст
      var textElement = document.querySelector('#market_filters-sort-text');
      textElement.textContent = defaultText;
    });
  });

//   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".market_house-slider", {
        breakpoints: {
            100: {
            slidesPerView: 1,
            spaceBetween: 30
            },
        },
      });
});

//   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper(".market_price-slider", {
      breakpoints: {
          100: {
          slidesPerView: 2.5,
          spaceBetween: 20
          },
          999: {
          slidesPerView: 3,
          spaceBetween: 30
          },
      },

      navigation: {
        nextEl: ".btn-next-arrow",
        prevEl: ".btn-prev-arrow",
      },

    });
});

//   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper(".market_pfps-slider", {
      breakpoints: {
          100: {
          slidesPerView: 2.5,
          spaceBetween: 20
          },
          999: {
          slidesPerView: 3,
          spaceBetween: 30
          },
      },

      navigation: {
        nextEl: ".btn-arrow-next",
        prevEl: ".btn-arrow-prev",
      },

    });
});

//   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper(".market_miscellaneous-slider", {
      breakpoints: {
          100: {
          slidesPerView: 2.5,
          spaceBetween: 20
          },
          999: {
          slidesPerView: 3,
          spaceBetween: 30
          },
      },

      navigation: {
        nextEl: ".arrow-next-btn",
        prevEl: ".arrow-prev-btn",
      },

    });
});

//   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

$('.market_faq-btn').each(function (index) {
  $(this).on('click', () => {
      if ($('.market_faq-container').eq(index).hasClass('active')) {
          $('.market_faq-block-text').slideUp()
          $('.market_faq-container').removeClass('active')
      } else {
          $('.market_faq-block-text').slideUp()
          $('.market_faq-container').removeClass('active')

          $('.market_faq-block-text').eq(index).slideDown()
          $('.market_faq-container').eq(index).addClass('active')
      }
  })
})

// //   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

// const popupHouseOpenImg = document.querySelectorAll('.popup_house-open-img');
// const popupHouse = document.querySelectorAll('.popup_house');
// const houseLeftBtn = document.querySelectorAll('.house-left-btn');
// popupHouseOpenImg.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupHouse[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupHouseBlocks[index + 1]) {
//       houseRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupHouseBlocks[index - 1]) {
//       houseLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const popupHouseOpenTitle = document.querySelectorAll('.popup_house-open-title');
// popupHouseOpenTitle.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupHouse[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupHouseBlocks[index + 1]) {
//       houseRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupHouseBlocks[index - 1]) {
//       houseLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const popupHouseOpenBtn = document.querySelectorAll('.popup_house-open-btn');
// popupHouseOpenBtn.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupHouse[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupHouseBlocks[index + 1]) {
//       houseRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupHouseBlocks[index - 1]) {
//       houseLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const houseRightBtn = document.querySelectorAll('.house-right-btn');
// const popupHouseBlocks = document.querySelectorAll('.popup_house');
// houseRightBtn.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         popupHouseBlocks[index].classList.remove('popup-active');
//         if (popupHouseBlocks[index + 1]) {
//             popupHouseBlocks[index + 1].classList.add('popup-active');
//         }
//         if (!popupHouseBlocks[index + 2]) {
//           houseRightBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//           });
//         }
//         if (popupHouseBlocks[index]) {
//           houseLeftBtn.forEach(button => {
//               button.classList.remove('btn-close-not');
//           });
//       }
//     });
// });

// houseLeftBtn.forEach((button, index) => {
//   button.addEventListener('click', () => {
//       popupHouseBlocks[index].classList.remove('popup-active');
//       if (popupHouseBlocks[index - 1]) {
//           popupHouseBlocks[index - 1].classList.add('popup-active');
//       }
//       if (!popupHouseBlocks[index - 2]) {
//         houseLeftBtn.forEach(button => {
//               button.classList.add('btn-close-not');
//           });
//       }
//       if (popupHouseBlocks[index]) {
//         houseRightBtn.forEach(button => {
//             button.classList.remove('btn-close-not');
//         });
//     }
//   });
// });

// //   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

// const popupSoylentOpenBtn = document.querySelectorAll('.popup_soylent-open-btn');
// const popupSoylent = document.querySelectorAll('.popup_soylent');
// const popupSoylentBlocks = document.querySelectorAll('.popup_soylent');
// popupSoylentOpenBtn.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupSoylent[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupSoylentBlocks[index + 1]) {
//       soylentRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupSoylentBlocks[index - 1]) {
//       soylentLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const popupSoylentOpenImg = document.querySelectorAll('.popup_soylent-open-img');
// popupSoylentOpenImg.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupSoylent[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupSoylentBlocks[index + 1]) {
//       soylentRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupSoylentBlocks[index - 1]) {
//       soylentLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const popupSoylentOpenTitle = document.querySelectorAll('.popup_soylent-open-title');
// popupSoylentOpenTitle.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupSoylent[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupSoylentBlocks[index + 1]) {
//       soylentRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupSoylentBlocks[index - 1]) {
//       soylentLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const soylentRightBtn = document.querySelectorAll('.soylent-right-btn');
// const soylentLeftBtn = document.querySelectorAll('.soylent-left-btn');
// soylentRightBtn.forEach((button, index) => {
//     button.addEventListener('click', () => {
//       popupSoylentBlocks[index].classList.remove('popup-active');
//         if (popupSoylentBlocks[index + 1]) {
//           popupSoylentBlocks[index + 1].classList.add('popup-active');
//         }
//         if (!popupSoylentBlocks[index + 2]) {
//           soylentRightBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//           });
//         }
//         if (popupSoylentBlocks[index]) {
//           soylentLeftBtn.forEach(button => {
//               button.classList.remove('btn-close-not');
//           });
//       }
//     });
// });

// soylentLeftBtn.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     popupSoylentBlocks[index].classList.remove('popup-active');
//       if (popupSoylentBlocks[index - 1]) {
//         popupSoylentBlocks[index - 1].classList.add('popup-active');
//       }
//       if (!popupSoylentBlocks[index - 2]) {
//         soylentLeftBtn.forEach(button => {
//               button.classList.add('btn-close-not');
//           });
//       }
//       if (popupSoylentBlocks[index]) {
//         soylentRightBtn.forEach(button => {
//             button.classList.remove('btn-close-not');
//         });
//     }
//   });
// });

// //   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

// const popupJobOpenBtn = document.querySelectorAll('.popup_job-open-btn');
// const popupJob = document.querySelectorAll('.popup_job');
// const popupJobBlocks = document.querySelectorAll('.popup_job');
// popupJobOpenBtn.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupJob[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupJobBlocks[index + 1]) {
//       jobRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupJobBlocks[index - 1]) {
//       jobLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const popupJobOpenImg = document.querySelectorAll('.popup_job-open-img');
// popupJobOpenImg.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupJob[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupJobBlocks[index + 1]) {
//       jobRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupJobBlocks[index - 1]) {
//       jobLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const popupJobOpenTitle = document.querySelectorAll('.popup_job-open-title');
// popupJobOpenTitle.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupJob[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupJobBlocks[index + 1]) {
//       jobRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupJobBlocks[index - 1]) {
//       jobLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const jobRightBtn = document.querySelectorAll('.job-right-btn');
// const jobLeftBtn = document.querySelectorAll('.job-left-btn');
// jobRightBtn.forEach((button, index) => {
//     button.addEventListener('click', () => {
//       popupJobBlocks[index].classList.remove('popup-active');
//         if (popupJobBlocks[index + 1]) {
//           popupJobBlocks[index + 1].classList.add('popup-active');
//         }
//         if (!popupJobBlocks[index + 2]) {
//           jobRightBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//           });
//         }
//         if (popupJobBlocks[index]) {
//           jobLeftBtn.forEach(button => {
//               button.classList.remove('btn-close-not');
//           });
//       }
//     });
// });

// jobLeftBtn.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     popupJobBlocks[index].classList.remove('popup-active');
//       if (popupJobBlocks[index - 1]) {
//         popupJobBlocks[index - 1].classList.add('popup-active');
//       }
//       if (!popupJobBlocks[index - 2]) {
//         jobLeftBtn.forEach(button => {
//               button.classList.add('btn-close-not');
//           });
//       }
//       if (popupJobBlocks[index]) {
//         jobRightBtn.forEach(button => {
//             button.classList.remove('btn-close-not');
//         });
//     }
//   });
// });

// //   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

// const popupPfpsOpenTitle = document.querySelectorAll('.popup_pfps-open-title');
// const popupPfps = document.querySelectorAll('.popup_pfps');
// const popupPfpsBlocks = document.querySelectorAll('.popup_pfps');
// popupPfpsOpenTitle.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupPfps[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupPfpsBlocks[index + 1]) {
//       pfpsRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupPfpsBlocks[index - 1]) {
//       pfpsLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const popupPfpsOpenImg = document.querySelectorAll('.popup_pfps-open-img');
// popupPfpsOpenImg.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupPfps[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupPfpsBlocks[index + 1]) {
//       pfpsRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupPfpsBlocks[index - 1]) {
//       pfpsLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const popupPfpsOpenBtn = document.querySelectorAll('.popup_pfps-open-btn');
// popupPfpsOpenBtn.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     popupPfps[index].classList.add('popup-active');
//     $('#body-id').addClass('body-scroll');
//     if (!popupPfpsBlocks[index + 1]) {
//       pfpsRightBtn.forEach(button => {
//         button.classList.add('btn-close-not');
//       });
//     }
//     if (!popupPfpsBlocks[index - 1]) {
//       pfpsLeftBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//         });
//     }
//   });
// });

// const pfpsRightBtn = document.querySelectorAll('.pfps-right-btn');
// const pfpsLeftBtn = document.querySelectorAll('.pfps-left-btn');
// pfpsRightBtn.forEach((button, index) => {
//     button.addEventListener('click', () => {
//       popupPfpsBlocks[index].classList.remove('popup-active');
//         if (popupPfpsBlocks[index + 1]) {
//           popupPfpsBlocks[index + 1].classList.add('popup-active');
//         }
//         if (!popupPfpsBlocks[index + 2]) {
//           pfpsRightBtn.forEach(button => {
//             button.classList.add('btn-close-not');
//           });
//         }
//         if (popupPfpsBlocks[index]) {
//           pfpsLeftBtn.forEach(button => {
//               button.classList.remove('btn-close-not');
//           });
//       }
//     });
// });

// pfpsLeftBtn.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     popupPfpsBlocks[index].classList.remove('popup-active');
//       if (popupPfpsBlocks[index - 1]) {
//         popupPfpsBlocks[index - 1].classList.add('popup-active');
//       }
//       if (!popupPfpsBlocks[index - 2]) {
//         pfpsLeftBtn.forEach(button => {
//               button.classList.add('btn-close-not');
//           });
//       }
//       if (popupPfpsBlocks[index]) {
//         pfpsRightBtn.forEach(button => {
//             button.classList.remove('btn-close-not');
//         });
//     }
//   });
// });

//   ------------------>   ------------------>   ------------------>   ------------------>   ------------------>   

$('.popup_wallet-open').on('click', function()  {
  $('#body-id').addClass('body-scroll');
  $('.popup_wallet').addClass('popup-active');
})

$('.popup_house-close').on('click', function()  {
  $('#body-id').removeClass('body-scroll');
  $('.popup_wallet').removeClass('popup-active');
})

$('.popup_close').each(function() {
  $(this).on('click', () => {
    $('#body-id').removeClass('body-scroll');
    $('.popup_wallet').removeClass('popup-active');
    $('.popup_house').removeClass('popup-active');
    $('.popup_soylent').removeClass('popup-active');
    $('.popup_job').removeClass('popup-active');
    $('.popup_pfps').removeClass('popup-active');
    $('.house-right-btn').removeClass('btn-close-not');
    $('.house-left-btn').removeClass('btn-close-not');
    $('.soylent-right-btn').removeClass('btn-close-not');
    $('.soylent-left-btn').removeClass('btn-close-not');
    $('.job-right-btn').removeClass('btn-close-not');
    $('.job-left-btn').removeClass('btn-close-not');
    $('.pfps-right-btn').removeClass('btn-close-not');
    $('.pfps-left-btn').removeClass('btn-close-not');
  })
})

$('.popup_house-close').on('click', function()  {
  $('#body-id').removeClass('body-scroll');
  $('.popup_house').removeClass('popup-active');
  $('.house-right-btn').removeClass('btn-close-not');
  $('.house-left-btn').removeClass('btn-close-not');
  $('.popup_soylent').removeClass('popup-active');
  $('.soylent-right-btn').removeClass('btn-close-not');
  $('.soylent-left-btn').removeClass('btn-close-not');
  $('.popup_job').removeClass('popup-active');
  $('.job-right-btn').removeClass('btn-close-not');
  $('.job-left-btn').removeClass('btn-close-not');
  $('.popup_pfps').removeClass('popup-active');
  $('.pfps-right-btn').removeClass('btn-close-not');
  $('.pfps-left-btn').removeClass('btn-close-not');
})