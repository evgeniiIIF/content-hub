<template>
  <div
    ref="slider"
    class="slider"
    @touchstart="startSwipe"
    @touchmove="swipe"
    @touchend="endSwipe"
  >
    <div class="slider__body">
      <div
        class="slider__top"
        v-if="!!!this.slides[0].image"
      >
        <h3 class="slider__title">Отзывы о нас</h3>

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
      <div
        class="slider__line"
        :style="{ transform: 'translateX(' + -currentIndex * offsetWidthSlide + 'px' }"
      >
        <div
          ref="slide"
          class="slider__slide slide-slider"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <div
            class="slide-slider__image ibg"
            v-if="slide.image"
            ref="element"
          >
            <img
              :src="slide.image"
              alt="slide"
            />
          </div>
          <div
            class="slide-slider__element"
            v-if="slide.cardData"
          >
            <VAboutCard
              :cardData="slide.cardData"
              ref="element"
            />
          </div>
        </div>
      </div>
      <div
        class="slider__nav nav-slider"
        v-if="!!this.slides[0].image"
      >
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
      <div class="slider__progress progress-slider">
        <div
          class="progress-slider__item"
          v-for="(item, index) in slides.length"
          :key="index"
          :class="index === currentIndex ? 'progress-slider__item--active' : ''"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
  import VAboutCard from '@/components/elements/VAboutCard.vue';
  import mobileMixin from '@/mixins/mobileMode';
  import { nextTick } from 'vue';

  export default {
    props: {
      slides: {
        type: Array,
        required: true,
      },
    },
    mixins: [mobileMixin],
    components: {
      VAboutCard,
    },
    data() {
      return {
        currentIndex: 0,
        offsetWidthSlide: 0,

        startTouchX: null,
        diff: 0,
      };
    },
    mounted() {
      if (!this.slideWidth) {
        this.setSlideWidth();
      }
      window.addEventListener('resize', () => {
        this.setSlideWidth();
      });
    },
    methods: {
      setSlideWidth() {
        const element = this.$refs.element;
        const slideIsImage = !!this.slides[0].image;

        if (slideIsImage) {
          nextTick(() => {
            if (element) {
            }
            this.offsetWidthSlide = element[0].clientWidth;
          });
        } else {
          nextTick(() => {
            if (element && this.$refs.slide) {
              const marginRightSlide = parseInt(getComputedStyle(this.$refs.slide[0]).marginRight);
              const elWidth = element[0].$el.clientWidth;
              this.offsetWidthSlide = elWidth + marginRightSlide;
              this.$refs.slide.forEach((slide) => {
                slide.style.width = elWidth + 'px';
              });
            }
          });
        }
      },
      goToPrevSlide() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
          this.currentIndex = this.slides.length - 1;
        }
      },
      goToNextSlide() {
        this.currentIndex++;
        if (this.currentIndex > this.slides.length - 1) {
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
  };
</script>

<style lang="scss">
  @import '@/assets/scss/smart-grid.scss';
  @import '@/assets/scss/mixins.scss';

  .slider {
    position: relative;
    width: 100%;

    &__body {
      overflow: hidden;
    }

    &__top {
      display: flex;
      align-items: center;
      margin-bottom: 32px;
      max-width: 512px;

      @include to(476px) {
        justify-content: space-between;
      }
    }

    &__title {
      margin-right: 48px;
      font-weight: 700;
      font-size: 40px;
      line-height: 120%;
      color: #18191b;

      @include to(992px) {
        margin-right: 20px;
        font-size: 20px;
      }
    }

    &__line {
      display: flex;
      transition: transform 0.5s ease;
      min-height: 200px;
    }

    &__slide {
      flex-shrink: 0;
    }

    &__nav {
    }

    &__progress {
      margin-top: 8px;
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
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      width: 52px;
      height: 52px;
      background: #c6af66;
      border-radius: 50%;
    }

    &__prev {
      &:hover {
        background: darken($color: #00a19c, $amount: 2%);
      }
      img {
        transform: rotate(180deg);
      }
    }

    &__next {
      &:hover {
        background: darken($color: #00a19c, $amount: 2%);
      }
    }
  }

  .progress-slider {
    display: none;
    justify-content: center;
    @include mr(4px);

    &__item {
      width: 12px;
      height: 2px;
      background: #e9eaec;

      &--active {
        background: #c6af66;
      }
    }
  }

  ._mobile {
  }
</style>
