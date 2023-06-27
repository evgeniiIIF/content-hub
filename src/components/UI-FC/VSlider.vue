<template>
  <div
    ref="slider"
    class="slider"
    @touchstart.passive="startSwipe"
    @touchmove.passive="swipe"
    @touchend.passive="endSwipe"
  >
    <div class="slider__body">
      <div
        class="slider__top"
        v-if="sliderOpts.top"
      >
        <h3 class="slider__title">Отзывы клиентов</h3>
        <div class="slider__nav nav-slider">
          <button
            class="nav-slider__prev"
            @click="goToPrevSlide"
          >
            <img
              src="@/assets/img/main/reviews/Arrow_Left_MD.svg"
              alt="arrow"
            />
          </button>
          <button
            class="nav-slider__next"
            @click="goToNextSlide"
          >
            <img
              src="@/assets/img/main/reviews/Arrow_Left_MD.svg"
              alt="arrow"
            />
          </button>
        </div>
      </div>
      <div
        class="slider__line"
        :style="currentOffset"
      >
        <div
          ref="slide"
          class="slider__slide slide-slider"
          v-for="(slide, index) in slidesItems"
          :key="index"
        >
          <component
            is="VCardRewievs"
            ref="element"
            :cardData="slide"
          ></component>
        </div>
      </div>
      <div class="slider__progress progress-slider js-progress-slider">
        <div class="progress-slider--desctop">
          <div
            class="progress-slider__item"
            v-for="(item, index) in slidesItems.length"
            :key="index"
            :class="index === currentIndex ? 'progress-slider__item--active' : ''"
          >
            <span class="progress-slider__item-active-line"></span>
          </div>
        </div>
      </div>
      <div
        class="slider__bottom"
        v-if="sliderOpts.bottom"
      >
        <div class="slider__nav nav-slider">
          <button
            class="nav-slider__prev"
            @click="goToPrevSlide"
          >
            <img
              src=""
              alt="arrow"
            />
          </button>
          <button
            class="nav-slider__next"
            @click="goToNextSlide"
          >
            <img
              src=""
              alt="arrow"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import mobileMixin from '@/mixins/mobileMode';
  import VCardRewievs from '@/components/cards/VCardRewievs.vue';

  export default {
    mixins: [mobileMixin],
    props: {
      sliderOpts: {
        type: Object,
      },
      slidesItems: {
        type: Array,
      },
    },
    components: {
      VCardRewievs,
    },
    data() {
      return {
        currentIndex: 'null',
        currentOffset: '0px',
        offsetWidthSlide: 0,

        startTouchX: null,
        diff: 0,
        interval: 'null',
      };
    },
    mounted() {
      if (!this.md) {
        if (!this.slideWidth) {
          this.setSlideWidth();
        }
        window.addEventListener('resize', this.setSlideWidth());
      }
    },
    unmounted() {
      window.removeEventListener('resize', this.setSlideWidth());
    },
    methods: {
      setSlideWidth() {
        const element = this.$refs.element;

        if (element && this.$refs.slide[0]) {
          const marginRightSlide = parseInt(getComputedStyle(this.$refs.slide[0]).marginRight);
          const elWidth = element[0].$el.clientWidth;
          this.offsetWidthSlide = elWidth + marginRightSlide;
          // this.$refs.slide.forEach((slide) => {
          // 	slide.style.width = elWidth + 'px';
          // });
        }
      },
      goToPrevSlide() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
          this.currentIndex = this.slidesItems.length - 1;
        }
      },
      goToNextSlide() {
        this.currentIndex++;
        if (this.currentIndex > this.slidesItems.length - 1) {
          this.currentIndex = 0;
        }
      },
      startSwipe(e) {
        this.startTouchX = e.touches[0].clientX;
      },
      swipe(e) {
        if (this.startTouchX == null) return;

        const currentTouchX = e.touches[0].clientX;
        this.diff = currentTouchX - this.startTouchX;
      },
      endSwipe() {
        if (this.startTouchX == null) return;

        const threshold = this.$refs.slider.clientWidth / 4;

        if (Math.abs(+this.diff) > threshold) {
          if (this.diff < 0) {
            this.goToNextSlide();
          } else {
            this.goToPrevSlide();
          }
        }

        this.diff = 0;
        this.startTouchX = null;
      },
    },
    watch: {
      currentIndex() {
        this.setSlideWidth();
        const offset = -this.currentIndex * this.offsetWidthSlide;
        this.currentOffset = { transform: 'translateX(' + offset + 'px)' };
      },
    },

    // mounted() {
    // 	if (!this.md) {
    // 		window.addEventListener('scroll', () => {

    // 			const element = document.querySelector('.js-progress-slider');
    // 			const progressItems = element.querySelectorAll('.progress-slider__item')

    // 			const elementPosition = element.getBoundingClientRect().top;
    // 			const scrollPosition = window.scrollY || window.pageYOffset;

    // 			if (scrollPosition >= elementPosition) {
    // 				console.log('scrolled');
    // 				const intervalSlide = setInterval(() => {
    // 					console.log(progressItems[this.currentIndex])
    // 					this.goToNextSlide()
    // 				}, 10000);
    // 			}
    // 		})
    // 	}
    // }
    mounted() {
      setTimeout(() => {
        this.currentIndex = 0;
      }, 100);

      this.interval = setInterval(() => {
        this.goToNextSlide();
      }, 10000);
    },
  };
</script>

<style lang="scss">
  .slider {
    position: relative;
    width: 100%;

    &__body {
      overflow: hidden;
    }

    &__top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
    }

    &__title {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      line-height: 138%;
      color: #ffffff;
      @include af(32, 24);
    }

    &__line {
      display: flex;
      transition: transform 0.5s ease;
      min-height: 200px;
      @include mr(20px);
    }

    &__slide {
      flex: 0 0 calc(50% - 10px);
    }

    &__nav {
    }

    &__progress {
    }
  }

  .slide-slider {
    position: relative;
    width: 100%;

    &__image {
      &.ibg {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .nav-slider {
    display: flex;

    @include mr(20px);

    @include md-block() {
      display: none;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 12px;
      background: #00a19c;
      border-radius: 4px;
      &:hover {
        background: darken($color: #00a19c, $amount: 2%);
      }
    }

    &__prev {
      img {
        transform: rotate(180deg);
      }
    }

    &__next {
    }
  }

  .progress-slider {
    &--desctop {
      display: flex;
      justify-content: center;
      @include mr(20px);
      margin-top: 32px;

      @include md-block() {
        display: none;
      }
    }

    &__item {
      width: 40px;
      height: 2px;
      background: #414141;

      &--active {
        & .progress-slider__item-active-line {
          width: 100%;
          transition: all 10s ease 0.3s;
        }
      }
    }

    &__item-active-line {
      display: block;
      width: 0%;
      height: 100%;
      background: #00a19c;
    }
  }
</style>
