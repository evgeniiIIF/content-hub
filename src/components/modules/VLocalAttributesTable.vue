<template>
  <div class="table">
    <div class="table__head head-table">
      <ul class="head-table__list row-table">
        <li
          class="head-table__item"
          v-for="name in headCategories"
          :key="name"
        >
          {{ name }}
        </li>
        <li class="head-table__buttons">
          <button
            class="head-table__button"
            type="button"
          >
            <img
              src="@/assets/img/static/decorative-icon/Settings_Future_20px.svg"
              alt=""
            />
          </button>
        </li>
      </ul>
    </div>
    <div class="table__body js-dropdown-menu--root">
      <VRecursiveList
        :items="data"
        :level="1"
      >
        <template #slot1="{ item, level, indexL1 }">
          <div
            class="item-category row-table"
            :class="{ 'js-dropdown-menu__button': item.children_count > 0 }"
            @mouseleave="closeOwnDropdown($event, level, indexL1)"
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
            <div class="item-category__name">{{ item.name }}</div>
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
                    <ul class="list">
                      <li class="list__item">
                        <VButton @click="showSlidingBlock">
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
                                d="M9.99984 4.16699C10.4601 4.16699 10.8332 4.54009 10.8332 5.00033V9.16699H14.9998C15.4601 9.16699 15.8332 9.54009 15.8332 10.0003C15.8332 10.4606 15.4601 10.8337 14.9998 10.8337H10.8332V15.0003C10.8332 15.4606 10.4601 15.8337 9.99984 15.8337C9.5396 15.8337 9.1665 15.4606 9.1665 15.0003V10.8337H4.99984C4.5396 10.8337 4.1665 10.4606 4.1665 10.0003C4.1665 9.54009 4.5396 9.16699 4.99984 9.16699H9.1665V5.00033C9.1665 4.54009 9.5396 4.16699 9.99984 4.16699Z"
                                fill="#0077FF"
                              />
                            </svg>
                          </span>
                          <span class="button__text">Добавить субкатегорию</span>
                        </VButton>
                      </li>
                      <li class="list__item">
                        <RouterLink to="/editing">
                          <VButton>
                            <span class="button__image">
                              <img
                                src="@/assets/img/static/buttons-icon/Edit_Pencil_02_20px.svg"
                                alt="edit"
                              />
                            </span>
                            <span class="list__text">Редактировать</span>
                          </VButton>
                        </RouterLink>
                      </li>
                      <li class="list__item">
                        <VButton @click="showSlidingBlock">
                          <span class="button__image">
                            <img
                              src="@/assets/img/static/decorative-icon/Info_20px.svg"
                              alt="icon"
                            />
                          </span>
                          <span class="button__text">Информация</span>
                        </VButton>
                      </li>

                      <li class="list__item">
                        <div class="list__link">
                          <img
                            class="list__image"
                            src="@/assets/img/static/decorative-icon/Trash_Empty_20px.svg"
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
        <template #slot2="{ item, level, indexL1, indexL2 }">
          <div
            class="item-category row-table"
            :class="{ 'js-dropdown-menu__button': item.children_count > 0 }"
            @mouseleave="closeOwnDropdown($event, level, indexL1, indexL2)"
          >
            <div
              class="item-category__icon"
              v-if="item.children_count > 0"
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
            <div class="item-category__name">{{ item.name }}</div>
            <template v-if="item.children_count == 0">
              <div class="item-category__ozon">-</div>
              <div class="item-category__aliexpress">-</div>
              <div class="item-category__wildberries">-</div>
              <div class="item-category__yandex">-</div>
              <div class="item-category__products">{{ item.children_count }}</div>
            </template>
            <div
              class="item-category__buttons"
              @click.stop
            >
              <div class="item-category__button--more">
                <VDropdovnSlots :ref="`VDropdovnSlots(index-${indexL1}${indexL2})`">
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
        <template #slot3="{ item, level, indexL1, indexL2, indexL3 }">
          <div
            class="item-category row-table"
            :class="{ 'js-dropdown-menu__button': item.children_count > 0 }"
            @mouseleave="closeOwnDropdown($event, level, indexL1, indexL2, indexL3)"
          >
            <div class="item-category__icon">
              <img
                src="@/assets/img/static/buttons-icon/Show_20px.svg"
                alt="dec"
              />
            </div>
            <div class="item-category__name">{{ item.name }}</div>
            <div class="item-category__ozon">-</div>
            <div class="item-category__aliexpress">-</div>
            <div class="item-category__wildberries">-</div>
            <div class="item-category__yandex">-</div>
            <div class="item-category__products">{{ item.children_count }}</div>
            <div
              class="item-category__buttons"
              @click.stop
            >
              <div class="item-category__button--more">
                <VDropdovnSlots :ref="`VDropdovnSlots(index-${indexL1}${indexL2}${indexL3})`">
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
      @onCloseMenu="isOpenSlidingBlock = false"
    >
      <VCardAddNestedCategory
        v-if="showVCardAddNestedCategory"
        @onCloseMenu="isOpenSlidingBlock = false"
      />
      <VCardInfoCategory
        v-if="showVCardInfoCategory"
        @onCloseMenu="isOpenSlidingBlock = false"
      />
    </VSlidingBlockSlotUIFC>
  </div>
