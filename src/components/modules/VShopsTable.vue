<template>
  <div class="table">
    <div class="container">
      <div class="table__head head-table">
        <ul class="head-table__list row-table">
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
              <VCheckboxList
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
        <VRecursiveList :items="marketsItems">
          <template #slot1="{ itemL1, itemMarketL1 = itemL1, indexL1, itemMarketIndexL1 = indexL1 }">
            <div class="item-shops row-table">
              <div class="item-shops__name">{{ itemMarketL1.name }}</div>
              <div class="item-shops__warehouse">-</div>
              <div class="item-shops__status">-</div>
              <div class="item-shops__belonging">{{ itemMarketL1.marketplace.name }}</div>
              <div
                class="item-shops__buttons"
                @click.stop
              >
                <div class="item-shops__button--more">
                  <VDropdovnSlots>
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
                      <VItemCategotyDropdownList @showSlidingBlock="showSlidingBlock($event, itemCategoryIndexL1)" />
                    </template>
                  </VDropdovnSlots>
                </div>
              </div>
            </div>
          </template>
        </VRecursiveList>
      </div>
    </div>
    <VSlidingBlockSlotUIFC
      :isOpenSlidingBlock="isOpenSlidingBlock"
      :element="$refs.cardAddCategory"
      @onCloseSlidingBlock="isOpenSlidingBlock = false"
    >
      <VCardAddNestedMarket
        @onCloseSlidingBlock="isOpenSlidingBlock = false"
        :parentItemData="parentItemData"
      />
      <!-- <VCardInfoCategory
        v-if="showVCardInfoCategory"
        @onCloseSlidingBlock="isOpenSlidingBlock = false"
        :parentItemData="parentItemData"
      /> -->
    </VSlidingBlockSlotUIFC>
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

  import VCardAddNestedMarket from '../cards/VCardAddNestedMarket.vue';
  import VCardInfoCategory from '../cards/VCardInfoCategory.vue';
  import VItemCategotyDropdownList from './VItemCategotyDropdownList.vue';

  export default {
    name: 'VCategoriesTable',
    mixins: [mixDropdownMenuFn],
    components: { VDropdovnSlots, VSlidingBlockSlotUIFC, VRecursiveList, VCardAddNestedMarket, VCardInfoCategory, VItemCategotyDropdownList, VCheckboxList, VSelect, VInput },

    data() {
      return {
        headCategories: ['Имя магазина', 'Подключенные склады', 'Статусы КТ', 'Принадлежность к МП'],

        isOpenSlidingBlock: false,
        // setShowHideNthChildRowTable
        prevNthChildren: [],
        // \setShowHideNthChildRowTable

        // <VCardAddNestedMarket> && <VCardAddInfoCategory>
        parentItemData: {
          names: [],
          id: null,
        },
        // </VCardAddNestedMarket> && </VCardAddInfoCategory>

        // <itemCategorySelect>
        optsTemplateItemCategoryInputName: {
          value: '',
          type: 'text',
          name: 'opts.name',
          placeholder: 'opts.placeholder',
        },
        // <\ itemCategorySelect>

        // <itemCategorySelect>
        currentSelect: null,
        selectNameAll: null,

        optsTemplateItemCategorySelect: {
          // value: '-',
          type: 'text',
          name: 'opts.name',
          placeholder: 'opts.placeholder',
          readonly: true,
          icon: true,
        },

        filterValueSelect: '',
      };
      // <\ itemCategorySelect>
    },

    computed: {
      ...mapGetters('marketsItems', {
        marketsItems: 'items',
      }),
      ...mapGetters('categoriesOzon', {
        ozonSelectItems: 'items',
      }),
      ...mapGetters('categoriesAli', {
        AliSelectItems: 'items',
      }),
      ...mapGetters('updateCategoryName', {
        itemCategoryName_PENDING: 'pending',
      }),

      filteredSelectItemsOzon() {
        if (this.filterValueSelect) {
          return this.filterRecursively(this.ozonSelectItems, this.filterValueSelect);
        } else {
          return this.ozonSelectItems;
        }
      },
      filteredSelectItemsAli() {
        if (this.filterValueSelect) {
          return this.filterRecursively(this.AliSelectItems, this.filterValueSelect);
        } else {
          return this.AliSelectItems;
        }
      },
    },

    methods: {
      ...mapActions('marketsItems', ['GET_ITEMS_MARKETS']),
      ...mapActions('categoriesOzon', ['GET_ITEMS_SELECT_OZON']),
      ...mapActions('categoriesAli', ['GET_ITEMS_SELECT_ALI']),
      ...mapActions('updateCategoryName', ['UPDATE_CATEGORY_NAME', 'RESET_PENDING']),
      ...mapActions('selectMarketplaceCategiry', ['SELECT_MARKETPLACE_CATEGORY', 'RESET_SUCCESS', 'SET_SUCCESS', 'RESET_MESSAGE']),
      ...mapActions('deleteCategory', ['DELETE_CATEGORY']),

      async deleteCategory(e, itemCategory) {
        // console.log('DELETE_CATEGORY', itemCategory);
        this.DELETE_CATEGORY(itemCategory);
      },

      async onUpdateItemCategoryName(e, item) {
        const data = {
          name: e.target.value,
          id: item.id,
        };
        await this.UPDATE_CATEGORY_NAME(data);
        await this.GET_ITEMS_CATEGORIES();
        this.RESET_PENDING();
      },

      filterRecursively(obj, filterValue) {
        const copyObj = JSON.parse(JSON.stringify(obj));
        // console.log(copyObj);

        const filterFunc = (copyObj, filterValue) => {
          if (filterValue) {
            return copyObj.filter((item) => {
              const corect =
                item.name.toLowerCase().startsWith(filterValue.toLowerCase()) ||
                (item.children &&
                  item.children.some((childItem) => {
                    return childItem.name.toLowerCase().startsWith(filterValue.toLowerCase());
                  }));
              if (item.children_count > 0) {
                item.children = filterFunc(item.children, filterValue);
              }

              if (corect) {
                return true;
              }
            });
          } else {
            return obj;
          }
        };

        return filterFunc(copyObj, filterValue);
      },

      onInputFilter(e) {
        this.filterValueSelect = e.target.value;

        this.selectNameAll = e.target.closest('.select__menu').querySelectorAll('.select-list__name');
        this.selectNameAll = Array.from(this.selectNameAll).filter((item) => item.innerText.toLowerCase().startsWith(this.filterValueSelect.toLowerCase()));

        this.highlightMatching(this.selectNameAll, this.filterValueSelect);
      },

      onBackspakeFilterSelect(e, selectNameAll, filterValueSelect) {
        if (e.keyCode === 8) {
          this.filterValueSelect = e.target.value.slice(0, -1);
          this.highlightMatching(selectNameAll, filterValueSelect);
        }
      },

      highlightMatching(arr, filterValue) {
        arr.forEach((item) => {
          if (filterValue) {
            item.style.background = 'transparent';
            item.style.background = 'yellow';
          } else {
            item.style.background = 'transparent';
          }
        });
      },

      async loadOzonSelectItems(mapketplaceCategoryName, itemCategoryIndexL1, itemCategoryIndexL2, itemCategoryIndexL3 = '') {
        if (itemCategoryIndexL3 !== '') {
          this.currentSelect = this.$refs[`${mapketplaceCategoryName}-index(${itemCategoryIndexL1}>${itemCategoryIndexL2}>${itemCategoryIndexL3})`];
        } else {
          this.currentSelect = this.$refs[`${mapketplaceCategoryName}-index(${itemCategoryIndexL1}>${itemCategoryIndexL2})`];
        }
        console.log(mapketplaceCategoryName, itemCategoryIndexL1, itemCategoryIndexL2, itemCategoryIndexL3);
        if (this.ozonSelectItems.length === 0) {
          await this.GET_ITEMS_SELECT_OZON();
        }
      },

      async loadAliSelectItems(mapketplaceCategoryName, itemCategoryIndexL1, itemCategoryIndexL2, itemCategoryIndexL3 = '') {
        if (itemCategoryIndexL3 !== '') {
          this.currentSelect = this.$refs[`${mapketplaceCategoryName}-index(${itemCategoryIndexL1}>${itemCategoryIndexL2}>${itemCategoryIndexL3})`];
        } else {
          this.currentSelect = this.$refs[`${mapketplaceCategoryName}-index(${itemCategoryIndexL1}>${itemCategoryIndexL2})`];
        }
        if (this.AliSelectItems.length === 0) {
          await this.GET_ITEMS_SELECT_ALI();
          // console.log(this.AliSelectItems);
        }
      },

      async onSelectMarketplaceCategory(mapketplaceCategoryName, itemMarketplace, itemCategory) {
        console.log(this.currentSelect);

        const input = this.currentSelect.$el.querySelector('input');
        input.value = itemMarketplace.name;
        input.title = itemMarketplace.name;
        this.currentSelect.menuIsOpen = false;

        // reset filter
        this.currentSelect.$el.querySelector('.select-list__filter-input').value = '';
        this.filterValueSelect = '';
        if (this.selectNameAll) {
          this.highlightMatching(this.selectNameAll, this.filterValueSelect);
        }

        // send data
        const data = {
          localCategory_id: itemCategory.id,
          marketplace_id: itemMarketplace.id,
          mapketplaceCategoryName,
        };
        await this.SELECT_MARKETPLACE_CATEGORY(data);
        this.SET_SUCCESS();
        setTimeout(() => {
          this.RESET_SUCCESS();
          this.RESET_MESSAGE();
        }, 3000);
        await this.GET_ITEMS_CATEGORIES();

        // console.log(data);
      },

      setShowHideNthChildRowTable(isChecked) {
        let hidenNthChieldIndexs = [];

        if (this.prevNthChildren.length > 0) {
          this.prevNthChildren.forEach((nthChild) => {
            nthChild.style.display = 'block';
          });
        }

        const arr = this.headCategories.filter((item, index) => {
          if (index !== 0) {
            if (isChecked.includes(item)) {
              return true;
            } else {
              hidenNthChieldIndexs.push(index + 2);
              return false;
            }
          }
        });

        hidenNthChieldIndexs.forEach((indexItem) => {
          const rowsTableAll = document.querySelectorAll(`.row-table`);
          rowsTableAll.forEach((rowTable) => {
            if (rowTable.children.length > 3) {
              const nthChild = rowTable.querySelector(`.row-table > *:nth-child(${indexItem})`);
              this.prevNthChildren.push(nthChild);
              nthChild.style.display = 'none';
            }
          });
        });
      },

      closeOwnDropdown(e, indexL1, indexL2 = null, indexL3 = null) {
        const currentItemCategoryDropdownSlots = this.$refs[`VDropdovnSlots(index-${indexL1}${indexL2 !== null ? '>' + indexL2 : ''}${indexL3 !== null ? '>' + indexL3 : ''})`];
        if (this.currentSelect) {
          this.currentSelect.menuIsOpen = false;
        }
        if (currentItemCategoryDropdownSlots.menuIsOpen) {
          currentItemCategoryDropdownSlots.menuIsOpen = false;
          document.removeEventListener('click', currentItemCategoryDropdownSlots.closeMenu, true);
        }
      },

      showSlidingBlock(e, itemL1 = null, itemL2 = null) {
        const textButton = e.currentTarget.querySelector('.button__text').textContent;
        this.parentItemData.names = [];

        if (itemL1 !== null) {
          this.parentItemData.names.push(itemL1.name);
        }
        if (itemL2 !== null) {
          this.parentItemData.names.push(itemL2.name);
        }

        this.showVCardAddNestedMarket = textButton === 'Добавить субкатегорию';
        this.showVCardInfoCategory = textButton === 'Информация';

        this.isOpenSlidingBlock = true;
      },
    },

    watch: {
      currentSelect(newValue, oldValue) {
        if (oldValue !== null) {
          oldValue.$el.querySelector('.select-list__filter-input').value = '';
        }
        this.filterValueSelect = '';
        console.log(oldValue, newValue);
      },
    },

    async mounted() {
      await this.GET_ITEMS_MARKETS();
      this.mixDropdownMenuFn();
      // await this.GET_ITEMS_SELECT_OZON();
    },
  };
