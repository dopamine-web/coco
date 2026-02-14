import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useBelieveSlider = () => {
  const believeSlider = new Swiper('.believe__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        spaceBetween: 32,
        slidesPerView: 1.5,
      },
      768: {
        spaceBetween: 32,
        slidesPerView: 2.5,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 2.5,
      }
    }
  });
};

export const useOurTeamSlider = () => {
  const ourTeamSlider = new Swiper('.our-team__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: {
        spaceBetween: 22,
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
      }
    }
  });
};

