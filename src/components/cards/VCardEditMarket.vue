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
      <h3 class="card-add-market__title">Редактировать магазин</h3>
      <form
        class="card-add-market__body-content"
        @submit.prevent="onSubmit"
      >
        <div class="card-add-market__inputs">
          <div
            class="card-add-market__input"
            v-for="(opts, index) in inputs"
          >
            <VSelect
              v-if="opts.selectMP"
              :opts="opts"
              ref="selectMarketplace"
            >
              <template #menu>
                <ul class="list">
                  <li
                    class="list__item"
                    v-for="(itemSelectMenu, index) in inputs[2].items"
                    :key="itemSelectMenu.name"
                  >
                    <span
                      class="list__name"
                      :class="{ 'list__item--active': itemSelectMenu.name === currentSelected }"
                    >
                      <VRadioButton
                        :variant="itemSelectMenu.name"
                        name="marketplace"
                        :currentPicked="pickedMarketplace"
                        @changePicked="setSelectedMarketplace($event, itemSelectMenu)"
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
              @onRemoveSelectedItem="removeWarehouseSelectedItems($event, index)"
            >
              <template #menu>
                <VCheckboxListObj
                  :items="inputs[3].items"
                  :currentIsCheckedItems="selectedWarehouseItems"
                  @onChange="setWarehouseSelectedItems($event, index)"
                />
              </template>
            </VMultiSelect>
            <VInput
              v-else-if="opts.inputAli && pickedMarketplace === 'Aliexpress'"
              :opts="opts"
              @onInput="onInput($event, index, opts)"
            />
            <VInput
              v-else-if="opts.inputOzon && pickedMarketplace === 'Ozon'"
              :opts="opts"
              @onInput="onInput($event, index, opts)"
            />
            <VInput
              v-else-if="opts.name === 'name' || opts.name === 'min_stock_quantity'"
              :opts="opts"
              @onInput="onInput($event, index, opts)"
            />
          </div>
        </div>
        <div class="card-add-market__buttons">
          <div class="card-add-market__button--bd">
            <VButton>Отменить</VButton>
          </div>
          <div class="card-add-market__button--bg">
            <VButton type="submit">Сохранить изменения</VButton>
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
    props: {
      marketData: {
        type: Object,
      },
    },

    components: { VInput, VButton, VSelect, VMultiSelect, VRadioButton, VCheckboxListObj },
    data() {
      return {
        pickedMarketplace: '',
        selectedWarehouseItems: {},
        currentSelectedWarehouseItem: {},

        dataCreateMarket: {
          marketplace_id: null,
          name: '',
          min_stock_quantity: null,
          portalWarehouses: [],
          credentials: [],
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
            type: 'number',
            label: 'Мин. кол-во остатка',
            name: 'min_stock_quantity',
            placeholder: 'Введите число (или диапазон чисел)',
          },
          {
            selectMP: true,
            icon: true,
            value: '',
            marketplace_id: null,
            type: 'text',
            label: 'Принадлежность к МП',
            name: 'belonging',
            placeholder: 'Выберите маркетплейс',
            items: {},
          },
          {
            multiSelectWh: true,
            icon: true,
            value: [],
            type: 'text',
            label: 'Подключить склад(ы)',
            name: 'warehouse',
            placeholder: 'Выбрать из списка',
            items: {},
          },
          {
            inputAli: true,
            value:
              'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWxsZXJfaWQiOjEwNTYwMzE1MjUsInRva2VuX2lkIjoxNTY3fQ.hleh6hIOckMdVvVclRmDjZspMovJKCZbF91RfrOZtJsiUE_RZuFBzNrSNQUDQpwO97OpJDCXhS60UkuCu-xwRP2wha5d65FVAiEJxTeMxGoHzW8q3OLOn3zlwxNenpAczYlM_Zb2_E_xV1U-cNfrKydXPieuO19_eCPMP7m0UjHgkkYZUfdrcVUVK2pncU846aypypfMotDHzvguyyCF_kNNVvD7RSf-J-YkYoYTC0qoZC7lv7sfFbUk88-91sz0B-4U9n24xkK1K42HzxqgddSTug1LRmmErEU9gPFxfFZ1gVPHEIRhnl5GQ-oHwCb-0eqHe39rcfTzgi5kHxP8p647zFxcl-fRZQxV34elWzaWf-LtAbjC_qZyjONqBS2YhkRAinbfcLS-1SVVhLk8rQbxe5aLuho2la2pZNoRTgIwu3R1i7i-nz2-xrUmUXdHKz8OexCfJFStw341oP3PUONpg1nYsEAKW3n1VqMRgdLodPwYw_CuXWsJjbC7H2958TYweo2ucsRa49dXWcYS4ZYnoE_86YEwiszCEQkUgWvl538_qHedmskJjVgI-WiM-0KD_KrQYeQ9XR9zR0IkwZj5lrq-inTAGn38-BZxAUUH_m-tnmFNE4Saawm7x6-G4DzUIdlZ4xriYRRSSeM0TLnntDeN3KhVOBuHkIHN7c8',
            type: 'text',
            label: 'Ali token',
            name: 'token',
            placeholder: 'token',
          },
          {
            inputOzon: true,
            value: '108371',
            type: 'text',
            label: 'Ozon client-ID',
            name: 'Client-Id',
            placeholder: 'Введите client-ID',
          },
          {
            inputOzon: true,
            value: '3e9b5868-4a46-4094-bba4-69a3f015d5ad',
            type: 'text',
            label: 'Ozon API key',
            name: 'Api-Key',
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
      ...mapActions('addMarket', ['SEND_MARKET_DATA']),

      // ...mapActions('localCategoriesItems', ['GET_ITEMS_CATEGORIES']),
      // ...mapActions('addCategory', ['SEND_CATEGORY_DATA']),

      async onSubmit() {
        this.inputs.forEach((opts) => {
          if (opts.name === 'name') {
            this.dataCreateMarket.name = opts.value;
          }
          if (opts.name === 'min_stock_quantity') {
            this.dataCreateMarket.min_stock_quantity = opts.value;
          }
          if (opts.name === 'token' && this.dataCreateMarket.credentials[0].hasOwnProperty('token')) {
            this.dataCreateMarket.credentials[0].token = opts.value;
          }
          if (opts.name === 'Client-Id' && this.dataCreateMarket.credentials[0].hasOwnProperty('Client-Id')) {
            this.dataCreateMarket.credentials[0]['Client-Id'] = opts.value;
          }
          if (opts.name === 'Api-Key' && this.dataCreateMarket.credentials[0].hasOwnProperty('Api-Key')) {
            this.dataCreateMarket.credentials[0]['Api-Key'] = opts.value;
          }
          if (opts.name === 'warehouse') {
            this.dataCreateMarket.portalWarehouses = opts.value;
          }
          if (opts.name === 'belonging') {
            this.dataCreateMarket.marketplace_id = opts.marketplace_id;
          }
        });
        console.log(this.dataCreateMarket);
        await this.SEND_MARKET_DATA(this.dataCreateMarket);
        await this.GET_ITEMS_MARKETS();
        this.$emit('onCloseSlidingBlock');
      },

      onInput(e, index, opts) {
        this.inputs[index].value = e.target.value;
      },

      // selectionItem(itemSelectMenu) {
      //   this.inputs[0].value = itemSelectMenu.name;
      //   this.currentSelected = itemSelectMenu.name;

      //   // this.dataForCreateCategory.name = itemSelectMenu.name;
      //   this.dataForCreateCategory.id = itemSelectMenu.id;
      // },
      // setSelectedMarketplace(marketplaceItem) {
      //   // this.inputs[2].value = marketplaceItem.name;
      //   // this.dataCreateMarket.marketplace_id = marketplaceItem.id;
      //   // if (marketplaceItem.name === 'Aliexpress') {
      //   //   this.dataCreateMarket.credentials = [
      //   //     {
      //   //       token: '',
      //   //     },
      //   //   ];
      //   // }
      //   // if (marketplaceItem.name === 'Ozon') {
      //   //   this.dataCreateMarket.credentials = [
      //   //     {
      //   //       'Client-Id': null,
      //   //       'Api-Key': '',
      //   //     },
      //   //   ];
      //   // }
      // },

      setSelectedMarketplace($event, marketplaceRadioItem) {
        this.pickedMarketplace = $event;

        this.inputs[2].value = marketplaceRadioItem.name;

        this.inputs[2].marketplace_id = marketplaceRadioItem.id;

        if (marketplaceRadioItem.name === 'Aliexpress') {
          this.dataCreateMarket.credentials = [
            {
              token: '',
            },
          ];
        }
        if (marketplaceRadioItem.name === 'Ozon') {
          this.dataCreateMarket.credentials = [
            {
              'Client-Id': null,
              'Api-Key': '',
            },
          ];
        }
        this.$refs.selectMarketplace[0].closeMenuFromOuter();
      },

      setWarehouseSelectedItems(emitData, index) {
        if (this.selectedWarehouseItems[emitData.item.id]) {
          delete this.selectedWarehouseItems[emitData.item.id];
        } else {
          this.selectedWarehouseItems[emitData.item.id] = emitData.item;
        }
        // this.dataCreateMarket.portalWarehouses = Object.keys(this.selectedWarehouseItems);
        this.inputs[index].value = Object.keys(this.selectedWarehouseItems);
        console.log(this.inputs);
      },

      removeWarehouseSelectedItems(item, index) {
        delete this.selectedWarehouseItems[item.id];
        this.inputs[index].value = Object.keys(this.selectedWarehouseItems);
        console.log(this.inputs);
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
      .checkbox-list__item {
        padding: 0;
      }
      .checkbox__label {
        display: flex;
        padding: 12px 8px;
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
