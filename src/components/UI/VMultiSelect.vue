<!-- <VSelect
:opts="{
	type: 'text',
	name: 'filter-search',
	placeholder: 'Бренд',
	icon: true,
}"
>
<template #menu> menu </template>
</VSelect> -->

<template>
  <div
    class="multiselect"
    :class="menuIsOpen ? 'multiselect--open' : ''"
  >
    <div
      class="multiselect__button"
      @click="openMenu"
    >
      <VInput
        v-if="!Object.keys(selectedItems).length"
        :opts="opts"
        @onFocus="$emit('onFocus')"
        :value="value"
        :title="title"
      >
        <VArrowDownSVG />
      </VInput>
      <div
        v-else
        class="multiselect__content"
      >
        <span class="multiselect__label">Подключить склад(ы)</span>
        <div class="multiselect__field">
          <ul class="multiselect__selected-list">
            <li
              @click.stop
              class="multiselect__selected-item"
              v-for="item in selectedItems"
            >
              {{ item.name }}
              <span
                @click="removeSelectedItem(item)"
                class="multiselect__selected-item-remove"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.0771 6.07709C6.40254 5.75165 6.93018 5.75165 7.25562 6.07709L9.99969 8.82116L12.7438 6.07709C13.0692 5.75165 13.5968 5.75165 13.9223 6.07709C14.2477 6.40252 14.2477 6.93016 13.9223 7.2556L11.1782 9.99967L13.9223 12.7437C14.2477 13.0692 14.2477 13.5968 13.9223 13.9222C13.5968 14.2477 13.0692 14.2477 12.7438 13.9222L9.99969 11.1782L7.2556 13.9223C6.93016 14.2477 6.40252 14.2477 6.07709 13.9223C5.75165 13.5968 5.75165 13.0692 6.07709 12.7438L8.82118 9.99967L6.0771 7.2556C5.75167 6.93016 5.75167 6.40252 6.0771 6.07709Z"
                    fill="white"
                  />
                </svg>
              </span>
            </li>
          </ul>
          <div class="multiselect__icon">
            <VArrowDownSVG />
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="menuIsOpen"
      class="multiselect__menu"
    >
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
  import VArrowDownSVG from '@/assets/img/static/arrows/VArrowDownSVG.vue';
  import VInput from './VInput.vue';

  export default {
    name: 'VSelect',
    props: {
      opts: {
        type: Object,
      },
      name: {
        type: String,
      },
      value: {
        type: String,
      },
      title: {
        type: String,
      },
      selectedItems: {
        type: Object,
      },
    },
    data() {
      return {
        menuIsOpen: false,
        // selectedItems: [],

        currenuSelectField: null,
      };
    },
    methods: {
      openMenu(e) {
        this.menuIsOpen = !this.menuIsOpen;
        this.currenuSelectField = e.target.closest('.multiselect');
        document.addEventListener('click', this.closeMenu, true);
      },
      closeMenu(e) {
        // if (this.menuIsOpen && !e.target.closest('.select')) {
        if (this.currenuSelectField && !this.currenuSelectField.contains(e.target)) {
          this.menuIsOpen = false;
          document.removeEventListener('click', this.closeMenu, true);
        }
      },
      removeSelectedItem(item) {
        this.$emit('onRemoveSelectedItem', item);
      },
      // selectItem(e, item) {
      //   this.selected = item;
      //   const input = e.target.closest('.select').querySelector('.select__input');
      //   this.menuIsOpen = false;
      //   input.focus();
      //   this.$emit('on-selected-item', {
      //     hasSelected: this.hasSelected,
      //     selected: this.selected,
      //   });
      // },
    },
    // computed: {
    //   hasSelected() {
    //     return this.selected !== this.items[0];
    //   },
    // },
    mounted() {
      this.opts.icon = true;
    },
    beforeUnmount() {},
    components: { VInput, VArrowDownSVG },
  };
</script>

<style lang="scss">
  .multiselect {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;

    & .input__input {
      padding-right: 36px;
      cursor: pointer;
      border-color: $border-light2;
    }
    &.multiselect--open {
      & .input__input,
      .multiselect__selected-list {
        border-radius: 4px 4px 0 0;
      }
      .input__icon {
        transform: translateY(-50%) rotate(180deg);
      }

      .multiselect__icon {
        transform: rotate(180deg);
      }
    }

    & .input__icon {
      cursor: pointer;
      left: auto;
      right: 0;
      justify-content: center;
      pointer-events: none;
      svg path {
        // fill: red;
      }
    }

    &__label {
      margin-bottom: 4px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 133%;
      color: #999999;
    }

    &__field {
      position: relative;
    }

    &__selected-list {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      padding: 8px 12px;
      border: 1px solid #c2c9d2;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #000;
      border-radius: 4px;
      background: #ffffff;
    }

    &__selected-item {
      display: flex;
      padding: 4px 4px 4px 8px;
      align-items: center;
      gap: 8px;
      border-radius: 4px;
      background: var(--gray, #c2c9d2);
    }

    &__selected-item-remove {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__icon {
      position: absolute;
      cursor: pointer;
      left: auto;
      top: 0;
      right: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      width: 36px;
      height: 100%;

      pointer-events: none;

      svg path {
        // fill: red;
      }
    }

    &__button {
    }

    &__input {
      width: 100%;
    }

    &__title {
      display: flex;
      align-items: center;
      height: 100%;
      margin-right: 8px;
      @extend %font-inter--600;
    }

    &__arrow {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &__menu {
      position: absolute;
      width: 100%;
      height: 230px;
      left: 0;
      top: 100%;
      z-index: 999;
      overflow-y: auto;
      border-radius: 0 0 4px 4px;
      border: 1px solid $border-light2;
      border-top: none;
      box-shadow: 0px 8px 24px -4px rgba(54, 54, 54, 0.1);
      background: $white-color;
    }
    &__item {
    }
  }
</style>
