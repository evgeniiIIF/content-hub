<template>
  <ul class="breadcrumbs">
    <li
      class="breadcrumbs__item"
      v-for="name in parentItemData.names"
    >
      <p class="breadcrumbs__text">{{ name }}</p>
      <div class="breadcrumbs__image">
        <img
          src="@/assets/img/static/arrows/Arrow_Left_SM_20px.svg"
          alt="arrow"
        />
      </div>
    </li>
  </ul>
</template>
<script>
  export default {
    name: 'VBreadcrumbs',
    props: {
      parentItemData: {
        type: Object,
      },
    },
  };
</script>
<style lang="scss">
  .breadcrumbs {
    display: flex;
    align-items: center;

    &__item {
      display: flex;

      &:first-child {
        @extend %font-inter--400_167;

        color: $neutral-gray;
      }
      &:last-child {
        .breadcrumbs__image {
          display: none;
        }

        @extend %font-inter--400_167;
        color: $dark-color;
      }
    }
    &__image {
      margin: 0 16px;
    }
  }
</style>
