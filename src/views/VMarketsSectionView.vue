<template>
  <section class="markets">
    <div class="markets__top">
      <div class="container">
        <div class="markets__top-body top">
          <div class="top__row">
            <h2 class="top__title">Магазины</h2>
            <div class="top__actions">
              <!-- <div class="top__input">
                <VInput :opts="inputOpts">
                  <img
                    src="@/assets/img/static/search/Search_Magnifying_Glass_20px.svg"
                    alt="icon"
                  />
                </VInput>
              </div> -->
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
                  <span class="button__text">Добавить магазин</span>
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
              Ozon
            </button>
            <button
              type="button"
              class="show-hide-categories__button show-hide-categories__button--inactive"
              @click="filterMarketplace(1)"
            >
              Aliexpress
            </button>
            <button
              type="button"
              class="show-hide-categories__button show-hide-categories__button--inactive"
              @click="filterMarketplace(2)"
            >
              Wildberries
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="markets__table">
      <VMarketsTable />
    </div>
    <VSlidingBlockSlotUIFC
      :isOpenSlidingBlock="isOpenSlidingBlock"
      @onCloseSlidingBlock="onCloseSlidingBlock"
    >
      <VCardAddMarket
        @onCloseSlidingBlock="onCloseSlidingBlock"
        ref="cardAddMarket"
      />
    </VSlidingBlockSlotUIFC>
  </section>
</template>

<script>
  import { mapActions } from 'vuex';

  import VSlidingBlockSlotUIFC from '@/components/UI-FC/VSlidingBlockSlotUIFC.vue';
  import VButton from '@/components/UI/VButton.vue';
  import VInput from '@/components/UI/VInput.vue';
  import VCardAddMarket from '@/components/cards/VCardAddMarket.vue';
  import VMarketsTable from '@/components/modules/VMarketsTable.vue';

  export default {
    name: 'VMarketsSectionView',
    components: { VInput, VButton, VSlidingBlockSlotUIFC, VCardAddMarket, VMarketsTable },
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
    methods: {
      ...mapActions('marketsItems', ['GET_ITEMS_MARKETS']),

      onCloseSlidingBlock() {
        this.isOpenSlidingBlock = false;
        this.$refs.cardAddMarket.resetData();
      },
      filterMarketplace(marketplaceId) {
        this.GET_ITEMS_MARKETS(marketplaceId);
      },
    },
  };
</script>

<style lang="scss">
  .markets {
    &__top {
    }

    &__top-body {
    }

    &__table {
      padding-bottom: 100px;
    }
  }
  .container {
  }
  .top {
    &__row {
    }

    &__title {
    }

    &__actions {
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
    &__button {
    }

    &__button--all {
    }

    &__button--active {
    }

    &__button--inactive {
    }
  }
</style>
