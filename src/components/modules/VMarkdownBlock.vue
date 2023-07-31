<template>
  <div class="info-product">
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
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.1222 11.8606L12.0037 12.7421C12.3799 13.1183 12.7715 13.3744 13.1784 13.5106C13.5876 13.6489 13.9948 13.6647 14.4 13.5577C14.8075 13.453 15.1897 13.2222 15.5467 12.8652C15.8865 12.5254 16.1146 12.1503 16.2312 11.74C16.3477 11.3296 16.3442 10.9124 16.2206 10.4885C16.0992 10.0667 15.8471 9.6644 15.4642 9.28154L13.5811 7.39841L10.9848 9.99473L10.3103 9.32027L9.44611 10.1845L10.1206 10.8589L9.81772 11.1618L9.14326 10.4873L8.27905 11.3515L8.95351 12.026L8.20379 12.7757L9.20546 13.7774L9.95518 13.0277L11.0203 14.0928L11.8845 13.2286L10.8194 12.1634L11.1222 11.8606ZM11.9864 10.9964L12.8445 11.8545C13.0515 12.0615 13.252 12.1905 13.4458 12.2415C13.6418 12.2948 13.8305 12.2865 14.0117 12.2165C14.1954 12.1442 14.3685 12.0267 14.531 11.8642C14.691 11.7042 14.8075 11.5276 14.8803 11.3346C14.9579 11.1413 14.976 10.9428 14.9349 10.7391C14.8984 10.5352 14.7866 10.3398 14.5997 10.1528L13.7149 9.26798L11.9864 10.9964Z"
              fill="#0077FF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M21.0959 11.7559L20.9973 2.97464L12.216 2.87598L2.5467 12.5452C1.75657 13.3354 1.75657 14.6164 2.5467 15.4066L8.56533 21.4252C9.35546 22.2153 10.6365 22.2153 11.4266 21.4252L21.0959 11.7559ZM18.9964 4.97554L19.0632 10.9273L9.99599 19.9945L3.97736 13.9759L13.0446 4.90867L18.9964 4.97554Z"
              fill="#0077FF"
            />
          </svg>
        </span>
        <h3 class="head-info-product__title-text">Уценка</h3>
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
    name: 'VMarkdownBlock',
    components: { VInput, VButton, VSlidingBlockSlotUIFC, VCardAddMarket, VNomenclatureTable, VSelect, VCheckbox, VTagList, VTextEditorQuillPlugin, VNavVertical, VRadioButtonList },
    data() {
      return {
        currentPicked: '10%',

        infoProductItems: [
          {
            name: 'Тип уценки',
            toolOpts: {
              select: true,
              type: 'text',
              name: 'placeholder',
              value: '',
              placeholder: 'placeholder',
            },
          },
          {
            name: 'Внешний вид',
            toolOpts: {
              select: true,
              type: 'text',
              name: 'placeholder',
              value: '',
              placeholder: 'placeholder',
            },
          },
          {
            name: 'Описание состояния',
            toolOpts: {
              type: 'textarea',
              name: 'placeholder',
              value: '',
              placeholder: 'placeholder',
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
<style lang="scss"></style>
