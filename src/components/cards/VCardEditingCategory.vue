<template>
  <section class="card-editing-category">
    <div class="card-editing-category__content">
      <div class="card-editing-category__top">
        <div class="card-editing-category__button-back">
          <VButton>
            <img
              src="@/assets/img/static/buttons-icon/Arrow_goBack.svg"
              alt="back"
            />
          </VButton>
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
    <ul class="card-editing-category__hints">
      <li class="card-editing-category__hint">
        <div class="hint-card-editing-category">
          <div class="card-editing-category__icon">
            <img
              src="@/assets/img/static/decorative-icon/Info.svg"
              alt="info"
            />
          </div>
          <div class="card-editing-category__text">Если еще не назначена(ы) категори МП. Сопоставте категории МП с локальной (из выподающего списка).</div>
        </div>
      </li>
      <li class="card-editing-category__hint">
        <div class="hint-card-editing-category">
          <div class="card-editing-category__icon">
            <img
              src="@/assets/img/static/decorative-icon/Info.svg"
              alt="info"
            />
          </div>
          <div class="card-editing-category__text">Если еще не назначена(ы) категори МП. Сопоставте категории МП с локальной (из выподающего списка).</div>
        </div>
      </li>
    </ul>
  </section>
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
  @import '@/assets/scss/smart-grid.scss';

  .card-editing-category {
    background: #ffffff;
    border-radius: 4px;
    &__content {
      padding: 20px;
      margin-bottom: auto;
    }
    &__top {
      display: flex;
      align-items: center;
    }

    &__button-back {
      .button {
        background: transparent;
        border: 1px solid #ebedf1;
      }
    }

    &__title {
    }

    &__category-info {
    }

    &__tabs {
    }

    &__hints {
    }

    &__hint {
    }

    &__icon {
    }

    &__text {
    }
  }
  .info-card-editing-category {
    &__title {
    }

    &__name {
    }
  }
  .tabs-card-editing-category {
    &__item {
    }
  }
  .tab-card-editing-category {
    &__step {
    }

    &__title {
    }

    &__arrow {
    }
  }
  .hint-card-editing-category {
  }
</style>
