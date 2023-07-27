<template>
  <section class="product-information">
    <div class="container">
      <div class="product-information__body">
        <div class="product-information__go-to">
          <div class="product-information__go-to-button">
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
                    d="M12.2559 6.07709C12.5814 6.40252 12.5814 6.93016 12.2559 7.2556L9.51184 9.99967L12.2559 12.7438C12.5814 13.0692 12.5814 13.5968 12.2559 13.9223C11.9305 14.2477 11.4028 14.2477 11.0774 13.9223L7.74408 10.5889C7.41864 10.2635 7.41864 9.73586 7.74408 9.41042L11.0774 6.07709C11.4028 5.75165 11.9305 5.75165 12.2559 6.07709Z"
                    fill="#335CFF"
                  />
                </svg>
              </span>
              <span class="button__text">К списку товаров</span>
            </VButton>
          </div>
        </div>
        <div class="product-information__content">
          <div class="product-information__info info-product">
            <div class="info-product__head head-info-product">
              <div class="head-info-product__title">
                <span class="head-info-product__title-icon"
                  ><svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12H16C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10H12Z"
                      fill="#0077FF"
                    />
                    <path
                      d="M11 8C11 7.44772 11.4477 7 12 7H16C16.5523 7 17 7.44772 17 8C17 8.55228 16.5523 9 16 9H12C11.4477 9 11 8.55228 11 8Z"
                      fill="#0077FF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM7 5H5V19H7L7 5ZM9 19L9 5H19V19H9Z"
                      fill="#0077FF"
                    />
                  </svg>
                </span>
                <h3 class="head-info-product__title-text">Информация о товаре</h3>
              </div>
              <div class="head-info-product__checkbox">
                <VCheckbox
                  :text="'Показать только обязательные атрибуты'"
                  textPosition="before"
                  :checkboxTypeToggle="true"
                />
              </div>
            </div>
            <ul class="info-product__list">
              <li
                class="info-product__item item-info-product"
                v-for="item in infoProductItems"
                :class="item.column ? 'item-info-product--column' : ''"
              >
                <div class="item-info-product__info">
                  <span class="item-info-product__indicator"></span>
                  <p class="item-info-product__name">{{ item.name }}</p>

                  <span class="item-info-product__info-icon">
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
                        d="M10.0003 3.33366C6.31843 3.33366 3.33366 6.31843 3.33366 10.0003C3.33366 13.6822 6.31843 16.667 10.0003 16.667C13.6822 16.667 16.667 13.6822 16.667 10.0003C16.667 6.31843 13.6822 3.33366 10.0003 3.33366ZM1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003ZM9.12549 6.58366C9.12549 6.12342 9.49858 5.75033 9.95882 5.75033H10.0422C10.5024 5.75033 10.8755 6.12342 10.8755 6.58366V6.66699C10.8755 7.12723 10.5024 7.50033 10.0422 7.50033H9.95882C9.49858 7.50033 9.12549 7.12723 9.12549 6.66699V6.58366ZM10.0003 8.33366C10.4606 8.33366 10.8337 8.70676 10.8337 9.16699L10.8337 13.3337C10.8337 13.7939 10.4606 14.167 10.0003 14.167C9.54009 14.167 9.16699 13.7939 9.16699 13.3337L9.16699 9.16699C9.16699 8.70676 9.54009 8.33366 10.0003 8.33366Z"
                        fill="#C2C9D2"
                      />
                    </svg>
                  </span>
                </div>
                <div class="item-info-product__tool">
                  <VSelect
                    v-if="item.toolOpts.select === true"
                    :opts="item.toolOpts"
                  />
                  <VTextEditorQuillPlugin v-else-if="item.toolOpts.textEditor === true" />
                  <VRadioButtonList
                    v-else-if="item.toolOpts.radio === true"
                    :items="item.toolOpts.radioButtonsItems"
                    :name="item.name"
                    :currentPicked="currentPicked"
                    @changePicked="changePicked($event)"
                  />
                  <VTagList
                    v-else-if="item.toolOpts.tagList === true"
                    :items="item.toolOpts.tagListItems"
                  />
                  <VInput
                    v-else
                    :opts="item.toolOpts"
                  ></VInput>
                  <span class="item-info-product__tool-icon">
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
                        d="M10.0003 3.33366C6.31843 3.33366 3.33366 6.31843 3.33366 10.0003C3.33366 13.6822 6.31843 16.667 10.0003 16.667C13.6822 16.667 16.667 13.6822 16.667 10.0003C16.667 6.31843 13.6822 3.33366 10.0003 3.33366ZM1.66699 10.0003C1.66699 5.39795 5.39795 1.66699 10.0003 1.66699C14.6027 1.66699 18.3337 5.39795 18.3337 10.0003C18.3337 14.6027 14.6027 18.3337 10.0003 18.3337C5.39795 18.3337 1.66699 14.6027 1.66699 10.0003ZM9.12549 6.58366C9.12549 6.12342 9.49858 5.75033 9.95882 5.75033H10.0422C10.5024 5.75033 10.8755 6.12342 10.8755 6.58366V6.66699C10.8755 7.12723 10.5024 7.50033 10.0422 7.50033H9.95882C9.49858 7.50033 9.12549 7.12723 9.12549 6.66699V6.58366ZM10.0003 8.33366C10.4606 8.33366 10.8337 8.70676 10.8337 9.16699L10.8337 13.3337C10.8337 13.7939 10.4606 14.167 10.0003 14.167C9.54009 14.167 9.16699 13.7939 9.16699 13.3337L9.16699 9.16699C9.16699 8.70676 9.54009 8.33366 10.0003 8.33366Z"
                        fill="#C2C9D2"
                      />
                    </svg>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="product-information__nav nav-product-information">
          <div class="nav-product-information__nav">
            <VNavVertical />
          </div>
          <div class="nav-product-information__button">
            <VButton>Сохранить изменения</VButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VSlidingBlockSlotUIFC from '@/components/UI-FC/VSlidingBlockSlotUIFC.vue';
  import VButton from '@/components/UI/VButton.vue';
  import VInput from '@/components/UI/VInput.vue';
  import VCardAddMarket from '@/components/cards/VCardAddMarket.vue';
  import VNomenclatureTable from '@/components/modules/VNomenclatureTable.vue';
  import VSelect from '@/components/UI/VSelect.vue';
  import VCheckbox from '@/components/UI/VCheckbox.vue';
  import VTagList from '@/components/UI/VTagList.vue';
  import VTextEditorQuillPlugin from '@/components/UI-plugins/VTextEditorQuillPlugin.vue';
  import VNavVertical from '@/components/UI/VNavVertical.vue';
  import VRadioButtonList from '@/components/UI/VRadioButtonList.vue';

  export default {
    name: 'VProductInformationSectionView',
    components: { VInput, VButton, VSlidingBlockSlotUIFC, VCardAddMarket, VNomenclatureTable, VSelect, VCheckbox, VTagList, VTextEditorQuillPlugin, VNavVertical, VRadioButtonList },
    data() {
      return {
        currentPicked: '10%',

        infoProductItems: [
          {
            name: 'Артикул товара',
            toolOpts: {
              type: 'text',
              name: 'product-article',
              value: '',
              placeholder: 'product-article',
            },
          },
          {
            name: 'Категория',
            toolOpts: {
              select: true,
              type: 'text',
              icon: true,
              name: 'product-category',
              value: '',
              placeholder: 'product-category',
            },
          },
          {
            name: 'Название',
            toolOpts: {
              type: 'textarea',
              // icon: true,
              name: 'product-name',
              value: '',
              placeholder: 'product-name',
            },
          },
          {
            name: 'Штрихкод',
            toolOpts: {
              type: 'text',
              name: 'product-name',
              value: '',
              placeholder: 'product-name',
            },
          },
          {
            name: 'НДС',
            toolOpts: {
              radio: true,

              radioButtonsItems: ['10%', '20%', 'Не облагается'],
            },
          },
          {
            name: 'Наименование бренда',
            toolOpts: {
              type: 'text',
              name: 'brand-name',
              value: '',
              placeholder: 'brand-name',
            },
          },
          {
            name: 'Наименование бренда',
            toolOpts: {
              tagList: true,
              tagListItems: ['ABSEL', 'Petronas', 'LiquiMoly', 'BOSCH', 'Varta'],
            },
          },
          {
            name: 'Аннотация',
            column: true,
            toolOpts: {
              textEditor: true,
            },
          },
        ],
      };
    },
    methods: {
      changePicked(newVariant) {
        console.log(newVariant, this.currentPicked);
        this.currentPicked = newVariant;
      },
    },
  };
