<template>
  <section class="categories">
    <div class="container">
      <div class="categories__wrapper">
        <div class="categories__top top">
          <div class="top__row">
            <h2 class="top__title">Категории</h2>
            <div class="top__actions">
              <div class="top__input">
                <VInput
                  :opts="inputOpts"
                  @onInput="setFilterValueLocalCategories($event)"
                >
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
              @click="setShowStatusLocalCategories('all')"
              :style="{ background: showStatusLocalCategories === 'all' ? '#07f' : '', color: showStatusLocalCategories === 'all' ? '#fff' : '' }"
            >
              все
            </button>
            <button
              type="button"
              class="show-hide-categories__button show-hide-categories__button--active"
              @click="setShowStatusLocalCategories('active')"
              :style="{ background: showStatusLocalCategories === 'active' ? '#07f' : '', color: showStatusLocalCategories === 'active' ? '#fff' : '' }"
            >
              активные
            </button>
            <button
              type="button"
              class="show-hide-categories__button show-hide-categories__button--inactive"
              @click="setShowStatusLocalCategories('inactive')"
              :style="{ background: showStatusLocalCategories === 'inactive' ? '#07f' : '', color: showStatusLocalCategories === 'inactive' ? '#fff' : '' }"
            >
              неактивные
            </button>
          </div>
        </div>
        <div class="categories__table">
          <VCategoriesTable
            :filterValueLocalCategories="filterValueLocalCategories"
            :showStatusLocalCategories="showStatusLocalCategories"
            ref="categoriesTable"
          />
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
  import VCardAddCategory from '@/components/cards/VCardAddCategory.vue';
  import VCategoriesTable from '@/components/modules/VCategoriesTable.vue';

  export default {
    name: 'VCategoriesSectionView',
    components: { VInput, VButton, VSlidingBlockSlotUIFC, VCardAddCategory, VCategoriesTable },
    data() {
      return {
        filterValueLocalCategories: '',
        showStatusLocalCategories: 'all',

        isOpenSlidingBlock: false,
        inputOpts: {
          icon: true,
          type: 'text',
          name: 'search',
          placeholder: 'Поиск',
        },
        dataFilterCategoriesItems: {},
      };
    },
    methods: {
      setFilterValueLocalCategories($event) {
        this.filterValueLocalCategories = $event.target.value;
        this.dataFilterCategoriesItems.name = this.filterValueLocalCategories;
        this.$refs.categoriesTable.getFilteredCategoriesItems(this.dataFilterCategoriesItems);
      },

      setShowStatusLocalCategories(statusValue) {
        const categoriesTableBlock = this.$refs.categoriesTable;

        this.showStatusLocalCategories = statusValue;
        if (this.showStatusLocalCategories === 'all') {
          delete this.dataFilterCategoriesItems.is_active;

          // console.log(this.showStatusLocalCategories);
        }
        if (this.showStatusLocalCategories === 'inactive') {
          this.dataFilterCategoriesItems.is_active = 0;
          // delete this.dataFilterCategoriesItems.is_active;

          // console.log(this.showStatusLocalCategories);
        }

        if (this.showStatusLocalCategories === 'active') {
          this.dataFilterCategoriesItems.is_active = 1;

          // console.log(this.showStatusLocalCategories);
        }

        this.$refs.categoriesTable.getFilteredCategoriesItems(this.dataFilterCategoriesItems);

        // this.$nextTick(() => {
        //   categoriesTableBlock.filterRecursivelyLocalCategories();
        // });
      },
    },
  };
</script>

<style lang="scss">
  .categories {
    &__wrapper {
    }

    &__table {
      flex: 1 1 auto;
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
        padding: 9px 45px 9px 16px;
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
      // color: $white-color;
      // background: #07f;
    }

    &__button--inactive {
    }
  }
</style>
