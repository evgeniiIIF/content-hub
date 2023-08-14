<template>
  <section class="nomenclature">
    <div
      class="nomenclature__associate associate-nomenclature"
      v-if="selectedNomenclatureItemsLength"
    >
      <div class="container">
        <div class="associate-nomenclature__body">
          <div class="associate-nomenclature__checkbox">
            <VCheckboxObj
              :text="`Выбрано: ${selectedNomenclatureItemsLength}`"
              :isChecked="Boolean(selectedNomenclatureItemsLength)"
              @onChange="resetSelectedNomenclatureItems($event)"
            />
          </div>
          <div class="associate-nomenclature__select">
            <VSelect
              :opts="{
                select: true,
                icon: true,
                value: '',
                type: 'text',
                name: 'categories',
                placeholder: 'Выберите категорию из списка',
                items: {},
              }"
            />
          </div>
          <div class="associate-nomenclature__button">
            <VButton>
              <span class="button__image">
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
                    d="M14.7139 5.28562C13.7376 4.30931 12.1546 4.30931 11.1783 5.28562L9.99982 6.46413C9.67438 6.78957 9.14674 6.78957 8.82131 6.46413C8.49587 6.13869 8.49587 5.61106 8.82131 5.28562L9.99982 4.10711L10.5891 4.69636L9.99982 4.10711C11.627 2.47992 14.2652 2.47992 15.8924 4.10711C17.5196 5.73429 17.5196 8.37248 15.8924 9.99966L14.7139 11.1782C14.3884 11.5036 13.8608 11.5036 13.5354 11.1782C13.2099 10.8527 13.2099 10.3251 13.5354 9.99966L14.7139 8.82115C15.6902 7.84484 15.6902 6.26193 14.7139 5.28562ZM12.9463 7.05373C13.2717 7.37917 13.2717 7.9068 12.9463 8.23224L8.23224 12.9463C7.9068 13.2717 7.37917 13.2717 7.05373 12.9463C6.72829 12.6208 6.72829 12.0932 7.05373 11.7678L11.7678 7.05373C12.0932 6.72829 12.6208 6.72829 12.9463 7.05373ZM6.46413 8.82131C6.78957 9.14674 6.78957 9.67438 6.46413 9.99982L5.28562 11.1783C4.30931 12.1546 4.30931 13.7376 5.28562 14.7139C6.26193 15.6902 7.84484 15.6902 8.82115 14.7139L9.99966 13.5354C10.3251 13.2099 10.8527 13.2099 11.1782 13.5354C11.5036 13.8608 11.5036 14.3884 11.1782 14.7139L9.99966 15.8924C8.37248 17.5196 5.73429 17.5196 4.10711 15.8924C2.47992 14.2652 2.47992 11.627 4.10711 9.99982L4.69636 10.5891L4.10711 9.99982L5.28562 8.82131C5.61106 8.49587 6.13869 8.49587 6.46413 8.82131Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span class="button__text">Связать</span>
            </VButton>
          </div>
        </div>
      </div>
    </div>
    <div class="nomenclature__top">
      <div class="container">
        <div class="nomenclature__top-body top">
          <div class="top__row">
            <h2 class="top__title">
              <div class="top__title-text">Номенклатура</div>
              <div class="top__title-number-of-found">32 348</div>
            </h2>
            <div class="top__actions">
              <!-- <div class="top__input">
                <VInput :opts="inputOpts">
                  <img
                    src="@/assets/img/static/search/Search_Magnifying_Glass_20px.svg"
                    alt="icon"
                  />
                </VInput>
              </div> -->
              <div class="top__button">
                <VButton>
                  <span class="button__image">
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
                        d="M10.8319 1.66699L5.00016 1.66699C4.07969 1.66699 3.3335 2.41319 3.3335 3.33366L3.3335 16.667C3.3335 17.5875 4.07969 18.3337 5.00016 18.3337H15.0002C15.9206 18.3337 16.6668 17.5875 16.6668 16.667V7.32688C16.6668 6.90702 16.5084 6.50262 16.2231 6.19454L12.5257 2.20131C12.2102 1.86065 11.767 1.66699 11.3027 1.66699L10.8351 1.66699C10.8345 1.66699 10.834 1.66699 10.8335 1.66699C10.833 1.66699 10.8325 1.66699 10.8319 1.66699ZM14.3892 6.66699L11.6668 6.66699V3.72688L14.3892 6.66699ZM15.0002 8.33366L15.0002 16.667H5.00016L5.00016 3.33366L10.0002 3.33366V6.66699C10.0002 7.58747 10.7464 8.33366 11.6668 8.33366L15.0002 8.33366ZM9.53791 9.30695C9.81783 9.12034 10.1825 9.12034 10.4624 9.30695L12.9624 10.9736C13.3454 11.2289 13.4488 11.7463 13.1935 12.1292C12.9382 12.5122 12.4209 12.6157 12.0379 12.3604L10.8335 11.5574V15.0003C10.8335 15.4606 10.4604 15.8337 10.0002 15.8337C9.53993 15.8337 9.16683 15.4606 9.16683 15.0003V11.5574L7.96241 12.3604C7.57947 12.6157 7.06208 12.5122 6.80679 12.1292C6.5515 11.7463 6.65497 11.2289 7.03791 10.9736L9.53791 9.30695Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <span class="button__text">Загрузить CSV</span>
                </VButton>
              </div>
            </div>
          </div>
          <div class="top__filters filters">
            <div class="filters__control">
              <div class="filters__fields">
                <div class="filters__search">
                  <VInput
                    :opts="{
                      type: 'text',
                      name: 'filter-search',
                      placeholder: 'Поиск по наименованию, артикулу',
                      icon: true,
                    }"
                    @onInput="onInputSearch($event)"
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
                        d="M11.9459 13.1237C11.05 13.7793 9.9453 14.1663 8.75016 14.1663C5.75862 14.1663 3.3335 11.7412 3.3335 8.74967C3.3335 5.75813 5.75862 3.33301 8.75016 3.33301C11.7417 3.33301 14.1668 5.75813 14.1668 8.74967C14.1668 9.94471 13.7798 11.0494 13.1243 11.9451L16.4153 15.2361C16.7458 15.5666 16.7499 16.0983 16.4245 16.4238C16.099 16.7492 15.5673 16.7451 15.2368 16.4146L11.9459 13.1237ZM12.5002 8.74967C12.5002 10.8207 10.8212 12.4997 8.75016 12.4997C6.67909 12.4997 5.00016 10.8207 5.00016 8.74967C5.00016 6.67861 6.67909 4.99967 8.75016 4.99967C10.8212 4.99967 12.5002 6.67861 12.5002 8.74967Z"
                        fill="#7E8D94"
                      />
                    </svg>
                  </VInput>
                </div>
                <div class="filters__brand">
                  <!-- <VSelect
                    :opts="{
                      type: 'text',
                      name: 'filter-search',
                      placeholder: 'Бренд',
                      icon: true,
                    }"
                  >
                    <template #menu>
                      <ul class="list">
                        <li
                          class="list__item"
                          v-for="brand in currentBrandsItems"
                        >
                          {{ brand }}
                        </li>
                      </ul>
                    </template>
                  </VSelect> -->
                  <VMultiSelect
                    :opts="{
                      type: 'text',
                      name: 'filter-search',
                      placeholder: 'Бренд',
                      icon: true,
                    }"
                    :selectedItems="false"
                    @onRemoveSelectedItem="removeBrandSelectedItems($event)"
                  >
                    <template #menu>
                      <VCheckboxListObj
                        :items="currentBrandsItemsArray"
                        :currentIsCheckedItems="selectedBrandItems"
                        @onChange="setBrandSelectedItems($event)"
                      />
                    </template>
                  </VMultiSelect>
                </div>
                <div class="filters__warehouse">
                  <VSelect
                    :opts="{
                      type: 'text',
                      name: 'filter-search',
                      placeholder: 'Склад',
                      icon: true,
                    }"
                  >
                    <template #menu> Склад </template>
                  </VSelect>
                </div>
                <div class="filters__checkbox">
                  <VCheckbox text="Товары с низкой ценой" />
                </div>
              </div>
              <div class="filters__buttons">
                <div class="filters__button--update"><VButton>Обновить</VButton></div>
                <div class="filters__button--apply"><VButton>Применить</VButton></div>
              </div>
            </div>
            <div class="filters__selected selected-filters">
              <div class="selected-filters__found found-selected-filters">
                <span class="found-selected-filters__icon"
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
                      d="M11.9459 13.1237C11.05 13.7793 9.9453 14.1663 8.75016 14.1663C5.75862 14.1663 3.3335 11.7412 3.3335 8.74967C3.3335 5.75813 5.75862 3.33301 8.75016 3.33301C11.7417 3.33301 14.1668 5.75813 14.1668 8.74967C14.1668 9.94471 13.7798 11.0494 13.1243 11.9451L16.4153 15.2361C16.7458 15.5666 16.7499 16.0983 16.4245 16.4238C16.099 16.7492 15.5673 16.7451 15.2368 16.4146L11.9459 13.1237ZM12.5002 8.74967C12.5002 10.8207 10.8212 12.4997 8.75016 12.4997C6.67909 12.4997 5.00016 10.8207 5.00016 8.74967C5.00016 6.67861 6.67909 4.99967 8.75016 4.99967C10.8212 4.99967 12.5002 6.67861 12.5002 8.74967Z"
                      fill="#7E8D94"
                    />
                  </svg>
                </span>
                <p class="found-selected-filters__text">Найдено:</p>
                <div class="found-selected-filters__count">23 847</div>
              </div>
              <div class="selected-filters__tag-list">
                <!-- <VTagList
                  :items="false"
                  prefix="Бренд :"
                /> -->
                <button
                  class="selected-filters__tag-list-clear-all"
                  type="button"
                >
                  <span class="selected-filters__tag-list-clear-all-text"> Очистить всё </span>
                  <span class="selected-filters__tag-list-clear-all-icon"
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
                        d="M4.1668 1.66699C4.62703 1.66699 5.00013 2.04009 5.00013 2.50033V4.41026C5.45259 4.00554 5.95466 3.65534 6.49656 3.36903C7.73721 2.71352 9.13688 2.4192 10.5365 2.51952C11.9361 2.61985 13.2794 3.11079 14.4139 3.93655C15.5484 4.76231 16.4285 5.88977 16.9541 7.19078C17.1265 7.6175 16.9204 8.1032 16.4936 8.2756C16.0669 8.44801 15.5812 8.24185 15.4088 7.81512C15 6.80323 14.3155 5.92631 13.4331 5.28406C12.5507 4.6418 11.5059 4.25995 10.4173 4.18192C9.32874 4.10389 8.24011 4.33281 7.27515 4.84265C6.77479 5.10702 6.31809 5.44142 5.91776 5.83366H8.33346C8.7937 5.83366 9.1668 6.20675 9.1668 6.66699C9.1668 7.12723 8.7937 7.50033 8.33346 7.50033H4.1668C3.70656 7.50033 3.33346 7.12723 3.33346 6.66699V2.50033C3.33346 2.04009 3.70656 1.66699 4.1668 1.66699ZM3.50673 11.725C3.93346 11.5526 4.41915 11.7588 4.59156 12.1855C5.00039 13.1974 5.68489 14.0743 6.56727 14.7166C7.44964 15.3589 8.49449 15.7407 9.58306 15.8187C10.6716 15.8968 11.7603 15.6678 12.7252 15.158C13.2256 14.8936 13.6823 14.5592 14.0826 14.167H11.6668C11.2066 14.167 10.8335 13.7939 10.8335 13.3337C10.8335 12.8734 11.2066 12.5003 11.6668 12.5003H15.8335C16.2937 12.5003 16.6668 12.8734 16.6668 13.3337V17.5003C16.6668 17.9606 16.2937 18.3337 15.8335 18.3337C15.3732 18.3337 15.0001 17.9606 15.0001 17.5003V15.5905C14.5477 15.9952 14.0457 16.3453 13.5038 16.6316C12.2632 17.2871 10.8635 17.5815 9.4639 17.4811C8.06431 17.3808 6.72093 16.8899 5.58645 16.0641C4.45197 15.2383 3.57189 14.1109 3.04625 12.8099C2.87384 12.3832 3.08001 11.8975 3.50673 11.725Z"
                        fill="#0077FF"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <!-- <div class="top__show-hide show-hide-categories">
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
          </div> -->
        </div>
      </div>
    </div>
    <div class="markets__table">
      <VNomenclatureTable
        @onSetSelectedNomenclatureItems="onSetSelectedNomenclatureItems($event)"
        :selectedNomenclatureItems="selectedNomenclatureItems"
        :paginationNomenclatureItemsValue="paginationNomenclatureItemsValue"
      />
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
  import { mapGetters, mapActions } from 'vuex';

  import VSlidingBlockSlotUIFC from '@/components/UI-FC/VSlidingBlockSlotUIFC.vue';
  import VButton from '@/components/UI/VButton.vue';
  import VInput from '@/components/UI/VInput.vue';
  import VCardAddMarket from '@/components/cards/VCardAddMarket.vue';
  import VNomenclatureTable from '@/components/modules/VNomenclatureTable.vue';
  import VSelect from '@/components/UI/VSelect.vue';
  import VCheckbox from '@/components/UI/VCheckbox.vue';
  import VTagList from '@/components/UI/VTagList.vue';
  import VCheckboxObj from '@/components/UI/VCheckboxObj.vue';
  import VMultiSelect from '@/components/UI/VMultiSelect.vue';
  import VCheckboxListObj from '@/components/UI/VCheckboxListObj.vue';

  export default {
    name: 'VMarketsSectionView',
    components: { VInput, VButton, VSlidingBlockSlotUIFC, VCardAddMarket, VNomenclatureTable, VSelect, VCheckbox, VTagList, VCheckboxObj, VMultiSelect, VCheckboxListObj },

    props: {
      paginationNomenclatureItemsValue: {
        type: String,
      },
    },

    data() {
      return {
        // currentBrandsItem: '',
        currentBrandsItemsArray: [],
        selectedBrandItems: {},

        selectedNomenclatureItems: {},
        selectedNomenclatureItemsLength: 0,

        isOpenSlidingBlock: false,
        inputOpts: {
          icon: true,
          type: 'text',
          name: 'search',
          placeholder: 'Поиск',
        },
        tagListItems: ['ABSEL', 'BOSCH', 'VARTA', 'ABS 123', 'ABS RND 92938', 'BOSCH'],
      };
    },
    computed: {
      ...mapGetters('nomenclatureItems', {
        paginationMeta: 'getPaginationMeta',
        currentBrandsItems: 'getCurrentBrandsItems',
      }),
    },
    methods: {
      ...mapActions('nomenclatureItems', ['GET_ITEMS_NOMENCLATURE']),

      removeBrandSelectedItems(e) {
        delete this.selectedBrandItems[e.name];
        console.log(this.selectedBrandItems);
      },

      setBrandSelectedItems(e) {
        this.selectedBrandItems[e.item.name] = e.item;
        console.log(this.selectedBrandItems);
        // console.log(e);
      },

      async onInputSearch($event) {
        const meta = {
          search: $event.target.value,
          pageNumber: 1,
        };
        await this.GET_ITEMS_NOMENCLATURE(meta);
        this.$emit('updatePagination');
      },

      onSetSelectedNomenclatureItems(emitData) {
        if (emitData.isChecked === true) {
          this.selectedNomenclatureItems[emitData.itemNomenclatureL1.id] = emitData.itemNomenclatureL1;
        } else {
          delete this.selectedNomenclatureItems[emitData.itemNomenclatureL1.id];
        }
        this.selectedNomenclatureItemsLength = Object.keys(this.selectedNomenclatureItems).length;
      },

      resetSelectedNomenclatureItems($event) {
        this.selectedNomenclatureItems = {};
        this.selectedNomenclatureItemsLength = Object.keys(this.selectedNomenclatureItems).length;
      },

      nomenclatureComponentMethod() {
        console.log('nomenclatureComponent');
      },
    },
    async mounted() {
      await this.GET_ITEMS_NOMENCLATURE();
      this.currentBrandsItemsArray = Object.values(this.currentBrandsItems).map((brand) => {
        return { name: brand, id: brand };
      });
      console.log(this.currentBrandsItems);
    },
  };
