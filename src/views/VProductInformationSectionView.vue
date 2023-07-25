<template>
  <section class="product-information">
    <div class="container">
      <div class="product-information__text-editor js-text-editor-quill"></div>
    </div>
  </section>
</template>

<script>
  // import Quill from 'quill/dist/quill.js';
  import 'quill/dist/quill.snow.css';
  import Quill from 'quill/dist/quill.min.js';

  import VSlidingBlockSlotUIFC from '@/components/UI-FC/VSlidingBlockSlotUIFC.vue';
  import VButton from '@/components/UI/VButton.vue';
  import VInput from '@/components/UI/VInput.vue';
  import VCardAddMarket from '@/components/cards/VCardAddMarket.vue';
  import VNomenclatureTable from '@/components/modules/VNomenclatureTable.vue';
  import VSelect from '@/components/UI/VSelect.vue';
  import VCheckbox from '@/components/UI/VCheckbox.vue';
  import VTagList from '@/components/UI/VTagList.vue';

  export default {
    name: 'VProductInformationSectionView',
    components: { VInput, VButton, VSlidingBlockSlotUIFC, VCardAddMarket, VNomenclatureTable, VSelect, VCheckbox, VTagList },
    data() {
      return {};
    },
    mounted() {
      var options = {
        // theme: 'snow',
        // modules: {},
        // debug: 'info',
        modules: {
          // toolbar: '#toolbar',
        },
        placeholder: 'Compose an epic...',
        readOnly: false,
        theme: 'snow',
      };

      var editorContainer = document.querySelector('.js-text-editor-quill');

      if (editorContainer) {
        var editor = new Quill(editorContainer, options);
      }
    },
  };
</script>

<style lang="scss"></style>
