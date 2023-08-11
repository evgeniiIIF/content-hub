<!-- <VHeader v-if="$route.meta.showHeader !== false"/> -->

<template>
  <!-- <div class="wrapper"> -->
  <VHeader v-if="isVisibleVHeader" />

  <VMain>
    <RouterView
      :paginationNomenclatureItemsValue="paginationNomenclatureItemsValue"
      ref="nomenclatureComponent"
    />
  </VMain>

  <VFooter
    v-if="isVisibleVFooter"
    @onSetPaginationNomenclatureItemsValue="onSetPaginationNomenclatureItemsValue($event)"
  />
  <!-- <Transition name="fade">
      <VModalWindowUIFC
        v-if="showDialog"
        :showDialog="showDialog"
        @onShowDialogPrivacy="onShowDialogPrivacy"
        @onHideDialog="onHideDialog"
      >
        <VCardDialog
          v-if="!messageSent"
          @onHideDialog="onHideDialog"
          :opts="cardDialogData"
        />
        <VCardDialogSent
          v-else
          @onHideDialog="onHideDialog"
        />
      </VModalWindowUIFC>
    </Transition>
    <Transition name="fade">
      <VModalWindowUIFC
        v-if="showDialogPrivacy"
        :showDialog="showDialogPrivacy"
        @onHideDialog="onHideDialog"
      >
        <VCardDialogPrivacy @onHideDialog="onHideDialog" />
      </VModalWindowUIFC>
    </Transition> -->
  <!-- </div> -->
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  import VHeader from './components/layout/VHeader.vue';
  import VMain from './components/layout/VMain.vue';
  import VFooter from './components/layout/VFooter.vue';
  import extendsProtorype from './mixins/extendsProtorype';

  export default {
    mixins: [extendsProtorype],
    components: {
      VHeader,
      VMain,
      VFooter,
    },
    data() {
      return {
        paginationNomenclatureItemsValue: '',
      };
    },
    methods: {
      ...mapActions('nomenclatureItems', ['GET_ITEMS_NOMENCLATURE']),

      onSetPaginationNomenclatureItemsValue(paginationValue) {
        this.paginationNomenclatureItemsValue = paginationValue;
        this.GET_ITEMS_NOMENCLATURE(this.paginationNomenclatureItemsValue);
      },
    },
    computed: {
      ...mapGetters('login', {
        isAuthenticated: 'getAuthenticated',
      }),

      isVisibleVHeader() {
        let visible = this.$route.meta.showHeader !== false && this.isAuthenticated;
        return visible;
      },

      isVisibleVFooter() {
        let visible = this.$route.meta.showFooter !== false && this.isAuthenticated;
        return visible;
      },
    },
  };
</script>
<style lang="scss">
  #app {
    height: 100%;
    min-height: 100%;
  }

  .fade-enter-active {
    transition: all 0.3s ease 0s;
  }

  .fade-enter-from,
  .fade-leave-to {
    transition: all 0.3s ease 0s;

    opacity: 0;
  }
</style>
