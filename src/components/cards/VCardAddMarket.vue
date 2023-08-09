<template>
  <div class="card-add-market">
    <button
      class="card-add-market__close"
      @click="$emit('onCloseSlidingBlock')"
    >
      <img
        src="@/assets/img/static/buttons-icon/Close_SM_20px.svg"
        alt="close"
      />
    </button>
    <div class="card-add-market__body">
      <h3 class="card-add-market__title">Добавить магазин</h3>
      <form
        class="card-add-market__body-content"
        @submit.prevent="onSubmit"
      >
        <div class="card-add-market__inputs">
          <div
            class="card-add-market__input"
            v-for="opts in inputs"
          >
            <VSelect
              v-if="opts.selectMP"
              :opts="opts"
            >
              <template #menu>
                <ul class="list">
                  <li
                    class="list__item"
                    v-for="(itemSelectMenu, index) in inputs[2].items"
                    :key="itemSelectMenu.name"
                    @click.stop="setSelectedMarketplace(itemSelectMenu)"
                  >
                    <span
                      class="list__name"
                      :class="{ 'list__item--active': itemSelectMenu.name === currentSelected }"
                    >
                      <VRadioButton
                        :variant="itemSelectMenu.name"
                        name="marketplace"
                        :currentPicked="this.pickedMarketplace"
                        @changePicked="onChangePickedMarketplace($event)"
                      />
                    </span>
                  </li>
                </ul>
              </template>
            </VSelect>
            <VMultiSelect
              v-else-if="opts.multiSelectWh"
              :opts="opts"
              :selectedItems="selectedWarehouseItems"
              @onRemoveSelectedItem="removeWarehouseSelectedItems($event)"
            >
              <template #menu>
                <!-- <ul class="list">
                  <li
                    class="list__item"
                    v-for="(itemSelectMenu, index) in inputs[3].items"
                    :key="itemSelectMenu.name"
                  >
                    <span
                      class="list__name"
                      :class="{ 'list__item--active': itemSelectMenu.name === currentSelected }"
                    >
                      <VCheckbox
                        :text="itemSelectMenu.name"
                        @onChange="setWarehouseSelectedItems($event, itemSelectMenu)"
                        :isChecked="isCheckedWaresouseItem"
                      />
                    </span>
                  </li>
                </ul> -->

                <VCheckboxListObj
                  :items="inputs[3].items"
                  :currentIsCheckedItems="selectedWarehouseItems"
                  @onChange="setWarehouseSelectedItems($event)"
                />
              </template>
            </VMultiSelect>
            <VInput
              v-else
              :opts="opts"
              @onInput="onInputName"
            />
          </div>
        </div>
        <div class="card-add-market__buttons">
          <div class="card-add-market__button--bd">
            <VButton>Отменить</VButton>
          </div>
          <div class="card-add-market__button--bg">
            <VButton>Сохранить изменения</VButton>
            <!-- <VButton :pending="isAddCategoryPending">Сохранить изменения</VButton> -->
          </div>
        </div>
      </form>
    </div>
    <!-- <div class="card-add-market__bottom">
      <div class="card-add-market__info info-card-add-market">
        <div class="info-card-add-market__item">
          <div class="info-card-add-market__name">Автор</div>
          <div class="info-card-add-market__value">Захар</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  import VButton from '../UI/VButton.vue';
  import VInput from '../UI/VInput.vue';
  import VSelect from '../UI/VSelect.vue';
  import VMultiSelect from '../UI/VMultiSelect.vue';

  import { mapGetters, mapActions } from 'vuex';
  import VRadioButton from '../UI/VRadioButton.vue';
  import VCheckboxListObj from '../UI/VCheckboxListObj.vue';

  export default {
    name: 'VCardAddMarket',

    emits: ['onCloseSlidingBlock'],

    components: { VInput, VButton, VSelect, VMultiSelect, VRadioButton, VCheckboxListObj },
    data() {
      return {
        pickedMarketplace: '',
        selectedWarehouseItems: {},
        currentSelectedWarehouseItem: {},

        dataCreateMarket: {
          marketplace_id: null,
          name: '',
          min_stock_quantiy: null,
          portalWarehouses: [],
          credentials: [
            {
              token: '',
            },
            {
              'Client-Id': null,
              'Api-Key': '',
            },
          ],
          contacts: [
            {
              phone: '',
              email: '',
            },
          ],
        },

        currentSelected: null,

        inputs: [
          {
            value: '',
            type: 'text',
            label: 'Название',
            name: 'name',
            placeholder: 'Наименование магазина',
          },
          {
            value: '',
            type: 'text',
            label: 'Мин. кол-во остатка',
            name: 'min',
            placeholder: 'Введите число (или диапазон чисел)',
          },
          {
            selectMP: true,
            icon: true,
            value: '',
            type: 'text',
            label: 'Принадлежность к МП',
            name: 'belonging',
            placeholder: 'Выберите маркетплейс',
            items: {},
          },
          {
            multiSelectWh: true,
            icon: true,
            value: '',
            type: 'text',
            label: 'Подключить склад(ы)',
            name: 'warehouse',
            placeholder: 'Выбрать из списка',
            items: {},
          },
          {
            value: '',
            type: 'text',
            label: 'Ozon token',
            name: 'Ozon token',
            placeholder: 'token',
          },
          {
            value: '',
            type: 'text',
            label: 'Ozon token',
            name: 'Ozon token enter',
            placeholder: 'Введите token Ozon',
          },
          {
            value: '',
            type: 'text',
            label: 'Ozon client-ID',
            name: 'Ozon client-ID enter',
            placeholder: 'Введите client-ID',
          },
          {
            value: '',
            type: 'text',
            label: 'Ozon API key',
            name: 'Ozon API key enter',
            placeholder: 'Введите API key',
          },
        ],
      };
    },
    computed: {
      // ...mapGetters('localCategoriesItems', {
      //   categoriesItems: 'items',
      // }),
      // ...mapGetters('addCategory', {
      //   isAddCategoryPending: 'pending',
      // }),
      ...mapGetters('marketsItems', {
        marketplacesItems: 'getMarketplacesItems',
        warehousesItems: 'getPortalWarehousesItems',
      }),
      // isCheckedWaresouseItem() {
      //   console.log(Boolean(this.selectedWarehouseItems[this.currentSelectedWarehouseItem.id]));
      //   return Boolean(this.selectedWarehouseItems[this.currentSelectedWarehouseItem.id]);
      // },
    },
    watch: {
      // selectMenuItems(oldValue, newValue) {
      //   this.selectMenuItems = newValue;
      //   console.log(newValue);
      //   this.inputs[0].items = newValue;
      // },
    },
    methods: {
      ...mapActions('marketsItems', ['GET_ITEMS_MARKETS']),
      // ...mapActions('localCategoriesItems', ['GET_ITEMS_CATEGORIES']),
      // ...mapActions('addCategory', ['SEND_CATEGORY_DATA']),
      onChangePickedMarketplace($event) {
        console.log($event);
        this.pickedMarketplace = $event;
      },

      async onSubmit() {
        // console.log(this.dataForCreateCategory);
        // await this.SEND_CATEGORY_DATA(this.dataForCreateCategory);
        // this.$emit('onCloseSlidingBlock');
        // await this.GET_ITEMS_CATEGORIES();
      },

      onInputName(e) {
        this.dataCreateMarket.name = e.target.value;
      },
      onInputDescription(e) {
        this.dataCreateMarket.description = e.target.value;
      },

      // selectionItem(itemSelectMenu) {
      //   this.inputs[0].value = itemSelectMenu.name;
      //   this.currentSelected = itemSelectMenu.name;

      //   // this.dataForCreateCategory.name = itemSelectMenu.name;
      //   this.dataForCreateCategory.id = itemSelectMenu.id;
      // },
      setSelectedMarketplace(itemSelectMenu) {
        this.inputs[2].value = itemSelectMenu.name;

        this.dataCreateMarket.marketplace_id = itemSelectMenu.id;
        console.log(itemSelectMenu);
      },

      setWarehouseSelectedItems(emitData) {
        if (this.selectedWarehouseItems[emitData.item.id]) {
          delete this.selectedWarehouseItems[emitData.item.id];
        } else {
          this.selectedWarehouseItems[emitData.item.id] = emitData.item;
        }
      },

      removeWarehouseSelectedItems(item) {
        delete this.selectedWarehouseItems[item.id];
      },
    },

    async mounted() {
      await this.GET_ITEMS_MARKETS();
      this.inputs[2].items = this.marketplacesItems;
      this.inputs[3].items = this.warehousesItems;
    },
  };
