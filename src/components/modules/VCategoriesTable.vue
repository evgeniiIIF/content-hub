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
                :items="headCategories.slice(1)"
                :isChecked="headCategories.slice(1)"
                @onChange="setShowHideNthChildRowTable($event)"
              />
            </template>
          </VDropdovnSlots>
        </li>
      </ul>
    </div>
    <div class="table__body js-dropdown-menu--root">
      <VRecursiveList :items="categoriesItems">
        <template #slot1="{ itemL1, itemCategoryItemL1 = itemL1, indexL1, itemCategoryIndexL1 = indexL1 }">
          <div
            class="item-category row-table"
            :ref="`itemCategory(index-${itemCategoryIndexL1})`"
            :class="{ 'js-dropdown-menu__button': itemCategoryItemL1.children_count > 0 }"
            @mouseleave="closeOwnDropdown($event, itemCategoryIndexL1)"
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
            <div
              class="pending"
              v-if="itemCategoryName_PENDING"
            >
              PENDING...
            </div>
            <div
              class="item-category__name-wrapper"
              v-else
            >
              <div class="item-category__name">
                {{ itemCategoryItemL1.name }}
              </div>
              <div
                class="item-category__name--with-input"
                @click.stop
              >
                <VInput
                  :opts="optsTemplateItemCategoryInputName"
                  :value="itemCategoryItemL1.name"
                  @onChange="onUpdateItemCategoryName($event, itemCategoryItemL1)"
                />
              </div>
            </div>
            <div
              class="item-category__buttons"
              @click.stop
            >
              <div class="item-category__button--more">
                <VDropdovnSlots :ref="`VDropdovnSlots(index-${itemCategoryIndexL1})`">
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

        <template #slot2="{ itemL1, itemL2, itemCategoryItemL2 = itemL2, indexL1, itemCategoryIndexL1 = indexL1, indexL2, itemCategoryIndexL2 = indexL2 }">
          <div
            class="item-category row-table"
            :ref="`itemCategory(index-${itemCategoryIndexL1}>${itemCategoryIndexL2})`"
            :class="{ 'js-dropdown-menu__button': itemCategoryItemL2.children_count > 0 }"
            :style="{ background: itemCategoryItemL2.children_count == 0 ? '#fff' : '' }"
            @mouseleave="closeOwnDropdown($event, itemCategoryIndexL1, itemCategoryIndexL2)"
          >
            <div
              class="item-category__icon"
              v-if="itemCategoryItemL2.children_count > 0"
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
            <div
              class="pending"
              v-if="itemCategoryName_PENDING"
            >
              PENDING...
            </div>
            <div
              class="item-category__name-wrapper"
              v-else
            >
              <div class="item-category__name">
                {{ itemCategoryItemL2.name }}
              </div>
              <div
                class="item-category__name--with-input"
                @click.stop
              >
                <VInput
                  :opts="optsTemplateItemCategoryInputName"
                  :value="itemCategoryItemL2.name"
                  @onChange="onUpdateItemCategoryName($event, itemCategoryItemL2)"
                />
              </div>
            </div>
            <template v-if="itemCategoryItemL2.children_count == 0">
              <div class="item-category__ozon select-list">
                <VSelect
                  :ref="`ozonCategory-index(${itemCategoryIndexL1}>${itemCategoryIndexL2})`"
                  @onFocus="loadOzonSelectItems(itemCategoryIndexL1, itemCategoryIndexL2)"
                  :opts="optsTemplateItemCategorySelect"
                  :value="itemCategoryItemL2.ozonCategory ? itemCategoryItemL2.ozonCategory.name : '-'"
                >
                  <template #menu>
                    <div class="select-list__filter">
                      <div class="select-list__filter-wrapper">
                        <input
                          type="text"
                          class="select-list__filter-input"
                          @input="onInputFilter($event)"
                          @keydown="onBackspakeFilterSelect($event, selectNameAll, filterValueSelect)"
                          @blur="onBlurFilterInput($event)"
                        />
                        <div class="select-list__filter-icon">
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
                              d="M11.9456 13.1237C11.0498 13.7793 9.94506 14.1663 8.74992 14.1663C5.75838 14.1663 3.33325 11.7412 3.33325 8.74967C3.33325 5.75813 5.75838 3.33301 8.74992 3.33301C11.7415 3.33301 14.1666 5.75813 14.1666 8.74967C14.1666 9.94471 13.7796 11.0494 13.1241 11.9451L16.4151 15.2361C16.7456 15.5666 16.7496 16.0983 16.4242 16.4238C16.0988 16.7492 15.567 16.7451 15.2366 16.4146L11.9456 13.1237ZM12.4999 8.74967C12.4999 10.8207 10.821 12.4997 8.74992 12.4997C6.67885 12.4997 4.99992 10.8207 4.99992 8.74967C4.99992 6.67861 6.67885 4.99967 8.74992 4.99967C10.821 4.99967 12.4999 6.67861 12.4999 8.74967Z"
                              fill="#0077FF"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <VRecursiveList :items="filteredSelectItemsOzon">
                      <template #slot1="{ itemL1, selectOzonItemL1 = itemL1, indexL1, selectMarketplaceCategoryIndexL1 = indexL1 }">
                        <div
                          class="select-list__name"
                          title="Нельзя выбрать родительскую категорию"
                        >
                          {{ selectOzonItemL1.name }}
                        </div>
                      </template>
                      <template #slot2="{ itemL2, selectOzonItemL2 = itemL2, indexL1, indexL2 }">
                        <div
                          class="select-list__name"
                          @click.stop="onSelectMarketplaceCategory('ozonCategory', itemCategoryIndexL1, itemCategoryIndexL2, selectOzonItemL2, itemCategoryItemL2)"
                        >
                          {{ selectOzonItemL2.name }}
                        </div>
                      </template>
                    </VRecursiveList>
                  </template>
                </VSelect>
              </div>
              <div class="item-category__aliexpress select-list">
                <VSelect
                  :ref="`aliCategory-index(${itemCategoryIndexL1}>${itemCategoryIndexL2})`"
                  @onFocus="loadAliSelectItems(itemCategoryIndexL1, itemCategoryIndexL2)"
                  :opts="optsTemplateItemCategorySelect"
                  :value="itemCategoryItemL2.aliCategory ? itemCategoryItemL2.aliCategory.main_name : '-'"
                >
                  <template #menu>
                    <div class="select-list__filter">
                      <div class="select-list__filter-wrapper">
                        <input
                          type="text"
                          class="select-list__filter-input"
                          @input="onInputFilter($event)"
                          @keydown="onBackspakeFilterSelect($event, selectNameAll, filterValueSelect)"
                          @blur="onBlurFilterInput($event)"
                        />
                        <div class="select-list__filter-icon">
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
                              d="M11.9456 13.1237C11.0498 13.7793 9.94506 14.1663 8.74992 14.1663C5.75838 14.1663 3.33325 11.7412 3.33325 8.74967C3.33325 5.75813 5.75838 3.33301 8.74992 3.33301C11.7415 3.33301 14.1666 5.75813 14.1666 8.74967C14.1666 9.94471 13.7796 11.0494 13.1241 11.9451L16.4151 15.2361C16.7456 15.5666 16.7496 16.0983 16.4242 16.4238C16.0988 16.7492 15.567 16.7451 15.2366 16.4146L11.9456 13.1237ZM12.4999 8.74967C12.4999 10.8207 10.821 12.4997 8.74992 12.4997C6.67885 12.4997 4.99992 10.8207 4.99992 8.74967C4.99992 6.67861 6.67885 4.99967 8.74992 4.99967C10.821 4.99967 12.4999 6.67861 12.4999 8.74967Z"
                              fill="#0077FF"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <VRecursiveList :items="filteredSelectItemsAli">
                      <template #slot1="{ itemL1, selectAliItemL1 = itemL1, indexL1, selectMarketplaceCategoryIndexL1 = indexL1 }">
                        <div
                          class="select-list__name"
                          title="Нельзя выбрать родительскую категорию"
                        >
                          {{ selectAliItemL1.name }}
                        </div>
                      </template>
                      <template #slot2="{ itemL2, selectAliItemL2 = itemL2, indexL1, indexL2 }">
                        <div
                          class="select-list__name"
                          @click.stop="onSelectMarketplaceCategory('aliCategory', itemCategoryIndexL1, itemCategoryIndexL2, selectAliItemL2, itemCategoryItemL2)"
                        >
                          {{ selectAliItemL2.name }}
                        </div>
                      </template>
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
            <!-- <div class="item-category__name">{{ itemL3.name }}</div> -->
            <div class="item-category__name-wrapper">
              <div class="item-category__name">{{ itemL3.name }}</div>
              <div
                class="item-category__name--with-input"
                @click.stop
              >
                <VInput
                  :opts="optsTemplateItemCategoryInputName"
                  :value="itemL3.name"
                  @onChange="onUpdateItemCategoryName($event, itemL3)"
                />
              </div>
            </div>
            <div class="item-category__ozon">{{ itemL3.ozonCategory }}</div>
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
                        <RouterLink to="/">
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
  import VInput from '../UI/VInput.vue';

  import VCardAddNestedCategory from '../cards/VCardAddNestedCategory.vue';
  import VCardInfoCategory from '../cards/VCardInfoCategory.vue';
  import VItemCategotyDropdownList from './VItemCategotyDropdownList.vue';

  export default {
    name: 'VCategoriesTable',
    mixins: [mixDropdownMenuFn],
    components: { VDropdovnSlots, VSlidingBlockSlotUIFC, VRecursiveList, VCardAddNestedCategory, VCardInfoCategory, VItemCategotyDropdownList, VCheckboxList, VSelect, VInput },

    data() {
      return {
        headCategories: ['Наименование', 'Ozon', 'Aliexpress', 'Wildberries', 'Яндекс', 'Продукты'],

        isOpenSlidingBlock: false,
        showVCardAddNestedCategory: false,
        showVCardInfoCategory: false,

        // setShowHideNthChildRowTable
        prevNthChildren: [],
        // \setShowHideNthChildRowTable

        // <VCardAddNestedCategory> && <VCardAddInfoCategory>
        parentItemData: {
          names: [],
          id: null,
        },
        // </VCardAddNestedCategory> && </VCardAddInfoCategory>

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
      ...mapGetters('localCategoriesItems', {
        categoriesItems: 'items',
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
        return this.filterRecursively(this.ozonSelectItems, this.filterValueSelect);
      },
      filteredSelectItemsAli() {
        return this.filterRecursively(this.AliSelectItems, this.filterValueSelect);
      },
    },

    methods: {
      ...mapActions('localCategoriesItems', ['GET_ITEMS_CATEGORIES']),
      ...mapActions('categoriesOzon', ['GET_ITEMS_SELECT_OZON']),
      ...mapActions('categoriesAli', ['GET_ITEMS_SELECT_ALI']),
      ...mapActions('updateCategoryName', ['UPDATE_CATEGORY_NAME']),
      ...mapActions('selectMarketplaceCategiry', ['SELECT_MARKETPLACE_CATEGORY']),

      onBlurFilterInput(e) {
        e.target.value = '';
        this.filterValueSelect = '';
        if (this.selectNameAll) {
          this.highlightMatching(this.selectNameAll, this.filterValueSelect);
        }
      },

      async onUpdateItemCategoryName(e, item) {
        const data = {
          name: e.target.value,
          id: item.id,
        };
        await this.UPDATE_CATEGORY_NAME(data);
        await this.GET_ITEMS_CATEGORIES();
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

      async loadOzonSelectItems(itemCategoryIndexL1, itemCategoryIndexL2) {
        if (this.ozonSelectItems.length === 0) {
          await this.GET_ITEMS_SELECT_OZON();
        }
      },

      async loadAliSelectItems(itemCategoryIndexL1, itemCategoryIndexL2) {
        if (this.AliSelectItems.length === 0) {
          await this.GET_ITEMS_SELECT_ALI();
          // console.log(this.AliSelectItems);
        }
      },

      async onSelectMarketplaceCategory(mapketplaceCategoryName, itemCategoryIndexL1, itemCategoryIndexL2, itemMarketplace, itemCategory) {
        console.log(mapketplaceCategoryName, itemCategory, itemMarketplace);

        this.currentSelect = this.$refs[`${mapketplaceCategoryName}-index(${itemCategoryIndexL1}>${itemCategoryIndexL2})`];
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

        this.isOpenSlidingBlock = true;
      },
    },

    async mounted() {
      await this.GET_ITEMS_CATEGORIES();
      this.mixDropdownMenuFn();
      // await this.GET_ITEMS_SELECT_OZON();
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
        display: none;

        // text-decoration-line: underline;
        // .input__input {
        //   border-color: #c2c9d2;
        //   background: $white-color;
        // }
      }
      .item-category__name--with-input {
        display: block;
      }

      .input {
        &__input {
          border-color: #c2c9d2;
        }
        &__icon {
          display: flex;
        }
      }
    }

    .input {
      &__input {
        border-color: transparent;
      }
      &__icon {
        display: none;
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

    &__name--with-input {
      display: none;

      .input__input {
        height: auto;
        // border-color: transparent;
        // background: transparent;
        // padding-top: 0;
        // padding-bottom: 0;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 167%;
        color: $dark-color;
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
    // &__menu {
    //   padding: 8px 0;
    // }

    .list {
      display: block;

      .list {
        .select-list__name {
          padding-left: 28px;
        }
      }
    }
  }

  .select-list {
    & .select__menu > .list > .list__item {
      & > .select-list__name {
        cursor: not-allowed;
      }
    }

    &__name {
      @extend %font-inter--400_167;
      padding: 12px 16px 12px 16px;

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

    &__filter {
      position: sticky;
      top: 0;
      left: 0;
      background: #fff;
      padding: 16px;
    }
    &__filter-wrapper {
      position: relative;
    }
    &__filter-input {
      width: 100%;
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      text-overflow: ellipsis;
      color: #7e8d94;

      padding: 6px 10px 6px 8px;
      border-radius: 4px;
      border: 1px solid #c2c9d2;
      background: #fff;
    }
    &__filter-icon {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
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
