<!-- <VHeader v-if="$route.meta.showHeader !== false"/> -->

<template>
  <div class="wrapper">
    <VHeader v-if="isVisibleVHeader" />

    <VMain>
      <RouterView />
    </VMain>

    <VFooter v-if="isVisibleVFooter" />
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
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';

  import VHeader from './components/layout/VHeader.vue';
  import VMain from './components/layout/VMain.vue';
  import VFooter from './components/layout/VFooter.vue';

  export default {
    components: {
      VHeader,
      VMain,
      VFooter,
    },
    data() {
      return {};
    },
    methods: {},
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
