<template>
  <div class="login">
    <div class="container">
      <div class="login__body">
        <div class="login__form-wrapper">
          <form
            action="#"
            class="login__form"
            @submit.prevent="onSubmit($event)"
          >
            <h2 class="login__title">{{ loginFormItems.title }}</h2>
            <div
              class="login__input"
              v-for="opts in loginFormItems.inputs"
            >
              <VInput
                :opts="opts"
                @onInput="onInput($event)"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.74364 2.74408C3.06908 2.41864 3.59672 2.41864 3.92216 2.74408L17.2555 16.0774C17.5809 16.4028 17.5809 16.9305 17.2555 17.2559C16.9301 17.5814 16.4024 17.5814 16.077 17.2559L13.7305 14.9094C12.6181 15.4509 11.3543 15.8333 9.99957 15.8333C7.40827 15.8333 5.1369 14.4361 3.57521 13.1416C2.78254 12.4845 2.14313 11.8294 1.70157 11.3386C1.48031 11.0926 1.30746 10.8865 1.1886 10.7401C1.12914 10.6669 1.0831 10.6085 1.05118 10.5674C1.03521 10.5469 1.02277 10.5306 1.01394 10.519L1.00341 10.5051L1.00019 10.5008L0.999096 10.4994C0.998923 10.4991 0.998347 10.4984 1.66623 10C0.998347 9.50163 0.998452 9.50149 0.998564 9.50134L0.999456 9.50015L1.00121 9.49781L1.00663 9.49062L1.02508 9.4664C1.04074 9.44598 1.06307 9.41714 1.09186 9.38066C1.14943 9.30771 1.23291 9.20409 1.34053 9.07612C1.55556 8.82042 1.86809 8.46614 2.26389 8.06426C2.8961 7.42232 3.75347 6.64593 4.77711 5.95605L2.74364 3.92259C2.41821 3.59715 2.41821 3.06951 2.74364 2.74408ZM5.98095 7.15989C4.96136 7.80708 4.09198 8.58327 3.45135 9.23374C3.16355 9.52597 2.92504 9.78963 2.74306 10C2.80286 10.0691 2.86881 10.1441 2.94064 10.2239C3.34246 10.6706 3.92345 11.2655 4.63881 11.8584C6.09319 13.0639 7.98849 14.1667 9.99957 14.1667C10.8482 14.1667 11.6788 13.9706 12.4696 13.6486L11.0773 12.2562C10.7508 12.4124 10.385 12.5 9.99957 12.5C8.61885 12.5 7.49957 11.3807 7.49957 10C7.49957 9.61441 7.58723 9.24872 7.74337 8.92231L5.98095 7.15989ZM1.66623 10L0.998564 9.50134C0.777967 9.79697 0.77775 10.2027 0.998347 10.4984L1.66623 10ZM9.99957 5.83333C9.75526 5.83333 9.51261 5.84955 9.27197 5.88033C8.81546 5.93873 8.39803 5.61599 8.33964 5.15947C8.28124 4.70296 8.60398 4.28553 9.06049 4.22714C9.36804 4.18779 9.68137 4.16667 9.99957 4.16667C12.5909 4.16667 14.8622 5.56394 16.4239 6.85842C17.2166 7.51545 17.856 8.17058 18.2976 8.66141C18.5188 8.90737 18.6917 9.11349 18.8105 9.25988C18.87 9.33311 18.916 9.39151 18.948 9.4326C18.9639 9.45315 18.9764 9.46938 18.9852 9.48098L18.9957 9.49489L18.9989 9.49917L19 9.50063C19.0002 9.50086 19.0008 9.50163 18.3329 10C19.0008 10.4984 19.0007 10.4985 19.0006 10.4986L18.9991 10.5006L18.9963 10.5043L18.9873 10.5163C18.9836 10.5211 18.9793 10.5268 18.9742 10.5334C18.9688 10.5405 18.9625 10.5486 18.9555 10.5577C18.9283 10.5928 18.8891 10.6427 18.8386 10.7055C18.7375 10.8309 18.5905 11.008 18.402 11.2214C18.0256 11.6475 17.4801 12.2222 16.7999 12.8205C16.4543 13.1244 15.9278 13.0907 15.6238 12.7451C15.3199 12.3995 15.3536 11.8729 15.6992 11.569C16.3156 11.0268 16.8117 10.5042 17.1529 10.118C17.1891 10.077 17.2235 10.0377 17.2561 10C17.1963 9.93087 17.1303 9.85594 17.0585 9.77609C16.6567 9.32942 16.0757 8.73455 15.3603 8.14158C13.9059 6.93606 12.0106 5.83333 9.99957 5.83333ZM18.3329 10L19.0006 10.4986C19.2212 10.2029 19.2214 9.79726 19.0008 9.50163L18.3329 10Z"
                    fill="#7E8D94"
                  />
                </svg>
              </VInput>
            </div>
            <div class="login__checkbox">
              <VCheckbox
                :text="loginFormItems.checkbox"
                @onChange="rememberMe"
                :isChecked="isRemember"
              />
            </div>
            <div class="login__buttons">
              <div class="login__button--bg">
                <VButton type="submit">
                  {{ loginFormItems.buttons.signin }}
                </VButton>
              </div>
              <div class="login__button--tp">
                <VButton type="button">
                  {{ loginFormItems.buttons.forgotPassword }}
                </VButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VInput from '@/components/UI/VInput.vue';
  import VCheckbox from '@/components/UI/VCheckbox.vue';
  import VButton from '@/components/UI/VButton.vue';

  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'VLoginView',
    components: { VInput, VCheckbox, VButton },
    data() {
      return {
        isRemember: false,
        loginFormItems: {
          title: 'Авторизация',
          inputs: {
            email: {
              type: 'email',
              name: 'email',
              // value: 'example@example.com',
              value: '',
              label: 'E-mail',
              placeholder: 'placeholder',
            },
            password: {
              type: 'password',
              name: 'password',
              // value: 'password',
              value: '',
              label: 'Пароль',
              placeholder: 'placeholder',
              icon: true,
            },
          },
          checkbox: 'Запомнить меня на этом компьютере',
          buttons: {
            signin: 'Войти',
            forgotPassword: 'Забыли пароль?',
          },
        },
      };
    },
    methods: {
      ...mapActions('login', ['SEND_USER_DATA']),
      rememberMe(e) {
        this.isRemember = e;
        console.log(e);
      },

      onInput(e) {
        const input = e.target;
        this.loginFormItems.inputs[input.name].value = input.value;
        console.log(this.loginFormItems);
      },

      async onSubmit(e) {
        const loginData = {
          email: this.loginFormItems.inputs.email.value,
          password: this.loginFormItems.inputs.password.value,
        };
        await this.SEND_USER_DATA(loginData);
        console.log('loginData vLoadin');
        this.$router.push('/');
      },
    },
  };
</script>
<style lang="scss">
  .login {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #0077ff;

    .container {
      height: 100%;
    }

    &__body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    &__form-wrapper {
      width: 434px;
      padding: 24px 32px 32px 32px;
      border-radius: 8px;
      background: #fff;
    }

    &__form {
      @include mb(16px);
    }
    &__title {
      margin-bottom: 10px;
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
    }

    &__input {
    }

    &__checkbox {
    }

    &__buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__button--bg {
    }

    &__button--tp {
      margin-right: 24px;

      .button {
        border-color: transparent;
        background: transparent;
        padding: 0;
        color: #0077ff;
      }
    }
  }
</style>
