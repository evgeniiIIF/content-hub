<template>
  <div class="card-add-category">
    <button
      class="card-add-category__close"
      @click="$emit('onCloseMenu')"
    >
      <img
        src="@/assets/img/static/buttons-icon/Close_SM_20px.svg"
        alt="close"
      />
    </button>
    <div class="card-add-category__body">
      <h3 class="card-add-category__title">Добавить категорию</h3>
      <div class="card-add-category__body-content">
        <div class="card-add-category__inputs">
          <div
            class="card-add-category__input"
            v-for="input in inputs"
            :key="input.name"
          >
            <VSelect
              v-if="input.select"
              :opts="input"
            >
              <template #menu>
                <ul class="card-add-category__list">
                  <li
                    class="card-add-category__item"
                    v-for="itemSelectMenu in input.items"
                    :key="itemSelectMenu.name"
                  >
                    <span class="card-add-category__name">{{ itemSelectMenu.name }}</span>
                    <ul
                      v-if="itemSelectMenu.children_count"
                      class="card-add-category__list"
                    >
                      <li
                        class="card-add-category__item"
                        v-for="itemSelectMenu2 in itemSelectMenu.children"
                        :key="itemSelectMenu2.name"
                      >
                        <span class="card-add-category__name">{{ itemSelectMenu2.name }}</span>
                        <ul
                          v-if="itemSelectMenu2.children_count"
                          class="card-add-category__list"
                        >
                          <li
                            class="card-add-category__item"
                            v-for="itemSelectMenu3 in itemSelectMenu2.children"
                            :key="itemSelectMenu3.name"
                          >
                            <span class="card-add-category__name">{{ itemSelectMenu3.name }}</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </template>
            </VSelect>
            <VInput
              v-else
              :opts="input"
            />
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
    <!-- <div class="card-add-category__bottom">
      <div class="card-add-category__info info-card-add-category">
        <div class="info-card-add-category__item">
          <div class="info-card-add-category__name">Автор</div>
          <div class="info-card-add-category__value">Захар</div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  import VButton from '../UI/VButton.vue';
  import VInput from '../UI/VInput.vue';
  import VSelect from '../UI/VSelect.vue';
  import VSelect2 from '../UI/VSelect2.vue';

  export default {
    name: 'VCardAddCategory',
    components: { VInput, VButton, VSelect2, VSelect },
    data() {
      return {
        selectMenuItems: [],
        inputs: [
          {
            select: true,
            icon: true,
            type: 'text',
            label: 'Вложенность',
            name: 'nesting',
            placeholder: 'Выберите категорию из списка',
            items: {},
          },
          {
            type: 'text',
            label: 'Название категории',
            name: 'name',
            placeholder: 'Выберите категорию из списка',
          },
          {
            select: true,
            icon: true,
            type: 'text',
            label: 'Сопоставить Ozon категорию',
            name: 'ozon',
            placeholder: 'Выберите категорию из списка',
          },
          {
            select: true,
            icon: true,
            type: 'text',
            label: 'Сопоставить Aliexpress категорию',
            name: 'ali',
            placeholder: 'Выберите категорию из списка',
          },
          {
            type: 'textarea',
            value: 'Розничный магазин автомобильных запчастей. Специализация – масла и технические жидкости и многое другое',
            label: 'Описание /заметки',
            name: 'description',
            placeholder: 'Выберите категорию из списка',
          },
        ],
      };
    },
    watch: {
      // selectMenuItems(oldValue, newValue) {
      //   this.selectMenuItems = newValue;
      //   console.log(newValue);
      //   this.inputs[0].items = newValue;
      // },
    },
    methods: {
      async fetchData() {
        try {
          const url = 'http://localhost:3001/data';
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Ошибка сети при чтении файла JSON');
          }
          const jsonData = await response.json();
          this.selectMenuItems = jsonData;
          this.inputs[0].items = jsonData;
          // console.log(this.inputs[0].items);
        } catch (error) {
          console.error('Не удалось прочитать JSON файл:', error);
        }
      },
    },
    async created() {
      await this.fetchData();
      // console.log(this.data);
    },
  };
</script>

<style lang="scss">
  .card-add-category {
    position: relative;
    &__close {
      background: transparent;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      position: absolute;
      right: 10px;
      top: 10px;
      border-radius: 50%;
      &:hover {
        background: #eee;
      }
    }
    &__list {
      .card-add-category__list {
        background: #fff;

        .card-add-category__item {
          background: #fff;
          font-weight: 400;

          color: #292929;
        }

        .card-add-category__name {
          padding-left: 10px;
          color: #292929;

          &:hover {
            font-weight: 700;
          }
        }
        .card-add-category__list {
          .card-add-category__name {
            padding-left: 20px;
          }
        }
      }
    }

    &__item {
      font-weight: 700;
      background: #0077ff;
      color: #fff;
    }

    &__name {
      display: block;
      padding: 4px;
      font-family: 'Inter';
      font-style: normal;
      font-size: 14px;
      line-height: 24px;

      &:hover {
        background: #eee;
        color: #292929;
      }
    }
  }

  .card-add-category {
    display: flex;
    flex-direction: column;
    width: 760px;
    height: 100%;
    padding: 40px 40px 20px;
    border-radius: 16px 0px 0px 16px;
    background: #ffffff;

    &__top {
    }

    &__body {
      flex: 1 1 auto;
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
      margin-bottom: 40px;
      @include mb(20px);
    }

    &__input {
      .input__input {
        border-color: #c2c9d2;
      }
    }

    &__buttons {
      display: flex;
    }

    &__button--bd {
      margin-right: 16px;
      .button {
        background: transparent;
        color: #0077ff;
      }
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
