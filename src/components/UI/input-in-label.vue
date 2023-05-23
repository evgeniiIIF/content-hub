<template>
  <label class="input-in-label">
    <span class="input-in-label__label">{{ opts.label }}</span>
    <input class="input-in-label__input"
      :type="opts.type"
      :name="opts.name"
      :value="opts.value"
      :placeholder="opts.placeholder">
  </label>
</template>

<script>
export default {
  name: 'input-in-label',
  props: {
    opts: {
      type: Object,
    }
  }
}
</script>

<style lang='scss'>
.input-in-label {
  display: flex;
  flex-direction: column;

  &__label {
    margin-bottom: 5px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 125%;
    color: #FFFFFF;
  }

  &__input {
    padding: 16px;
    outline: none;
    border: none;
    border-radius: 4px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    background: #E9EAEC;
    color: #27282A;

    &::placeholder {
      color: #63636F;
    }
  }
}
</style>