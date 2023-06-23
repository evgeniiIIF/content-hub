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
          <div class="header__signin signin-header">
            <div class="signin-header__icon">
              <img
                src="@/assets/img/static/decorative-icon/Bell.svg"
                alt="bell"
              />
            </div>
            <div class="signin-header__dropdown dropdown-header-signin">
              <VDropdownSlots>
                <template #button>
                  <div class="dropdown-header-signin__image">
                    <img
                      src="@/assets/img/header/person.jpg"
                      alt="photo"
                    />
                  </div>
                  <div class="dropdown-header-signin__text">Alexandr Dmitriev</div>
                  <div class="dropdown__arrow">
                    <img
                      src="@/assets/img/static/arrows/arrow_down_20px.svg"
                      alt="arrow"
                    />
                  </div>
                </template>
                <template #menu>menu</template>
              </VDropdownSlots>
            </div>
          </div>
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
  import VDropdownSlots from '@/components/UI/VDropdownSlots.vue';

  export default {
    name: 'VHeader',

    props: {},
    components: {
      VLogo,
      VNav,
      VDropdownSlots,
    },
    data() {
      return {
        menuItems: [
          // {
          //   name: 'Маркетплейсы',
          //   dropdownItems: [
          //     { name: 'Ozon', href: 'changeme' },
          //     { name: 'Wildberries', href: 'changeme' },
          //     { name: 'Aliexpress', href: 'changeme' },
          //   ],
          // },
          {
            name: 'Базовые поля',
            dropdownItems: [
              { name: 'Локальный список', href: 'changeme' },
              { name: 'Сопоставить поля с полями МП', href: 'changeme' },
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
    }
  }

  .signin-header {
    display: flex;
    align-items: center;

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 18px;
      height: 100%;
      border-left: 1px solid #363636;
      border-right: 1px solid #363636;
    }

    &__dropdown {
      .dropdown {
        &__button {
          display: flex;
          align-items: center;
          padding: 0;
        }
        &__arrow {
        }
      }
    }
  }

  .dropdown-header-signin {
    &__image {
      padding: 0 16px;
      img {
        border-radius: 50%;
        overflow: hidden;
      }
    }

    &__text {
      margin-right: 8px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 154%;
      color: #f8f8f6;
    }
    .dropdown__menu {
      width: 263px;
      top: 146%;
      left: auto;
      right: 0;
    }
  }
</style>
