<template>
  <div class="pagination">
    <div class="pagination__prev">
      <VButton @click="setPrevPage()">
        <span class="button__arrow"
          ><img
            src="@/assets/img/static/arrows/Arrow_Universal_20px.svg"
            alt="arrow"
          />
        </span>
        <span class="button__text">Назад</span>
      </VButton>
    </div>
    <ul class="pagination__pages pages-pagination">
      <li
        v-for="pageNumber in paginationItems"
        class="pages-pagination__item"
        :class="pageNumber.active ? 'pages-pagination__item--active' : ''"
        :style="{ pointerEvents: pageNumber.label === '...' ? 'none' : '' }"
        @click="setCurrentPage(pageNumber.label)"
      >
        {{ pageNumber.label }}
      </li>
    </ul>
    <div class="pagination__next">
      <VButton @click="setNextPage()">
        <span class="button__text">Вперёд</span>
        <span class="button__arrow">
          <img
            src="@/assets/img/static/arrows/Arrow_Universal_20px.svg"
            alt="arrow"
          />
        </span>
      </VButton>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import VButton from './VButton.vue';
  import nomenclatureItems from '@/store/nomenclature/nomenclatureItems';

  export default {
    name: 'VPagination',
    // props: {
    //   paginationLimit: {
    //     type: Number,
    //     default: 1,
    //   },
    // },

    components: { VButton },
    data() {
      return {
        paginationItems: [],
        currentPage: 1,
      };
    },
    computed: {
      ...mapGetters('nomenclatureItems', {
        paginationMeta: 'getPaginationMeta',
      }),
    },
    methods: {
      ...mapActions('nomenclatureItems', ['GET_ITEMS_NOMENCLATURE']),

      setPaginationItems() {
        this.paginationItems = this.paginationMeta.links.slice(1, this.paginationMeta.links.length - 1);
      },

      async setPrevPage() {
        --this.currentPage;

        if (this.currentPage < 1) {
          this.currentPage = this.paginationMeta.last_page;
        }

        const meta = {
          pageNumber: this.currentPage,
          paginationLimit: this.paginationMeta.per_page,
        };

        await this.GET_ITEMS_NOMENCLATURE(meta);
        this.setPaginationItems();
      },

      async setNextPage() {
        ++this.currentPage;

        if (this.currentPage > this.paginationMeta.last_page) {
          this.currentPage = 1;
        }

        const meta = {
          pageNumber: this.currentPage,
          paginationLimit: this.paginationMeta.per_page,
        };

        await this.GET_ITEMS_NOMENCLATURE(meta);
        this.setPaginationItems();
      },

      async setCurrentPage(pageNumber) {
        this.currentPage = pageNumber;

        const meta = {
          pageNumber,
          paginationLimit: this.paginationMeta.per_page,
        };
        await this.GET_ITEMS_NOMENCLATURE(meta);
        this.setPaginationItems();
      },
    },
    async mounted() {
      await this.GET_ITEMS_NOMENCLATURE();
      this.setPaginationItems();
    },
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

      background: $white-color;
      border: 1px solid #fff;
      border-radius: 4px;
      &:hover {
        cursor: pointer;
        border-color: $blue-color;
        color: $blue-color;
      }
    }
  }
  .pages-pagination__item--active {
    border-color: $blue-color;
    color: $blue-color;
  }
</style>
