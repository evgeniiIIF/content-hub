<template>
  <div
    class="dropdown"
    :class="menuIsOpen ? 'dropdown--open' : ''"
    ref="currentDropdown"
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
          @click="selectItem($event)"
          class="dropdown__item"
          v-for="(item, index) in dropdownItems"
          :key="item.name"
        >
          <RouterLink
            v-if="item.name == 'Локальный список'"
            to="/local-attributes"
            class="dropdown__link"
            active-class="dropdown__item--active"
          >
            {{ item.name }}
          </RouterLink>
          <a
            v-else
            :href="item.href"
            class="dropdown__link"
            @click.prevent
            >{{ item.name }}
          </a>
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
        // prevSelectedItem: null,
      };
    },
    methods: {
      openMenu() {
        this.menuIsOpen = !this.menuIsOpen;
        document.addEventListener('click', this.closeMenu, true);
        // console.log(this.menuIsOpen + ' op');
      },
      closeMenu(e) {
        const currentDropdown = this.$refs.currentDropdown;

        if (currentDropdown && !currentDropdown.contains(e.target)) {
          // console.log(this.menuIsOpen + ' close');

          this.menuIsOpen = false;
          document.removeEventListener('click', this.closeMenu, true);
        }
      },

      selectItem(e) {
        // if (this.prevSelectedItem) {
        //   this.prevSelectedItem.classList.remove('dropdown__item--active');
        // }
        // e.currentTarget.classList.add('dropdown__item--active');
        // this.prevSelectedItem = e.currentTarget;
        // this.closeMenu(e);
        this.menuIsOpen = false;
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
  };
</script>

<style lang="scss">
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

      @extend %font-inter--600;
      color: $neutral-white;
    }

    &__arrow {
      display: flex;
      align-items: center;
      height: 100%;
    }

    &__menu {
      position: absolute;
      width: 180px;
      min-height: 158px;
      left: 0;
      top: 120%;
      border-radius: 4px;
      box-shadow: 0px 8px 24px -4px rgba(54, 54, 54, 0.1);
      background: $white-color;
    }
    &__item {
      @extend %font-inter--400;

      &:not(:last-child) {
        border-bottom: 1px solid $neutral-white1;
      }

      &--active {
        &.dropdown__link {
          background: $blue-color;
          color: #fff;
          font-weight: 700;
        }
      }
    }
    &__link {
      display: block;
      padding: 16px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 154%;
      color: $dark-color;
      &:hover {
        background: $blue-color;
        color: #fff;
        font-weight: 700;
      }
    }

    &--open {
      & .dropdown__arrow img {
        transform: rotate(180deg);
      }
    }
  }
</style>
