<template>
  <div class="vselect2">
    <Select2
      v-model="myValue"
      :options="myOptions"
      :settings="{ width: '100%' }"
      @change="myChangeEvent($event)"
      @select="mySelectEvent($event)"
    />
    <h4>Value: {{ myValue }}</h4>
  </div>
</template>
<script>
  import Select2 from 'vue3-select2-component';

  export default {
    name: 'VSelect2',
    components: { Select2 },
    props: {
      options: {
        type: Array,
      },
    },
    data() {
      return {
        myValue: '',
        myOptions: [
          // { id: 1, text: 'apple' },
        ],
        prefix: '',
      };
    },
    methods: {
      myChangeEvent(val) {
        console.log(val);
      },
      mySelectEvent({ id, text }) {
        console.log({ id, text });
      },

      runTree(items, prefix) {
        items.forEach((item) => {
          const optionItem = {};
          optionItem.id = item.id;
          optionItem.text = this.prefix + ' ' + item.name;
          this.myOptions.push(optionItem);

          if (item.children) {
            // this.prefix = '';
            //
            // this.prefix += '-';
            this.runTree(item.children, (this.prefix += '-'));
          }
          this.prefix = '';
        });
      },
    },
    mounted() {
      setTimeout(() => {
        this.runTree(this.options);
      }, 100);
    },
  };
</script>
<style lang="scss">
  .vselect2 {
    .select2 {
      // width: 100% !important;
    }
  }
</style>
