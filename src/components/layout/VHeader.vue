<!-- v-if="isAddCategorySuccess || isAddNestedCategorySuccess || isSelectMarketplaceCategirySuccess || isCategoryDeleteSuccess" -->

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
                  <div class="dropdown-header-signin__text">{{ userData.name }}</div>
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
    <VSuccess
      v-if="currentMessage"
      :message="currentMessage"
    />
  </header>
</template>

<script>
  // import mixSetMarginTopOfHeaderHeight from '@/mixins/mixSetMarginTopOfHeaderHeight';

  import { mapGetters, mapActions } from 'vuex';

  // components
  import VLogo from '@/components/UI/VLogo.vue';
  import VNav from '@/components/UI/VNav.vue';
  import VDropdownSlots from '@/components/UI/VDropdownSlots.vue';
  import VSuccess from '../UI/VSuccess.vue';

  export default {
    name: 'VHeader',
    // mixins: [mixSetMarginTopOfHeaderHeight],

    props: {},
    components: {
      VLogo,
      VNav,
      VDropdownSlots,
      VSuccess,
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
          {
            name: 'Товары',
            dropdownItems: [
              { name: 'Локальный список', href: 'changeme' },
              { name: 'Сопоставить поля с полями МП', href: 'changeme' },
            ],
          },
          { name: 'Категории', href: 'changeme' },
          { name: 'Ценообраование', href: 'changeme' },
          { name: 'Номенклатура', href: 'changeme' },
          { name: 'Карточки товаров', href: 'changeme' },
          { name: 'Информация о товаре', href: 'changeme' },
        ],
      };
    },
    computed: {
      ...mapGetters('user', {
        userData: 'block',
      }),
      ...mapGetters('addCategory', {
        isAddCategorySuccess: 'success',
        messageAddCategory: 'getMessage',
      }),
      ...mapGetters('addNestedCategory', {
        isAddNestedCategorySuccess: 'success',
        messageAddNestedCategory: 'getMessage',
      }),
      ...mapGetters('selectMarketplaceCategiry', {
        isSelectMarketplaceCategirySuccess: 'success',
        messageSelectMarketplaceCategiry: 'getMessage',
      }),
      ...mapGetters('deleteCategory', {
        isCategoryDeleteSuccess: 'success',
        messageCategoryDelete: 'getMessage',
      }),

      currentMessage() {
        const message = this.messageSelectMarketplaceCategiry || this.messageAddCategory || this.messageAddNestedCategory || this.messageCategoryDelete;
        console.log(message);
        return message;
      },
    },

    watch: {},

    methods: {
      ...mapActions('user', {
        GET_USER_DATA: 'GET_BLOCK',
      }),

      ...mapActions('addCategory', {
        resetAddCategorySuccess: 'RESET_SUCCESS',
      }),
      ...mapActions('selectMarketplaceCategiry', {
        resetSelectMarketplaceCategorySuccess: 'RESET_SUCCESS',
      }),
      ...mapActions('deleteCategory', {
        resetDeleteCategorySuccess: 'RESET_SUCCESS',
      }),
      closeSuccessWindow() {
        if (this.isSelectMarketplaceCategirySuccess) {
          this.resetSelectMarketplaceCategorySuccess();
        }
        if (this.isAddCategorySuccess) {
          this.resetAddCategorySuccess();
        }
        if (this.isCategoryDeleteSuccess) {
          this.resetDeleteCategorySuccess();
        }
      },
    },
    async mounted() {
      await this.GET_USER_DATA();
      // console.log(this.userData);
    },
  };
</script>

<style lang="scss">
  $bg: $dark-color;
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
    // border-bottom: 1px solid $bd;

    &__body {
      display: flex;
      justify-content: space-between;
    }

    &__logo {
      display: flex;
      align-items: center;
      margin-right: clamp(60px, 5vw, 80px);
    }

    &__content {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-between;
    }

    &__nav {
      .nav__item {
        padding: 4px;
      }
      .nav__link,
      .dropdown__button {
        &:hover {
          border-radius: 8px;
          background: $neutral-brown;
        }
      }
    }
    .container {
      padding-left: 35px;
      padding-right: 35px;
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
      // border-left: 1px solid $neutral-brown;
      // border-right: 1px solid $neutral-brown;
    }

    &__dropdown {
      .dropdown {
        &__button {
          display: flex;
          align-items: center;

          padding: 0;
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
      @extend %font-inter--400;

      margin-right: 8px;

      color: $neutral-white;
    }
    .dropdown__menu {
      width: 100%;
      top: 146%;
      left: auto;
      right: 0;
    }
  }

  .success--add-category {
  }
</style>
