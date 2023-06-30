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
    :class="menuIsOpen ? 'dropdown-slots--open' : ''"
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
      ref="currentDropdownMenu"
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
        document.addEventListener('click', this.closeMenu, true);
        this.menuIsOpen = !this.menuIsOpen;
      },

      closeMenu(e) {
        console.log(!this.$refs.currentDropdownMenu.contains(e.target));
        if (this.menuIsOpen && !e.target.closest('.dropdown')) {
          document.removeEventListener('click', this.closeMenu, true);
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
    // mounted() {
    //   document.addEventListener('click', this.closeMenu, true);
    // },
    // beforeUnmount() {
    //   document.removeEventListener('click', this.closeMenu, true);
    // },
  };
</script>

<style lang="scss">
  .dropdown {
    position: relative;
    height: 100%;

    &__button {
      cursor: pointer;
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
      width: auto;
      min-height: auto;
      left: 0;
      top: 120%;
      border-radius: 4px;
      box-shadow: 0px 8px 24px -4px rgba(54, 54, 54, 0.1);
      background: #ffffff;
    }
    &__item {
      white-space: nowrap;
      @extend %font-dropdown-item;
    }

    &-slots--open {
      & .dropdown__arrow img {
        transform: rotate(180deg);
      }
    }
  }
</style>
