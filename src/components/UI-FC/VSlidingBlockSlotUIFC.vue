<!-- <VSlidingBlockSlotUIFC
:isOpenSlidingBlock="isOpenSlidingBlock"
:element="$refs.elem"
@onCloseSlidingBlock="isOpenSlidingBlock = false"
>
<VCardAddCategory
	ref="elem"
	@onCloseSlidingBlock="isOpenSlidingBlock = false"
/>
</VSlidingBlockSlotUIFC> -->
<template>
  <div
    class="sliding-block"
    :class="{ 'sliding-block--open': isOpenSlidingBlock }"
  >
    <div
      class="sliding-block__wrapper"
      ref="slidingBlockWrapper"
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
    props: {
      isOpenSlidingBlock: {
        type: Boolean,
      },
    },
    emits: ['onCloseSlidingBlock'],

    mixins: [bodyLockMixin],

    data() {
      return {
        slidingBlockWrapper: null,
      };
    },
    methods: {
      closeSlidingBlock(e) {
        this.$nextTick(() => {
          if (!this.slidingBlockWrapper.contains(e.target)) {
            this.$emit('onCloseSlidingBlock');
          }
        });
      },
    },
    watch: {
      isOpenSlidingBlock(newValue, oldValue) {
        if (newValue) {
          this.lockBody(false);
          this.slidingBlockWrapper = this.$refs.slidingBlockWrapper;
          document.addEventListener('click', this.closeSlidingBlock, true);
        } else {
          this.unlockBody(false);
          document.removeEventListener('click', this.closeSlidingBlock, true);
        }
      },
    },
  };
</script>

<style lang="scss">
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
    opacity: 0;
    background: rgba(54, 54, 54, 0.7);
    transition: opacity 0.3s ease 0s;

    &__wrapper {
      position: absolute;
      right: -100%;
      top: 0;
      height: 100%;
      transition: all 0.3s ease 0s;
    }

    &--open {
      right: 0;
      opacity: 1;
      transition: opacity 0.3s ease 0s;

      .sliding-block__wrapper {
        transition: all 0.2s ease 0s;
        right: 0;
      }
    }
  }
</style>
