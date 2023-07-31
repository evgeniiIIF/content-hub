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
              d="M10.1057 2.69768C11.1973 1.76744 12.8027 1.76744 13.8943 2.69768L15.1153 3.73818C15.2627 3.86382 15.446 3.93976 15.6391 3.95517L17.2382 4.08278C18.6679 4.19686 19.8031 5.33211 19.9172 6.76175L20.0448 8.36085C20.0602 8.55395 20.1362 8.73727 20.2618 8.88471L21.3023 10.1057C22.2326 11.1973 22.2326 12.8027 21.3023 13.8943L20.2618 15.1153C20.1362 15.2627 20.0602 15.446 20.0448 15.6391L19.9172 17.2382C19.8031 18.6679 18.6679 19.8031 17.2382 19.9172L15.6391 20.0448C15.446 20.0602 15.2627 20.1362 15.1153 20.2618L13.8943 21.3023C12.8027 22.2326 11.1973 22.2326 10.1057 21.3023L8.88471 20.2618C8.73727 20.1362 8.55395 20.0602 8.36085 20.0448L6.76175 19.9172C5.33211 19.8031 4.19686 18.6679 4.08278 17.2382L3.95517 15.6391C3.93976 15.446 3.86382 15.2627 3.73818 15.1153L2.69768 13.8943C1.76744 12.8027 1.76744 11.1973 2.69768 10.1057L3.73818 8.88471C3.86382 8.73727 3.93976 8.55395 3.95517 8.36085L4.08278 6.76176C4.19686 5.33211 5.33211 4.19686 6.76175 4.08278L8.36085 3.95517C8.55395 3.93976 8.73727 3.86382 8.88471 3.73818L10.1057 2.69768ZM12.5971 4.21991C12.253 3.9267 11.747 3.9267 11.4029 4.21991L10.1819 5.26041C9.71418 5.65903 9.13258 5.89994 8.51995 5.94883L6.92085 6.07644C6.47023 6.1124 6.1124 6.47023 6.07644 6.92085L5.94883 8.51995C5.89994 9.13258 5.65903 9.71418 5.26041 10.1819L4.21991 11.4029C3.9267 11.747 3.9267 12.253 4.21991 12.5971L5.26041 13.8181C5.65903 14.2858 5.89994 14.8674 5.94883 15.4801L6.07644 17.0792C6.1124 17.5298 6.47023 17.8876 6.92085 17.9236L8.51995 18.0512C9.13258 18.1001 9.71418 18.341 10.1819 18.7396L11.4029 19.7801C11.747 20.0733 12.253 20.0733 12.5971 19.7801L13.8181 18.7396C14.2858 18.341 14.8674 18.1001 15.4801 18.0512L17.0792 17.9236C17.5298 17.8876 17.8876 17.5298 17.9236 17.0792L18.0512 15.4801C18.1001 14.8674 18.341 14.2858 18.7396 13.8181L19.7801 12.5971C20.0733 12.253 20.0733 11.747 19.7801 11.4029L18.7396 10.1819C18.341 9.71418 18.1001 9.13258 18.0512 8.51995L17.9236 6.92085C17.8876 6.47023 17.5298 6.1124 17.0792 6.07644L15.4801 5.94883C14.8674 5.89994 14.2858 5.65903 13.8181 5.26041L12.5971 4.21991ZM15.7071 9.29289C16.0976 9.68342 16.0976 10.3166 15.7071 10.7071L11.7071 14.7071C11.3166 15.0976 10.6834 15.0976 10.2929 14.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929C8.68342 10.9024 9.31658 10.9024 9.70711 11.2929L11 12.5858L14.2929 9.29289C14.6834 8.90237 15.3166 8.90237 15.7071 9.29289Z"
              fill="#0077FF"
            />
          </svg>
        </span>
        <h3 class="head-info-product__title-text">Гарантия и документы</h3>
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
    name: 'VWarrantyDocuments',
    components: { VInput, VButton, VSlidingBlockSlotUIFC, VCardAddMarket, VNomenclatureTable, VSelect, VCheckbox, VTagList, VTextEditorQuillPlugin, VNavVertical, VRadioButtonList },
    data() {
      return {
        currentPicked: '10%',

        infoProductItems: [
          {
            name: 'Гарантийный срок',
            toolOpts: {
              type: 'number',
              name: 'warranty-period',
              value: '',
              placeholder: 'warranty-period',
            },
          },
          {
            name: 'Годы, дни, месяцы, часы ???????',
            toolOpts: {
              type: 'number',
              name: 'placeholder',
              value: '',
              placeholder: 'placeholder',
            },
          },
          {
            name: 'Комментарий',
            toolOpts: {
              type: 'textarea',
              name: 'placeholder',
              value: '',
              placeholder: 'placeholder',
            },
          },
          {
            name: 'Номер документа на товар',
            toolOpts: {
              type: 'number',
              name: 'placeholder',
              value: '',
              placeholder: 'placeholder',
            },
          },
          {
            name: 'Код ТН ВЭД',
            toolOpts: {
              type: 'number',
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
