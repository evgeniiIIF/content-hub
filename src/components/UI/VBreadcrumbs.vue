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
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 167%;
        color: #7e8d94;
      }
      &:last-child {
        .breadcrumbs__image {
          display: none;
        }
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 167%;
        color: #292929;
      }
    }
    &__image {
      margin: 0 16px;
    }
  }
</style>
