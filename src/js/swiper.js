import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const MOBILE_BREAKPOINT = 1440;

let howSwiper = null;
let featuresSwiper = null;
let gallerySwiper = null;
let reviewsSwiper = null;

const autoplayOptions = {
  delay: 3000,
  disableOnInteraction: false,
  pauseOnMouseEnter: true,
};

function updateFeaturesPagination(swiper) {
  if (!swiper.pagination?.bullets) return;

  const bullets = Array.from(swiper.pagination.bullets);
  const activeIndex = swiper.realIndex;

  bullets.forEach((bullet, index) => {
    bullet.classList.remove(
      'features-bullet-active',
      'features-bullet-next',
      'features-bullet-small'
    );

    if (index === activeIndex) {
      bullet.classList.add('features-bullet-active');
      return;
    }

    /*
     * Наступний елемент після активного має розмір 4px.
     * Для останнього слайда наступним вважається перший.
     */
    const nextIndex = (activeIndex + 1) % bullets.length;

    if (index === nextIndex) {
      bullet.classList.add('features-bullet-next');
    } else {
      bullet.classList.add('features-bullet-small');
    }
  });
}

function initMobileSwipers() {
  if (!document.querySelector('.how-swiper')) return;

  if (!howSwiper) {
    howSwiper = new Swiper('.how-swiper', {
      modules: [Autoplay],

      slidesPerView: 1.4,
      spaceBetween: 24,
      loop: true,
      speed: 700,

      autoplay: autoplayOptions,
    });
  }

  if (!featuresSwiper && document.querySelector('.features-swiper')) {
    featuresSwiper = new Swiper('.features-swiper', {
      modules: [Autoplay, Pagination],

      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      speed: 700,

      autoplay: autoplayOptions,

      pagination: {
        el: '.features-pagination',
        clickable: true,
        bulletClass: 'features-pagination-bullet',
        bulletActiveClass: 'features-pagination-bullet-current',
      },

      on: {
        init(swiper) {
          updateFeaturesPagination(swiper);
        },

        slideChange(swiper) {
          updateFeaturesPagination(swiper);
        },

        paginationUpdate(swiper) {
          updateFeaturesPagination(swiper);
        },
      },
    });
  }

  if (!gallerySwiper && document.querySelector('.gallery-swiper')) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Autoplay],

      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      speed: 700,

      autoplay: autoplayOptions,
    });
  }

  if (!reviewsSwiper && document.querySelector('.reviews-swiper')) {
    reviewsSwiper = new Swiper('.reviews-swiper', {
      modules: [Autoplay],

      slidesPerView: 1.2,
      spaceBetween: 16,
      loop: true,
      speed: 700,

      autoplay: autoplayOptions,
    });
  }
}

function destroyMobileSwipers() {
  if (howSwiper) {
    howSwiper.destroy(true, true);
    howSwiper = null;
  }

  if (featuresSwiper) {
    featuresSwiper.destroy(true, true);
    featuresSwiper = null;
  }

  if (gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }

  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, true);
    reviewsSwiper = null;
  }
}

function handleSwipers() {
  if (window.innerWidth < MOBILE_BREAKPOINT) {
    initMobileSwipers();
  } else {
    destroyMobileSwipers();
  }
}

handleSwipers();

window.addEventListener('resize', handleSwipers);