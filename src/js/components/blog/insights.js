import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useInsightsSlider = () => {
  const insightsSlider = new Swiper('.insights__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: { spaceBetween: 32, slidesPerView: 1.5 },
      768: { spaceBetween: 32, slidesPerView: 2 },
      1024: { spaceBetween: 32, slidesPerView: 2.5 },
    },
  });

  // Фильтрация
  const buttons = document.querySelectorAll('.insights__wrapper-filter');
  const slides = document.querySelectorAll('.swiper-slide');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      buttons.forEach((btn) =>
        btn.classList.remove('insights__wrapper-filter--active'),
      );
      button.classList.add('insights__wrapper-filter--active');

      slides.forEach((slide) => {
        const categories = slide.getAttribute('data-category');

        if (filter === 'all' || (categories && categories.includes(filter))) {
          slide.style.display = 'block';
        } else {
          slide.style.display = 'none';
        }
      });

      insightsSlider.update();
    });
  });
};

export const useArticlesSlider = () => {
  const articlesSlider = new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
    breakpoints: {
      576: { spaceBetween: 32, slidesPerView: 1.5 },
      768: { spaceBetween: 32, slidesPerView: 2 },
      1024: { spaceBetween: 32, slidesPerView: 3 },
    },
  });
};
