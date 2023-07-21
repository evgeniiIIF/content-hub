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
      <h3 class="card-add-category__title">Добавить магазин</h3>
      <form
        class="card-add-category__body-content"
        @submit.prevent="onSubmit"
      >
        <div class="card-add-category__inputs">
          <div
            class="card-add-category__input"
            v-for="opts in inputs"
          >
            <VSelect
              v-if="opts.select"
              :opts="opts"
            >
              <template #menu>
                <ul class="card-add-category__list">
                  <li
                    class="card-add-category__item"
                    v-for="(itemSelectMenu, index) in inputs[0].items"
                    :key="itemSelectMenu.name"
                    @click.stop="selectionItem(itemSelectMenu)"
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
                        @click.stop="selectionItem(itemSelectMenu2)"
                      >
                        <span
                          class="card-add-category__name"
                          :class="{ 'card-add-category__item--active': itemSelectMenu2.name === currentSelected }"
                          >{{ itemSelectMenu2.name }}</span
                        >
                        <!-- <ul
													v-if="itemSelectMenu2.children_count"
													class="card-add-category__list"
												>
													<li
														class="card-add-category__item"
														v-for="(itemSelectMenu3, index3) in itemSelectMenu2.children"
														:key="itemSelectMenu3.name"
														@click.stop="selectionItem(itemSelectMenu3)"
													>
														<span
															class="card-add-category__name"
															:class="{ 'card-add-category__item--active': itemSelectMenu3.name === currentSelected }"
															>{{ itemSelectMenu3.name }}</span
														>
													</li>
												</ul> -->
                      </li>
                    </ul>
                  </li>
                </ul>
              </template>
            </VSelect>
            <VInput
              v-else
              :opts="opts"
              @onInput="onInputName"
            />
          </div>
        </div>
        <div class="card-add-category__buttons">
          <div class="card-add-category__button--bd">
            <VButton>Отменить</VButton>
          </div>
          <div class="card-add-category__button--bg">
            <VButton :pending="isAddCategoryPending">Сохранить изменения</VButton>
          </div>
        </div>
      </form>
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

  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'VCardAddCategory',

    emits: ['onCloseSlidingBlock'],

    components: { VInput, VButton, VSelect },
    data() {
      return {
        dataForCreateCategory: {
          id: 0,
          name: '',
          description: '',
        },

        currentSelected: null,

        inputs: [
          {
            value: '',
            type: 'text',
            label: 'Название',
            name: 'name',
            placeholder: 'Наименование магазина',
          },
          {
            value: '',
            type: 'text',
            label: 'Мин. кол-во остатка',
            name: 'min',
            placeholder: 'Введите число (или диапазон чисел)',
          },
          {
            select: true,
            icon: true,
            value: '',
            type: 'text',
            label: 'Принадлежность к МП',
            name: 'belonging',
            placeholder: 'Выберите маркетплейс',
            items: {},
          },
          {
            select: true,
            icon: true,
            value: '',
            type: 'text',
            label: 'Подключить склад(ы)',
            name: 'warehouse',
            placeholder: 'Выбрать из списка',
            items: {},
          },
          {
            value: '',
            type: 'text',
            label: 'Ozon token',
            name: 'Ozon token',
            placeholder: 'token',
          },
          {
            value: '',
            type: 'text',
            label: 'Ozon token',
            name: 'Ozon token enter',
            placeholder: 'Введите token Ozon',
          },
          {
            value: '',
            type: 'text',
            label: 'Ozon client-ID',
            name: 'Ozon client-ID enter',
            placeholder: 'Введите client-ID',
          },
          {
            value: '',
            type: 'text',
            label: 'Ozon API key',
            name: 'Ozon API key enter',
            placeholder: 'Введите API key',
          },
        ],
      };
    },
    computed: {
      ...mapGetters('localCategoriesItems', {
        categoriesItems: 'items',
      }),
      ...mapGetters('addCategory', {
        isAddCategoryPending: 'pending',
      }),
    },
    watch: {
      // selectMenuItems(oldValue, newValue) {
      //   this.selectMenuItems = newValue;
      //   console.log(newValue);
      //   this.inputs[0].items = newValue;
      // },
    },
    methods: {
      ...mapActions('localCategoriesItems', ['GET_ITEMS_CATEGORIES']),
      ...mapActions('addCategory', ['SEND_CATEGORY_DATA']),

      async onSubmit() {
        // console.log(this.dataForCreateCategory);
        await this.SEND_CATEGORY_DATA(this.dataForCreateCategory);
        this.$emit('onCloseSlidingBlock');
        await this.GET_ITEMS_CATEGORIES();
      },

      onInputName(e) {
        this.dataForCreateCategory.name = e.target.value;
      },
      onInputDescription(e) {
        this.dataForCreateCategory.description = e.target.value;
      },

      selectionItem(itemSelectMenu) {
        this.inputs[0].value = itemSelectMenu.name;
        this.currentSelected = itemSelectMenu.name;

        // this.dataForCreateCategory.name = itemSelectMenu.name;
        this.dataForCreateCategory.id = itemSelectMenu.id;
      },
    },

    async created() {
      await this.GET_ITEMS_CATEGORIES();
      this.inputs[0].items = this.categoriesItems;
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
      .button__pending {
        width: 145.517px;
        height: 18.602px;
      }
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
