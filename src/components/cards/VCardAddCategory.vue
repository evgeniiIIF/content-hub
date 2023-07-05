<template>
  <div class="card-add-category">
    <button
      class="card-add-category__close"
      @click="$emit('onCloseSlidingBlock')"
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
                    v-for="(itemSelectMenu, index) in input.items"
                    :key="itemSelectMenu.name"
                    @click.stop="selectionItem(itemSelectMenu.name)"
                  >
                    <span
                      class="card-add-category__name"
                      :class="{ 'card-add-category__item--active': itemSelectMenu.name === currentSelected }"
                      >{{ itemSelectMenu.name }}</span
                    >
                    <ul
                      v-if="itemSelectMenu.children_count"
                      class="card-add-category__list"
                    >
                      <li
                        class="card-add-category__item"
                        v-for="(itemSelectMenu2, index2) in itemSelectMenu.children"
                        :key="itemSelectMenu2.name"
                        @click.stop="selectionItem(itemSelectMenu2.name)"
                      >
                        <span
                          class="card-add-category__name"
                          :class="{ 'card-add-category__item--active': itemSelectMenu2.name === currentSelected }"
                          >{{ itemSelectMenu2.name }}</span
                        >
                        <ul
                          v-if="itemSelectMenu2.children_count"
                          class="card-add-category__list"
                        >
                          <li
                            class="card-add-category__item"
                            v-for="(itemSelectMenu3, index3) in itemSelectMenu2.children"
                            :key="itemSelectMenu3.name"
                            @click.stop="selectionItem(itemSelectMenu3.name)"
                          >
                            <span
                              class="card-add-category__name"
                              :class="{ 'card-add-category__item--active': itemSelectMenu3.name === currentSelected }"
                              >{{ itemSelectMenu3.name }}</span
                            >
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

    emits: ['onCloseSlidingBlock'],

    components: { VInput, VButton, VSelect2, VSelect },
    data() {
      return {
        // selectMenuItems: [],
        currentSelected: null,

        inputs: [
          {
            select: true,
            icon: true,
            value: '',
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
          // {
          //   select: true,
          //   icon: true,
          //   type: 'text',
          //   label: 'Сопоставить Ozon категорию',
          //   name: 'ozon',
          //   placeholder: 'Выберите категорию из списка',
          // },
          // {
          //   select: true,
          //   icon: true,
          //   type: 'text',
          //   label: 'Сопоставить Aliexpress категорию',
          //   name: 'ali',
          //   placeholder: 'Выберите категорию из списка',
          // },
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
          // this.selectMenuItems = jsonData;
          this.inputs[0].items = jsonData;
          // console.log(this.inputs[0].items);
        } catch (error) {
          console.error('Не удалось прочитать JSON файл:', error);
        }
      },
      selectionItem(payload) {
        this.inputs[0].value = payload;
        this.currentSelected = payload;
      },
    },

    async created() {
      await this.fetchData();
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

          color: $dark-color;
        }

        .card-add-category__item--active {
          background: green;
        }

        .card-add-category__name {
          padding-left: 10px;
          color: $dark-color;

          &:hover {
            font-weight: 700;
          }
        }
        .card-add-category__list {
          .card-add-category__name {
            padding-left: 20px;
          }
          .card-add-category__item--active {
            background: green;
          }
        }
      }
    }

    &__item {
      font-weight: 700;
      background: $blue-color;
      color: #fff;
    }

    &__item--active {
      background: green;
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
        color: $dark-color;
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
    background: $white-color;

    &__body {
      flex: 1 1 auto;
      display: flex;
    }

    &__title {
      flex: 0 0 210px;
      margin-right: 80px;
      @extend %font-inter--400_32;
      color: $dark-color;
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
        border-color: $border-light2;
      }
    }

    &__buttons {
      display: flex;
    }

    &__button--bd {
      margin-right: 16px;
      .button {
        background: transparent;
        color: $blue-color;
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
