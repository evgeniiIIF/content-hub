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
          <div class="top__show-hide show-hide-markets">
            <button
              v-for="tab in tabButtons"
              :key="tab.name"
              type="button"
              class="show-hide-markets__button"
              :class="tab.name === this.selectedTabButton ? 'show-hide-markets__button--active' : ''"
              @click="filterMarketplace(tab)"
            >
              {{ tab.name }}
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
  import { mapActions, mapGetters } from 'vuex';

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
        selectedTabButton: 'все',
        tabButtons: [],

        isOpenSlidingBlock: false,
        inputOpts: {
          icon: true,
          type: 'text',
          name: 'search',
          placeholder: 'Поиск',
        },
      };
    },
    computed: {
      ...mapGetters('marketsItems', {
        marketplacesItems: 'getMarketplacesItems',
        // warehousesItems: 'getPortalWarehousesItems',
      }),
      aliexpressId() {
        return this.marketplacesItems.find((marketplace) => marketplace.name === 'Aliexpress').id;
      },
      ozonId() {
        return this.marketplacesItems.find((marketplace) => marketplace.name === 'Ozon').id;
      },
    },

    methods: {
      ...mapActions('marketsItems', ['GET_ITEMS_MARKETS']),

      onCloseSlidingBlock() {
        this.isOpenSlidingBlock = false;
        this.$refs.cardAddMarket.resetData();
      },

      async filterMarketplace(tabItem) {
        this.selectedTabButton = tabItem.name;
        await this.GET_ITEMS_MARKETS(tabItem.marketplaceId);
      },
    },

    async created() {
      await this.GET_ITEMS_MARKETS();

      // console.log(this.marketplacesItems.find((marketplace) => marketplace.name === 'Aliexpress').id);
      this.tabButtons = [
        { name: 'все', marketplaceId: null },
        { name: 'Ozon', marketplaceId: this.ozonId },
        { name: 'Aliexpress', marketplaceId: this.aliexpressId },
        { name: 'Wildberries', marketplaceId: null },
      ];
      console.log(this.tabButtons);
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
  .show-hide-markets {
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

      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
    }

    &__button--active {
      background: var(--blue, #07f);
      border-radius: 4px;
      color: var(--white, #fff);
      /* Body_L */
    }
  }
</style>
