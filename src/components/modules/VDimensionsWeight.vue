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
              d="M14.1212 2.80747C14.9022 2.02642 16.1686 2.02642 16.9496 2.80747L21.1922 7.05011C21.9733 7.83115 21.9733 9.09748 21.1922 9.87853L9.87853 21.1922C9.09748 21.9733 7.83115 21.9733 7.05011 21.1922L2.80747 16.9496C2.02642 16.1686 2.02642 14.9022 2.80747 14.1212L8.45669 8.47195C8.4592 8.46939 8.46173 8.46683 8.46428 8.46428C8.46683 8.46173 8.46939 8.4592 8.47195 8.45669L14.1212 2.80747ZM9.17143 10.5856L10.5856 11.9998C10.9761 12.3903 11.6093 12.3903 11.9998 11.9998C12.3903 11.6093 12.3903 10.9761 11.9998 10.5856L10.5856 9.17143L11.9998 7.75727L13.4142 9.17169C13.8047 9.56221 14.4379 9.56221 14.8284 9.17169C15.219 8.78116 15.219 8.148 14.8284 7.75748L13.414 6.34306L15.5354 4.22168L19.778 8.46432L8.46432 19.778L4.22168 15.5354L6.34306 13.414L7.75747 14.8284C8.148 15.219 8.78116 15.219 9.17169 14.8284C9.56221 14.4379 9.56221 13.8047 9.17169 13.4142L7.75727 11.9998L9.17143 10.5856Z"
              fill="#0077FF"
            />
          </svg>
        </span>
        <h3 class="head-info-product__title-text">Габариты и вес в упаковке</h3>
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
    name: 'VDimensionsWeight',
    components: { VInput, VButton, VSlidingBlockSlotUIFC, VCardAddMarket, VNomenclatureTable, VSelect, VCheckbox, VTagList, VTextEditorQuillPlugin, VNavVertical, VRadioButtonList },
    data() {
      return {
        currentPicked: '10%',

        infoProductItems: [
          {
            name: 'Длина упаковки, мм',
            toolOpts: {
              type: 'number',
              name: 'product-length',
              value: '',
              placeholder: 'product-length',
            },
          },
          {
            name: 'Ширина упаковки, мм',
            toolOpts: {
              type: 'number',
              name: 'product-width',
              value: '',
              placeholder: 'product-width',
            },
          },
          {
            name: 'Высота упаковки, мм',
            toolOpts: {
              type: 'number',
              name: 'product-height',
              value: '',
              placeholder: 'product-height',
            },
          },
          {
            name: 'Вес с упаковкой, г',
            toolOpts: {
              type: 'number',
              name: 'product-weight',
              value: '',
              placeholder: 'product-weight',
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