</template>

<script>
  import axios from 'axios';
  import VButton from '../UI/VButton.vue';
  import mixDropdownMenuFn from '@/mixins/mixDropdownMenuFn';
  import VDropdovnSlots from '@/components/UI/VDropdownSlots.vue';
  import VCardAddCategory from '../cards/VCardAddCategory.vue';

  import { mapGetters, mapActions } from 'vuex';
  import VSlidingBlockSlotUIFC from '../UI-FC/VSlidingBlockSlotUIFC.vue';
  import VRecursiveList from '@/components/UI-FC/VRecursiveList.vue';
  import VCardAddNestedCategory from '../cards/VCardAddNestedCategory.vue';
  import VCardInfoCategory from '../cards/VCardInfoCategory.vue';

  export default {
    name: 'VCategoriesTable',
    mixins: [mixDropdownMenuFn],
    components: { VButton, VDropdovnSlots, VCardAddCategory, VSlidingBlockSlotUIFC, VRecursiveList, VCardAddNestedCategory, VCardInfoCategory },

    data() {
      return {
        headCategories: ['ID', 'Наименование', 'Ozon', 'Aliexpress', 'Wildberries', 'Яндекс', 'Продукты'],
        data: [],
        isOpenSlidingBlock: false,
        showVCardAddNestedCategory: false,
        showVCardInfoCategory: false,
      };
    },

    computed: {
      ...mapGetters('localCategoriesItems', {
        categoriesItems: 'items',
      }),
    },

    methods: {
      ...mapActions('localCategoriesItems', ['GET_ITEMS']),

      closeOwnDropdown(e, level, indexL1, indexL2 = null, indexL3 = null) {
        // console.log(`VDropdovnSlots(index-${indexL1}${indexL2 !== null ? indexL2 : ''}${indexL3 !== null ? indexL3 : ''})`);
        const currentLevelListItem = this.$refs[`VDropdovnSlots(index-${indexL1}${indexL2 !== null ? indexL2 : ''}${indexL3 !== null ? indexL3 : ''})`];

        if (currentLevelListItem.menuIsOpen) {
          currentLevelListItem.menuIsOpen = false;
        }
      },

      showSlidingBlock(e) {
        const textButton = e.currentTarget.querySelector('.button__text').textContent;

        this.showVCardAddNestedCategory = textButton === 'Добавить субкатегорию';
        this.showVCardInfoCategory = textButton === 'Информация';

        console.log(textButton);
        this.isOpenSlidingBlock = true;
      },
      async fetchData() {
        try {
          const url = 'http://localhost:3002/attributes';
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Ошибка сети при чтении файла JSON');
          }
          const jsonData = await response.json();
          console.log(jsonData);
          this.data = jsonData;
        } catch (error) {
          console.error('Не удалось прочитать JSON файл:', error);
        }
      },
    },
    async mounted() {
      // await this.GET_ITEMS();
      await this.fetchData();

      // console.log(this.categoriesItems);

      setTimeout(() => {
        this.mixDropdownMenuFn();
      }, 100);
    },
  };