</script>

<style lang="scss">
  $offsetSubmenu: 12px;

  .shops .row-table {
    display: flex;
    align-items: center;

    @include mr(24px);

    & > *:nth-child(1) {
      // width: 24px;
      // width: 1.3%;
      flex: 0 1 320px;
    }
    & > *:nth-child(2) {
      // width: 320px;
      // width: 15.0212766%;
      flex: 0 1 540px;
    }
    & > *:nth-child(3) {
      // width: 260px;
      // width: 14%;
      flex: 0 1 500px;
    }
    & > *:nth-child(4) {
      // width: 260px;
      // width: 14%;
      flex: 0 1 240px;
    }
    & > *:nth-child(5) {
      // width: 260px;
      // width: 14%;
      flex: 0 0 auto;
      margin-left: auto;
    }
  }
  .head-table {
    &__list {
    }

    &__item {
    }

    &__item-name {
    }

    &__item-icon {
      margin-left: 12px;
      display: flex;
      align-items: center;
    }
  }

  .item-shops {
    padding: 18px 16px;

    &:hover {
      background: #f4f6f7;

      .item-shops__button--more {
        opacity: 1;
      }
    }

    &__name {
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      color: var(--blue, #07f);
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    &__warehouse {
    }

    &__status {
    }

    &__belonging {
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      color: var(--black, #292929);
    }

    &__buttons {
    }

    &__button--more {
      opacity: 0;

      .dropdown__button {
        padding: 0;
      }

      .dropdown__menu {
        padding: 0 48px 48px;
        width: auto;
        min-height: auto;
        left: auto;
        top: 100%;
        right: 0;
        background: transparent;
        box-shadow: none;

        .button {
          display: flex;
          justify-content: start;
          align-items: center;
          width: 100%;
          height: auto;
          padding: 16px;
          border-radius: 0;
          background: transparent;
          border-color: transparent;

          &:hover {
            background: rgba(0, 0, 0, 0.03);
          }
          &__image {
            margin-right: 8px;
          }
          &__text {
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 154%;
            color: $dark-color;
          }
        }
      }

      .list {
        background: #fff;
        box-shadow: 0px 8px 24px -4px rgba(54, 54, 54, 0.1);
        &__item {
          white-space: nowrap;
          &:not(:last-child) {
            border-bottom: 1px solid $neutral-white1;
          }
        }
        &__link {
          display: flex;
          align-items: center;
          padding: 16px;
          &:hover {
            cursor: pointer;
            background: $neutral-white1;
          }
        }

        &__image {
          margin-right: 8px;
        }

        &__text {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-size: 13px;
          line-height: 154%;
          color: $dark-color;
        }
      }

      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        padding: 0;
        border-radius: 50%;
        background: transparent;
        border-color: transparent;
        &:hover {
          background: rgba(0, 0, 0, 0.03);
        }
        &__image {
          margin-right: 0;
        }
      }
    }
  }
</style>
