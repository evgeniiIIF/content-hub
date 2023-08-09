<!-- <VRadioButton
:variant="itemRadio"
:name="name"
:currentPicked="currentPicked"
@changePicked="changePicked($event)"
></VRadioButton> -->

<template>
  <label
    class="radio-button"
    :class="variant === currentPicked ? 'radio-button--active' : ''"
  >
    <input
      class="radio-button__input"
      type="radio"
      :value="variant"
      :name="name"
      @change="changePicked"
    />
    <span class="radio-button__flag">
      <span class="radio-button__flag-inner"></span>
    </span>
    <span class="radio-button__title">{{ variant }}</span>
  </label>
</template>

<script>
  export default {
    name: 'VRadioButton',

    props: {
      name: {
        type: String,
        required: true,
      },
      variant: {
        type: String,
      },
      currentPicked: {
        type: String,
        required: true,
      },
    },
    // emits: ['changePicked'],
    methods: {
      changePicked() {
        // console.log(this.variant);
        this.$emit('changePicked', this.variant);
      },
    },
  };
</script>

<style lang="scss">
  .radio-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 8px 8px;
    cursor: pointer;
    border-radius: 8px;
    border: 2px solid var(--gray-3, #f4f6f7);

    &__input {
      opacity: 0;
      position: absolute;
      z-index: -1;
    }

    &__title {
      /* Body_L */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
      color: var(--black, #292929);
    }

    &__flag {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 20px;
      border-radius: 50%;
      width: 16px;
      height: 16px;
      border: 2px solid #7e8d94;
    }

    &__flag-inner {
      opacity: 0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #07f;
    }
  }

  .radio-button.radio-button--active {
    box-shadow: 0px 8px 16px rgba(34, 35, 36, 0.1);
    border-color: #07f;

    .radio-button__title {
      color: #000000;
    }

    .radio-button__flag {
      border-color: #07f;
    }

    .radio-button__flag-inner {
      opacity: 1;
    }
  }
</style>