</script>

<style lang="scss">
  // $offsetSubmenu: 12px;

  // .row-table {
  //   display: flex;
  //   align-items: center;

  //   @include mr(24px);

  //   & > *:nth-child(1) {
  //     // width: 24px;
  //     // width: 1.3%;
  //     flex: 0 0 24px;
  //   }
  //   & > *:nth-child(2) {
  //     // width: 320px;
  //     // width: 15.0212766%;
  //     flex: 0 1 320px;
  //   }
  //   & > *:nth-child(3) {
  //     // width: 260px;
  //     // width: 14%;
  //     flex: 0 1 260px;
  //   }
  //   & > *:nth-child(4) {
  //     // width: 260px;
  //     // width: 14%;
  //     flex: 0 1 260px;
  //   }
  //   & > *:nth-child(5) {
  //     // width: 260px;
  //     // width: 14%;
  //     flex: 0 1 260px;
  //   }
  //   & > *:nth-child(6) {
  //     // width: 260px;
  //     // width: 14%;
  //     flex: 0 1 260px;
  //   }
  //   & > *:nth-child(7) {
  //     // width: 73px;
  //     // width: 4%;
  //     flex: 0 1 73px;
  //   }
  //   & > *:last-child {
  //     // width: auto;
  //     flex: 0 0 auto;
  //     margin-left: auto;
  //   }
  // }
  // .table {
  //   min-width: 1600px;
  //   &__head {
  //   }

  //   &__body {
  //   }

  //   &__item {
  //   }
  // }

  // .head-table {
  //   background: #f4f6f7;
  //   border-radius: 4px;
  //   padding: 12px 16px;
  //   &__list {
  //   }
  //   &__item {
  //     display: flex;
  //     align-items: center;
  //     font-family: 'Inter';
  //     font-style: normal;
  //     font-weight: 400;
  //     font-size: 12px;
  //     line-height: 167%;
  //     color: $neutral-gray;
  //   }
  //   &__buttons {
  //   }
  //   &__button {
  //     border: none;
  //     background: transparent;
  //   }
  // }

  // // ++++++++++++
  // .item-category {
  //   padding: 8px 8px 8px 16px;
  //   cursor: pointer;
  //   border-bottom: 1px solid $neutral-white1;
  //   background: rgba(244, 246, 247, 0.4);

  //   &:hover {
  //     background: #f4f6f7;

  //     .item-category__button--add {
  //       .button {
  //         background: $blue-color;
  //         border-color: $blue-color;
  //         color: $white-color;

  //         &__image {
  //           path {
  //             fill: $white-color;
  //           }
  //         }
  //       }
  //     }
  //     .item-category__button--more {
  //       opacity: 1;
  //     }
  //     .item-category__name {
  //       text-decoration-line: underline;
  //     }
  //   }

  //   &__icon {
  //   }
  //   &__icon-plus {
  //     display: block;
  //   }
  //   &__icon-minus {
  //     display: none;
  //   }

  //   &__name {
  //     font-family: 'Inter';
  //     font-style: normal;
  //     font-weight: 700;
  //     font-size: 12px;
  //     line-height: 167%;
  //     color: $dark-color;
  //   }

  //   &__ozon {
  //   }

  //   &__aliexpress {
  //   }

  //   &__wildberries {
  //   }

  //   &__yandex {
  //   }

  //   &__products {
  //     font-family: 'Inter';
  //     font-style: normal;
  //     font-weight: 400;
  //     font-size: 12px;
  //     line-height: 176%;
  //     text-align: center;
  //     color: #ed815b;
  //   }

  //   &__buttons {
  //     display: flex;
  //   }

  //   // &__button--add {
  //   //   margin-right: 8px;
  //   //   .button {
  //   //     padding: 8px 13px;
  //   //     background: transparent;
  //   //     border-color: transparent;
  //   //     color: #3d3d3d;
  //   //     &__image {
  //   //       path {
  //   //         fill: #adadad;
  //   //       }
  //   //     }
  //   //   }
  //   // }

  //   &__button--more {
  //     opacity: 0;

  //     .dropdown__button {
  //       padding: 0;
  //     }

  //     .dropdown__menu {
  //       padding: 0 48px 48px;
  //       width: auto;
  //       min-height: auto;
  //       left: auto;
  //       top: 100%;
  //       right: 0;
  //       background: transparent;
  //       box-shadow: none;

  //       .button {
  //         display: flex;
  //         justify-content: start;
  //         align-items: center;
  //         width: 100%;
  //         height: auto;
  //         padding: 16px;
  //         border-radius: 0;
  //         background: transparent;
  //         border-color: transparent;

  //         &:hover {
  //           background: rgba(0, 0, 0, 0.03);
  //         }
  //         &__image {
  //           margin-right: 8px;
  //         }
  //         &__text {
  //           font-family: 'Inter';
  //           font-style: normal;
  //           font-weight: 400;
  //           font-size: 13px;
  //           line-height: 154%;
  //           color: $dark-color;
  //         }
  //       }
  //     }

  //     .list {
  //       background: #fff;
  //       box-shadow: 0px 8px 24px -4px rgba(54, 54, 54, 0.1);
  //       &__item {
  //         white-space: nowrap;
  //         &:not(:last-child) {
  //           border-bottom: 1px solid $neutral-white1;
  //         }
  //       }
  //       &__link {
  //         display: flex;
  //         align-items: center;
  //         padding: 16px;
  //         &:hover {
  //           cursor: pointer;
  //           background: $neutral-white1;
  //         }
  //       }

  //       &__image {
  //         margin-right: 8px;
  //       }

  //       &__text {
  //         font-family: 'Inter';
  //         font-style: normal;
  //         font-weight: 400;
  //         font-size: 13px;
  //         line-height: 154%;
  //         color: $dark-color;
  //       }
  //     }

  //     .button {
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //       width: 40px;
  //       height: 40px;
  //       padding: 0;
  //       border-radius: 50%;
  //       background: transparent;
  //       border-color: transparent;
  //       &:hover {
  //         background: rgba(0, 0, 0, 0.03);
  //       }
  //       &__image {
  //         margin-right: 0;
  //       }
  //     }
  //   }
  // }

  // .list {
  //   &__item {
  //   }
  //   .list {
  //     display: none;

  //     & .row-table {
  //       & > *:nth-child(2) {
  //         flex: 0 1 calc(320px - $offsetSubmenu);
  //       }
  //     }

  //     & .item-category {
  //       padding-left: calc(16px + $offsetSubmenu);
  //     }

  //     .list {
  //       & .row-table {
  //         & > *:nth-child(2) {
  //           flex: 0 1 calc(320px - $offsetSubmenu - $offsetSubmenu);
  //         }
  //       }
  //       & .item-category {
  //         padding-left: calc(16px + $offsetSubmenu + $offsetSubmenu);
  //       }
  //     }
  //   }
  // }

  // .js-dropdown-menu__item--active {
  //   & > .item-category .item-category__icon-plus {
  //     display: none;
  //   }
  //   & > .item-category .item-category__icon-minus {
  //     display: block;
  //   }
  //   & > .list {
  //     display: block;
  //   }
  // }

  // .dropdown-slots--open {
  //   & .dropdown__menu {
  //     z-index: 999;

  //     .list {
  //       display: block;
  //     }
  //   }
  // }
</style>
`
