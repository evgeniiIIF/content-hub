<template>
  <ul class="list">
    <li class="list__item">
      <VButton @click="$emit('showSlidingBlock', $event)">
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
        <span class="button__text">Добавить субкатегорию</span>
      </VButton>
    </li>
    <li
      class="list__item"
      v-if="showDeleteButton"
    >
      <div
        class="list__link"
        @click="$emit('onDeleteCategory')"
      >
        <img
          class="list__image"
          src="@/assets/img/static/buttons-icon/Trash_Empty_20px.svg"
          alt="trash"
        />
        <span class="list__text">Удалить</span>
      </div>
    </li>

    <!-- <li class="list__item">
      <RouterLink to="/">
        <VButton>
          <span class="button__image">
            <img
              src="@/assets/img/static/buttons-icon/Edit_Pencil_02_20px.svg"
              alt="edit"
            />
          </span>
          <span class="list__text">Редактировать</span>
        </VButton>
      </RouterLink>
    </li>
    <li class="list__item">
      <VButton @click="$emit('showSlidingBlock', $event)">
        <span class="button__image">
          <img
            src="@/assets/img/static/decorative-icon/Info_20px.svg"
            alt="icon"
          />
        </span>
        <span class="button__text">Информация</span>
      </VButton>
    </li>

    <li class="list__item">
      <div class="list__link">
        <img
          class="list__image"
          src="@/assets/img/static/decorative-icon/Trash_Empty_20px.svg"
          alt="trash"
        />
        <span class="list__text">Удалить</span>
      </div>
    </li> -->
  </ul>
</template>
<script>
  import VButton from '@/components/UI/VButton.vue';
  export default {
    name: 'VItemCategotyDropdownList',
    props: {
      childrenCount: {
        type: Number,
        default: 0,
      },
    },
    emits: ['showSlidingBlock', 'onDeleteCategory'],
    components: {
      VButton,
    },
    computed: {
      showDeleteButton() {
        return this.childrenCount === 0;
      },
    },
  };
</script>
<style></style>
