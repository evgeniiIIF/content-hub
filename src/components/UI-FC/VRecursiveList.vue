<template>
  <ul class="list">
    <!-- level 1 -->
    <li
      class="list__item"
      v-for="(itemL1, indexL1) in items"
      :key="itemL1.id"
    >
      <slot
        :name="'slot1'"
        :itemL1="itemL1"
        :indexL1="indexL1"
      >
        not send 1
      </slot>

      <ul
        v-if="itemL1.children && itemL1.children.length"
        class="list"
      >
        <!-- level 2 -->
        <li
          class="list__item"
          v-for="(itemL2, indexL2) in itemL1.children"
          :key="itemL2.id"
        >
          <slot
            :name="'slot2'"
            :itemL1="itemL1"
            :itemL2="itemL2"
            :indexL1="indexL1"
            :indexL2="indexL2"
            >not send 2
          </slot>
          <ul
            v-if="itemL2.children && itemL2.children.length"
            class="list"
          >
            <!-- level 3 -->
            <li
              class="list__item"
              v-for="(itemL3, indexL3) in itemL2.children"
              :key="itemL3.id"
            >
              <slot
                :name="'slot3'"
                :itemL3="itemL3"
                :indexL1="indexL1"
                :indexL2="indexL2"
                :indexL3="indexL3"
                >not send 2
              </slot>
            </li>
            <!-- /level 3 -->
          </ul>
        </li>
        <!-- /level 2 -->
      </ul>
    </li>
    <!-- /level 1 -->
  </ul>
</template>

<script>
  import { defineComponent } from 'vue';
  import VRecursiveList from './VRecursiveList.vue';

  export default defineComponent({
    name: 'VRecursiveList',
    components: { VRecursiveList },
    data() {
      return {
        xxx: 'XXXX',
      };
    },
    props: {
      items: { type: Array, required: true },
      // level: { type: Number, default: 1 },
      // childIndex: { type: Number, default: 0 },
    },
    computed: {
      currentName() {
        // return 'level' + this.level;
        return 'level2';
      },
    },
  });
</script>
