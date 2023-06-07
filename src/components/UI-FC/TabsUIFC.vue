<template>
  <div class="tabs">
    <div class="tabs__buttons">
      <button
        class="tabs__button"
        v-for="(tab, index) in tabs"
        :key="tab"
        @click="currentTabIndex = index"
        :class="currentTabIndex === index ? 'tabs__button--active' : ''"
      >
        {{ tab.buttonText }}
      </button>
    </div>
    <div class="tabs__body">
      <component
        :is="currentTabName"
        :tabData="currentTabData"
        @onShowDialog="$emit('onShowDialog')"
      ></component>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VButtonDropDownWindowUIFC',
  };
</script>

<style lang="scss">
  @import '@/assets/scss/mixins.scss';
  @import '@/assets/scss/smart-grid.scss';

  .tabs {
    &__buttons {
      @include to(992px) {
        padding: 0 17px;
      }

      @include to(340px) {
        padding: 0;
      }
    }

    &__button {
      padding: 14px 32px;
      border: none;
      border-radius: 16px 16px 0px 0px;
      background: #e9eaec;
    }

    &__body {
    }
  }

  .tabs__button--active {
    background: #f7f7f8;
  }
</style>
