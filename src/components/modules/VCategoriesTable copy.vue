<template>
  <div class="categories-table">
    <div class="table-categories__head head-categories">
      <ul class="head-categories__list row-categories-table">
        <li
          class="head-categories__item"
          v-for="name in headCategories"
          :key="name"
        >
          {{ name }}
        </li>
        <li class="head-categories__buttons">
          <button
            class="head-categories__button"
            type="button"
          >
            <img
              src="@/assets/img/static/buttons-icon/Settings_20px.svg"
              alt=""
            />
          </button>
        </li>
      </ul>
    </div>
    <div class="categories-table__content js-dropdown-menu--root">
      <div
        class="categories-table__item item-category"
        v-for="(item, index) in data"
        :key="item.name"
        @mouseleave="closeOwnDropdown($event, index)"
      >
        <div
          class="item-category__parent parent-category row-categories-table"
          :class="{ 'js-dropdown-menu__button': item.children_count > 0 }"
        >
          <div class="parent-category__icon">
            <img
              src="@/assets/img/static/decorative-icon/Icon.svg"
              alt="dec"
            />
          </div>
          <div class="parent-category__name">{{ item.name }}</div>
          <div
            class="parent-category__buttons"
            @click.stop
          >
            <div
              class="parent-category__button--add"
              @click="showSlidingBlock"
            >
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
                      d="M15.8333 4.16667L4.16667 4.16667L4.16667 15.8333L15.8333 15.8333L15.8333 4.16667ZM4.16667 2.5L15.8333 2.5C16.7538 2.5 17.5 3.24619 17.5 4.16667L17.5 15.8333C17.5 16.7538 16.7538 17.5 15.8333 17.5L4.16667 17.5C3.24619 17.5 2.5 16.7538 2.5 15.8333L2.5 4.16667C2.5 3.24619 3.24619 2.5 4.16667 2.5ZM10 5.83333C10.4602 5.83333 10.8333 6.20643 10.8333 6.66667V9.16667H13.3333C13.7936 9.16667 14.1667 9.53976 14.1667 10C14.1667 10.4602 13.7936 10.8333 13.3333 10.8333H10.8333V13.3333C10.8333 13.7936 10.4602 14.1667 10 14.1667C9.53976 14.1667 9.16667 13.7936 9.16667 13.3333V10.8333H6.66667C6.20643 10.8333 5.83334 10.4602 5.83334 10C5.83334 9.53976 6.20643 9.16667 6.66667 9.16667H9.16667V6.66667C9.16667 6.20643 9.53976 5.83333 10 5.83333Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <span class="button__text">Добавить категорию</span>
              </VButton>
            </div>
            <div class="parent-category__button--more">
              <VDropdovnSlots ref="VDropdovnSlots">
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
        <ul
          class="item-category__children"
          v-if="item.children_count > 0"
        >
          <li
            class="item-category__child"
            v-for="childItem in item.children"
          >
            <div
              class="child-item-category row-categories-table"
              :class="{ 'js-dropdown-menu__button': childItem.children_count > 0, 'item-category__child--has-children': childItem.children_count > 0 }"
            >
              <div class="child-item-category__icon">
                <img
                  v-if="childItem.children_count > 0"
                  src="@/assets/img/static/decorative-icon/Icon.svg"
                  alt="show"
                  style="opacity: 0.33"
                />

                <img
                  v-else
                  src="@/assets/img/static/buttons-icon/Show_20px.svg"
                  alt="show"
                />
              </div>
              <div class="child-item-category__name">
                {{ childItem.name }}
              </div>
              <div class="child-item-category__ozon">-</div>
              <div class="child-item-category__aliexpress">-</div>
              <div class="child-item-category__wildberries">-</div>
              <div class="child-item-category__yandex">-</div>
              <div class="child-item-category__products">{{ childItem.children_count }}</div>
              <div class="child-item-category__button">
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
                    <ul>
                      <li>Option 1</li>
                      <li>Option 2</li>
                      <li>Option 3</li>
                    </ul>
                  </template>
                </VDropdovnSlots>
              </div>
            </div>
            <ul
              class="item-category__children"
              v-if="childItem.children_count > 0"
            >
              <li
                class="item-category__child"
                v-for="childChildItem in childItem.children"
              >
                <div class="child-item-category row-categories-table">
                  <div class="child-item-category__icon">
                    <img
                      src="@/assets/img/static/buttons-icon/Show_20px.svg"
                      alt="show"
                    />
                  </div>
                  <div class="child-item-category__name">
                    {{ childChildItem.name }}
                  </div>
                  <div class="child-item-category__ozon">-</div>
                  <div class="child-item-category__aliexpress">-</div>
                  <div class="child-item-category__wildberries">-</div>
                  <div class="child-item-category__yandex">-</div>
                  <div class="child-item-category__products">{{ childChildItem.children_count }}</div>
                  <div class="child-item-category__button">
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
                        <ul>
                          <li>Option 1</li>
                          <li>Option 2</li>
                          <li>Option 3</li>
                        </ul>
                      </template>
                    </VDropdovnSlots>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div
      class="sliding-block"
      :class="{ 'sliding-block--open': isOpenSlidingBlock }"
    >
      <VCardAddCategory />
    </div> -->
    <VSlidingBlockSlotUIFC
      :isOpenSlidingBlock="isOpenSlidingBlock"
      :element="$refs.cardAddCategory"
      @onCloseMenu="isOpenSlidingBlock = false"
    >
      <VCardAddCategory @onCloseMenu="isOpenSlidingBlock = false" />
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

  export default {
    name: 'VCategoriesTable',
    mixins: [mixDropdownMenuFn],
    components: { VButton, VDropdovnSlots, VCardAddCategory, VSlidingBlockSlotUIFC },

    data() {
      return {
        headCategories: ['ID', 'Наименование', 'Ozon', 'Aliexpress', 'Wildberries', 'Яндекс', 'Продукты'],
        data: [],
        isOpenSlidingBlock: false,
      };
    },

    computed: {
      ...mapGetters('localCategoriesItems', {
        categoriesItems: 'items',
      }),
    },

    methods: {
      ...mapActions('localCategoriesItems', ['GET_ITEMS']),
      closeOwnDropdown(e, index) {
        this.$refs.VDropdovnSlots[index].menuIsOpen = false;
      },

      showSlidingBlock() {
        this.isOpenSlidingBlock = true;
      },
      async fetchData() {
        try {
          const url = 'http://localhost:3000/data';
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Ошибка сети при чтении файла JSON');
          }
          const jsonData = await response.json();
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
  @import '@/assets/scss/smart-grid.scss';
  @import '@/assets/scss/mixins.scss';

  .row-categories-table {
    display: flex;
    align-items: center;

    @include mr(24px);

    & > *:nth-child(1) {
      // width: 24px;
      width: 1.3%;
    }
    & > *:nth-child(2) {
      // width: 320px;
      width: 17.0212766%;
    }
    & > *:nth-child(3) {
      // width: 260px;
      width: 14%;
    }
    & > *:nth-child(4) {
      // width: 260px;
      width: 14%;
    }
    & > *:nth-child(5) {
      // width: 260px;
      width: 14%;
    }
    & > *:nth-child(6) {
      // width: 260px;
      width: 14%;
    }
    & > *:nth-child(7) {
      // width: 73px;
      width: 4%;
    }
    & > *:last-child {
      width: auto;
      margin-left: auto;
    }
  }
  .categories-table {
    width: 1880px;
    &__content {
    }

    &__item {
    }
  }
  .table-categories {
    &__head {
    }
  }
  .head-categories {
    background: #f4f6f7;
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
      color: #7e8d94;
    }
    &__buttons {
    }
    &__button {
      border: none;
      background: transparent;
    }
  }
  .item-category {
    &__parent {
    }

    &__children {
      display: none;

      .js-dropdown-menu__item--active > & {
        display: block;
      }

      .item-category__children {
        .child-item-category {
          &.row-categories-table > * {
            &:nth-child(2) {
              width: 290px;
            }
          }
          // background: yellow;
          padding-left: 46px;
        }
      }
    }
    &__child {
    }
    &__child--has-children {
      &.child-item-category {
        // background: green;
      }
    }
  }

  // ++++++++++++
  .parent-category {
    padding: 8px 8px 8px 16px;
    cursor: pointer;
    border-bottom: 1px solid #ebedf1;
    background: rgba(244, 246, 247, 0.4);

    &:hover {
      background: #f4f6f7;
      .parent-category__button--add {
        .button {
          background: #0077ff;
          border-color: #0077ff;
          color: #ffffff;
          &__image {
            path {
              fill: #ffffff;
            }
          }
        }
      }
      .parent-category__button--more {
        opacity: 1;
      }
      .parent-category__name {
        text-decoration-line: underline;
      }
    }
    &__icon {
    }

    &__name {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 167%;
      color: #292929;
    }

    &__buttons {
      display: flex;
    }
    &__button--add {
      margin-right: 8px;
      .button {
        background: transparent;
        border-color: transparent;
        color: #3d3d3d;
        &__image {
          path {
            fill: #adadad;
          }
        }
      }
    }

    &__button--more {
      opacity: 0;

      .dropdown__button {
        padding: 0;
      }

      .dropdown__menu {
        width: 180px;
        min-height: auto;
        top: 50%;
        left: -170px;
      }
      .list {
        &__item {
          &:first-child {
            border-bottom: 1px solid #ebedf1;
          }
        }
        &__link {
          display: flex;
          align-items: center;
          padding: 16px;
          &:hover {
            cursor: pointer;
            background: #ebedf1;
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
          color: #292929;
        }
      }

      .button {
        &__image {
          margin-right: 0;
        }

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
      }
    }
  }
  // ----------------------------
  .child-item-category {
    background: #fff;
    border-bottom: 1px solid #ebedf1;
    padding: 8px 8px 8px 16px;
    &:hover {
      background: #f4f6f7;
      .child-item-category__button {
        .button {
          opacity: 1;
        }
      }
    }

    &__icon {
    }

    &__name {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 167%;
      color: #335cff;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
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

    &__button {
      .dropdown__button {
        padding: 0;
      }
      .list {
        &__item {
        }

        &__image {
        }

        &__text {
        }
      }

      .button {
        &__image {
          margin-right: 0;
        }

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
      }
    }
  }
  .row-categories-table {
  }
  .button {
    &__image {
    }
  }
</style>
`
