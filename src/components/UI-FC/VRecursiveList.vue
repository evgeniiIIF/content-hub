<!-- <template>
  <ul class="list">
    <li
      class="list__item"
      v-for="item in items"
      :key="item.id"
    >
      <slot
        :name="'level1'"
        :item="item"
        :level="level"
				:index="index"
      >
        <slot
          v-if="level === 1"
          :name="'slot1'"
          :item="item"
          :level="level"
					:index="index"
          >not send 1</slot
        >
      </slot>
      <VRecursiveList
        v-if="item.children && item.children.length && level === 1"
        :items="item.children"
        :level="level + 1"
      >
        <template v-slot:level1="{ item, level }">
          <slot
            v-if="level === 2"
            :name="'slot2'"
            :item="item"
            :level="level"
						:index="index"
          >
            not send 2</slot
          >
          <VRecursiveList
            v-if="item.children && item.children.length && level === 2"
            :items="item.children"
            :level="level + 1"
          >
            <template v-slot:level1="{ item, level }">
              <slot
                v-if="level === 3"
                :name="'slot3'"
                :item="item"
                :level="level"
								:index="index"
              >
                not send 3
              </slot>
            </template>
          </VRecursiveList>
        </template>
      </VRecursiveList>
    </li>
  </ul>
</template> -->

<!-- <template>
  <ul class="list">
    <li
      class="list__item"
      v-for="(item, index) in items"
      :key="item.id"
    >
      <slot
        :name="currentName"
        :item="item"
        :level="level"
        :index="index"
      >
        <slot
          v-if="level === 1"
          :name="'slot1'"
          :item="item"
          :level="level"
          :index="index"
          >not send 1
        </slot>
      </slot>
      <VRecursiveList
        v-if="item.children && item.children.length && level === 1"
        :items="item.children"
        :level="level + 1"
      >
        <template v-slot:[currentName]="{ item, level }">
          <slot
            v-if="level === 2"
            :name="'slot2'"
            :item="item"
            :level="level"
            :index="index"
            >not send 2
          </slot>
          <VRecursiveList
            v-if="item.children && item.children.length && level === 2"
            :items="item.children"
            :level="level + 1"
          >
            <template v-slot:[currentName]="{ item, level }">
              <slot
                v-if="level === 3"
                :name="'slot3'"
                :item="item"
                :level="level"
                :index="index"
                >not send 3</slot
              >
              <VRecursiveList
                v-if="item.children && item.children.length && level === 3"
                :items="item.children"
                :level="level + 1"
              >
                <template v-slot:[currentName]="{ item, level }">
                  <slot
                    v-if="level === 4"
                    :name="'slot4'"
                    :item="item"
                    :level="level"
                    :index="index"
                    >not send 4</slot
                  >
                  <VRecursiveList
                    v-if="item.children && item.children.length && level === 4"
                    :items="item.children"
                    :level="level + 1"
                  >
                  </VRecursiveList>
                </template>
              </VRecursiveList>
            </template>
          </VRecursiveList>
        </template>
      </VRecursiveList>
    </li>
  </ul>
</template> -->

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
      level: { type: Number, default: 1 },
      childIndex: { type: Number, default: 0 },
    },
    computed: {
      currentName() {
        // return 'level' + this.level;
        return 'level2';
      },
    },
  });
</script>
