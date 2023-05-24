<template>
  <div class="card-add-category">
    <!-- <div class="card-add-category__top">
    </div> -->
    <div class="card-add-category__body">
      <h3 class="card-add-category__title">Добавить категорию</h3>
      <div class="card-add-category__body-content">
        <div class="card-add-category__inputs">
          <div
            class="card-add-category__input"
            v-for="inputOpts in inputs"
          >
            <VInput :opts="inputOpts" />
          </div>
        </div>
        <div class="card-add-category__buttons">
          <div class="card-add-category__button--bd">
            <VButton>Отменить</VButton>
          </div>
          <div class="card-add-category__button--bg">
            <VButton>Сохранить изменения</VButton>
          </div>
        </div>
      </div>
    </div>
    <div class="card-add-category__bottom">
      <div class="card-add-category__info info-card-add-category">
        <div class="info-card-add-category__item">
          <div class="info-card-add-category__name">Автор</div>
          <div class="info-card-add-category__value">Захар</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VButton from '../UI/VButton.vue';
  import VInput from '../UI/VInput.vue';

  export default {
    name: 'VCardAddCategory',
    components: { VInput, VButton },
    data() {
      return {
        inputs: [
          {
            type: 'text',
            label: 'Вложенность',
            name: 'enclosure',
            placeholder: 'Выберите категорию из списка',
          },
          {
            type: 'text',
            label: 'Название категории',
            name: 'enclosure',
            placeholder: 'Выберите категорию из списка',
          },
          {
            type: 'text',
            label: 'Сопоставить Aliexpress категорию',
            name: 'enclosure',
            placeholder: 'Выберите категорию из списка',
          },
          {
            value: 'Розничный магазин автомобильных запчастей. Специализация – масла и технические жидкости и многое другое',
            type: 'textarea',
            label: 'Описание /заметки',
            name: 'description',
            placeholder: 'Выберите категорию из списка',
          },
        ],
      };
    },
  };
</script>

<style lang="scss">
  @import '@/assets/scss/smart-grid.scss';

  .card-add-category {
    display: flex;
    flex-direction: column;
    width: 760px;
    padding: 40px 40px 20px;
    border-radius: 16px 0px 0px 16px;
    background: #ffffff;

    &__top {
    }

    &__body {
      display: flex;
    }

    &__title {
      flex: 0 0 210px;
      margin-right: 80px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: #292929;
    }

    &__body-content {
      flex: 1 1 auto;
    }
    &__inputs {
    }

    &__input {
    }

    &__buttons {
    }

    &__button--bd {
    }

    &__button--bg {
    }

    &__bottom {
    }

    &__info {
    }
  }
  .info-card-add-category {
    &__item {
    }

    &__name {
    }

    &__value {
    }
  }
</style>
