<template>
  <section class="categories">
    <div class="container">
      <div class="categories__body">
        <div class="categories__top top-categories">
          <div class="top-categories__row">
            <h1 class="top-categories__title">Категории</h1>
            <div class="top-categories__actions">
              <div class="top-categories__input">
                <VInput :opts="inputOpts" />
              </div>
              <div class="top-categories__button">
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
          <div class="top-categories__show-hide show-hide-categories">
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
        <div class="categories__content">
          <VCategoriesTable />
        </div>
        <div class="categories__bottom">
          <VPagination />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VButton from '@/components/UI/VButton.vue';
  import VInput from '@/components/UI/VInput.vue';
  import VPagination from '@/components/UI/VPagination.vue';
  import VCategoriesTable from '@/components/modules/VCategoriesTable.vue';

  export default {
    name: 'VCategoriesSection',
    components: { VInput, VButton, VCategoriesTable, VPagination },
    data() {
      return {
        inputOpts: {
          type: 'text',
          icon: require('@/assets/img/static/search/Search_Magnifying_Glass_20px.svg'),
          name: 'search',
          placeholder: 'Поиск',
        },
      };
    },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/smart-grid.scss';
  @import '@/assets/scss/settings.scss';

  .categories {
    background: #ebedf1;

    &__body {
    }

    &__top {
    }

    &__content {
      overflow-y: auto;
    }

    &__bottom {
      padding: 41px 0 80px 0;
    }
  }

  .top-categories {
    padding: 34px 0 24px 0;

    &__row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }
    &__title {
      @extend %font-h1;
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
    }

    &__show-hide {
    }
  }
  .button {
    &__image {
    }

    &__text {
    }
  }
  .show-hide-categories {
    @include mr(1px);

    &__button {
      padding: 2px 8px;
      background: #292929;
      border: none;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 167%;
      background: #ffffff;
      color: #292929;
    }

    &__button--all {
      border-radius: 4px 0px 0px 4px;
      color: #ffffff;
      background: #292929;
    }

    &__button--active {
    }

    &__button--inactive {
      border-radius: 0px 4px 4px 0px;
    }
  }
</style>
