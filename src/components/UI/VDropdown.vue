<template>
  <div
    class="dropdown"
    :class="menuIsOpen ? 'dropdown--open' : ''"
  >
    <button
      class="dropdown__button"
      type="button"
      @click="openMenu"
    >
      <span class="dropdown__title">{{ name }}</span>
      <span class="dropdown__arrow">
        <img
          src="@/assets/img/static/arrows/arrow_down_20px.svg"
          alt="arrow"
        />
      </span>
    </button>
    <div
      v-show="menuIsOpen"
      class="dropdown__menu"
    >
      <ul class="dropdown__list">
        <li
          class="dropdown__item"
          v-for="(item, index) in dropdownItems"
          :key="item.name"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
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
      height: 100%;
      background: transparent;
      border: none;
      display: flex;
      padding: 20px 24px;
      padding-right: 16px;
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
