<!--
	<VTagList
:items="tagListItems"
prefix="Бренд :"
/> 
-->
<template>
  <ul class="tag-list">
    <li
      class="tag-list__item"
      v-for="item in currentItems"
      :key="item"
    >
      <div class="tag-list__content">
        <span
          v-if="prefix"
          class="tag-list__prefix"
        >
          {{ prefix }}
        </span>
        <p class="tag-list__text">{{ item }}</p>
      </div>
      <div
        class="tag-list__close"
        @click="removeItem(item)"
      >
        <button type="button">
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
              d="M6.07759 6.07709C6.40303 5.75165 6.93067 5.75165 7.2561 6.07709L10.0002 8.82116L12.7443 6.07709C13.0697 5.75165 13.5973 5.75165 13.9228 6.07709C14.2482 6.40252 14.2482 6.93016 13.9228 7.2556L11.1787 9.99967L13.9228 12.7437C14.2482 13.0692 14.2482 13.5968 13.9228 13.9222C13.5973 14.2477 13.0697 14.2477 12.7442 13.9222L10.0002 11.1782L7.25609 13.9223C6.93065 14.2477 6.40301 14.2477 6.07757 13.9223C5.75214 13.5968 5.75214 13.0692 6.07757 12.7438L8.82167 9.99967L6.07759 7.2556C5.75216 6.93016 5.75216 6.40252 6.07759 6.07709Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'VTagList',
    props: {
      items: {
        type: Array,
        required: true,
      },
      prefix: {
        type: String,
      },
    },
    data() {
      return {
        currentItems: [],
      };
    },
    methods: {
      removeItem(eventItem) {
        this.currentItems = this.currentItems.filter((item) => item !== eventItem);
        // console.log(eventItem);
      },
    },
    watch: {
      items: {
        handler(newValue) {
          this.currentItems = newValue;
        },
        deep: true,
      },
    },
    mounted() {
      this.currentItems = this.items;
    },
  };
</script>

<style lang="scss">
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    // @include mr(4px);
    gap: 8px;

    &__item {
      display: flex;
      align-items: center;
      padding: 4px 4px 4px 8px;
      border-radius: 4px;
      background: var(--gray-2, #7e8d94);
    }
    &__content {
      display: flex;
      margin-right: 8px;
      /* Body_S */
      font-family: Inter;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 166.667% */
      color: var(--white, #fff);
    }
    &__prefix {
      margin-right: 2px;
    }

    &__text {
    }
    &__close {
      button {
        display: flex;
        align-items: center;
        border: none;
        background: transparent;
      }
    }
  }
</style>
