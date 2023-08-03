<template>
  <form
    class="card-add-category-nested"
    @submit.prevent="onSubmitNestedCategory"
    ref="jsAddNestedCategoryForm"
  >
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
      <div class="card-add-category-nested__inputs">
        <div class="card-add-category-nested__input">
          <VInput
            :opts="inputs[0]"
            @onInput="onInputName($event)"
          />
        </div>
        <div class="card-add-category-nested__input">
          <VInput
            :opts="inputs[1]"
            @onInput="onInputDescription($event)"
          />
        </div>
      </div>
    </div>
    <div class="card-add-category-nested__bottom">
      <div class="card-add-category-nested__buttons">
        <div class="card-add-category-nested__button--bd">
          <VButton @click="formReset">Отменить</VButton>
        </div>
        <div class="card-add-category-nested__button--bg">
          <VButton
            type="submit"
            :pending="isAddNestedCategoryPending"
          >
            Сохранить изменения
          </VButton>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
  // import mixDropdownMenuFn from '@/mixins/mixDropdownMenuFn';

  import { mapGetters, mapActions } from 'vuex';

  import VBreadcrumbs from '../UI/VBreadcrumbs.vue';
  import VButton from '../UI/VButton.vue';
  import VInput from '../UI/VInput.vue';
  import VSelect from '../UI/VSelect.vue';

  export default {
    name: 'VCardAddNestedCategory',
    // mixins: [mixDropdownMenuFn],

    props: {
      parentItemData: {
        type: Object,
      },
    },

    components: { VInput, VButton, VSelect, VBreadcrumbs },

    data() {
      return {
        dataForCreateNestedCategory: {
          parent_id: null,
          name: '',
          description: '',
        },

        inputs: [
          {
            type: 'text',
            label: 'Название категории',
            name: 'name',
            // value: 'Аккумуляторы и аксессуары',
            value: '',
            placeholder: 'Название',
          },
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
    computed: {
      ...mapGetters('addNestedCategory', {
        isAddNestedCategoryPending: 'pending',
      }),
    },

    methods: {
      ...mapActions('addNestedCategory', ['SEND_NESTED_CATEGORY_DATA']),
      ...mapActions('localCategoriesItems', ['GET_ITEMS_CATEGORIES']),

      formReset() {
        const form = this.$refs.jsAddNestedCategoryForm;
        const textarea = form.querySelector('textarea');

        form.reset();
        textarea.value = '';

        this.dataForCreateNestedCategory = {
          id: null,
          name: '',
          description: '',
        };

        this.$emit('onCloseSlidingBlock');
      },

      onInputName(e) {
        this.dataForCreateNestedCategory.name = e.target.value;
      },
      onInputDescription(e) {
        this.dataForCreateNestedCategory.description = e.target.value;
      },

      async onSubmitNestedCategory() {
        this.dataForCreateNestedCategory.parent_id = this.parentItemData.id;

        console.log(this.dataForCreateNestedCategory);

        await this.SEND_NESTED_CATEGORY_DATA(this.dataForCreateNestedCategory);
        this.formReset();
        await this.GET_ITEMS_CATEGORIES();
      },
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

    &__button--bg {
      .button__pending {
        width: 145.517px;
        height: 18.602px;
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
