<!-- @input="$parent.$emit('onInput', { value: $event.target.value, index: index })" -->
<!-- @input="$emit('onInput', { value: $event.target.value, index: index })" -->

<!-- <VInput :opts="{ label: 'label', type: 'text', value: 'Mersedes', name: 'auto', placeholder: 'Введите данные автомобиля' }" /> -->
<!-- or -->
<!-- inputOpts: {
    textarea: true,
    cols: 30,
    rows: 5,
    label: "Комментарий",
    type: "textarea",
    name: "problem",
    placeholder: "Опишите проблему",
}, -->
<template>
  <label class="input">
    <span
      v-if="opts.label"
      class="input__label"
    >
      {{ opts.label }}
    </span>
    <span class="input__field">
      <input
        v-if="opts.type === 'tel'"
        class="input__input"
        :type="opts.type"
        :name="opts.name"
        :value="opts.value"
        :index="index"
        :placeholder="opts.placeholder"
        autocomplete="off"
        @input="onInputTel"
        @keydown="handleKeyDown"
        @focus="onFocus"
        @blur="onBlur"
        @unfocus="onUnfocus"
      />
      <textarea
        v-if="opts.type === 'textarea'"
        :type="opts.type"
        :value="opts.value"
        :name="opts.name"
        :cols="opts.cols"
        :rows="opts.rows"
        :placeholder="opts.placeholder"
        :maxlength="opts.maxlength"
        @input="onInput"
        class="input__input"
      >
      </textarea>
      <input
        v-if="opts.type === 'text'"
        class="input__input"
        :pattern="opts.pattern"
        :type="opts.type"
        :name="opts.name"
        :value="opts.value"
        :index="index"
        :placeholder="opts.placeholder"
        :maxlength="opts.maxlength"
        autocomplete="off"
        @input="onInput"
      />

      <span
        class="input__icon"
        v-if="opts.icon"
      >
        <slot> </slot>
      </span>
    </span>
  </label>
</template>

<script>
  export default {
    name: 'VInput',
    props: {
      opts: {
        type: Object,
      },
      index: {
        type: Number,
      },
    },
    emits: ['onInput', 'onInputTel'],

    data() {
      return {
        template: '+7 (***) ***-**-**',
        str: '',
        arrayChars: [],
        numbersObj: {},
        backSpace: false,
      };
    },
    methods: {
      onFocus(e) {
        if (e.target.value.length < 4) {
          e.target.value = '+7 (';
        }
      },
      onBlur(e) {
        if (e.target.value.length <= 4) {
          e.target.value = '';
        }
      },
      handleKeyDown(event) {
        console.log(event.keyCode);

        if (event.keyCode === 8) {
          this.backSpace = true;
        } else {
          this.backSpace = false;
        }
        if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode !== 8 && event.keyCode !== 9 && (event.keyCode < 37 || event.keyCode > 40) && (event.keyCode < 96 || event.keyCode > 105)) {
          event.preventDefault();
        }
      },

      onInput(e) {
        this.$emit('onInput', e);
      },

      onInputTel(e) {
        let cursorPosition = e.target.selectionStart;
        let currentSymbol = e.target.value[cursorPosition - 1];
        const numbers = numbersOfPhone();

        if (isNaN(+currentSymbol)) {
          currentSymbol = '';
        }

        if (cursorPosition < 4) {
          e.target.value = '+7 (';
        }

        function numbersOfPhone() {
          const string = e.target.value;
          const digitsArray = string.match(/\d+/g);
          const str = digitsArray.join('');
          const result = str.split('');
          return result;
        }

        if ((!isNaN(+currentSymbol) && !this.backSpace && cursorPosition == e.target.value.length) || numbers.length >= 11) {
          let starIndex = this.template.indexOf('*', cursorPosition);
          if (numbers.length >= 11) {
            starIndex = this.template.length;
          }

          this.arrayChars = this.template.split('');
          this.str = '';

          for (let j = 1, i = 0; i < starIndex; i++) {
            if (this.arrayChars[i] === '*') {
              this.str += numbers[j];
              j += 1;
            } else {
              this.str += this.arrayChars[i];
            }
          }

          if (starIndex !== -1) {
            e.target.value = this.str;
          }

          this.$emit('onInput', e);
        } else {
          this.$emit('onInput', e);
        }
      },
    },
  };
</script>

<style lang="scss">
  .input {
    width: 100%;

    &__label {
      margin-bottom: 4px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 133%;
      color: #999999;
    }

    &__field {
      position: relative;
      display: flex;
      flex-direction: column;
    }

    &__input {
      padding: 8px 12px;
      outline: none;
      border: 1px solid #ffffff;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #000;

      border-radius: 4px;
      background: #ffffff;

      &::placeholder {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 167%;
        color: #bdbdbd;
      }
      &:focus {
        border-color: #bdbdbd;
      }
    }
    &__icon {
      position: absolute;
      left: 0;
      top: 0;
      width: 36px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
    }

    textarea {
      resize: none;
      height: 80px;
      overflow-y: auto;
    }

    textarea {
      scrollbar-width: none;
      /* for Firefox */
      -ms-overflow-style: none;
      /* for Internet Explorer and Edge */
      overflow: -moz-scrollbars-none;
      /* for older versions of Firefox */
    }

    textarea::-webkit-scrollbar {
      display: none;
      /* for Chrome and Safari */
    }
  }
</style>
