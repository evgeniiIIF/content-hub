<template>
  <section class="shops">
    <div class="shops__top">
      <div class="container">
        <div class="shops__top-body top">
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
            >
              Aliexpress
            </button>
            <button
              type="button"
              class="show-hide-categories__button show-hide-categories__button--inactive"
            >
              Wildberries
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="shops__table">
      <VShopsTable />
    </div>
    <VSlidingBlockSlotUIFC
      :isOpenSlidingBlock="isOpenSlidingBlock"
      @onCloseSlidingBlock="isOpenSlidingBlock = false"
    >
      <VCardAddMarket @onCloseSlidingBlock="isOpenSlidingBlock = false" />
    </VSlidingBlockSlotUIFC>
  </section>
</template>

<script>
  import VSlidingBlockSlotUIFC from '@/components/UI-FC/VSlidingBlockSlotUIFC.vue';
  import VButton from '@/components/UI/VButton.vue';
  import VInput from '@/components/UI/VInput.vue';
  import VCardAddMarket from '@/components/cards/VCardAddMarket.vue';
  import VShopsTable from '@/components/modules/VShopsTable.vue';

  export default {
    name: 'VShopsSectionView',
    components: { VInput, VButton, VSlidingBlockSlotUIFC, VCardAddMarket, VShopsTable },
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

<style lang="scss"></style>
