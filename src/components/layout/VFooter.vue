<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__body">
        <div class="footer__pagination">
          <VPagination />
          <div class="footer__pagination-limit limit-pagination">
            <span class="limit-pagination__text">Записей на страницу</span>
            <div class="limit-pagination__select">
              <VSelect
                :opts="selectPaginationLimitOpts"
                ref="selectPaginationLimin"
              >
                <template #menu>
                  <ul class="list">
                    <li
                      class="list__item"
                      v-for="item in limitItems"
                      @click="setSelectPaginationLimitValue($event, item)"
                      :style="{ background: selectPaginationLimitOpts.value === item ? 'blue' : '', color: selectPaginationLimitOpts.value === item ? '#fff' : '' }"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </template>
              </VSelect>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  import { mapActions } from 'vuex';
  import { mapGetters } from 'vuex';

  import VPagination from '@/components/UI/VPagination.vue';
  import VSelect from '../UI/VSelect.vue';

  export default {
    name: 'VFooter',

    components: {
      VPagination,
      VSelect,
    },
    data() {
      return {
        limitItems: ['25', '50', '100', '200', '500'],

        selectPaginationLimitOpts: {
          type: 'text',
          name: 'limit',
          placeholder: '200',
          value: '200',
          icon: true,
          readonly: true,
        },
      };
    },
    computed: {},
    methods: {
      setSelectPaginationLimitValue(e, item) {
        this.selectPaginationLimitOpts.value = item;
        this.$refs.selectPaginationLimin.menuIsOpen = false;
      },
    },
  };
</script>

<style lang="scss">
  .footer {
    background: $neutral-white1;

    &__body {
      padding: 24px 0 92px 0;
    }

    &__pagination {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__pagination-limit {
    }
  }

  .limit-pagination {
    display: flex;
    align-items: center;

    &__text {
      margin-right: 16px;
      /* Body_L */
      font-family: Inter;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 171.429% */
      color: var(--black, #292929);
    }

    &__select {
      width: 96px;
      .select {
        &__menu {
          max-height: 90px;
          overflow-y: auto;
          overflow-x: hidden;
        }
      }
      .list {
        &__item {
          padding: 8px 14px;
          font-family: Inter;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 171.429% */
          color: var(--black, #292929);
        }
      }
    }
  }
</style>
