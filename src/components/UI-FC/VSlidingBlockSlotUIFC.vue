<!-- <VSlidingBlockSlotUIFC
:isOpenSlidingBlock="isOpenSlidingBlock"
:element="$refs.elem"
@onCloseMenu="isOpenSlidingBlock = false"
>
<VCardAddCategory
	ref="elem"
	@onCloseMenu="isOpenSlidingBlock = false"
/>
</VSlidingBlockSlotUIFC> -->
<template>
  <div
    class="sliding-block"
    :class="{ 'sliding-block--open': isOpenSlidingBlock }"
  >
    <div
      class="sliding-block__wrapper"
      ref="wrapper"
    >
      <!-- <slot></slot> -->
      <slot @click.stop></slot>
    </div>
  </div>
</template>

<script>
  import bodyLockMixin from '@/mixins/bodyLock';

  export default {
    name: 'VSlidingBlockSlotUIFC',
    mixins: [bodyLockMixin],

    props: {
      isOpenSlidingBlock: {
        type: Boolean,
      },
    },
    data() {
      return {
        wrapper: null,
      };
    },
    methods: {
      closeMenu(e) {
        this.$nextTick(() => {
          if (!this.wrapper.contains(e.target)) {
            this.$emit('onCloseMenu');
          }
        });
      },
    },
    watch: {
      isOpenSlidingBlock(newValue, oldValue) {
        if (newValue) {
          this.lockBody();
        } else {
          this.unlockBody();
        }
      },
    },

    mounted() {
      this.wrapper = this.$refs.wrapper;
      document.addEventListener('click', this.closeMenu, true);
    },

    beforeUnmount() {
      document.removeEventListener('click', this.closeMenu, true);
    },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/mixins.scss';
  @import '@/assets/scss/smart-grid.scss';
  $delay: 0.05s;
  $during: 0.3s;

  .sliding-block {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100%;
    z-index: 10000;

    display: flex;
    justify-content: flex-end;
    transition: all 0s ease 0.25s;

    background: rgba(54, 54, 54, 0.7);

    &__wrapper {
      position: absolute;
      right: -100%;
      top: 0;
      height: 100%;
      transition: all 0.3s ease 0s;
    }

    &--open {
      right: 0;
      transition: all 0s ease 0s;

      .sliding-block__wrapper {
        transition: all 0.3s ease 0s;

        right: 0;
      }
    }
  }
</style>
