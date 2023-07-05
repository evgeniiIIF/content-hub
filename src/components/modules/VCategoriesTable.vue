<template>
  <div class="table">
    <div class="table__head head-table">
      <ul class="head-table__list row-table">
        <li class="head-table__item"></li>
        <li
          class="head-table__item"
          v-for="name in headCategories"
          :key="name"
        >
          {{ name }}
        </li>
        <li class="head-table__buttons">
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
                :items="headCategories"
                @onChange="onChange"
              />
            </template>
          </VDropdovnSlots>
        </li>
      </ul>
    </div>
    <div class="table__body js-dropdown-menu--root">
      <VRecursiveList :items="categoriesItems">
        <template #slot1="{ itemL1, indexL1 }">
          <div
            class="item-category row-table"
            :ref="`itemCategory(index-${indexL1})`"
            :class="{ 'js-dropdown-menu__button': itemL1.children_count > 0 }"
            @mouseleave="closeOwnDropdown($event, indexL1)"
          >
            <div class="item-category__icon">
              <svg
                class="item-category__icon-plus"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8333 4.16667L4.16667 4.16667L4.16667 15.8333L15.8333 15.8333L15.8333 4.16667ZM4.16667 2.5L15.8333 2.5C16.7538 2.5 17.5 3.24619 17.5 4.16667L17.5 15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5L4.16667 17.5C3.24619 17.5 2.5 16.7538 2.5 15.8333L2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5ZM10 5.83333C10.4602 5.83333 10.8333 6.20643 10.8333 6.66667V9.16667H13.3333C13.7936 9.16667 14.1667 9.53976 14.1667 10C14.1667 10.4602 13.7936 10.8333 13.3333 10.8333H10.8333V13.3333C10.8333 13.7936 10.4602 14.1667 10 14.1667C9.53976 14.1667 9.16667 13.7936 9.16667 13.3333V10.8333H6.66667C6.20643 10.8333 5.83334 10.4602 5.83334 10C5.83334 9.53976 6.20643 9.16667 6.66667 9.16667H9.16667V6.66667C9.16667 6.20643 9.53976 5.83333 10 5.83333Z"
                  fill="#7E8D94"
                />
              </svg>
              <svg
                class="item-category__icon-minus"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8333 4.16667L4.16667 4.16667L4.16667 15.8333L15.8333 15.8333L15.8333 4.16667ZM4.16667 2.5L15.8333 2.5C16.7538 2.5 17.5 3.24619 17.5 4.16667L17.5 15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5L4.16667 17.5C3.24619 17.5 2.5 16.7538 2.5 15.8333L2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5ZM5.83334 10C5.83334 9.53976 6.20643 9.16667 6.66667 9.16667H13.3333C13.7936 9.16667 14.1667 9.53976 14.1667 10C14.1667 10.4602 13.7936 10.8333 13.3333 10.8333H6.66667C6.20643 10.8333 5.83334 10.4602 5.83334 10Z"
                  fill="#7E8D94"
                />
              </svg>
            </div>
            <div class="item-category__name">{{ itemL1.name }}</div>
            <div
              class="item-category__buttons"
              @click.stop
            >
              <div class="item-category__button--more">
                <VDropdovnSlots :ref="`VDropdovnSlots(index-${indexL1})`">
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
                    <VItemCategotyDropdownList @showSlidingBlock="showSlidingBlock($event, itemL1)" />
                  </template>
                </VDropdovnSlots>
              </div>
            </div>
          </div>
        </template>

        <template #slot2="{ itemL1, itemL2, indexL1, indexL2 }">
          <div
            class="item-category row-table"
            :ref="`itemCategory(index-${indexL1}>${indexL2})`"
            :class="{ 'js-dropdown-menu__button': itemL2.children_count > 0 }"
            :style="{ background: itemL2.children_count == 0 ? '#fff' : '' }"
            @mouseleave="closeOwnDropdown($event, indexL1, indexL2)"
          >
            <div
              class="item-category__icon"
              v-if="itemL2.children_count > 0"
            >
              <svg
                class="item-category__icon-plus"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8333 4.16667L4.16667 4.16667L4.16667 15.8333L15.8333 15.8333L15.8333 4.16667ZM4.16667 2.5L15.8333 2.5C16.7538 2.5 17.5 3.24619 17.5 4.16667L17.5 15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5L4.16667 17.5C3.24619 17.5 2.5 16.7538 2.5 15.8333L2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5ZM10 5.83333C10.4602 5.83333 10.8333 6.20643 10.8333 6.66667V9.16667H13.3333C13.7936 9.16667 14.1667 9.53976 14.1667 10C14.1667 10.4602 13.7936 10.8333 13.3333 10.8333H10.8333V13.3333C10.8333 13.7936 10.4602 14.1667 10 14.1667C9.53976 14.1667 9.16667 13.7936 9.16667 13.3333V10.8333H6.66667C6.20643 10.8333 5.83334 10.4602 5.83334 10C5.83334 9.53976 6.20643 9.16667 6.66667 9.16667H9.16667V6.66667C9.16667 6.20643 9.53976 5.83333 10 5.83333Z"
                  fill="#7E8D94"
                />
              </svg>
              <svg
                class="item-category__icon-minus"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8333 4.16667L4.16667 4.16667L4.16667 15.8333L15.8333 15.8333L15.8333 4.16667ZM4.16667 2.5L15.8333 2.5C16.7538 2.5 17.5 3.24619 17.5 4.16667L17.5 15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5L4.16667 17.5C3.24619 17.5 2.5 16.7538 2.5 15.8333L2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5ZM5.83334 10C5.83334 9.53976 6.20643 9.16667 6.66667 9.16667H13.3333C13.7936 9.16667 14.1667 9.53976 14.1667 10C14.1667 10.4602 13.7936 10.8333 13.3333 10.8333H6.66667C6.20643 10.8333 5.83334 10.4602 5.83334 10Z"
                  fill="#7E8D94"
                />
              </svg>
            </div>
            <div
              class="item-category__icon"
              v-else
            >
              <img
                src="@/assets/img/static/buttons-icon/Show_20px.svg"
                alt="dec"
              />
            </div>
            <div class="item-category__name">{{ itemL2.name }}</div>
            <template v-if="itemL2.children_count == 0">
              <div class="item-category__ozon ozon-list">
                <VSelect :opts="itemSelectOpts.ozon">
                  <template #menu>
                    <VRecursiveList :items="ozonSelectItems">
                      <template #slot1="{ itemL1, indexL1 }">
                        <div
                          class="ozon-list__name"
                          :class="itemL1.name === itemSelectOpts.ozon.value ? 'ozon-list__name--active' : ''"
                          @click.stop="itemSelectOpts.ozon.value = itemL1.name"
                        >
                          {{ itemL1.name }}
                        </div>
                      </template>
                      <template #slot2="{ itemL1, itemL2, indexL1, indexL2 }">
                        <div
                          class="ozon-list__name"
                          :class="itemL2.name === itemSelectOpts.ozon.value ? 'ozon-list__name--active' : ''"
                          @click.stop="itemSelectOpts.ozon.value = itemL2.name"
                        >
                          {{ itemL2.name }}
                        </div>
                      </template>
                      <!-- <template #slot3="{ itemL3, indexL1, indexL2, indexL3 }">
                        <div class="ozon-list__name">
                          {{ itemL3.name }}
                        </div>
                      </template> -->
                    </VRecursiveList>
                  </template>
                </VSelect>
              </div>
              <div class="item-category__aliexpress">
                <VSelect :opts="itemSelectOpts.ozon">
                  <template #menu>
                    <VRecursiveList :items="ozonSelectItems">
                      <template #slot1="{ itemL1, indexL1 }">
                        <div
                          class="ozon-list__name"
                          :class="itemL1.name === itemSelectOpts.ozon.value ? 'ozon-list__name--active' : ''"
                          @click.stop="itemSelectOpts.ozon.value = itemL1.name"
                        >
                          {{ itemL1.name }}
                        </div>
                      </template>
                      <template #slot2="{ itemL1, itemL2, indexL1, indexL2 }">
                        <div
                          class="ozon-list__name"
                          :class="itemL2.name === itemSelectOpts.ozon.value ? 'ozon-list__name--active' : ''"
                          @click.stop="itemSelectOpts.ozon.value = itemL2.name"
                        >
                          {{ itemL2.name }}
                        </div>
                      </template>
                      <!-- <template #slot3="{ itemL3, indexL1, indexL2, indexL3 }">
                        <div class="ozon-list__name">
                          {{ itemL3.name }}
                        </div>
                      </template> -->
                    </VRecursiveList>
                  </template>
                </VSelect>
              </div>
              <div class="item-category__wildberries">
                <input
                  type="text"
                  value="Constantionpol"
                />
              </div>
              <div class="item-category__yandex">
                <input
                  type="text"
                  value="Constantionpol"
                />
              </div>
              <div class="item-category__products">{{ itemL2.children_count }}</div>
            </template>
            <div
              class="item-category__buttons"
              @click.stop
            >
              <div class="item-category__button--more">
                <VDropdovnSlots :ref="`VDropdovnSlots(index-${indexL1}>${indexL2})`">
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
                    <VItemCategotyDropdownList @showSlidingBlock="showSlidingBlock($event, itemL1, itemL2)" />
                  </template>
                </VDropdovnSlots>
              </div>
            </div>
          </div>
        </template>

        <template #slot3="{ itemL3, indexL1, indexL2, indexL3 }">
          <div
            class="item-category row-table"
            :ref="`itemCategory(index-${indexL1}>${indexL2}>${indexL3})`"
            :class="{ 'js-dropdown-menu__button': itemL3.children_count > 0 }"
            :style="{ background: itemL3.children_count == 0 ? '#fff' : '' }"
            @mouseleave="closeOwnDropdown($event, indexL1, indexL2, indexL3)"
          >
            <div class="item-category__icon">
              <img
                src="@/assets/img/static/buttons-icon/Show_20px.svg"
                alt="dec"
              />
            </div>
            <div class="item-category__name">{{ itemL3.name }}</div>
            <div class="item-category__ozon">-</div>
            <div class="item-category__aliexpress">-</div>
            <div class="item-category__wildberries">-</div>
            <div class="item-category__yandex">-</div>
            <div class="item-category__products">{{ itemL3.children_count }}</div>
            <div
              class="item-category__buttons"
              @click.stop
            >
              <div class="item-category__button--more">
                <VDropdovnSlots :ref="`VDropdovnSlots(index-${indexL1}>${indexL2}>${indexL3})`">
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
                        <RouterLink to="/editing">
                          <div class="list__link">
                            <img
                              class="list__image"
                              src="@/assets/img/static/buttons-icon/Edit_Pencil_02_20px.svg"
                              alt="edit"
                            />
                            <span class="list__text">Редактировать</span>
                          </div>
                        </RouterLink>
                      </li>
                      <li class="list__item">
                        <div class="list__link">
                          <img
                            class="list__image"
                            src="@/assets/img/static/buttons-icon/Trash_Empty_20px.svg"
                            alt="trash"
                          />
                          <span class="list__text">Удалить</span>
                        </div>
                      </li>
                    </ul>
                  </template>
                </VDropdovnSlots>
              </div>
            </div>
          </div>
        </template>
      </VRecursiveList>
    </div>
    <VSlidingBlockSlotUIFC
      :isOpenSlidingBlock="isOpenSlidingBlock"
      :element="$refs.cardAddCategory"
      @onCloseSlidingBlock="isOpenSlidingBlock = false"
    >
      <VCardAddNestedCategory
        v-if="showVCardAddNestedCategory"
        @onCloseSlidingBlock="isOpenSlidingBlock = false"
        :parentItemData="parentItemData"
      />
      <VCardInfoCategory
        v-if="showVCardInfoCategory"
        @onCloseSlidingBlock="isOpenSlidingBlock = false"
        :parentItemData="parentItemData"
      />
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

  import VCardAddNestedCategory from '../cards/VCardAddNestedCategory.vue';
  import VCardInfoCategory from '../cards/VCardInfoCategory.vue';
  import VItemCategotyDropdownList from './VItemCategotyDropdownList.vue';

  export default {
    name: 'VCategoriesTable',
    mixins: [mixDropdownMenuFn],
    components: { VDropdovnSlots, VSlidingBlockSlotUIFC, VRecursiveList, VCardAddNestedCategory, VCardInfoCategory, VItemCategotyDropdownList, VCheckboxList, VSelect },

    data() {
      return {
        headCategories: ['Наименование', 'Ozon', 'Aliexpress', 'Wildberries', 'Яндекс', 'Продукты'],

        isOpenSlidingBlock: false,
        showVCardAddNestedCategory: false,
        showVCardInfoCategory: false,

        prevNthChildren: [],

        parentItemData: {
          names: [],
          id: null,
        },

        itemSelectOpts: {
          ozon: {
            type: 'text',
            value: 'opts.value',
            name: 'opts.name',
            placeholder: 'opts.placeholder',
          },
        },
      };
    },

    computed: {
      ...mapGetters('localCategoriesItems', {
        categoriesItems: 'items',
      }),
      ...mapGetters('categoriesOzon', {
        ozonSelectItems: 'items',
      }),
    },

    methods: {
      ...mapActions('localCategoriesItems', ['GET_ITEMS_CATEGORIES']),
      ...mapActions('categoriesOzon', ['GET_ITEMS_SELECT_OZON']),

      onChange(isChecked) {
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
          // const nthChildrenAll = document.querySelectorAll(`.row-table > *:nth-child(${indexItem})`);
        });
      },

      closeOwnDropdown(e, indexL1, indexL2 = null, indexL3 = null) {
        // console.log(`VDropdovnSlots(index-${indexL1}${indexL2 !== null ? '>' + indexL2 : ''}${indexL3 !== null ? '>' + indexL3 : ''})`);
        const currentItemCategoryDropdownSlots = this.$refs[`VDropdovnSlots(index-${indexL1}${indexL2 !== null ? '>' + indexL2 : ''}${indexL3 !== null ? '>' + indexL3 : ''})`];

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

        this.showVCardAddNestedCategory = textButton === 'Добавить субкатегорию';
        this.showVCardInfoCategory = textButton === 'Информация';

        // console.log(textButton);
        // console.log(this.parentItemData);
        this.isOpenSlidingBlock = true;
      },
    },

    async mounted() {
      await this.GET_ITEMS_CATEGORIES();
      await this.GET_ITEMS_SELECT_OZON();

      this.mixDropdownMenuFn();
    },
  };
