<template>
  <div class="pagination">
    <div class="pagination__prev">
      <VButton>
        <span class="button__arrow"
          ><img
            src="@/assets/img/static/arrows/Arrow_Universal_20px.svg"
            alt="arrow"
          />
        </span>
        <span class="button__text">Назад</span>
      </VButton>
    </div>
    <div class="pagination__pages pages-pagination">
      <div
        class="pages-pagination__item"
        v-for="page in 5"
      >
        {{ page }}
      </div>
    </div>
    <div class="pagination__next">
      <VButton>
        <span class="button__text">Вперёд</span>
        <span class="button__arrow"
          ><img
            src="@/assets/img/static/arrows/Arrow_Universal_20px.svg"
            alt="arrow"
          />
        </span>
      </VButton>
    </div>
  </div>
</template>

<script>
  import VButton from './VButton.vue';

  export default {
    name: 'VPagination',
    components: { VButton },
  };
</script>

<style lang="scss">
  .pagination {
    display: flex;
    @include mr(16px);

    &__prev {
      .button {
        padding: 8px 22px 8px 14px;
        &__arrow {
          margin-right: 8px;
        }
      }
    }

    &__pages {
      @include mr(8px);
    }

    &__next {
      .button {
        padding: 8px 14px 8px 22px;
        &__arrow {
          margin-left: 8px;
          img {
            transform: rotate(180deg);
          }
        }
      }
    }
  }
  .button {
    &__text {
    }
  }
  .pages-pagination {
    display: flex;

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 14px;

      width: 40px;
      height: 40px;

      background: #ffffff;
      border: 1px solid #fff;
      border-radius: 4px;
      &:hover {
        cursor: pointer;
        border-color: #0077ff;
        color: #0077ff;
      }
    }
  }
</style>
