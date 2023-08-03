<template>
  <div class="ozon-info-tab">
    <div
      class="ozon-info-tab__info"
      id="product-info"
    >
      <VInfoProductBlock />
    </div>
    <div
      class="ozon-info-tab__dimension-weight"
      id="dimensions-weight"
    >
      <VDimensionsWeight />
    </div>
    <div
      class="ozon-info-tab__warranty-documents"
      id="warranty-documents"
    >
      <VWarrantyDocuments />
    </div>
    <div
      class="ozon-info-tab__warranty-documents"
      id="markdown"
    >
      <VMarkdownBlock />
    </div>
    <div
      class="ozon-info-tab__upload-files"
      id="upload-files"
    >
      <VUploadFilesProductBlock />
    </div>
  </div>
</template>
<script>
  import VInfoProductBlock from '@/components/modules/VInfoProductBlock.vue';
  import VDimensionsWeight from '@/components/modules/VDimensionsWeight.vue';
  import VWarrantyDocuments from '@/components/modules/VWarrantyDocuments.vue';
  import VMarkdownBlock from '@/components/modules/VMarkdownBlock.vue';
  import VUploadFilesProductBlock from './VUploadFilesProductBlock.vue';

  export default {
    name: 'VOzonInfoTab',
    components: { VWarrantyDocuments, VDimensionsWeight, VInfoProductBlock, VMarkdownBlock, VUploadFilesProductBlock },
    data() {
      return {};
    },
    methods: {},
  };
</script>
<style lang="scss"></style>
