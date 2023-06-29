<template>
  <nav class="nav">
    <ul class="nav__list">
      <li
        class="nav__item"
        v-for="menuItem in menuItems"
        :key="menuItem.name"
      >
        <div
          v-if="menuItem.dropdownItems"
          class="nav__dropdown"
        >
          <VDropdown
            :name="menuItem.name"
            :dropdownItems="menuItem.dropdownItems"
          />
        </div>
        <a
          v-else
          class="nav__link"
          :href="`#${menuItem.slug}`"
          @click.prevent="$emit('onGoToAnchor', menuItem.slug)"
        >
          {{ menuItem.name }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import VDropdown from './VDropdown.vue';

  export default {
    props: {
      menuItems: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {};
    },
    computed: {},
    components: { VDropdown },
  };
</script>

<style lang="scss">
  .nav {
    height: 100%;

    &__list {
      display: flex;
      height: 100%;
      & > * {
        border-right: 1px solid #363636;
      }
      &:first-child {
        border-left: 1px solid #363636;
      }
    }

    &__item {
      height: 100%;
      &:hover {
        background: #363636;
      }
    }

    &__dropdown {
      height: 100%;
      @extend %font-nav-link;
    }
    &__link {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 20px 24px;
      @extend %font-nav-link;
    }
  }
</style>
