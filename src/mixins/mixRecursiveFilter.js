const mixRecursiveFilter = {
  methods: {
    mixRecursiveFilterFn(obj, filterValue) {
      const filterFunc = (obj, filterValue) => {
        if (filterValue) {
          const copyObj = JSON.parse(JSON.stringify(obj));

          return copyObj.filter((item) => {
            const corect =
              item.name.toLowerCase().includes(filterValue.toLowerCase()) ||
              (item.children &&
                item.children.some((childItem) => {
                  return (
                    childItem.name.toLowerCase().includes(filterValue.toLowerCase()) ||
                    (childItem.children &&
                      childItem.children.some((childChildItem) => {
                        return childChildItem.name.toLowerCase().includes(filterValue.toLowerCase());
                      }))
                  );
                }));

            if (item.children) {
              item.children = filterFunc(item.children, filterValue);
            }

            if (corect) {
              return true;
            } else {
              return false;
            }
          });
        } else {
          return obj;
        }
      };

      return filterFunc(obj, filterValue);
    },
    // использование
    // filteredCategoriesItems() {
    // 	return this.mixRecursiveFilterFn(this.categoriesItems, this.selectCategoriesFilterValue);
    // },

    mixHighlightMatchingFn(e, currentTargetclassSelector, targetclassSelector, filterValue) {
      let arr = e.target.closest(currentTargetclassSelector).querySelectorAll(targetclassSelector);

      arr.forEach((item) => {
        if (item.innerText.toLowerCase().includes(filterValue.toLowerCase()) && filterValue) {
          item.style.background = 'transparent';
          item.style.background = 'yellow';
        } else {
          item.style.background = 'transparent';
        }
      });
    },
    // использование
    // onInputFilterActiveCategories(e) {
    // 	console.log(e);
    // 	this.mixHighlightMatchingFn(e, '.select__menu', '.select-list__name', this.selectCategoriesFilterValue);
    // },
  },
};

export default mixRecursiveFilter;
