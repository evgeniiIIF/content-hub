<template>
  <component
    :class="classes"
    :is="tag"
  >
    <slot></slot>
  </component>
</template>

<script>
  export default {
    props: {
      tag: {
        type: String,
        default: 'button',
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

    .button-with-icon__text {
      margin-right: 16px;
    }
  }
</style>
