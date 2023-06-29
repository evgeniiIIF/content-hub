<template>
  <div class="card-add-category-nested card-info-category">
    <button
      class="card-add-category-nested__close"
      @click="$emit('onCloseMenu')"
    >
      <img
        src="@/assets/img/static/buttons-icon/Close_SM_20px.svg"
        alt="close"
      />
    </button>
    <div class="card-add-category-nested__top">
      <h3 class="card-add-category-nested__title">Информация</h3>
      <VBreadcrumbs />
    </div>

    <div class="card-add-category-nested__body">
      <div class="card-add-category-nested__inputs">
        <div
          class="card-add-category-nested__input"
          v-for="(input, inputIndex) in inputs"
          :key="input.name"
        >
          <VInput
            v-if="!input.icon"
            :opts="input"
            @onInput="onInput($event, inputIndex)"
          />
          <VInput
            v-else
            class="input--url"
            :opts="input"
            @onInput="onInput($event, inputIndex)"
            ><svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.6665 3.33366C6.6665 2.41318 7.4127 1.66699 8.33317 1.66699H16.6665C17.587 1.66699 18.3332 2.41319 18.3332 3.33366V11.667C18.3332 12.5875 17.587 13.3337 16.6665 13.3337H13.3332V16.667C13.3332 17.5875 12.587 18.3337 11.6665 18.3337L3.33317 18.3337C2.4127 18.3337 1.6665 17.5875 1.6665 16.667L1.6665 8.33366C1.6665 7.41318 2.4127 6.66699 3.33317 6.66699H6.6665V3.33366ZM8.33317 6.66699H11.6665C12.587 6.66699 13.3332 7.41318 13.3332 8.33366V11.667H16.6665L16.6665 3.33366H8.33317V6.66699ZM11.6665 12.4995V8.33366H3.33317V16.667L11.6665 16.667V12.5011C11.6665 12.5009 11.6665 12.5006 11.6665 12.5003C11.6665 12.5001 11.6665 12.4998 11.6665 12.4995Z"
                fill="#335CFF"
              />
            </svg>
          </VInput>
        </div>
        <div class="card-info-category__rectagle rectagle-card-info-category">
          <ul class="rectagle-card-info-category__list">
            <li
              class="rectagle-card-info-category__item"
              v-for="rectItem in rectagleItems"
            >
              <div class="rectagle-card-info-category__key">{{ rectItem.key }}</div>
              <div class="rectagle-card-info-category__value">{{ rectItem.value }}</div>
            </li>
          </ul>
        </div>
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
    components: { VInput, VButton, VSelect2, VSelect, VBreadcrumbs },
    data() {
      return {
        inputs: [
          {
            type: 'textarea',
            value: '',
            label: 'Описание /заметки',
            name: 'description',
            placeholder: 'Выберите категорию из списка',
          },
          {
            type: 'text',
            label: 'Сгенерированный URI',
            name: 'name',
            value: 'akkumulyatory_i_aksessuary',
            icon: true,
            // placeholder: 'Название',
          },
        ],
        rectagleItems: [
          { key: 'Автор', value: 'Захар' },
          { key: 'Дата создания', value: '12.12.2023 / 13:45:12' },
          { key: 'Редактор', value: 'Александр Дмитриев' },
          { key: 'Дата обновления', value: '12.12.2023 / 10:56:18' },
        ],
      };
    },
  };
</script>

<style lang="scss">
  .card-info-category {
    .input__icon {
      left: auto;
      right: 0;
      justify-content: center;
      cursor: pointer;
    }
    .input--url {
      .input__input {
        background: #f4f6f7;
        color: #7e8d94;
      }
    }
  }

  .card-info-category {
    &__rectagle {
    }
  }
  .rectagle-card-info-category {
    border-radius: 4px;
    background: #f4f6f7;
    padding: 12px;

    &__list {
      @include mb(8px);
    }

    &__item {
      display: flex;
    }

    &__key {
      flex: 0 0 120px;
      min-width: none;
      margin-right: 16px;
      font-size: 12px;
      font-family: Inter;
      line-height: 20px;
      color: #7e8d94;
    }

    &__value {
      flex: 1 1 auto;
      font-size: 12px;
      font-family: Inter;
      line-height: 20px;
      color: #292929;
    }
  }
</style>
