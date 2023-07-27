<!-- <VRadioButtonList
:items="item.toolOpts.radioButtonsItems"
:name="item.name"
:currentPicked="currentPicked"
@changePicked="changePicked($event)"
/> -->

<template>
  <ul class="item-info-product__tool-radio">
    <li
      class="item-info-product__tool-radio-item"
      v-for="itemRadio in items"
      :key="itemRadio"
    >
      <VRadioButton
        :variant="itemRadio"
        :name="name"
        :currentPicked="currentPicked"
        @changePicked="changePicked($event)"
      ></VRadioButton>
    </li>
  </ul>
</template>

<script>
  import VRadioButton from './VRadioButton.vue';

  export default {
    name: 'VRadioButtonList',
    props: {
      name: {
        type: String,
        required: true,
      },
      items: {
        type: Array,
      },
      currentPicked: {
        type: String,
        required: true,
      },
    },
    emits: ['changePicked'],
    components: { VRadioButton },
    methods: {
      changePicked(newVariant) {
        console.log(newVariant);
        this.$emit('changePicked', newVariant);
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
