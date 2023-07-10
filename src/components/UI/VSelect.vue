<!-- <VDropdovnSlots>
	<template #button>
		<button
			class="button"
			type="button"
		>
			<img
				src="@/assets/img/static/buttons-icon/More_Vertical_20px.svg"
				alt="icon"
			/>
		</button>
	</template>
	<template #menu>
		<ul>
			<li>Option 1</li>
			<li>Option 2</li>
			<li>Option 3</li>
		</ul>
	</template>
</VDropdovnSlots> -->

<template>
  <div
    class="select"
    :class="menuIsOpen ? 'select--open' : ''"
  >
    <div
      class="select__button"
      @click="openMenu"
    >
      <VInput
        :opts="opts"
        @onFocus="$emit('onFocus')"
      >
        <VArrowDownSVG />
      </VInput>
    </div>
    <div
      v-show="menuIsOpen"
      class="select__menu"
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
      indexName: {
        type: String,
      },
      // selectItems: {
      //   type: Array,
      //   default() {
      //     return [];
      //   },
      // },
    },
    data() {
      return {
        menuIsOpen: false,
        selected: null,

        currenuSelectField: null,
      };
    },
    methods: {
      openMenu(e) {
        this.menuIsOpen = !this.menuIsOpen;
        this.currenuSelectField = e.target.closest('.select');
        document.addEventListener('click', this.closeMenu, true);
      },
      closeMenu(e) {
        // if (this.menuIsOpen && !e.target.closest('.select')) {
        if (this.currenuSelectField && !this.currenuSelectField.contains(e.target)) {
          this.menuIsOpen = false;
          document.removeEventListener('click', this.closeMenu, true);
        }
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
  .select {
    position: relative;
    height: 100%;
    cursor: pointer;

    & .input__input {
      padding-right: 36px;
      cursor: pointer;
      border-color: $border-light2;
    }
    &.select--open {
      & .input__input {
        border-radius: 4px 4px 0 0;
      }
    }

    & .input__icon {
      cursor: pointer;
      left: auto;
      right: 0;
      justify-content: center;
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

    &--open {
      & .input__icon {
        transform: rotate(180deg);
      }
    }
  }
</style>
