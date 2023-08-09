<template>
  <ul class="checkbox-list">
    <li
      class="checkbox-list__item"
      v-for="item in items"
    >
      <VCheckboxObj
        :text="item.name"
        :textPosition="textPosition"
        @onChange="onChange($event, item)"
        :isChecked="Boolean(currentIsCheckedItems[item.id])"
        :checkboxTypeToggle="checkboxTypeToggle"
      />
    </li>
  </ul>
</template>

<script>
  import VCheckboxObj from './VCheckboxObj.vue';

  export default {
    name: 'VCheckboxObjList',
    props: {
      items: {
        type: [Array, Object],
      },
      textPosition: {
        type: String,
        default: 'after',
      },
      currentIsCheckedItems: {
        type: Object,
        default: [],
      },
      checkboxTypeToggle: {
        type: Boolean,
        default: false,
      },
    },
    components: { VCheckboxObj },

    data() {
      return {};
    },
    methods: {
      onChange(isCheckedBoolean, item) {
        // this.ownIsChecked[item] = e;
        // this.setCurrentCheckedForRender();
        // console.log(e, item, this.currentIsCheckedRender);

        // localStorage.setItem('ownIsChecked', JSON.stringify(this.ownIsChecked));

        this.$emit('onChange', { isCheckedBoolean: isCheckedBoolean, item: item });
      },
    },
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
