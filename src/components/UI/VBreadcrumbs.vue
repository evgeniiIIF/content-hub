<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">Родительская категория</li>
    <li class="breadcrumbs__item">
      <img
        src="@/assets/img/static/arrows/Arrow_Left_SM_20px.svg"
        alt="arrow"
      />
    </li>
    <li class="breadcrumbs__item">Аккумуляторы и аксессуары</li>
  </ul>
</template>
<script>
  export default {
    name: 'VBreadcrumbs',
  };
</script>
<style lang="scss">
  .breadcrumbs {
    display: flex;
    align-items: center;
    @include mr(16px);

    &__item {
      &:first-child {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 167%;
        color: #7e8d94;
      }
      &:last-child {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 167%;
        color: #292929;
      }
    }
  }
</style>