</script>

<style lang="scss">
  $offsetSubmenu: 12px;

  .row-table {
    display: flex;
    align-items: center;

    @include mr(24px);

    & > *:nth-child(1) {
      // width: 24px;
      // width: 1.3%;
      flex: 0 0 24px;
    }
    & > *:nth-child(2) {
      // width: 320px;
      // width: 15.0212766%;
      flex: 0 1 320px;
    }
    & > *:nth-child(3) {
      // width: 260px;
      // width: 14%;
      flex: 0 1 260px;
    }
    & > *:nth-child(4) {
      // width: 260px;
      // width: 14%;
      flex: 0 1 260px;
    }
    & > *:nth-child(5) {
      // width: 260px;
      // width: 14%;
      flex: 0 1 260px;
    }
    & > *:nth-child(6) {
      // width: 260px;
      // width: 14%;
      flex: 0 1 260px;
    }
    & > *:nth-child(7) {
      // width: 73px;
      // width: 4%;
      flex: 0 1 73px;
    }
    & > *:last-child {
      // width: auto;
      flex: 0 0 auto;
      margin-left: auto;
    }
  }
  .table {
    min-width: 1600px;
    &__head {
    }

    &__body {
    }

    &__item {
    }
  }

  .head-table {
    background: $border-light2;
    border-radius: 4px;
    padding: 12px 16px;

    &__list {
    }
    &__item {
      display: flex;
      align-items: center;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 167%;
      color: #000;
    }
    &__buttons {
      .dropdown__button {
        padding: 0;
      }
      .dropdown__menu {
        left: auto;
        right: 200%;
      }
    }
    &__button {
      border: none;
      background: transparent;
      :hover {
        transform: rotate(360deg);
        transition: all 5s ease 0s;
      }
    }
  }

  // ++++++++++++
  .item-category {
    padding: 8px 8px 8px 16px;
    cursor: pointer;
    border-bottom: 1px solid $neutral-white1;
    background: rgba(244, 246, 247, 0.4);

    &:hover {
      background: #f4f6f7;

      .item-category__button--add {
        .button {
          background: $blue-color;
          border-color: $blue-color;
          color: $white-color;

          &__image {
            path {
              fill: $white-color;
            }
          }
        }
      }
      .item-category__button--more {
        opacity: 1;
      }
      .item-category__name {
        text-decoration-line: underline;
      }
    }

    &__icon {
    }
    &__icon-plus {
      display: block;
    }
    &__icon-minus {
      display: none;
    }

    &__name {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 167%;
      color: $dark-color;
    }

    &__ozon {
    }

    &__aliexpress {
    }

    &__wildberries {
    }

    &__yandex {
    }

    &__products {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 176%;
      text-align: center;
      color: #ed815b;
    }

    &__buttons {
      display: flex;
    }

    // &__button--add {
    //   margin-right: 8px;
    //   .button {
    //     padding: 8px 13px;
    //     background: transparent;
    //     border-color: transparent;
    //     color: #3d3d3d;
    //     &__image {
    //       path {
    //         fill: #adadad;
    //       }
    //     }
    //   }
    // }

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

  .list {
    &__item {
    }
    .list {
      display: none;

      & .row-table {
        & > *:nth-child(2) {
          flex: 0 1 calc(320px - $offsetSubmenu);
        }
      }

      & .item-category {
        padding-left: calc(16px + $offsetSubmenu);
      }

      .list {
        & .row-table {
          & > *:nth-child(2) {
            flex: 0 1 calc(320px - $offsetSubmenu - $offsetSubmenu);
          }
        }
        & .item-category {
          padding-left: calc(16px + $offsetSubmenu + $offsetSubmenu);
        }
      }
    }
  }

  .select {
    &__menu {
      padding: 8px 0;
    }

    .list {
      display: block;

      .list {
        .ozon-list__name {
          padding-left: 20px;
        }
      }
    }
  }

  .ozon-list {
    &__name {
      @extend %font-inter--400_167;
      padding: 8px;

      &:hover {
        background: #eee;
      }
    }
    &__name--active {
      color: #fff;
      font-weight: 700;
      background: $blue-color;
      &:hover {
        color: #fff;
        font-weight: 700;
        background: $blue-color;
      }
    }
  }

  .js-dropdown-menu__item--active {
    & > .item-category .item-category__icon-plus {
      display: none;
    }
    & > .item-category .item-category__icon-minus {
      display: block;
    }
    & > .list {
      display: block;
    }
  }

  .dropdown-slots--open {
    & .dropdown__menu {
      z-index: 999;

      .list {
        display: block;
      }
    }
  }
</style>
`
