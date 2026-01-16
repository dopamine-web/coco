import Swiper from 'swiper';
import 'swiper/css';

export const useInsightSlider = () => {
  const insightSlider = new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 32,
    loop: true,
    centeredSlides: true,
    breakpoints : {
        992: {
            centeredSlides: false,
        }
    }
  });
};