</script>

<style lang="scss">
  .product-information {
    &__body {
      display: flex;
    }

    &__go-to {
      margin-right: 24px;
      .button {
        padding: 10px 16px 10px 24px;
        background: transparent;
        border: none;

        &__image {
        }

        &__text {
          color: #0077ff;
        }
      }
    }

    &__go-to-button {
    }

    &__content {
    }

    &__info {
    }

    &__nav {
    }
  }
  .container {
  }

  .info-product {
    width: 930px;
    padding: 24px;
    border-radius: 8px;
    background: var(--white, #fff);
    &__head {
      margin-bottom: 16px;
    }

    &__list {
    }

    &__item {
    }
  }
  .head-info-product {
    display: flex;
    padding: 4px 16px 4px 4px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: var(--gray-3, #f4f6f7);

    &__title {
      display: flex;
      align-items: center;
    }

    &__title-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      margin-right: 16px;
      border-radius: 6px;
      background: var(--white, #fff);
    }

    &__title-text {
      /* Title_H3 */
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 160% */
      color: var(--black, #292929);
    }

    &__checkbox {
      .checkbox-list {
        &__item {
          &:hover {
            background: transparent;
          }
        }
      }
      .checkbox__text {
        margin-right: 24px;
      }
    }
  }
  .item-info-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 1px solid #ebedf1;

    &--column {
      flex-direction: column;
      align-items: start;
      justify-content: start;
      border-bottom: none;

      & .ql-container {
        border-radius: 0 0 4px 4px;
      }
      & .ql-toolbar {
        border-radius: 4px 4px 0 0;
      }

      .item-info-product {
        &__info {
          margin-bottom: 16px;
        }
        &__info-icon {
          display: flex;
          align-items: center;
          margin-left: 8px;
        }
        &__tool {
          width: 100%;
          .text-editor-quill-plugin-wrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 300px;
          }
        }
        &__tool-icon {
          display: none;
        }
      }
    }

    &__info {
      display: flex;
      align-items: center;
      margin-right: 16px;
    }

    &__info-icon {
      display: none;
    }

    &__indicator {
      width: 8px;
      height: 8px;
      margin-right: 16px;
      border-radius: 50%;
      background: #3ebb6a;
    }

    &__name {
      color: var(--black, #292929);
      /* Body_L */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
    }

    &__tool {
      display: flex;
      width: 400px;

      .tag-list {
        min-height: 38px;
        border-radius: 4px;
        border: 1px solid var(--gray, #c2c9d2);
        background: #fff;
        padding: 6px;
      }
    }
    &__tool-icon {
      margin-top: 9px;
      margin-left: 8px;
    }
    &__tool-radio {
      display: flex;
      justify-content: end;
      width: 100%;
      @include mr(8px);
    }
    &__tool-radio-item {
    }
  }
  .nav-product-information {
    &__nav {
    }

    &__button {
    }
  }
</style>
