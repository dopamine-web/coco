import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const useBelieveSlider = () => {
  const believeSlider = new Swiper('.believe__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2.5,
      }
    }
  });
};
