<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer__top top-footer">
          <div class="top-footer__left">
            <a
              href="#service"
              @click.prevent="goToAnchorFromLogoFooter"
              class="top-footer__logo"
            >
              <img
                src="@/assets/img/logo/Logo.svg"
                alt="logo"
              />
            </a>
            <div class="top-footer__nav">
              <VNav
                :menuItems="menuItems"
                @onGoToAnchor="goToAnchor"
              />
            </div>
          </div>
          <div class="top-footer__social"></div>
        </div>
        <div class="footer__copy copy-footer">
          <p class="copy-footer__text copy-footer__left">© ABS-autoservice, 2023</p>
          <button
            class="copy-footer__text copy-footer__right"
            @click="$emit('onShowDialogPrivacy')"
          >
            Политика конфиденциальности
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';

  import computedHeaderHeight from '@/mixins/computedHeaderHeight';
  import VLogo from '../UI/VLogo.vue';
  import VNav from '../UI/VNav.vue';

  export default {
    name: 'vFooter',
    components: { VLogo, VNav },
    mixins: [computedHeaderHeight],
    data() {
      return {};
    },
    computed: {},
    methods: {},
    async mounted() {},
  };
</script>

<style lang="scss">
  @import '@/assets/scss/mixins.scss';
  @import '@/assets/scss/smart-grid.scss';

  .footer {
    background: linear-gradient(180deg, #2a2a2a 0%, rgba(17, 18, 18, 0) 40%);

    &__body {
    }

    &__top {
      padding: 60px 0;
      border-bottom: 1px solid #2a2a2a;

      @include xl-block() {
        padding: 40px 0 20px;
      }
    }

    &__copy {
      padding: 16px 0;
    }
  }

  .top-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include xl-block() {
      width: 100%;

      flex-direction: column;
      align-items: flex-start;
    }

    &__left {
      display: flex;
      align-items: center;

      @include xl-block() {
        width: 100%;
        flex-direction: column;
        margin-bottom: 20px;
        align-items: flex-start;
      }
    }

    &__logo {
      margin-right: 93px;

      @include xl-block() {
        margin-right: 0;
        margin-bottom: 40px;
      }
    }

    &__nav {
      flex: 1 1 auto;

      @include xl-block() {
        width: 100%;
      }

      .nav {
        &__list {
          display: flex;
          @include mr(24px);

          @include xl-block() {
            flex-direction: column;
            @include mr(0px);
          }
        }

        &__item {
          @include xl-block() {
            border-top: 1px solid #2a2a2a;

            &:last-child {
              border-bottom: 1px solid #2a2a2a;
            }
          }
        }

        &__link {
          display: block;
          padding: 10px 0;

          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 150%;
          font-stretch: 100;
          color: #999999;

          transition: all 0.3s ease 0s;

          &:hover {
            transition: all 0.3s ease 0s;
            color: #ffffff;
          }
        }
      }
    }

    &__social {
      display: flex;

      @include mr(20px);

      .telegram,
      .whatsapp {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 12px;
        background: #00a19c;
        border-radius: 4px;
        border-radius: 4px;
        &:hover {
          background: darken($color: #00a19c, $amount: 2%);
        }
      }
    }
  }

  .copy-footer {
    display: flex;
    justify-content: space-between;

    @include sm-block() {
      flex-direction: column;
      @include mb(16px);
    }

    &__text {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 133%;
      color: #6b6f6e;
    }

    &__left {
    }

    &__right {
      background: transparent;
      border: none;
      text-align: left;
      text-decoration: underline;
      &:hover {
        text-decoration: none;
      }
    }
  }
</style>