</script>

<style lang="scss">
  .card-add-market {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 760px;
    height: 100%;
    padding: 40px 40px 20px;
    border-radius: 16px 0px 0px 16px;
    background: $white-color;

    &__body {
      flex: 1 1 auto;
      display: flex;
    }

    &__title {
      flex: 0 0 210px;
      margin-right: 80px;
      @extend %font-inter--400_32;
      color: $dark-color;
    }

    &__body-content {
      flex: 1 1 auto;
    }
    &__inputs {
      margin-bottom: 40px;
      @include mb(20px);
    }

    &__close {
      background: transparent;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      position: absolute;
      right: 10px;
      top: 10px;
      border-radius: 50%;
      &:hover {
        background: #eee;
      }
    }

    &__item {
      font-weight: 700;
      background: $blue-color;
      color: #fff;
    }

    &__item--active {
      background: green;
    }

    &__name {
      display: block;
      padding: 4px;
      font-family: 'Inter';
      font-style: normal;
      font-size: 14px;
      line-height: 24px;

      &:hover {
        background: #eee;
        color: $dark-color;
      }
    }
  }

  .card-add-market {
    &__input {
      .input__input {
        border-color: $border-light2;
      }
      .radio-button {
        justify-content: start;
        border: none;
      }
      .radio-button.radio-button--active {
        box-shadow: none;
      }
      .checkbox__label {
        display: flex;
        // padding: 12px 8px;
        align-items: center;
      }
    }

    &__buttons {
      display: flex;
    }

    &__button--bd {
      margin-right: 16px;
      .button {
        background: transparent;
        color: $blue-color;
      }
    }

    &__button--bg {
      .button__pending {
        width: 145.517px;
        height: 18.602px;
      }
    }

    &__bottom {
    }

    &__info {
    }
  }

  .info-card-add-market {
    &__item {
    }

    &__name {
    }

    &__value {
    }
  }
</style>
