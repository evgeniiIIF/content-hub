<template>
  <div class="table">
    <div class="container">
      <div class="table__head head-table">
        <ul class="head-table__list row-table">
          <li class="head-teble__item--empty"></li>
          <li
            class="head-table__item"
            v-for="name in headCategories"
            :key="name"
          >
            <span class="head-table__item-name">{{ name }}</span>
            <span
              v-if="name === 'Имя магазина'"
              class="head-table__item-icon"
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
                  d="M9.41078 3.57709C9.73622 3.25165 10.2639 3.25165 10.5893 3.57709L13.9226 6.91042C14.2481 7.23586 14.2481 7.76349 13.9226 8.08893C13.5972 8.41437 13.0696 8.41437 12.7441 8.08893L10 5.34485L7.25596 8.08893C6.93053 8.41437 6.40289 8.41437 6.07745 8.08893C5.75201 7.76349 5.75201 7.23586 6.07745 6.91042L9.41078 3.57709ZM6.07745 11.9104C6.40289 11.585 6.93053 11.585 7.25596 11.9104L10 14.6545L12.7441 11.9104C13.0696 11.585 13.5972 11.585 13.9226 11.9104C14.2481 12.2359 14.2481 12.7635 13.9226 13.0889L10.5893 16.4223C10.433 16.5785 10.2211 16.6663 10 16.6663C9.77903 16.6663 9.56707 16.5785 9.41078 16.4223L6.07745 13.0889C5.75201 12.7635 5.75201 12.2359 6.07745 11.9104Z"
                  fill="#7E8D94"
                />
              </svg>
            </span>
            <span
              v-if="name === 'Принадлежность к МП'"
              class="head-table__item-icon"
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
                  d="M6.66659 3.33301C7.12682 3.33301 7.49992 3.7061 7.49992 4.16634L7.49992 13.8212L8.57733 12.7438C8.90277 12.4183 9.4304 12.4183 9.75584 12.7438C10.0813 13.0692 10.0813 13.5968 9.75584 13.9223L7.25584 16.4223C7.09956 16.5785 6.8876 16.6663 6.66658 16.6663C6.44557 16.6663 6.23361 16.5785 6.07733 16.4223L3.57733 13.9223C3.25189 13.5968 3.25189 13.0692 3.57733 12.7438C3.90277 12.4183 4.4304 12.4183 4.75584 12.7438L5.83325 13.8212L5.83325 4.16634C5.83325 3.7061 6.20635 3.33301 6.66659 3.33301ZM12.744 3.57709C13.0694 3.25165 13.5971 3.25165 13.9225 3.57709L16.4225 6.07709C16.7479 6.40252 16.7479 6.93016 16.4225 7.2556C16.0971 7.58103 15.5694 7.58103 15.244 7.2556L14.1666 6.17819V15.833C14.1666 16.2932 13.7935 16.6663 13.3333 16.6663C12.873 16.6663 12.4999 16.2932 12.4999 15.833V6.17819L11.4225 7.2556C11.0971 7.58103 10.5694 7.58103 10.244 7.2556C9.91856 6.93016 9.91856 6.40252 10.244 6.07709L12.744 3.57709Z"
                  fill="#7E8D94"
                />
              </svg>
            </span>
          </li>
          <!-- <li class="head-table__buttons">
          <VDropdovnSlots>
            <template #button>
              <button
                class="head-table__button"
                type="button"
              >
                <img
                  src="@/assets/img/static/decorative-icon/Settings_Future_20px.svg"
                  alt=""
                />
              </button>
            </template>
            <template #menu>
              <VCheckboxObjList
                :items="headCategories.slice(1)"
                :isChecked="headCategories.slice(1)"
                @onChange="setShowHideNthChildRowTable($event)"
              />
            </template>
          </VDropdovnSlots>
        </li> -->
        </ul>
      </div>
      <div class="table__body js-dropdown-menu--root">
        <VRecursiveList :items="nomenclatureItems">
          <template #slot1="{ itemL1, itemNomenclatureL1 = itemL1, indexL1, itemNomenclatureIndexL1 = indexL1 }">
            <div class="item-nomenclature row-table">
              <div class="item-nomenclature__checkbox">
                <VCheckboxObj
                  @onChange="setSelectedNomenclatureItems($event, itemNomenclatureL1)"
                  :isChecked="Boolean(selectedNomenclatureItems[itemNomenclatureL1.id])"
                />
              </div>
              <div class="item-nomenclature__brand">{{ itemNomenclatureL1.brand_name }}</div>
              <div class="item-nomenclature__article">{{ itemNomenclatureL1.article }}</div>
              <div class="item-nomenclature__name">{{ itemNomenclatureL1.name }}</div>
              <div class="item-nomenclature__warehouse">warehouse</div>
              <!-- <div
                class="item-nomenclature__buttons"
                @click.stop
              >
                <div class="item-nomenclature__button--more">
                  <VDropdovnSlots
                    ref="dropdown"
                    @click="closeOwnDropdown($event)"
                  >
                    <template #button>
                      <button
                        class="button"
                        type="button"
                      >
                        <img
                          src="@/assets/img/static/buttons-icon/More_Vertical_20px.svg"
                          alt="icon"
                        />
                      </button>
                    </template>
                    <template #menu>
                      <ul class="list">
                        <li class="list__item">
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
                                  d="M12.1548 3.33288C12.8057 2.68201 13.861 2.68201 14.5118 3.33288L16.6667 5.4877C17.3175 6.13858 17.3175 7.19385 16.6667 7.84473L13.9228 10.5886C13.9227 10.5887 13.9226 10.5887 13.9226 10.5888C13.9225 10.5889 13.9225 10.5889 13.9224 10.589L7.25592 17.2555C7.09964 17.4118 6.88768 17.4995 6.66667 17.4995H3.33333C2.8731 17.4995 2.5 17.1265 2.5 16.6662V13.3329C2.5 13.1119 2.5878 12.8999 2.74408 12.7436L9.4103 6.0774C9.41045 6.07725 9.4106 6.07711 9.41074 6.07696C9.41089 6.07681 9.41104 6.07666 9.41119 6.07652L12.1548 3.33288ZM10 7.84473L4.16667 13.6781V15.8329H6.32149L12.1548 9.99955L10 7.84473ZM13.3333 8.82104L11.1785 6.66621L13.3333 4.51139L15.4882 6.66622L13.3333 8.82104Z"
                                  fill="#0077FF"
                                />
                              </svg>
                            </span>
                            <span class="button__text">Редактировать магазин</span>
                          </VButton>
                        </li>
                        <li class="list__item">
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
                                  d="M5.83333 3.33366C5.83333 2.41318 6.57953 1.66699 7.5 1.66699H12.5C13.4205 1.66699 14.1667 2.41318 14.1667 3.33366V4.16699H16.6667C17.1269 4.16699 17.5 4.54009 17.5 5.00033C17.5 5.46056 17.1269 5.83366 16.6667 5.83366H15.8333V16.667C15.8333 17.5875 15.0871 18.3337 14.1667 18.3337H5.83333C4.91286 18.3337 4.16667 17.5875 4.16667 16.667V5.83366H3.33333C2.8731 5.83366 2.5 5.46056 2.5 5.00033C2.5 4.54009 2.8731 4.16699 3.33333 4.16699H5.83333V3.33366ZM7.5 4.16699H12.5V3.33366H7.5V4.16699ZM5.83333 5.83366V16.667H14.1667V5.83366H5.83333ZM8.33333 7.50033C8.79357 7.50033 9.16667 7.87342 9.16667 8.33366V14.167C9.16667 14.6272 8.79357 15.0003 8.33333 15.0003C7.8731 15.0003 7.5 14.6272 7.5 14.167V8.33366C7.5 7.87342 7.8731 7.50033 8.33333 7.50033ZM11.6667 7.50033C12.1269 7.50033 12.5 7.87342 12.5 8.33366V14.167C12.5 14.6272 12.1269 15.0003 11.6667 15.0003C11.2064 15.0003 10.8333 14.6272 10.8333 14.167V8.33366C10.8333 7.87342 11.2064 7.50033 11.6667 7.50033Z"
                                  fill="#F2480D"
                                />
                              </svg>
                            </span>
                            <span class="button__text">Удалить</span>
                          </VButton>
                        </li>
                      </ul>
                    </template>
                  </VDropdovnSlots>
                </div>
              </div> -->
            </div>
          </template>
        </VRecursiveList>
      </div>
    </div>
    <!-- <VSlidingBlockSlotUIFC
      :isOpenSlidingBlock="isOpenSlidingBlock"
      :element="$refs.cardAddCategory"
      @onCloseSlidingBlock="isOpenSlidingBlock = false"
    >
      <VCardAddNestedMarket
        @onCloseSlidingBlock="isOpenSlidingBlock = false"
        :parentItemData="parentItemData"
      />
      <VCardInfoCategory
        v-if="showVCardInfoCategory"
        @onCloseSlidingBlock="isOpenSlidingBlock = false"
        :parentItemData="parentItemData"
      />
    </VSlidingBlockSlotUIFC> -->
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  import mixDropdownMenuFn from '@/mixins/mixDropdownMenuFn';

  import VDropdovnSlots from '@/components/UI/VDropdownSlots.vue';
  import VSlidingBlockSlotUIFC from '../UI-FC/VSlidingBlockSlotUIFC.vue';
  import VRecursiveList from '@/components/UI-FC/VRecursiveList.vue';
  import VCheckboxList from '../UI/VCheckboxList.vue';
  import VSelect from '../UI/VSelect.vue';
  import VInput from '../UI/VInput.vue';
  import VButton from '../UI/VButton.vue';
  import VCheckboxObj from '../UI/VCheckboxObj.vue';

  import VCardAddNestedMarket from '../cards/VCardAddNestedMarket.vue';
  import VCardInfoCategory from '../cards/VCardInfoCategory.vue';
  import VItemCategotyDropdownList from './VItemCategotyDropdownList.vue';

  export default {
    name: 'VCategoriesTable',
    mixins: [mixDropdownMenuFn],
    components: { VDropdovnSlots, VSlidingBlockSlotUIFC, VRecursiveList, VCardAddNestedMarket, VCardInfoCategory, VItemCategotyDropdownList, VCheckboxObj, VSelect, VInput, VButton },
    props: {
      selectedNomenclatureItems: {
        type: Object,
      },

      paginationNomenclatureItemsValue: {
        type: String,
      },
    },
    data() {
      return {
        // selectedNomenclatureItems: [],

        headCategories: ['Бренд', 'Артикул', 'Наименование', 'Склад'],

        parentItemData: {
          names: [],
          id: null,
        },

        currentElement: {
          dropdownItemMarket: null,
        },
      };
    },

    computed: {
      ...mapGetters('nomenclatureItems', {
        nomenclatureItems: 'items',
      }),
    },

    methods: {
      ...mapActions('nomenclatureItems', ['GET_ITEMS_NOMENCLATURE']),

      setSelectedNomenclatureItems(isChecked, itemNomenclatureL1) {
        // if (isChecked === true) {
        //   this.selectedNomenclatureItems[itemNomenclatureL1.id] = itemNomenclatureL1;
        // } else {
        //   delete this.selectedNomenclatureItems[itemNomenclatureL1.id];
        // }
        // console.log(this.selectedNomenclatureItems.length, this.selectedNomenclatureItems);
        this.$emit('onSetSelectedNomenclatureItems', {
          isChecked,
          itemNomenclatureL1,
        });
      },

      closeOwnDropdown(e) {
        // const currentItemCategoryDropdownSlots = this.$refs[`VDropdovnSlots(index-${indexL1}${indexL2 !== null ? '>' + indexL2 : ''}${indexL3 !== null ? '>' + indexL3 : ''})`];
        //   if (this.currentSelect) {
        //     this.currentSelect.menuIsOpen = false;
        //   }
        //   if (currentItemCategoryDropdownSlots.menuIsOpen) {
        //     currentItemCategoryDropdownSlots.menuIsOpen = false;
        //     document.removeEventListener('click', currentItemCategoryDropdownSlots.closeMenu, true);
        //   }
        console.log(e);
      },
    },

    async mounted() {
      const meta = {
        paginationNomenclatureItemsValue: this.paginationNomenclatureItemsValue,
      };
      await this.GET_ITEMS_NOMENCLATURE(meta);
      this.mixDropdownMenuFn();
      // await this.GET_ITEMS_SELECT_OZON();
      // console.log(this.paginationNomenclatureItemsValue);
      // console.log(this.nomenclatureItems);
    },
  };
