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

<!-- icon: true -->
<!-- <VInput
v-else
:opts="input"
@onInput="onInput($event, inputIndex)"
><svg
	width="20"
	height="20"
	viewBox="0 0 20 20"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M6.6665 3.33366C6.6665 2.41318 7.4127 1.66699 8.33317 1.66699H16.6665C17.587 1.66699 18.3332 2.41319 18.3332 3.33366V11.667C18.3332 12.5875 17.587 13.3337 16.6665 13.3337H13.3332V16.667C13.3332 17.5875 12.587 18.3337 11.6665 18.3337L3.33317 18.3337C2.4127 18.3337 1.6665 17.5875 1.6665 16.667L1.6665 8.33366C1.6665 7.41318 2.4127 6.66699 3.33317 6.66699H6.6665V3.33366ZM8.33317 6.66699H11.6665C12.587 6.66699 13.3332 7.41318 13.3332 8.33366V11.667H16.6665L16.6665 3.33366H8.33317V6.66699ZM11.6665 12.4995V8.33366H3.33317V16.667L11.6665 16.667V12.5011C11.6665 12.5009 11.6665 12.5006 11.6665 12.5003C11.6665 12.5001 11.6665 12.4998 11.6665 12.4995Z"
		fill="#335CFF"
	/>
</svg>
</VInput> -->

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
        :value="opts.value || value"
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
        v-if="opts.type === 'text' || opts.type === 'email' || opts.type === 'password'"
        class="input__input"
        :pattern="opts.pattern"
        :type="opts.type"
        :name="opts.name"
        :value="opts.value || value"
        :title="title"
        :readonly="opts.readonly"
        :index="index"
        :placeholder="opts.placeholder"
        :maxlength="opts.maxlength"
        autocomplete="off"
        @input="onInput"
        @focus="$emit('onFocus')"
        @change="$emit('onChange', $event)"
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
      value: {
        type: String,
      },
      title: {
        type: String,
      },
    },
    emits: ['onInput', 'onInputTel', 'onFocus', 'onChange'],

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
        // console.log(event.keyCode);

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
      border: 1px solid #c2c9d2;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
      color: #000;

      border-radius: 4px;
      background: $white-color;

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
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
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
