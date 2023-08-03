<!-- <template>

import VCheckbox from './VCheckbox.vue';
  <ul class="checkbox-list">
    <li
      class="checkbox-list__item"
      v-for="item in items"
    >
      <div class="checkbox">
        <label class="checkbox__label">
          <input
            type="checkbox"
            v-model="currentIsChecked"
            :value="item"
            @change="onChange"
          />

          <div class="checkbox__content">
            <span class="checkbox__text">{{ item }}</span>
          </div>

          <div class="checkbox__pseudo-flag-wrapper">
            <div class="checkbox__pseudo-flag">
              <div class="checkbox__pseudo-flag-check-icon"></div>
            </div>
          </div>
        </label>
      </div>
    </li>
  </ul>
</template> -->

<template>
  <ul class="checkbox-list">
    <li
      class="checkbox-list__item"
      v-for="item in items"
    >
      <VCheckbox
        :text="item"
        :textPosition="textPosition"
        @onChange="onChange($event)"
        :isChecked="currentIsChecked"
        :checkboxTypeToggle="checkboxTypeToggle"
      />
    </li>
  </ul>
</template>

<script>
  import VCheckbox from './VCheckbox.vue';

  export default {
    name: 'VCheckboxList',
    props: {
      items: {
        type: Array,
      },
      textPosition: {
        type: String,
        default: 'after',
      },
      isChecked: {
        type: Array,
        default: [],
      },
      checkboxTypeToggle: {
        type: Boolean,
        default: false,
      },
    },
    components: { VCheckbox },

    data() {
      return {
        currentIsChecked: [],
      };
    },
    methods: {
      onChange(e) {
        this.currentIsChecked = e;
        // localStorage.setItem('currentisCheckedSaved', JSON.stringify(this.currentIsChecked));
        this.$emit('onChange', this.currentIsChecked);
      },
    },
    mounted() {
      // const savedIsChecked = JSON.parse(localStorage.getItem('currentisCheckedSaved'));

      // if (savedIsChecked) {
      //   this.currentIsChecked = savedIsChecked;
      // } else {
      //   this.currentIsChecked = this.isChecked;
      // }

      console.log(this.currentIsChecked);
    },
    components: { VCheckbox },
  };
</script>

<style lang="scss">
  .checkbox-list {
    // width: 216px;
    padding: 8px;

    &__item {
      // width: 237px;
      padding: 12px 8px;

      &:hover {
        border-radius: 4px;
        background: rgba(126, 141, 148, 0.2);
      }
    }
  }

  .checkbox {
    &:hover {
      // .checkbox__text {
      //   color: #000;
      // }
      // .checkbox__pseudo-flag {
      //   border-color: #000;
      // }
      // .checkbox__pseudo-flag-wrapper {
      //   background: rgba(126, 141, 148, 0.2);
      // }
    }

    &__label {
      position: relative;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      cursor: pointer;
    }

    & input {
      position: absolute;
      z-index: -1;
      opacity: 0;

      &:checked {
        & ~ .checkbox__pseudo-flag-wrapper .checkbox__pseudo-flag {
          display: flex;
          justify-content: end;
          border-color: #0077ff;
          background-color: #0077ff;
          transition: all 0.3s ease 0s;

          // & .checkbox__pseudo-flag-check-icon {
          //   display: flex;
          // }
        }
      }
    }
    &__pseudo-flag-wrapper {
      // border-radius: 50%;
    }

    &__pseudo-flag {
      // flex: 0 0 20px;
      // position: relative;
      // width: 16px;
      // height: 16px;
    }
    &__pseudo-flag-check-icon {
      // display: none;
      // justify-content: center;
      // align-items: center;
      // width: 100%;
      // height: 100%;
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
