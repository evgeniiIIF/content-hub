<template>
  <section class="categories">
    <div class="container">
      <div class="categories__wrapper">
        <div class="categories__top top">
          <div class="top__row">
            <h2 class="top__title">Категории</h2>
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
          <VCategoriesTable />
        </div>
        <div class="categories__bottom">
          <VPagination />
        </div>
      </div>
    </div>
    <VSlidingBlockSlotUIFC
      :isOpenSlidingBlock="isOpenSlidingBlock"
      @onCloseSlidingBlock="isOpenSlidingBlock = false"
    >
      <VCardAddCategory @onCloseSlidingBlock="isOpenSlidingBlock = false" />
    </VSlidingBlockSlotUIFC>
  </section>
</template>

<script>
  import VSlidingBlockSlotUIFC from '@/components/UI-FC/VSlidingBlockSlotUIFC.vue';
  import VButton from '@/components/UI/VButton.vue';
  import VInput from '@/components/UI/VInput.vue';
  import VPagination from '@/components/UI/VPagination.vue';
  import VCardAddCategory from '@/components/cards/VCardAddCategory.vue';
  import VCategoriesTable from '@/components/modules/VCategoriesTable.vue';

  export default {
    name: 'VCategoriesSectionView',
    components: { VInput, VButton, VPagination, VSlidingBlockSlotUIFC, VCardAddCategory, VCategoriesTable },
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
  .categories {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    .container {
      height: 100%;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    &__table {
      flex: 1 1 auto;
    }

    &__bottom {
      padding: 41px 0 80px 0;
    }
  }

  .top {
    padding: 34px 0 24px 0;

    &__row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    &__title {
      @extend %font-inter--h1;
    }

    &__actions {
      display: flex;
    }

    &__input {
      width: 320px;
      margin-right: 24px;

      .input__input {
        padding: 9px 16px 9px 45px;
      }
    }

    &__button {
      .button {
        padding: 8px 22px 8px 14px;
      }
    }
  }

  .show-hide-categories {
    display: inline-block;
    padding: 2px;
    background: #ffffff;
    border-radius: 8px;
    @include mr(1px);

    &__button {
      border-radius: 4px;
      padding: 4px 16px;
      border: none;

      @extend %font-inter--400_167;

      color: $dark-color;
      background: transparent;
    }

    &__button--all {
      color: $white-color;
      background: #07f;
    }

    &__button--inactive {
    }
  }
</style>
