<template>
  <div
    class="v-dialog"
    ref="dialog"
    v-if="showDialog"
    @click="onHideDialog"
  >
    <div
      class="v-dialog__content"
      @click.stop
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import bodyLockMixin from '@/mixins/bodyLock';
  import computedHeaderHeight from '@/mixins/computedHeaderHeight';

  export default {
    name: 'VModalWindowUIFC',
    mixins: [computedHeaderHeight, bodyLockMixin],
    props: {
      showDialog: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      onHideDialog() {
        this.vDialog.style.paddingRight = '';
        this.$emit('onHideDialog');
      },
      // setTopPosition() {
      //   this.vDialog.style.top = this.getComputedHeaderHeight();
      // },
      setPaddingRight() {
        this.vDialog.style.paddingRight = this.getScrollWidth();
      },
    },
    computed: {
      vDialog() {
        return this.$refs.dialog;
      },
    },
    mounted() {
      this.setPaddingRight();
    },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/mixins.scss';
  @import '@/assets/scss/smart-grid.scss';

  // .v-dialog {
  // 	position: fixed;
  // 	top: 0;
  // 	left: 0;
  // 	right: 0;
  // 	bottom: 0;
  // 	z-index: 99;
  // 	display: flex;
  // 	justify-content: center;
  // 	align-items: center;
  // 	overflow-y: auto;

  // 	&__background {
  // 		position: absolute;
  // 		left: 0;
  // 		right: 0;
  // 		top: 0;
  // 		bottom: 0;
  // 		opacity: 0.9;
  // 		background: #18191B;

  // 	}

  // 	&__content {
  // 		position: relative;
  // 		width: 100%;
  // 	}

  // 	.container {
  // 		max-width: 996px;

  // 		@include xl-block() {
  // 			display: flex;
  // 			justify-content: center;
  // 		}
  // 	}

  // 	&__body {
  // 		position: relative;
  // 	}

  // 	&__blur {
  // 		position: absolute;
  // 		width: 155px;
  // 		height: 155px;
  // 		right: -30px;
  // 		top: -50px;
  // 		background: #00A19C;
  // 		filter: blur(105px);
  // 	}
  // }

  .v-dialog {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(17, 18, 18, 0.9);
    overflow-x: hidden;
    overflow-y: auto;

    &__content {
      position: relative;

      // flex: 0 1 100%;
      // width: 100%;

      @include lg-block() {
        margin: 100px 0;
        align-self: start;
      }
    }

    &__body {
      position: relative;
    }
  }
</style>
