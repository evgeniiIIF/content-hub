<!-- <VButton>
	<span class="button__image">
	</span>
	<span class="button__text"></span>
</VButton> -->

<template>
  <component
    :class="classes"
    :is="tag"
  >
    <div
      v-if="pending"
      class="button__pending"
    >
      <div class="button__pending-preloader"></div>
    </div>
    <slot v-else></slot>
  </component>
</template>

<script>
  export default {
    props: {
      tag: {
        type: String,
        default: 'button',
      },
      pending: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      classes() {
        return ['button'];
      },
    },
  };
</script>

<style lang="scss">
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 22px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 133%;
    cursor: pointer;
    color: $white-color;
    border: 2px solid $blue-color;

    border-radius: 4px;
    background: $blue-color;
    &:hover {
      background: darken($color: #0077ff, $amount: 2%);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &__image {
      display: flex;
      align-items: center;
      margin-right: 8px;
    }

    .button__pending {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button__pending-preloader {
      width: 20px;
      height: 20px;
      border: 4px solid #fff;
      border-radius: 50%;
      border-left-color: transparent;
      animation: 1s infinite linear preloader-animation;
    }

    .button-with-icon__text {
      margin-right: 16px;
    }
  }

  @keyframes preloader-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
