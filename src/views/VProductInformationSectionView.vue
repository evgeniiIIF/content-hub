<template>
  <section class="product-information">
    <div class="container">
      <div class="product-information__body">
        <div class="product-information__go-to">
          <div class="product-information__go-to-button">
            <VButton>
              <span class="button__image">
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
                    d="M12.2559 6.07709C12.5814 6.40252 12.5814 6.93016 12.2559 7.2556L9.51184 9.99967L12.2559 12.7438C12.5814 13.0692 12.5814 13.5968 12.2559 13.9223C11.9305 14.2477 11.4028 14.2477 11.0774 13.9223L7.74408 10.5889C7.41864 10.2635 7.41864 9.73586 7.74408 9.41042L11.0774 6.07709C11.4028 5.75165 11.9305 5.75165 12.2559 6.07709Z"
                    fill="#335CFF"
                  />
                </svg>
              </span>
              <span class="button__text">К списку товаров</span>
            </VButton>
          </div>
        </div>
        <div class="product-information__content">
          <div class="top">
            <div class="top__row">
              <div
                v-for="(value, key) in topButtons"
                class="top__button"
                :class="{ 'top__button--active': currentMarketName === key }"
                @click="setCurrentMarketName(key)"
              >
                <VButton>{{ key }}</VButton>
              </div>
            </div>
          </div>
          <component :is="currentMarketTab" />
        </div>
        <div class="product-information__nav nav-product-information">
          <div class="nav-product-information__body">
            <div class="nav-product-information__nav">
              <VNavVertical @onGoToAnchor="onGoToAnchor($event)" />
            </div>
            <div class="nav-product-information__button">
              <VButton>Сохранить изменения</VButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VButton from '@/components/UI/VButton.vue';
  import VNavVertical from '@/components/UI/VNavVertical.vue';
  import VOzonInfoTab from '@/components/modules/VOzonInfoTab.vue';

  import goToAnchorMix from '@/mixins/goToAnchor';

  export default {
    name: 'VProductInformationSectionView',
    mixins: [goToAnchorMix],

    components: { VButton, VNavVertical, VOzonInfoTab },
    data() {
      return {
        currentMarketName: 'Ozon',

        topButtons: {
          Ozon: 'VOzonInfoTab',
          Aliexpress: 'VAliexpressInfoTab',
          Яндекс: 'VYandexInfoTab',
        },
      };
    },
    methods: {
      onGoToAnchor(e) {
        this.goToAnchor(e);
      },
      setCurrentMarketName(key) {
        this.currentMarketName = key;
      },
    },
    computed: {
      currentMarketTab() {
        return this.topButtons[this.currentMarketName];
      },
    },
  };
</script>

<style lang="scss">
  .product-information {
    .top {
      display: inline-block;
      padding: 3px;
      border-radius: 4px;
      background: var(--white, #fff);

      &__row {
        display: flex;
        justify-content: start;
        margin-bottom: 0;
        @include mr(2px);
      }

      &__button {
        .button {
          padding: 4px 16px;
          /* Body_L */
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 171.429% */

          border-color: transparent;
          background: transparent;
          color: var(--black, #292929);
        }
      }
      &__button--active {
        .button {
          background: var(--blue, #07f);
          color: #fff;
        }
      }
    }

    &__body {
      display: flex;
      padding-left: 183px;
    }

    &__go-to {
      flex: 1 1 auto;
      position: fixed;
      width: max(183px, (100% - 1880px)/2 + 183px);
      left: 0;
      top: 68px;
      display: flex;
      justify-content: end;
      height: 100%;

      margin-right: 24px;
      padding: 24px 0;

      &:hover {
        background: rgba(0, 119, 255, 0.05);
        cursor: pointer;
      }

      .button {
        padding: 10px 16px 10px 24px;
        background: transparent;
        border: none;

        &__image {
        }

        &__text {
          color: #0077ff;
        }
      }
    }

    &__go-to-button {
      width: 183px;
    }

    &__content {
      padding: 24px 0;
      margin-right: 20px;
      margin-left: 24px;
      @include mb(16px);
    }

    &__info {
    }

    &__nav {
      // flex: 0 1 750px;
    }
  }
  .info-product {
    width: 930px;
    padding: 24px;
    border-radius: 8px;
    background: var(--white, #fff);
    &__head {
      margin-bottom: 16px;
    }

    &__list {
    }

    &__item {
      &:last-child {
        border-bottom: none;
      }
    }
  }
  .head-info-product {
    display: flex;
    padding: 4px 16px 4px 4px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: var(--gray-3, #f4f6f7);

    &__title {
      display: flex;
      align-items: center;
    }

    &__title-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      margin-right: 16px;
      border-radius: 6px;
      background: var(--white, #fff);
    }

    &__title-text {
      /* Title_H3 */
      font-family: Inter;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px; /* 160% */
      color: var(--black, #292929);
    }

    &__checkbox {
      .checkbox-list {
        &__item {
          &:hover {
            background: transparent;
          }
        }
      }
      .checkbox__text {
        margin-right: 24px;
      }
    }
  }

  .item-info-product {
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 16px;
    border-bottom: 1px solid #ebedf1;

    &--column {
      flex-direction: column;
      align-items: start;
      justify-content: start;
      border-bottom: none;

      & .ql-container {
        border-radius: 0 0 4px 4px;
      }
      & .ql-toolbar {
        border-radius: 4px 4px 0 0;
      }

      .item-info-product {
        &__info {
          margin-bottom: 16px;
        }
        &__info-icon {
          display: flex;
          align-items: center;
          margin-left: 8px;
        }
        &__tool {
          width: 100%;
          .text-editor-quill-plugin-wrapper {
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 300px;
          }
        }
        &__tool-icon {
          display: none;
        }
      }
    }

    &__info {
      display: flex;
      align-items: center;
      margin-right: 16px;
    }

    &__info-icon {
      display: none;
    }

    &__indicator {
      width: 8px;
      height: 8px;
      margin-right: 16px;
      border-radius: 50%;
      background: #3ebb6a;
    }

    &__name {
      color: var(--black, #292929);
      /* Body_L */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
    }

    &__tool {
      display: flex;
      width: 400px;

      .tag-list {
        min-height: 38px;
        border-radius: 4px;
        border: 1px solid var(--gray, #c2c9d2);
        background: #fff;
        padding: 6px;
      }
    }
    &__tool-icon {
      margin-top: 9px;
      margin-left: 8px;
    }
    &__tool-radio {
      display: flex;
      justify-content: end;
      width: 100%;
      @include mr(8px);
    }
    &__tool-radio-item {
    }
  }

  .nav-product-information {
    &__body {
      padding: 24px 0;
      position: sticky;
      top: 68px;
    }
    &__nav {
      margin-bottom: 24px;
    }

    &__button {
    }
  }
</style>
