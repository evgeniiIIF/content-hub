const extendsProtorype = {
  mounted() {
    HTMLElement.prototype.getNodesByText = function (text) {
      const expr = `.//*[text()[contains(
          translate(.,
            'ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
            'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя'
          ),
          '${text.toLowerCase()}'
        )]]`; /* коммент-костыль */
      const nodeSet = document.evaluate(expr, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
      return Array.from({ length: nodeSet.snapshotLength }, (v, i) => nodeSet.snapshotItem(i));
    };
  },
};

export default extendsProtorype;

// использование
// DropdownMenuRoot.getNodesByText(`${this.filterValueLocalCategories}`).forEach((el) => {
//   let parents = [];
//   let currentParent = el.parentNode.closest('.list__item');
//   // console.log(currentParent);

//   while (currentParent) {
//     if (currentParent.classList.contains('.js-dropdown-menu--root')) {
//       break;
//     }
//     parents.push(currentParent);
//     currentParent = currentParent.parentNode.closest('.list__item');
//   }

//   parents.forEach((item) => item.classList.add('js-dropdown-menu__item--active'));
//   this.currentAcriveDropdownItemsForFilterCategories = parents;
// });
// let dropdownMenuButtonAll = DropdownMenuRoot.querySelectorAll('.js-dropdown-menu__button');
