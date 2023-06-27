<template>
  <div class="button-dropdown-window js-dropdown-menu--root">
    <button class="button-dropdown-window__button js-dropdown-menu__button">
      <span class="button-dropdown-window__image">
        <img
          src="@/assets/img/static/buttons-icon/More_Vertical_20px.svg"
          alt="plus"
        />
      </span>
    </button>
    <ul class="button-dropdown-window__list">
      <li class="button-dropdown-window__item">1</li>
      <li class="button-dropdown-window__item">2</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'VButtonDropDownWindowUIFC',
  };
</script>

<style lang="scss">
  .button-dropdown-window {
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      padding: 0;
      border-radius: 50%;
      background: transparent;
      border-color: transparent;

      &:hover {
        background: rgba(0, 0, 0, 0.03);
      }
    }
    &__image {
    }

    &__list {
    }

    &__item {
    }
  }
</style>
