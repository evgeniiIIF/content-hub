1. Есть таблица содержащая компонент RecursiveList с 3-мя уровнями вложенности
2. Для каждого уровня RecursiveList получает разметку для .item-category снаружи в slot, [#slot1, #slot2, #slot3]
3  На втором уровне вложенности #slot2 в разметке имеет компонент Select который принемает 
	props = opts = {
           type: 'text',
           value: 'opts.value',
           name: 'opts.name',
           placeholder: 'opts.placeholder',
           icon: true,
         }
4 Для навигации по уравням я решил использовать индексы из RecursiveList [itemCategoryIndexL1, itemCategoryIndexL2, itemCategoryIndexL3]
5 И динамически создавать и определять(имя) обьекта opts для селекта 
6 Способ который работает как надо но только после этого
 	[Vue warn]: Maximum recursive updates exceeded in component <VRecursiveList>. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.

<template>
<VSelect :opts="dynamicItemSelectOptsOzon(itemCategoryIndexL1, itemCategoryIndexL2)" > </VSelect>
</template>

data() {
	return {
		itemsSelectOptsOzon: {},
	}
}

methods:{
  dynamicItemSelectOptsOzon(itemCategoryIndexL1, itemCategoryIndexL2) {
        this.itemsSelectOptsOzon[`index(${itemCategoryIndexL1}>${itemCategoryIndexL2})`] = {
          type: 'text',
          value: 'opts.value',
          name: 'opts.name',
          placeholder: 'opts.placeholder',
          icon: true,
        };

        console.log(this.itemsSelectOptsOzon);

        return this.itemsSelectOptsOzon[`index(${itemCategoryIndexL1}>${itemCategoryIndexL2})`];
      },
}