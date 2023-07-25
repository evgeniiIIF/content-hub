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
    <div
      class="success success--add-category"
      v-if="isAddCategorySuccess || isSelectMarketplaceCategirySuccess || isCategoryDeleteSuccess"
    >
      <div class="success__message">
        <span class="success__icon"
          ><svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.05762 2.15515C6.37018 1.84259 6.7941 1.66699 7.23613 1.66699H12.7645C13.2066 1.66699 13.6305 1.84259 13.943 2.15515L17.8455 6.05761C18.1581 6.37018 18.3337 6.7941 18.3337 7.23613V12.7645C18.3337 13.2065 18.1581 13.6305 17.8455 13.943L13.943 17.8455C13.6305 18.1581 13.2066 18.3337 12.7645 18.3337H7.23613C6.7941 18.3337 6.37018 18.1581 6.05761 17.8455L2.15515 13.943C1.84259 13.6305 1.66699 13.2065 1.66699 12.7645V7.23613C1.66699 6.7941 1.84259 6.37018 2.15515 6.05762L6.05762 2.15515ZM12.7645 3.33366L7.23613 3.33366L3.33366 7.23613L3.33366 12.7645L7.23613 16.667L12.7645 16.667L16.667 12.7645V7.23613L12.7645 3.33366ZM13.0896 7.7444C13.415 8.06984 13.415 8.59747 13.0896 8.92291L9.75624 12.2562C9.43081 12.5817 8.90317 12.5817 8.57773 12.2562L6.91107 10.5896C6.58563 10.2641 6.58563 9.7365 6.91107 9.41107C7.2365 9.08563 7.76414 9.08563 8.08958 9.41107L9.16699 10.4885L11.9111 7.7444C12.2365 7.41896 12.7641 7.41896 13.0896 7.7444Z"
              fill="white"
            />
          </svg>
        </span>
        <p class="success__text">{{ currentMessage }}</p>
      </div>
      <button
        @click="closeSuccessWindow"
        class="success__close"
        type="button"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.99984 3.33366C6.31794 3.33366 3.33317 6.31843 3.33317 10.0003C3.33317 13.6822 6.31794 16.667 9.99984 16.667C13.6817 16.667 16.6665 13.6822 16.6665 10.0003C16.6665 6.31843 13.6817 3.33366 9.99984 3.33366ZM1.6665 10.0003C1.6665 5.39795 5.39746 1.66699 9.99984 1.66699C14.6022 1.66699 18.3332 5.39795 18.3332 10.0003C18.3332 14.6027 14.6022 18.3337 9.99984 18.3337C5.39746 18.3337 1.6665 14.6027 1.6665 10.0003ZM6.91058 6.91107C7.23602 6.58563 7.76366 6.58563 8.08909 6.91107L9.99984 8.82182L11.9105 6.91118C12.2359 6.58574 12.7635 6.58574 13.089 6.91118C13.4144 7.23661 13.4144 7.76425 13.089 8.08969L11.1783 10.0003L13.089 11.911C13.4144 12.2364 13.4144 12.764 13.089 13.0895C12.7635 13.4149 12.2359 13.4149 11.9105 13.0895L9.99984 11.1788L8.08909 13.0896C7.76366 13.415 7.23602 13.415 6.91058 13.0896C6.58514 12.7641 6.58514 12.2365 6.91058 11.9111L8.82133 10.0003L6.91058 8.08958C6.58514 7.76414 6.58514 7.23651 6.91058 6.91107Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

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
      ...mapGetters('selectMarketplaceCategiry', {
        isSelectMarketplaceCategirySuccess: 'success',
        messageSelectMarketplaceCategiry: 'getMessage',
      }),
      ...mapGetters('deleteCategory', {
        isCategoryDeleteSuccess: 'success',
        messageCategoryDelete: 'getMessage',
      }),

      currentMessage() {
        console.log(this.messageSelectMarketplaceCategiry);
        return this.messageSelectMarketplaceCategiry || this.messageAddCategory || this.messageCategoryDelete;
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
    position: sticky;
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

  .success {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 16px 12px;
    z-index: 1;
    background: #3ebb6a;

    display: flex;
    justify-content: space-between;
    align-items: center;

    &__message {
      display: flex;
      align-items: center;
      font-family: Inter;
    }

    &__icon {
      margin-right: 8px;
    }

    &__text {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 171%;
      color: #fff;
    }

    &__close {
      background: none;
      border: none;
    }
  }
</style>
