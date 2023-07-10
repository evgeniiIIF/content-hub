<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <input
        type="checkbox"
        v-model="currentIsChecked"
        :value="item"
        @change="onChange"
      />

      <div class="checkbox__pseudo-flag-wrapper">
        <div class="checkbox__pseudo-flag">
          <div class="checkbox__pseudo-flag-check-icon">
            <svg
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.03349 0.19317C8.38705 0.487807 8.43482 1.01328 8.14018 1.36684L3.97352 6.36684C3.82363 6.54671 3.60499 6.65522 3.3711 6.66583C3.1372 6.67644 2.90964 6.58817 2.74408 6.42261L0.244078 3.92261C-0.0813592 3.59717 -0.0813592 3.06954 0.244078 2.7441C0.569515 2.41866 1.09715 2.41866 1.42259 2.7441L3.27733 4.59884L6.85982 0.299867C7.15445 -0.053697 7.67992 -0.101467 8.03349 0.19317Z"
                fill="#0077FF"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="checkbox__content">
        <span class="checkbox__text">{{ item }}</span>
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'VCheckboxList',
    props: {
      item: {
        type: String,
      },
      isChecked: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        currentIsChecked: false,
      };
    },
    methods: {
      onChange() {
        this.$emit('onChange', this.currentIsChecked);
        // console.log(this.currentIsChecked);
      },
    },
    mounted() {
      this.currentIsChecked = this.isChecked;
    },
  };
</script>

<style lang="scss">
  .checkbox {
    &:hover {
      .checkbox__text {
        color: #000;
      }
      .checkbox__pseudo-flag {
        // border-color: #000;
      }
      .checkbox__pseudo-flag-wrapper {
        background: rgba(126, 141, 148, 0.2);
      }
    }

    &__label {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    & input {
      position: absolute;
      z-index: -1;
      opacity: 0;

      &:checked {
        & ~ .checkbox__pseudo-flag-wrapper .checkbox__pseudo-flag {
          border-color: #0077ff;

          & .checkbox__pseudo-flag-check-icon {
            display: flex;
          }
        }
      }
    }
    &__pseudo-flag-wrapper {
      // padding: 10px;
      margin-right: 12px;
      border-radius: 50%;
    }

    &__pseudo-flag {
      flex: 0 0 20px;
      position: relative;
      width: 16px;
      height: 16px;
      // margin-right: 10px;
      border: 2px solid #7e8d94;
      border-radius: 4px;
      // background: $bg-color;
    }
    &__pseudo-flag-check-icon {
      display: none;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    // &__icon {
    //   display: none;
    //   justify-content: center;
    //   align-items: center;
    //   width: 100%;
    //   height: 100%;
    //   svg {
    //     width: 12px;
    //     height: 8px;
    //     fill: transparent;
    //     stroke: #eee;
    //   }
    // }
    &__content {
      display: flex;
      flex-direction: column;
      @include mb(5px);
    }
    &__text {
      font-family: Inter;
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;
      text-overflow: ellipsis;
      color: #292929;
    }
  }
</style>
