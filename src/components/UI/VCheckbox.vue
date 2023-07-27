<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <input
        type="checkbox"
        :checked="currentIsChecked"
        :value="text"
        @change="onChange"
      />

      <div
        v-if="textPosition === 'before'"
        class="checkbox__content--before"
      >
        <span class="checkbox__text">{{ text }}</span>
      </div>

      <div
        v-if="checkboxTypeToggle"
        class="checkbox__toggle-wrapper"
      >
        <div class="checkbox__toggle-border">
          <div class="checkbox__toggle-mark"></div>
        </div>
      </div>

      <div
        v-else
        class="checkbox__check-wrapper"
      >
        <div class="checkbox__check-border">
          <div class="checkbox__check-mark">
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

      <div
        v-if="textPosition === 'after'"
        class="checkbox__content--after"
      >
        <span class="checkbox__text">{{ text }}</span>
      </div>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'VCheckbox',
    props: {
      isChecked: {
        type: [Boolean, Array],
        default: false,
      },
      text: {
        type: String,
      },
      textPosition: {
        type: String,
        default: 'after',
      },
      checkboxTypeToggle: {
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
        if (Array.isArray(this.currentIsChecked)) {
          const index = this.currentIsChecked.indexOf(this.text);

          if (index !== -1) {
            this.currentIsChecked.splice(index, 1);
          } else {
            this.currentIsChecked.push(this.text);
          }
          this.$emit('onChange', this.currentIsChecked);
        } else {
          this.$emit('onChange', !this.isChecked);
        }
      },
    },

    mounted() {
      this.$nextTick(() => {
        this.currentIsChecked = this.isChecked;
      });
    },
  };
</script>

<style lang="scss">
  .checkbox {
    &:hover {
      .checkbox__text {
        color: #000;
      }
      .checkbox__check-wrapper {
        background: rgba(126, 141, 148, 0.2);
      }
      .checkbox__check-border {
        border-color: #000;
      }
    }

    &__label {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    &__content {
      display: flex;
      flex-direction: column;
      @include mb(5px);
    }

    &__content--before {
      margin-right: 10px;
    }
    &__content--after {
      margin-left: 10px;
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

  .checkbox {
    & input {
      position: absolute;
      z-index: -1;
      opacity: 0;

      &:checked {
        & ~ .checkbox__check-wrapper .checkbox__check-border {
          border-color: #0077ff;

          & .checkbox__check-mark {
            display: flex;
          }
        }
      }
    }

    &__check-wrapper {
      // padding: 10px;
      // margin-right: 12px;
      // border-radius: 50%;
    }

    &__check-border {
      flex: 0 0 20px;
      position: relative;
      width: 16px;
      height: 16px;
      border: 2px solid #7e8d94;
      border-radius: 4px;
    }
    &__check-mark {
      display: none;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }

  .checkbox {
    & input {
      position: absolute;
      z-index: -1;
      opacity: 0;

      &:checked {
        & ~ .checkbox__toggle-wrapper .checkbox__toggle-border {
          border-color: #0077ff;
          background-color: #0077ff;
          justify-content: end;

          & .checkbox__toggle-mark {
            opacity: 1;
          }
        }
      }
    }

    &__toggle-wrapper {
      margin-left: auto;
    }
    &__toggle-border {
      display: flex;
      width: 48px;
      height: 24px;
      border: 2px solid #7e8d94;
      border-radius: 12px;
      border-color: #c2c9d2;
      background: #c2c9d2;
      transition: all 0.3s ease 0s;
    }
    &__toggle-mark {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: #fff;
      opacity: 0.7;
      box-shadow: (0px 3px 1px rgba(0, 0, 0, 0.06));
    }
  }
</style>
