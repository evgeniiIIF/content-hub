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
    class="dropdown"
    :class="menuIsOpen ? 'dropdown--open' : ''"
  >
    <div
      class="dropdown__button"
      @click="openMenu"
    >
      <slot name="button"></slot>
    </div>
    <div
      v-show="menuIsOpen"
      class="dropdown__menu"
    >
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VDropdownSlots',
    props: {
      name: {
        type: String,
      },
      dropdownItems: {
        type: Array,
        default() {
          return [];
        },
      },
    },
    data() {
      return {
        menuIsOpen: false,
        selected: null,
      };
    },
    methods: {
      openMenu() {
        this.menuIsOpen = !this.menuIsOpen;
      },
      closeMenu(e) {
        if (this.menuIsOpen && !e.target.closest('.dropdown')) {
          this.menuIsOpen = false;
        }
      },
      // selectItem(e, item) {
      //   this.selected = item;
      //   const input = e.target.closest('.dropdown').querySelector('.dropdown__input');
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
      document.addEventListener('click', this.closeMenu.bind(this), true);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.closeMenu.bind(this));
    },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/settings.scss';

  .dropdown {
    position: relative;
    height: 100%;

    &__button {
    }

    &__title {
      display: flex;
      align-items: center;
      height: 100%;
      margin-right: 8px;
      @extend %font-nav-link;
    }

    &__arrow {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &__menu {
      position: absolute;
      width: 180px;
      height: 158px;
      left: 0;
      top: 120%;
      border-radius: 4px;
      box-shadow: 0px 8px 24px -4px rgba(54, 54, 54, 0.1);
      background: #ffffff;
    }
    &__item {
      @extend %font-dropdown-item;
    }

    &--open {
      & .dropdown__arrow img {
        transform: rotate(180deg);
      }
    }
  }
</style>
