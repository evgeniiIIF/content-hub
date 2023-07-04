<template>
  <section class="categories">
    <div class="container">
      <div class="categories__wrapper">
        <div class="categories__top top">
          <div class="top__row">
            <h2 class="top__title">Локальные атрибуты</h2>
            <div class="top__actions">
              <div class="top__input">
                <VInput :opts="inputOpts">
                  <img
                    src="@/assets/img/static/search/Search_Magnifying_Glass_20px.svg"
                    alt="icon"
                  />
                </VInput>
              </div>
              <div
                class="top__button"
                @click="isOpenSlidingBlock = true"
              >
                <VButton>
                  <span class="button__image">
                    <img
                      src="@/assets/img/static/buttons-icon/Add_Plus_20px.svg"
                      alt="plus"
                    />
                  </span>
                  <span class="button__text">Добавить категорию</span>
                </VButton>
              </div>
            </div>
          </div>
          <div class="top__show-hide show-hide-categories">
            <button
              type="button"
              class="show-hide-categories__button show-hide-categories__button--all"
            >
              все
            </button>
            <button
              type="button"
              class="show-hide-categories__button show-hide-categories__button--active"
            >
              активные
            </button>
            <button
              type="button"
              class="show-hide-categories__button show-hide-categories__button--inactive"
            >
              неактивные
            </button>
          </div>
        </div>
        <div class="categories__table">
          <VLocalAttributesTable />
        </div>
        <div class="categories__bottom">
          <VPagination />
        </div>
      </div>
    </div>
    <VSlidingBlockSlotUIFC
      :isOpenSlidingBlock="isOpenSlidingBlock"
      @onCloseMenu="isOpenSlidingBlock = false"
    >
      <VCardAddCategory @onCloseMenu="isOpenSlidingBlock = false" />
    </VSlidingBlockSlotUIFC>
  </section>
</template>

<script>
  import VSlidingBlockSlotUIFC from '@/components/UI-FC/VSlidingBlockSlotUIFC.vue';
  import VButton from '@/components/UI/VButton.vue';
  import VInput from '@/components/UI/VInput.vue';
  import VPagination from '@/components/UI/VPagination.vue';
  import VCardAddCategory from '@/components/cards/VCardAddCategory.vue';
  import VLocalAttributesTable from '@/components/modules/VLocalAttributesTable.vue';

  export default {
    name: 'VLocalAttributesViews',
    components: { VInput, VButton, VPagination, VSlidingBlockSlotUIFC, VCardAddCategory, VLocalAttributesTable },
    data() {
      return {
        isOpenSlidingBlock: false,
        inputOpts: {
          icon: true,
          type: 'text',
          name: 'search',
          placeholder: 'Поиск',
        },
      };
    },
  };
</script>

<style lang="scss">
  // @import '../assets//scss/settings.scss';

  // .categories {
  //   position: absolute;
  //   width: 100%;
  //   min-height: 100%;
  //   left: 0;
  //   top: 0;
  //   background: #ebedf1;

  //   &__wrapper {
  //     display: flex;
  //     flex-direction: column;
  //     height: 100%;
  //   }

  //   &__top {
  //   }

  //   &__table {
  //     flex: 1 1 auto;
  //   }

  //   &__bottom {
  //     padding: 41px 0 80px 0;
  //   }
  // }

  // .top {
  //   padding: 34px 0 24px 0;

  //   &__row {
  //     display: flex;
  //     justify-content: space-between;
  //     align-items: center;
  //     margin-bottom: 12px;
  //   }
  //   &__title {
  //     @extend %font-h1;
  //   }

  //   &__actions {
  //     display: flex;
  //   }

  //   &__input {
  //     width: 320px;
  //     margin-right: 24px;

  //     .input__input {
  //       padding: 9px 16px 9px 45px;
  //     }
  //   }

  //   &__button {
  //     .button {
  //       padding: 8px 22px 8px 14px;
  //       &__image {
  //       }

  //       &__text {
  //       }
  //     }
  //   }

  //   &__show-hide {
  //   }
  // }

  // .show-hide-categories {
  //   @include mr(1px);

  //   &__button {
  //     padding: 2px 8px;
  //     background: #292929;
  //     border: none;
  //     font-family: 'Inter';
  //     font-style: normal;
  //     font-weight: 400;
  //     font-size: 12px;
  //     line-height: 167%;
  //     background: #ffffff;
  //     color: #292929;
  //   }

  //   &__button--all {
  //     border-radius: 4px 0px 0px 4px;
  //     color: #ffffff;
  //     background: #292929;
  //   }

  //   &__button--active {
  //   }

  //   &__button--inactive {
  //     border-radius: 0px 4px 4px 0px;
  //   }
  // }
</style>