</script>

<style lang="scss">
  $offsetSubmenu: 12px;

  .nomenclature .row-table {
    display: flex;
    align-items: center;

    @include mr(24px);

    & > *:nth-child(1) {
      // width: 24px;
      // width: 1.3%;
      flex: 0 1 24px;
    }
    & > *:nth-child(2) {
      // width: 320px;
      // width: 15.0212766%;
      flex: 0 1 240px;
    }
    & > *:nth-child(3) {
      // width: 260px;
      // width: 14%;
      flex: 0 1 160px;
    }
    & > *:nth-child(4) {
      // width: 260px;
      // width: 14%;
      flex: 0 1 560px;
    }
    & > *:nth-child(5) {
      // width: 260px;
      // width: 14%;
      // flex: 0 0 auto;
      // margin-left: auto;
      flex: 0 1 180px;
    }
  }
  .head-table {
    &__list {
    }

    &__item {
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px; /* 166.667% */
      color: var(--black, #292929);
    }

    &__item-name {
    }

    &__item-icon {
      margin-left: 12px;
      display: flex;
      align-items: center;
    }
  }

  .item-nomenclature {
    padding: 16px;
    background: #fff;
    border-bottom: 1px solid #ebedf1;

    &__checkbox {
    }

    &__brand {
      /* Body_S */
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      color: var(--black, #292929);
    }

    &__article {
      /* Body_S */
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      color: var(--black, #292929);
    }

    &__name {
      /* Body_S */
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      color: var(--black, #292929);
    }

    &__warehouse {
      /* Body_S */
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      color: var(--black, #292929);
    }
  }
</style>