</script>

<style lang="scss">
  .nomenclature {
    .checkbox {
      & input {
        position: absolute;
        z-index: -1;
        opacity: 0;

        &:checked {
          & ~ .checkbox__pseudo-flag-wrapper .checkbox__pseudo-flag {
            display: flex;
            justify-content: center;
            align-items: center;
            border-color: #0077ff;
            background-color: transparent;
            transition: all 0.3s ease 0s;

            & .checkbox__pseudo-flag-check-icon {
              display: flex;
            }
          }
        }
      }

      .checkbox__pseudo-flag-wrapper {
        padding: 4px;
      }
      .checkbox__pseudo-flag {
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .checkbox__pseudo-flag-check-icon {
        display: none;
        justify-content: center;
        align-items: center;
      }
    }
    &__top {
    }

    &__top-body {
      padding: 24px 0 16px 0;
    }
    &__associate {
    }
  }

  .top {
    &__row {
    }

    &__title {
      display: flex;
      align-items: end;
    }

    &__title-text {
      margin-right: 21px;
      /* Title_H1 */
      font-family: Inter;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 40px; /* 125% */
      letter-spacing: -0.64px;
      color: var(--black, #292929);
    }

    &__title-number-of-found {
      /* Title_H3 */
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 160% */
      color: var(--gray-2, #7e8d94);
    }

    &__actions {
    }

    &__button {
    }

    &__filters {
    }
  }

  .filters {
    &__control {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      padding: 24px;
      border-radius: 8px;
      background: #fff;
    }

    &__fields {
      display: flex;
      align-items: center;
      @include mr(24px);
    }

    &__search {
      width: 360px;
    }

    &__brand {
      width: 138px;
      // .checkbox__label {
      //   border-radius: 4px;
      //   padding: 12px 8px;
      // }
    }

    &__warehouse {
      width: 138px;
    }

    &__checkbox {
      /* Body_L */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
      color: var(--black, #292929);
    }

    &__buttons {
      display: flex;
    }

    &__button--update {
      margin-right: 16px;
      .button {
        background: transparent;
        border-color: transparent;
        color: #0077ff;
      }
    }

    &__button--apply {
    }
    &__selected {
    }
  }
  .selected-filters {
    display: flex;
    align-items: center;

    &__found {
      margin-right: 40px;
    }

    &__tag-list {
      display: flex;
      .tag-list {
        gap: 4px;
        margin-right: 4px;
      }
    }

    &__tag-list-clear-all {
      display: flex;
      align-items: center;
      padding: 4px 4px 4px 8px;
      border-radius: 4px;
      border: 1px solid var(--gray, #c2c9d2);
    }

    &__tag-list-clear-all-text {
      margin-right: 8px;
      /* Body_S */
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      color: var(--black, #292929);
    }

    &__tag-list-clear-all-icon {
      display: flex;
      align-items: center;
    }
  }
  .found-selected-filters {
    display: flex;
    align-items: center;

    @include mr(4px);

    &__icon {
    }

    &__text {
      /* Body_L */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
      color: var(--black, #292929);
    }

    &__count {
      /* Body_L */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
      color: var(--blue, #07f);
    }
  }

  .associate-nomenclature {
    position: fixed;
    left: 0;
    top: 68.02px;
    width: 100%;
    z-index: 1;
    box-shadow: 0px 8px 16px -4px rgba(41, 41, 41, 0.1);
    background: #fff;

    &__body {
      display: flex;
      align-items: center;
      padding: 16px 0;
    }

    &__checkbox {
      margin-right: 80px;
      .checkbox {
        &__text {
          display: inline-block;
          min-width: 75px;
        }
      }
    }

    &__select {
      margin-right: 24px;
      width: 360px;
    }

    &__button {
      .button {
        &__image {
        }

        &__text {
        }
      }
    }
  }
</style>
