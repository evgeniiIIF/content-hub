<template>
  <div class="card-editing-category">
    <div class="card-editing-category__content">
      <div class="card-editing-category__top">
        <div class="card-editing-category__button-back">
          <RouterLink to="/">
            <VButton>
              <img
                src="@/assets/img/static/buttons-icon/Arrow_goBack.svg"
                alt="back"
              />
            </VButton>
          </RouterLink>
        </div>
        <h4 class="card-editing-category__title">Редактирование</h4>
      </div>
      <div class="card-editing-category__category-info info-card-editing-category">
        <div class="info-card-editing-category__title">категория</div>
        <div class="info-card-editing-category__name">Аккумуляторы и аксессуары</div>
      </div>
      <ul class="card-editing-category__tabs tabs-card-editing-category">
        <li
          class="tabs-card-editing-category__item"
          v-for="tab in tabs"
          :key="tab.step"
        >
          <div class="tab-card-editing-category">
            <div class="tab-card-editing-category__step">{{ tab.step }}</div>
            <div class="tab-card-editing-category__title">{{ tab.title }}</div>
            <div class="tab-card-editing-category__arrow">
              <img
                src="@/assets/img/static/arrows/Caret_Right_20px.svg"
                alt="arrow"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="card-editing-category__hints">
      <ul class="card-editing-category__hints-body">
        <li class="card-editing-category__hint">
          <div class="hint-card-editing-category">
            <div class="hint-card-editing-category__icon">
              <img
                src="@/assets/img/static/decorative-icon/Info_20px.svg"
                alt="info"
              />
            </div>
            <div class="hint-card-editing-category__text">Если еще не назначена(ы) категори МП. Сопоставте категории МП с локальной (из выподающего списка).</div>
          </div>
        </li>
        <li class="hint-card-editing-category__hint">
          <div class="hint-card-editing-category">
            <div class="hint-card-editing-category__icon">
              <img
                src="@/assets/img/static/decorative-icon/Info_20px.svg"
                alt="info"
              />
            </div>
            <div class="hint-card-editing-category__text">Если еще не назначена(ы) категори МП. Сопоставте категории МП с локальной (из выподающего списка).</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import VButton from '../UI/VButton.vue';

  export default {
    name: 'VCardEditingCategory',
    components: { VButton },
    data() {
      return {
        tabs: [
          {
            step: 'шаг 1',
            title: 'Общие данные',
          },
          {
            step: 'шаг 2',
            title: 'Локальные атрибуты',
          },
          {
            step: 'шаг 3',
            title: 'Сопоставить трибуты',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .card-editing-category {
    background: #ffffff;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    height: 100%;

    &__content {
      margin-bottom: auto;
    }
    &__top {
      padding: 20px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ebedf1;
    }

    &__button-back {
      margin-right: 34px;
      .button {
        padding: 8px 14px;
        background: transparent;
        border: 1px solid #ebedf1;
      }
    }

    &__title {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 125%;
      color: #292929;
    }

    &__category-info {
    }

    &__tabs {
    }

    &__hints {
      padding: 4px;
    }
    &__hints-body {
      padding: 16px;
      background: #f4f6f7;

      & > *:first-child {
        padding-bottom: 20px;
        border-bottom: 1px solid #ebedf1;
      }
      & > *:last-child {
        padding-top: 20px;
      }
    }

    &__hint {
    }

    &__icon {
    }

    &__text {
    }
  }
  .info-card-editing-category {
    display: flex;
    padding: 24px 20px;

    &__title {
      margin-right: 20px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 200%;
      color: #7e8d94;
    }

    &__name {
      padding: 0px 8px;
      background: #0077ff;
      border-radius: 4px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 171%;
      color: #ffffff;
    }
  }
  .tabs-card-editing-category {
    padding: 0 20px;

    & > * {
      border-bottom: 1px solid #ebedf1;
    }
    & > *:first-child {
      border-top: 1px solid #ebedf1;
    }

    &__item {
      padding: 4px 0;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        & .tab-card-editing-category {
          background: #ebedf1;
        }
      }
    }
  }
  .tab-card-editing-category {
    display: flex;
    align-items: center;
    padding: 8px 14px;

    &__step {
      margin-right: 20px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 167%;
      text-transform: uppercase;
      color: #0077ff;
    }

    &__title {
      margin-right: auto;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 171%;
      color: #292929;
    }

    &__arrow {
    }
  }
  .hint-card-editing-category {
    display: flex;
    align-items: center;

    &__icon {
      margin-right: 66px;
    }
    &__text {
      max-width: 329px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 167%;
      color: #292929;
    }
  }
</style>
