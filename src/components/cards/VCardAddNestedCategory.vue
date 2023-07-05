<template>
  <div class="card-add-category-nested">
    <button
      class="card-add-category-nested__close"
      @click="$emit('onCloseSlidingBlock')"
    >
      <img
        src="@/assets/img/static/buttons-icon/Close_SM_20px.svg"
        alt="close"
      />
    </button>
    <div class="card-add-category-nested__top">
      <h3 class="card-add-category-nested__title">Добавить вложенную категорию</h3>
      <VBreadcrumbs :parentItemData="parentItemData" />
    </div>

    <div class="card-add-category-nested__body">
      <div
        class="card-add-category-nested__body-item"
        v-for="(bodyItem, bodyIndex) in bodyItems"
      >
        <div class="card-add-category-nested__inputs">
          <div
            class="card-add-category-nested__input"
            v-for="(input, inputIndex) in bodyItem"
            :key="input.name"
          >
            <VSelect
              v-if="input.select"
              :opts="input"
            >
              <template #menu>
                <ul class="card-add-category-nested__list">
                  <li
                    class="card-add-category-nested__item"
                    v-for="itemSelectMenu in input.items"
                    :key="itemSelectMenu.name"
                  >
                    <span class="card-add-category-nested__name">{{ itemSelectMenu.name }}</span>
                    <ul
                      v-if="itemSelectMenu.children_count"
                      class="card-add-category-nested__list"
                    >
                      <li
                        class="card-add-category-nested__item"
                        v-for="itemSelectMenu2 in itemSelectMenu.children"
                        :key="itemSelectMenu2.name"
                      >
                        <span class="card-add-category-nested__name">{{ itemSelectMenu2.name }}</span>
                        <ul
                          v-if="itemSelectMenu2.children_count"
                          class="card-add-category-nested__list"
                        >
                          <li
                            class="card-add-category-nested__item"
                            v-for="itemSelectMenu3 in itemSelectMenu2.children"
                            :key="itemSelectMenu3.name"
                          >
                            <span class="card-add-category-nested__name">{{ itemSelectMenu3.name }}</span>
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
              @onInput="onInput($event, bodyIndex, inputIndex)"
            />
          </div>
          <div
            v-if="bodyIndex === bodyItems.length - 1"
            class="card-add-category-nested__add-more-button"
            @click="addMore(bodyItem)"
          >
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
                    d="M9.99984 4.16699C10.4601 4.16699 10.8332 4.54009 10.8332 5.00033V9.16699H14.9998C15.4601 9.16699 15.8332 9.54009 15.8332 10.0003C15.8332 10.4606 15.4601 10.8337 14.9998 10.8337H10.8332V15.0003C10.8332 15.4606 10.4601 15.8337 9.99984 15.8337C9.5396 15.8337 9.1665 15.4606 9.1665 15.0003V10.8337H4.99984C4.5396 10.8337 4.1665 10.4606 4.1665 10.0003C4.1665 9.54009 4.5396 9.16699 4.99984 9.16699H9.1665V5.00033C9.1665 4.54009 9.5396 4.16699 9.99984 4.16699Z"
                    fill="#0077FF"
                  />
                </svg>
              </span>
              <span class="button__text">Добавить ещё</span>
            </VButton>
          </div>
          <div
            v-else
            class="card-add-category-nested__separator"
          >
            <span>
              <img
                src="@/assets/img/static/arrows/Chevron_Down_Duo_20px.svg"
                alt="arrows"
              />
            </span>
          </div>
        </div>
        <button
          :style="{ opacity: bodyIndex === 0 ? 0 : 1, 'pointer-events': bodyIndex === 0 ? 'none' : 'auto' }"
          class="card-add-category-nested__body-remove-button"
          @click="removeBodyItem(bodyIndex)"
        >
          <img
            src="@/assets/img/static/decorative-icon/Trash_Full_20px.png"
            alt="trash"
          />
        </button>
      </div>
    </div>
    <div class="card-add-category-nested__bottom">
      <div class="card-add-category-nested__buttons">
        <div class="card-add-category-nested__button--bd">
          <VButton>Отменить</VButton>
        </div>
        <div class="card-add-category-nested__button--bg">
          <VButton>Сохранить изменения</VButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VBreadcrumbs from '../UI/VBreadcrumbs.vue';
  import VButton from '../UI/VButton.vue';
  import VInput from '../UI/VInput.vue';
  import VSelect from '../UI/VSelect.vue';
  import VSelect2 from '../UI/VSelect2.vue';

  export default {
    name: 'VCardAddNestedCategory',
    props: {
      parentItemData: {
        type: Object,
      },
    },
    components: { VInput, VButton, VSelect2, VSelect, VBreadcrumbs },
    data() {
      return {
        selectMenuItems: [],
        bodyItems: [],
        inputs: [
          // {
          //   select: true,
          //   icon: true,
          //   type: 'text',
          //   label: 'Вложенность',
          //   name: 'nesting',
          //   placeholder: 'Выберите категорию из списка',
          //   items: {},
          // },
          {
            type: 'text',
            label: 'Название категории',
            name: 'name',
            // value: 'Аккумуляторы и аксессуары',
            value: '',
            placeholder: 'Название',
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
            // value: 'Розничный магазин автомобильных запчастей. Специализация – масла и технические жидкости и многое другое',
            value: '',
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
      onInput(e, bodyIndex, inputIndex) {
        this.bodyItems[bodyIndex][inputIndex].value = e.target.value;
      },
      addMore(bodyItem) {
        let inputs = JSON.parse(JSON.stringify(this.inputs));
        this.bodyItems.push(inputs);
      },
      removeBodyItem(bodyIndex) {
        this.bodyItems = this.bodyItems.filter((item, index) => index !== bodyIndex);
      },
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
    mounted() {
      this.addMore();
    },
  };
</script>

<style lang="scss">
  .card-add-category-nested {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 760px;
    height: 100%;
    padding: 40px 40px 20px;
    padding-right: 0;
    border-radius: 16px 0px 0px 16px;
    background: $white-color;

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
    &__body {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      // padding-right: 40px;
      // padding-top: 24px;
      padding: 24px 32px 0px 40px;
    }

    &__body-item {
      display: flex;
    }

    &__inputs {
      flex: 1 1 auto;
      margin-right: 30px;
      margin-bottom: 20px;
      @include mb(20px);
      display: flex;
      flex-direction: column;
    }

    &__body-remove-button {
      padding: 8px;
      margin-top: 16px;

      background: transparent;
      border: none;
      align-self: start;
    }
    &__title {
      flex: 0 0 210px;
      margin-right: 80px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 32px;
      color: $dark-color;
    }

    &__top {
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

    &__list {
      .card-add-category-nested__list {
        background: #fff;

        .card-add-category-nested__item {
          background: #fff;
          font-weight: 400;

          color: $dark-color;
        }

        .card-add-category-nested__name {
          padding-left: 10px;
          color: $dark-color;

          &:hover {
            font-weight: 700;
          }
        }
        .card-add-category-nested__list {
          .card-add-category-nested__name {
            padding-left: 20px;
          }
        }
      }
    }

    &__item {
      font-weight: 700;
      background: $blue-color;
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
        color: $dark-color;
      }
    }
  }

  .card-add-category-nested {
    width: 522px;
    padding: 0;

    &__top {
      padding: 40px;
      padding-bottom: 20px;
      border-bottom: 1px solid #f4f6f7;
    }
    &__title {
      margin-bottom: 4px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 160%;
      color: $dark-color;
    }
    &__add-more-button {
      align-self: center;
      margin-top: 20px;
      .button {
        background: transparent;
        color: $blue-color;
      }
    }
    &__separator {
      position: relative;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      span {
        display: block;
        width: 24px;
        height: 24px;
        padding: 4px;
        border-radius: 50%;
        background: $neutral-white1;
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        display: block;
        height: 1px;
        width: 100%;
        background: $neutral-white1;
      }
    }
    &__bottom {
      border-top: 1px solid $neutral-white1;
      padding: 20px 40px;
    }
  }

  .info-card-add-category-nested {
    &__item {
    }

    &__name {
    }

    &__value {
    }
  }
</style>
