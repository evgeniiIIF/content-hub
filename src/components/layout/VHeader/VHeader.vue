<template>
  <header
    class="header js-header"
    ref="jsHeader"
  >
    <div class="container">
      <div class="header__body">
        <div class="header__logo">
          <VLogo />
        </div>
        <div
          class="header__content js-mobile-menu"
          ref="jsMobileMenu"
        >
          <div class="header__nav">
            <VNav :menuItems="menuItems" />
          </div>
          <div class="header__signin">header__signin</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';

  // components
  import VLogo from '@/components/UI/VLogo.vue';
  import VNav from '@/components/UI/VNav.vue';

  export default {
    name: 'VHeader',

    props: {},
    components: {
      VLogo,
      VNav,
    },
    data() {
      return {
        menuItems: [
          {
            name: 'Маркетплейсы',
            dropdownItems: [
              { name: 'Ozon', href: 'changeme' },
              { name: 'Wildberries', href: 'changeme' },
              { name: 'Aliexpress', href: 'changeme' },
            ],
          },
          { name: 'Магазины', href: 'changeme' },
          { name: 'Категории', href: 'changeme' },
          { name: 'Номенклатура', href: 'changeme' },
          { name: 'Ценообраование', href: 'changeme' },
        ],
      };
    },
    computed: {},

    watch: {},

    methods: {},
  };
</script>

<style lang="scss">
  @import '@/assets/scss/mixins.scss';
  @import '@/assets/scss/smart-grid.scss';

  $bg: #292929;
  $bd: #2a2a2a;
  $hov: #00a19c;

  .header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 9999;
    background: $bg;
    backdrop-filter: blur(10px);
    border-bottom: 1px solid $bd;

    &__body {
      display: flex;
      justify-content: space-between;
    }

    &__logo {
      display: flex;
      align-items: center;
      margin-right: 80px;
    }

    &__nav {
      margin-right: 20px;
    }

    &__content {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-between;
    }

    &__signin {
      font-size: 23px;
      color: #fff;
    }
  }
</style>
